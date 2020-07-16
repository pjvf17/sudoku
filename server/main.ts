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
  sudokuObj.puzzle = puzzleToString(createPuzzle("medium"));
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
console.log("\n\n solved:");
console.log(sudokuObj.solved);
printSudokuToConsole(sudokuObj.puzzle);
printSudokuToConsole(sudokuObj.solved);

// sudokuObj.puzzle = createEasyPuzzle();

// console.log(sudoku.print_board(sudokuObj.puzzle));

const makeRows = () => {
  let rows = {};
  for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
    rows[`r${rowIndex}`] = [];
    for (let colIndex = 1; colIndex <= 9; colIndex++) {
      rows[`r${rowIndex}`].push(sudokuObj.puzzle[`r${rowIndex}c${colIndex}`]);
    }
  }
  return rows;
};
const makeCols = () => {
  let cols = {};
  for (let colIndex = 1; colIndex <= 9; colIndex++) {
    cols[`c${colIndex}`] = [];
    for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
      cols[`c${colIndex}`].push(sudokuObj.puzzle[`r${rowIndex}c${colIndex}`]);
    }
  }
  return cols;
};

const getSquare = (cell) => {
  let s13 = [1, 2, 3];
  let s46 = [4, 5, 6];
  let s79 = [7, 8, 9];

  let square;
  if (cell.address.r >= 1 && cell.address.r <= 3) {
    square = s13;
  }
  if (cell.address.r >= 4 && cell.address.r <= 6) {
    square = s46;
  }
  if (cell.address.r >= 7 && cell.address.r <= 9) {
    square = s79;
  }
  return `s${square[Math.floor((cell.address.c - 1) / 3)]}`;
};

const makeSquares = () => {
  let squares = {
    s1: [],
    s2: [],
    s3: [],
    s4: [],
    s5: [],
    s6: [],
    s7: [],
    s8: [],
    s9: [],
  };

  for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
    for (let colIndex = 1; colIndex <= 9; colIndex++) {
      squares[getSquare(sudokuObj.puzzle[`r${rowIndex}c${colIndex}`])].push(
        sudokuObj.puzzle[`r${rowIndex}c${colIndex}`]
      );
    }
  }

  // puzzle.squares = squares;
  // console.log("\n\n squares:");
  // console.log(squares);
  return squares;
};

// sudokuObj = makeSquares(sudokuObj.puzzle);
// console.log(puzzle);

const getPeers = (cell) => {
  // Define the three units we're pulling from
  // console.log(cell);
  const rows = makeRows();
  const cols = makeCols();
  const squares = makeSquares();
  let row,
    col,
    square = [];
  row = rows[`r${cell.address.r}`];
  col = cols[`c${cell.address.c}`];
  square = squares[getSquare(cell)];

  return { row, col, square };
};

// console.log(getPeers({
//   number: "7",
//   given: true,
//   valid: { value: true, reason: null },
//   candidates: [],
//   address: { r: 9, c: 7 }
// }))

const validateSquare = (cell) => {
  // Skip givens
  if (cell.given) {
    return cell;
  }
  const { row, col, square } = getPeers(cell);
  const peers = [...row, ...col, ...square];
  // console.log("validateSquare");
  for (let cellIndex = 0; cellIndex < peers.length; cellIndex++) {
    // Skip the cell we're checking
    if (peers[cellIndex].address != cell.address) {
      if (peers[cellIndex].number == cell.number) {
        cell.valid.value = false;
      }
    }
    // Stop at first invalid
    if (!cell.valid.value) {
      break;
    }
  }
  return cell;
};

// console.log(
//   validateSquare({
//     number: "7",
//     given: true,
//     valid: { value: true, reason: null },
//     candidates: [],
//     address: { r: 9, c: 7 },
//   })
// );

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

const updateNumber = ({ address, number }) => {
  sudokuObj.puzzle[`r${address.r}c${address.c}`].number = number;
  validateSquare(sudokuObj.puzzle[`r${address.r}c${address.c}`]);
};

const updatePencilMark = ({ address, pencilMark }) => {
  if (pencilMark != "delete") {
    // Toggle mark
    sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks[
      pencilMark - 1
    ] = !sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks[
      pencilMark - 1
    ];
  } else {
    sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
  }
};

const wss = new WebSocketServer(8010);

wss.on("connection", function (ws: WebSocket) {
  // Assign color
  let color = getColor(ws);
  let id = v4.generate();
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
    const { focusUpdate, numberUpdate, pencilMarkUpdate, newGame } = JSON.parse(
      message
    );

    // Recieved movement/focus update
    if (focusUpdate) {
      console.log(focusUpdate);
      // update user
      updateFocus(focusUpdate, wss, ws);
    }
    // Recieved number update
    if (numberUpdate) {
      console.log(numberUpdate);

      updateNumber(numberUpdate);
    }
    // Recieved pencil mark update

    if (pencilMarkUpdate) {
      console.log(pencilMarkUpdate);

      updatePencilMark(pencilMarkUpdate);
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
