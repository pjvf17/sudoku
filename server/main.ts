// @ts-nocheck
import { Application, send } from "https://deno.land/x/oak/mod.ts";
import {
  puzzleToString,
  firstPassCandidateCalculator,
  createPuzzle,
  solver,
  printSudokuToConsoleFormatted,
  printSudokuToConsole,
  parsePuzzle,
} from "./generator.ts";
import {
  updateNumber,
  updatePencilMark,
  validateSquare,
  setSudokuObj
} from "../sudokuManagementFunctions/updates.ts";
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

let sudokuObj = {};

const startNewGame = () => {
  sudokuObj.puzzle = puzzleToString(createPuzzle("hard"));
  sudokuObj.solved = solver(parsePuzzle(sudokuObj.puzzle)).puzzle;

  const puzzle = {};

  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    for (let colIndex = 0; colIndex < 9; colIndex++) {
      // console.log(rowIndex*9+colIndex)
      const cell = sudokuObj.puzzle.substr(rowIndex * 9 + colIndex, 1);
      let formattedCell = {};
      if (cell != ".") {
        // Make a cell object with given equal to true
        formattedCell = {
          number: cell,
          given: true,
          valid: {
            value: true,
            reason: null,
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
          // candidates: [],
          address: { r: rowIndex + 1, c: colIndex + 1 },
        };
      } else {
        formattedCell = {
          number: "",
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
          valid: { value: true, reason: null },
          // candidates: [],
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

console.log("\n\n solved:");
printSudokuToConsole(sudokuObj.solved);

import {
  WebSocket,
  WebSocketServer,
} from "https://deno.land/x/websocket/mod.ts";
import { createEasyPuzzle } from "./generator.ts";

const clients: any = new Set();

const colors: any = [
  { value: "#bf616a88", used: false },
  { value: "#d0877088", used: false },
  { value: "#ebcb8b88", used: false },
  { value: "#a3be8c88", used: false },
  { value: "#b48ead88", used: false },
];

const getColor = (socket) => {
  let count = 0;
  while (count < colors.length) {
    if (!colors[count].used) {
      colors[count].used = socket;
      return colors[count].value;
    }
    count++;
  }
};

const freeColor = (socket) => {
  let count = 0;
  while (count < colors.length) {
    if (colors[count].used == socket) {
      colors[count].used = false;
      return true;
    }
    count++;
  }
};

const users = {};

const freeUser = (id) => {
  delete users[id];
};

const userTimers = {};

const updateFocus = ({ id, focus }, wss, ws) => {
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

// const updateNumber = ({ address, number }) => {
//   // To return original state for undoing
//   const originalState = { ...sudokuObj.puzzle[`r${address.r}c${address.c}`] };
//   sudokuObj.puzzle[`r${address.r}c${address.c}`].number = number;
//   validateSquare(sudokuObj.puzzle[`r${address.r}c${address.c}`]);
//   return originalState.number;
// };

// const updatePencilMark = ({ address, pencilMark }, pencilMarks?: any) => {
//   // To return original state for undoing
//   const originalState = [
//     ...sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks,
//   ];
//   if (pencilMark != "delete") {
//     // Toggle mark
//     sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks[
//       pencilMark - 1
//     ] = !sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks[
//       pencilMark - 1
//     ];
//   } else if (pencilMarks) {
//     sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks = pencilMarks;
//   } else {
//     sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks = [
//       false,
//       false,
//       false,
//       false,
//       false,
//       false,
//       false,
//       false,
//       false,
//     ];
//   }
//   // Return the original state, for use in undoing
//   return originalState;
// };

const wss = new WebSocketServer(8010);

wss.on("connection", function (ws: WebSocket) {
  // Assign color
  let color = getColor(ws);
  let id = v4.generate();
  // For undoing
  const moves: any = [];
  // Save to users
  users[id] = {
    id,
    focus: { row: null, col: null },
    name: null,
    color,
    ws,
  };
  // Send users array
  ws.send(JSON.stringify({ users }));
  // Send id to user to use as identification in users array
  ws.send(JSON.stringify({ id }));
  // Send sudokuObj
  // console.log("sending");
  // console.log(sudokuObj);
  ws.send(JSON.stringify({ sudokuObj }));
  // Send color assignment
  ws.send(JSON.stringify({ color }));

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
    } = JSON.parse(message);

    // Recieved movement/focus update
    if (focusUpdate) {
      console.log(focusUpdate);
      // update user
      updateFocus(focusUpdate, wss, ws);
    }
    // Recieved number update
    if (numberUpdate) {
      console.log(numberUpdate);

      let number = updateNumber(numberUpdate);
      // Change the number to the former state
      numberUpdate.number = number;
      moves.push({ numberUpdate });
    }
    // Recieved pencil mark update
    if (pencilMarkUpdate) {
      console.log(pencilMarkUpdate);
      let pencilMarks = updatePencilMark(pencilMarkUpdate);
      pencilMarkUpdate.pencilMarks = pencilMarks;
      pencilMarkUpdate.pencilMark = "delete";
      moves.push({ pencilMarkUpdate });
    }
    // Recieved undo request
    // if (undo) {
    //   console.log("undoing");
    //   // Get last move for this player
    //   let move = moves.pop();
    //   // Check if the move is a number update
    //   if (move.numberUpdate) {
    //     updateNumber(move.numberUpdate);
    //   } else if (move.pencilMarkUpdate) {
    //     updatePencilMark(move.pencilMarkUpdate);
    //   }
    // }
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
    console.log(users);
    console.log(ws);
    console.log(`socket closed: ${message}`);
    for (let client of wss.clients) {
      if (!client.isClosed) {
        client.send(JSON.stringify({ users }));
      }
    }
  });
});

await app.listen({ port: 8011 });
