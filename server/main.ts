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

const WSUsers = new Set<WebSocket>();

app.use(async (context) => {
  console.log(context.request.url.pathname);
  try {
    // If not upgradeable, send to vue
    console.log(context.isUpgradable);
    if (!context.isUpgradable) {
      console.log("in if block, sending to vue");
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
    } else {
      // Upgrade to websocket
      const socket = await context.upgrade();
      WSUsers.add(socket);
      // For each event from socket
      for await (const ev of socket) {
        console.log(ev);
        // If close event, remove from user set
        if (isWebSocketCloseEvent(ev)) {
          WSUsers.delete(socket);
        } else {
          for (const user of WSUsers) {
            const res = ev as WebSocketMessage;
            user.send(res);
          }
        }
      }
    }
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

// let sudokuObj: { puzzle: Puzzle; solved?: Puzzle } = {
//   puzzle: new BlankPuzzle(),
// };

// const db = new MongoClass();
// const { puzzles } = db.connect();
// console.log(await puzzles.count());

// export const startNewGame = async () => {
//   let puzzle: Puzzle = new BlankPuzzle();
//   let solved: Puzzle = puzzle;
//   // Check for puzzles in db
//   if (await puzzles.count()) {
//     const found = await puzzles.findOne({ "difficulty": "hard" });
//     puzzle = parsePuzzle(found?.puzzleString as string);
//     solved = solver(JSON.parse(JSON.stringify(puzzle))).puzzle;
//   } else {
//     puzzle = parsePuzzle(puzzleToString(createPuzzle("hard", ["xwing"])));
//     console.log("0\n0\n0\n0\n0");
//     solved = solver(JSON.parse(JSON.stringify(puzzle))).puzzle;
//   }

//   return { puzzle, solved };
// };
// sudokuObj = await startNewGame();
// const validation = new Validation(sudokuObj.puzzle as Puzzle);
// console.log("\n\n solved:");
// printSudokuToConsole(sudokuObj.solved as Puzzle);

// // import {
// //   WebSocket,
// //   WebSocketServer,
// // } from "https://deno.land/x/websocket/mod.ts";
// const colors: any = [
//   { value: "#bf616a88", used: false },
//   { value: "#d0877088", used: false },
//   { value: "#ebcb8b88", used: false },
//   { value: "#a3be8c88", used: false },
//   { value: "#b48ead88", used: false },
// ];

// const getColor = (socket: WebSocket) => {
//   let count = 0;
//   while (count < colors.length) {
//     if (!colors[count].used) {
//       colors[count].used = socket;
//       return colors[count].value;
//     }
//     count++;
//   }
// };

// const freeColor = (socket: WebSocket) => {
//   let count = 0;
//   while (count < colors.length) {
//     if (colors[count].used == socket) {
//       colors[count].used = false;
//       return true;
//     }
//     count++;
//   }
// };

// const users: Users = {};

// const freeUser = (id: User["id"]) => {
//   delete users[id];
// };

// const userTimers: { [index: string]: any } = {};

// const updateFocus = (
//   { id, focus }: { id: User["id"]; focus: User["focus"] },
//   wss: WebSocketServer,
//   ws: WebSocket,
// ) => {
//   if (userTimers[id]) {
//     clearTimeout(userTimers[id]);
//   }
//   if (users[id]) {
//     users[id].focus = focus;
//   }
//   userTimers[id] = setTimeout(() => {
//     updateFocus({ id, focus: { row: null, col: null } }, wss, ws);
//     // Get rid of cursor
//     for (let client of wss.clients) {
//       // Send only to open clients, and not the one who sent a message
//       if (!client.isClosed && client != ws) {
//         client.send(
//           JSON.stringify({
//             focusUpdate: { id, focus: { row: null, col: null } },
//           }),
//         );
//       }
//     }
//   }, 180000);
// };
// const wss = new WebSocketServer(8010);

// wss.on("connection", function (ws: WebSocket) {
//   // Assign color
//   let color = getColor(ws);
//   let id = v4.generate();
//   // For undoing
//   const moves: Move[] = [];
//   // Save to users
//   users[id] = {
//     id,
//     focus: { row: 1, col: 1 },
//     // name: null,
//     color,
//     ws,
//     moves,
//   };
//   const updates = new Updates(
//     sudokuObj.puzzle as Puzzle,
//     users,
//     validation,
//     id,
//   );
//   // Send starting info
//   ws.send(JSON.stringify({ users, id, color, sudokuObj }));
//   // Send to everyone else updated users
//   for (let client of wss.clients) {
//     // Send only to open clients, and not the one who sent a message
//     if (!client.isClosed && client != ws) {
//       client.send(JSON.stringify({ users }));
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
//         client.send(JSON.stringify({ users }));
//       }
//     }
//   });
// });

await app.listen({ port: 8011 });
