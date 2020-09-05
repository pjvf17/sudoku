import { Application, send } from "https://deno.land/x/oak/mod.ts";
import {
  puzzleToString,
  createPuzzle,
  solver,
  printSudokuToConsole,
  parsePuzzle,
} from "./generator.ts";
import Validation from "./serverSidePuzzleValidation.ts";
import Updates from "./serverSidePuzzleUpdates.ts";
import {
  PencilMarkUpdate,
  NumberUpdate,
  Users,
  User,
  Move,
  Puzzle,
  Cell,
} from "../client/src/types.d.ts";

import { BlankPuzzle } from "./createBlankPuzzle.ts";
import { MongoClass } from "./mongo/mongoMain.ts";
import {
  isWebSocketCloseEvent,
  WebSocket,
  WebSocketMessage,
} from "https://deno.land/std@0.61.0/ws/mod.ts";

import { v4 } from "https://deno.land/std/uuid/mod.ts";

const app = new Application();

const WSSockes = new Set<WebSocket>();

const WSusers: Users = {};

const WSUserUpdates: { [propName: string]: Updates } = {};

app.use(async (context) => {
  try {
    // If not upgradeable, send to vue
    if (!context.isUpgradable) {
      try {
        // Looks to see if there are the correct corrosponding files
        await send(context, context.request.url.pathname, {
          root: "dist",
          index: "index.html",
        });
      } catch (error) {
        // If no corrosponding files, send to index
        // This allows Vue Router to work in History Mode
        // See more here: https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
        await send(context, "/", {
          root: "dist",
          index: "index.html",
        });
      }
      // Is upgradeable
    } else {
      // Upgrade to websocket
      const socket = await context.upgrade();
      WSSockes.add(socket);
      const id = onConnection(socket);
      // For each event from socket
      for await (const ev of socket) {
        // If close event, remove from user set
        if (isWebSocketCloseEvent(ev)) {
          onClose(socket, JSON.stringify(ev), id);
          WSSockes.delete(socket);
        } else if (typeof ev === "string") {
          // Send to update handler
          onMessage(socket, ev, id);
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
});

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

const onConnection = (ws: WebSocket) => {
  // Assign color
  // TODO Possibly assign by ip address?
  let color = getColor(ws);
  let id = v4.generate();
  // For undoing
  const moves: Move[] = [];
  // Save to WSusers
  WSusers[id] = {
    id,
    focus: { row: 1, col: 1 },
    // name: null,
    color,
    ws,
    moves,
  };
  WSUserUpdates[id] = new Updates(
    sudokuObj.puzzle as Puzzle,
    WSusers,
    validation,
    id
  );
  // Send starting info
  ws.send(JSON.stringify({ users: WSusers, id, color, sudokuObj }));
  // Send to everyone else updated WSusers
  for (const user of WSSockes) {
    // Send only to open clients, and not the one who sent a message
    if (!user.isClosed && user != ws) {
      user.send(JSON.stringify({ WSusers }));
    }
  }
  return id;
};

const userTimers: { [index: string]: any } = {};

const updateFocus = (
  { id, focus }: { id: User["id"]; focus: User["focus"] },
  ws: WebSocket
) => {
  if (userTimers[id]) {
    clearTimeout(userTimers[id]);
  }
  if (WSusers[id]) {
    WSusers[id].focus = focus;
  }
  userTimers[id] = setTimeout(() => {
    updateFocus({ id, focus: { row: null, col: null } }, ws);
    // Get rid of cursor
    for (let client of WSSockes) {
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

const onMessage = (ws: WebSocket, message: string, id: string) => {
  const {
    focusUpdate,
    numberUpdate,
    pencilMarkUpdate,
    newGame,
    undo,
    hint,
  }: {
    numberUpdate: NumberUpdate;
    pencilMarkUpdate: PencilMarkUpdate;
    // Catch the rest until I type them
    [propName: string]: any;
  } = JSON.parse(message);
  const updates = WSUserUpdates[id];
  if (hint) {
    const hintResponse = solver(
      JSON.parse(JSON.stringify(sudokuObj.puzzle)),
      undefined,
      true
    );
    for (let client of WSSockes) {
      // Send only to open clients including sender
      if (!client.isClosed) {
        client.send(JSON.stringify({ hint: hintResponse }));
      }
    }
  }
  // Recieved movement/focus update
  if (focusUpdate) {
    // update user
    updateFocus(focusUpdate, ws);
  }
  // Recieved number update
  if (numberUpdate) {
    updates.updateNumber({ numberUpdate });
  }
  // Recieved pencil mark update
  if (pencilMarkUpdate) {
    updates.updatePencilMarks({ pencilMarkUpdate });
  }
  // Recieved undo request
  if (undo) {
    updates.undo(id);
  }
  // console.log(newGame);
  if (newGame) {
    const startGameWorker = new Worker(
      new URL("./Workers/startGameWorker.ts", import.meta.url).href,
      { type: "module", deno: true }
    );
    startGameWorker.postMessage("");
    startGameWorker.onmessage = (message) => {
      sudokuObj = message.data;
      // Update updates and validation
      updates.sudokuObj = sudokuObj.puzzle;
      validation.puzzle = sudokuObj.puzzle;
      updates.validation = validation;

      for (let client of WSSockes) {
        // Send only to open clients, including sender
        if (!client.isClosed) {
          client.send(JSON.stringify({ sudokuObj }));
        }
      }
    };
    console.log("after");
  } else if (!hint) {
    // Send to all connected
    for (let client of WSSockes) {
      // Send only to open clients, and not the one who sent a message
      if (!client.isClosed && client != ws) {
        client.send(message);
      }
    }
  }
};

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname ?? "localhost"
    }:${port}`
  );
});

let sudokuObj: { puzzle: Puzzle; solved?: Puzzle } = {
  puzzle: new BlankPuzzle(),
};

const db = new MongoClass();
const { puzzles } = db.connect();
console.log(await puzzles.count());

export const startNewGame = async () => {
  let puzzle: Puzzle = new BlankPuzzle();
  let solved: Puzzle = puzzle;
  // Check for puzzles in db
  if (await puzzles.count()) {
    const found = await puzzles.findOne({ difficulty: "hard" });
    puzzle = parsePuzzle(found?.puzzleString as string);
    solved = solver(JSON.parse(JSON.stringify(puzzle))).puzzle;
  } else {
    puzzle = parsePuzzle(puzzleToString(createPuzzle("hard", ["xwing"])));
    console.log("0\n0\n0\n0\n0");
    solved = solver(JSON.parse(JSON.stringify(puzzle))).puzzle;
  }

  return { puzzle, solved };
};
sudokuObj = await startNewGame();
const validation = new Validation(sudokuObj.puzzle as Puzzle);
console.log("\n\n solved:");
printSudokuToConsole(sudokuObj.solved as Puzzle);

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

const freeUser = (id: User["id"]) => {
  delete WSusers[id];
};

const onClose = (ws: WebSocket, message:string, id:string) => {
  freeColor(ws);
  freeUser(id);
  console.log(`socket closed: ${message}`);
  for (let client of WSSockes) {
    if (!client.isClosed) {
      client.send(JSON.stringify({ users: WSusers }));
    }
  }
};

// const wss = new WebSocketServer(8010);

// wss.on("connection", function (ws: WebSocket) {
//   // Assign color
//   let color = getColor(ws);
//   let id = v4.generate();
//   // For undoing
//   const moves: Move[] = [];
//   // Save to WSusers
//   WSusers[id] = {
//     id,
//     focus: { row: 1, col: 1 },
//     // name: null,
//     color,
//     ws,
//     moves,
//   };
//   const updates = new Updates(
//     sudokuObj.puzzle as Puzzle,
//     WSusers,
//     validation,
//     id,
//   );
//   // Send starting info
//   ws.send(JSON.stringify({ WSusers, id, color, sudokuObj }));
//   // Send to everyone else updated WSusers
//   for (let client of wss.clients) {
//     // Send only to open clients, and not the one who sent a message
//     if (!client.isClosed && client != ws) {
//       client.send(JSON.stringify({ WSusers }));
//     }
//   }

//   ws.on("message", function (message: any) {
//     const {
//       focusUpdate,
//       numberUpdate,
//       pencilMarkUpdate,
//       newGame,
//       undo,
//       hint,
//     }: {
//       numberUpdate: NumberUpdate;
//       pencilMarkUpdate: PencilMarkUpdate;
//       // Catch the rest until I type them
//       [propName: string]: any;
//     } = JSON.parse(message);

//     if (hint) {
//       const hintResponse = solver(
//         JSON.parse(JSON.stringify(sudokuObj.puzzle)),
//         undefined,
//         true,
//       );
//       for (let client of wss.clients) {
//         // Send only to open clients including sender
//         if (!client.isClosed) {
//           client.send(JSON.stringify({ hint: hintResponse }));
//         }
//       }
//     }
//     // Recieved movement/focus update
//     if (focusUpdate) {
//       // update user
//       updateFocus(focusUpdate, wss, ws);
//     }
//     // Recieved number update
//     if (numberUpdate) {
//       updates.updateNumber({ numberUpdate });
//     }
//     // Recieved pencil mark update
//     if (pencilMarkUpdate) {
//       updates.updatePencilMarks({ pencilMarkUpdate });
//     }
//     // Recieved undo request
//     if (undo) {
//       updates.undo(id);
//     }
//     // console.log(newGame);
//     if (newGame) {
//       const startGameWorker = new Worker(
//         new URL("./Workers/startGameWorker.ts", import.meta.url).href,
//         { type: "module", deno: true },
//       );
//       startGameWorker.postMessage("");
//       startGameWorker.onmessage = (message) => {
//         sudokuObj = message.data;
//         // Update updates and validation
//         updates.sudokuObj = sudokuObj.puzzle;
//         validation.puzzle = sudokuObj.puzzle;
//         updates.validation = validation;

//         for (let client of wss.clients) {
//           // Send only to open clients, including sender
//           if (!client.isClosed) {
//             client.send(JSON.stringify({ sudokuObj }));
//           }
//         }
//       };
//       console.log("after");
//     } else if (!hint) {
//       // Send to all connected
//       for (let client of wss.clients) {
//         // Send only to open clients, and not the one who sent a message
//         if (!client.isClosed && client != ws) {
//           client.send(message);
//         }
//       }
//     }
//   });
//   ws.on("close", function (message: any) {
//     freeColor(ws);
//     freeUser(id);
//     console.log(`socket closed: ${message}`);
//     for (let client of wss.clients) {
//       if (!client.isClosed) {
//         client.send(JSON.stringify({ WSusers }));
//       }
//     }
//   });
// });

await app.listen({ port: 8011 });
