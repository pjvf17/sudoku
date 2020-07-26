import { Application, send } from "https://deno.land/x/oak/mod.ts";
import {
  puzzleToString,
  firstPassCandidateCalculator,
  createPuzzle,
  solver,
  printSudokuToConsoleFormatted,
  printSudokuToConsole,
  parsePuzzle,
  createBlankPuzzle,
} from "./generator.ts";
import {
  updateNumber,
  updatePencilMark,
  validateSquare,
  setSudokuObj,
} from "./updates.ts";
import {
  PencilMarkUpdate,
  NumberUpdate,
  Users,
  User,
  Move,
  Puzzle,
  Cell,
} from "../client/src/types.d.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const app = new Application();

app.use(async (context) => {
  console.log(context.request.url.pathname);
  try {
    await send(context, context.request.url.pathname, {
      root: "dist",
      index: "index.html",
    });
  } catch (err) {
    console.log(err);
  }
});

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname ?? "localhost"
    }:${port}`
  );
});

let sudokuObj: { puzzle?: Puzzle; solved?: Puzzle } = {};

const startNewGame = () => {
  const puzzleString: string = puzzleToString(createPuzzle("hard"));
  console.log("0\n0\n0\n0\n0");
  sudokuObj.solved = solver(parsePuzzle(puzzleString)).puzzle;

  let puzzle: Puzzle = createBlankPuzzle();
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    for (let colIndex = 0; colIndex < 9; colIndex++) {
      // console.log(rowIndex*9+colIndex)
      const cell = puzzleString.substr(rowIndex * 9 + colIndex, 1);
      let formattedCell: Cell;
      if (cell != ".") {
        // Make a cell object with given equal to true
        formattedCell = {
          number: cell,
          given: true,
          valid: {
            value: true,
          },
          pencilMarks: [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          candidates: [],
          address: { r: rowIndex + 1, c: colIndex + 1 },
        };
      } else {
        formattedCell = {
          number: ".",
          given: false,
          pencilMarks: [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          valid: { value: true },
          candidates: [],
          address: { r: rowIndex + 1, c: colIndex + 1 },
        };
      }
      // Convert to rncn notation indexed from 1
      puzzle[`r${rowIndex + 1}c${colIndex + 1}`] = formattedCell;
    }
  }
  sudokuObj.puzzle = puzzle;
};

startNewGame();
setSudokuObj(sudokuObj);

console.log(
  solver(JSON.parse(JSON.stringify(sudokuObj.puzzle)), undefined, true)
);

console.log("\n\n solved:");
printSudokuToConsole(sudokuObj.solved as Puzzle);

import {
  WebSocket,
  WebSocketServer,
} from "https://deno.land/x/websocket/mod.ts";

const colors: any = [
  { value: "#bf616a88", used: false },
  { value: "#d0877088", used: false },
  { value: "#ebcb8b88", used: false },
  { value: "#a3be8c88", used: false },
  { value: "#b48ead88", used: false },
];

const getColor = (socket: WebSocket) => {
  let count = 0;
  while (count < colors.length) {
    if (!colors[count].used) {
      colors[count].used = socket;
      return colors[count].value;
    }
    count++;
  }
};

const freeColor = (socket: WebSocket) => {
  let count = 0;
  while (count < colors.length) {
    if (colors[count].used == socket) {
      colors[count].used = false;
      return true;
    }
    count++;
  }
};

const users: Users = {};

const freeUser = (id: User["id"]) => {
  delete users[id];
};

const userTimers: { [index: string]: any } = {};

const updateFocus = (
  { id, focus }: { id: User["id"]; focus: User["focus"] },
  wss: WebSocketServer,
  ws: WebSocket
) => {
  if (userTimers[id]) {
    clearTimeout(userTimers[id]);
  }
  if (users[id]) {
    users[id].focus = focus;
  }
  userTimers[id] = setTimeout(() => {
    updateFocus({ id, focus: { row: null, col: null } }, wss, ws);
    // Get rid of cursor
    for (let client of wss.clients) {
      // Send only to open clients, and not the one who sent a message
      if (!client.isClosed && client != ws) {
        client.send(
          JSON.stringify({
            focusUpdate: { id, focus: { row: null, col: null } },
          })
        );
      }
    }
  }, 180000);
};

const wss = new WebSocketServer(8010);

wss.on("connection", function (ws: WebSocket) {
  // Assign color
  let color = getColor(ws);
  let id = v4.generate();
  // For undoing
  const moves: Move[] = [];
  // Save to users
  users[id] = {
    id,
    focus: { row: 1, col: 1 },
    // name: null,
    color,
    ws,
    moves,
  };
  // Send users array
  ws.send(JSON.stringify({ users, id, color, sudokuObj }));
  // Send id to user to use as identification in users array
  // ws.send(JSON.stringify({ id }));
  // // Send color assignment
  // ws.send(JSON.stringify({ color }));
  // // Send sudokuObj
  // ws.send(JSON.stringify({ sudokuObj }));

  // Send to everyone else, updated users
  // Send to all connected
  for (let client of wss.clients) {
    // Send only to open clients, and not the one who sent a message
    if (!client.isClosed && client != ws) {
      client.send(JSON.stringify({ users }));
    }
  }

  ws.on("message", function (message: any) {
    const {
      focusUpdate,
      numberUpdate,
      pencilMarkUpdate,
      newGame,
      undo,
    }: {
      numberUpdate: NumberUpdate;
      pencilMarkUpdate: PencilMarkUpdate;
      // Catch the rest until I type them
      [propName: string]: any;
    } = JSON.parse(message);

    // Recieved movement/focus update
    if (focusUpdate) {
      // update user
      updateFocus(focusUpdate, wss, ws);
    }
    // Recieved number update
    if (numberUpdate) {
      const inverseUpdate: NumberUpdate = updateNumber(numberUpdate);
      // Change the number to the former state
      moves.push({ numberUpdate: inverseUpdate });
    }
    // Recieved pencil mark update
    if (pencilMarkUpdate) {
      const inverseUpdate: PencilMarkUpdate = updatePencilMark(
        pencilMarkUpdate
      );
      moves.push({ pencilMarkUpdate: inverseUpdate });
    }
    // Recieved undo request
    if (undo && moves.length) {
      // Get last move for this player

      let move: Move | undefined = moves.pop();
      // Check if the move is a number update
      if (move!.numberUpdate) {
        updateNumber(move!.numberUpdate);
        // Check if it's a pencilMarkUpdate
      } else if (move!.pencilMarkUpdate) {
        updatePencilMark(move!.pencilMarkUpdate);
      }
    }
    // console.log(newGame);
    if (newGame) {
      startNewGame();
      for (let client of wss.clients) {
        // Send only to open clients
        if (!client.isClosed) {
          client.send(JSON.stringify({ sudokuObj }));
        }
      }
    } else {
      // Send to all connected
      for (let client of wss.clients) {
        // Send only to open clients, and not the one who sent a message
        if (!client.isClosed && client != ws) {
          client.send(message);
        }
      }
    }
  });
  ws.on("close", function (message: any) {
    freeColor(ws);
    freeUser(id);
    console.log(`socket closed: ${message}`);
    for (let client of wss.clients) {
      if (!client.isClosed) {
        client.send(JSON.stringify({ users }));
      }
    }
  });
});

await app.listen({ port: 8011 });
