import { Application, send } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import {
  createPuzzle,
  // printSudokuToConsole,
  parsePuzzle,
  puzzleToString,
  solver,
} from "./generator.ts";
// import Validation from "./serverSidePuzzleValidation.ts";
import Updates from "./serverSidePuzzleUpdates.ts";
import type {
  ActiveUpdate,
  FocusUpdate,
  Move,
  NumberUpdate,
  PencilMarkUpdate,
  Puzzle,
  User,
  Users,
  // Cell,
} from "../client/src/types.d.ts";

import { BlankPuzzle } from "./createBlankPuzzle.ts";
// import { MongoClass } from "./mongo/mongoMain.ts";
import {
  isWebSocketCloseEvent,
  WebSocket,
  // WebSocketMessage,
} from "https://deno.land/std@0.61.0/ws/mod.ts";

import { v4 } from "https://deno.land/std/uuid/mod.ts";

const app = new Application();

class WSRoom {
  readonly roomName: string;
  WSUsers: Users = {};
  WSSockets = new Set<WebSocket>();
  updates: Updates;

  constructor(name: string) {
    this.roomName = name;

    const blankPuzzle = new BlankPuzzle();
    this.updates = new Updates(
      {
        puzzle: blankPuzzle,
      },
      this.WSUsers,
    );
  }
}

// Async version to be used if "await puzzles.findOne(...)" is used
// export const startNewGame = async () => {
export const startNewGame = () => {
  let puzzle: Puzzle = new BlankPuzzle();
  let solved: Puzzle = puzzle;
  // Check for puzzles in db
  // if (await puzzles.count()) {
  //   const found = await puzzles.findOne({ "difficulty": "hard" });
  //   puzzle = parsePuzzle(found?.puzzleString as string);
  //   solved = solver(JSON.parse(JSON.stringify(puzzle))).puzzle;
  // } else {
  puzzle = parsePuzzle(puzzleToString(createPuzzle("medium")));
  console.log("0\n0\n0\n0\n0");
  solved = solver(JSON.parse(JSON.stringify(puzzle))).puzzle;
  // }

  return { puzzle, solved };
};

const WSRooms: WSRoom[] = [];
const WSRoomNames = new Set<string>();

app.use(async (context) => {
  const pathname = context.request.url.pathname;
  console.log(pathname);
  console.log(Deno.cwd());
  try {
    // If not upgradeable, send to vue
    if (!context.isUpgradable) {
      try {
        // Looks to see if there are the correct corrosponding files
        await send(context, pathname, {
          root: `dist`,
          index: "index.html",
        });
      } catch {
        // If no corrosponding files, send to index
        // This allows Vue Router to work in History Mode
        // See more here: https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
        await send(context, "/", {
          root: `dist`,
          index: "index.html",
        });
      }
      // Is upgradeable
    } else {
      let room;
      // Upgrade to websocket
      const socket = await context.upgrade();
      const roomName = pathname.slice(
        pathname.indexOf("e/") + 2,
        pathname.indexOf("/ws"),
      );
      // If that room does not exist
      if (
        !WSRoomNames.has(roomName) &&
        WSRooms.findIndex((room) => room.roomName == roomName) == -1
      ) {
        // Create new WSRoom and add to WSRooms
        room = new WSRoom(roomName);
        room.WSSockets.add(socket);
        WSRooms.push(room);
        room.updates.updateSudokuObj(await startNewGame());
        // Room exists
      } else {
        // Get room
        room = WSRooms.find((room) => room.roomName == roomName);
        room?.WSSockets.add(socket);
      }
      const id = onConnection(socket, room as WSRoom);
      // For each event from socket
      for await (const ev of socket) {
        if (isWebSocketCloseEvent(ev)) {
          onClose(room as WSRoom, socket, ev.code, id);
        } else {
          onMessage(socket, ev as string, room as WSRoom);
          // for (const user of room!.WSSockets) {
          //   const res = ev as WebSocketMessage;
          //   user.send(res);
          // }
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
});

type color = {
  value: string;
  used: boolean | WebSocket;
};

const colors: color[] = [
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
  // If here, no colors available
  throw new Error("No Color Available");
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

const freeUser = (room: WSRoom, ws: WebSocket, id: string) => {
  // WSSockets is a set, delete by passing in the object
  room.WSSockets.delete(ws);
  // WSUsers is an object, delete by passing in the key
  delete room.WSUsers[id];
};

const onClose = (room: WSRoom, ws: WebSocket, code: number, id: string) => {
  // Free color
  freeColor(ws);
  // Delete from Sockets and Users
  freeUser(room, ws, id);
  console.log(`socket closed: ${code}`);
  // Send to everyone else updated users
  for (const user of room.WSSockets) {
    // Send only to open clients
    if (!user.isClosed && user != ws) {
      user.send(JSON.stringify({ users: room.WSUsers }));
    }
  }
};

const onConnection = (ws: WebSocket, room: WSRoom) => {
  // Assign color
  // TODO Possibly assign by ip address?
  const color = getColor(ws);
  const id = v4.generate();
  // For undoing
  const moves: Move[] = [];
  // Save to WSusers
  const focus: User["focus"] = { row: 1, col: 1 };
  room.WSUsers[id] = {
    id,
    focus,
    // name: null,
    active: true,
    color,
    ws,
    moves,
  };
  // Send starting info
  ws.send(
    JSON.stringify(
      { users: room.WSUsers, id, color, sudokuObj: room.updates.sudokuObj },
    ),
  );
  // Starts timer so that if they don't move they still get unactivated
  updateFocus(room, { id, focus });
  // Send to everyone else updated users
  for (const user of room.WSSockets) {
    // Send only to open clients, and not the one who sent a message
    if (!user.isClosed && user != ws) {
      user.send(JSON.stringify({ users: room.WSUsers }));
    }
  }
  return id;
};

// deno-lint-ignore no-explicit-any
const userTimers: { [index: string]: any } = {};

// Sets a User's "active" field to false
const deactivate = (room: WSRoom, id: User["id"]) => {
  room.WSUsers[id].active = false;
  const activeUpdate: ActiveUpdate = { id, active: false };
  for (const client of room.WSSockets) {
    // Send only to open clients, and not the one who sent a message
    if (!client.isClosed && client != room.WSUsers[id].ws) {
      client.send(
        JSON.stringify({ activeUpdate }),
      );
    }
  }
};

// Sets a User's "active" field to true
const reactivate = (room: WSRoom, id: User["id"]) => {
  room.WSUsers[id].active = true;
  const activeUpdate: ActiveUpdate = { id, active: true };
  for (const client of room.WSSockets) {
    // Send only to open clients, and not the one who sent a message
    if (!client.isClosed && client != room.WSUsers[id].ws) {
      client.send(
        JSON.stringify({ activeUpdate }),
      );
    }
  }
};

const updateFocus = (
  room: WSRoom,
  { id, focus }: { id: User["id"]; focus: User["focus"] },
) => {
  if (userTimers[id]) {
    clearTimeout(userTimers[id]);
  }
  if (room.WSUsers[id]) {
    room.WSUsers[id].focus = focus;
    // If User is marked as inactive, reactivate
    reactivate(room, id);
  }
  // If user goes over timeout, take them off the page
  userTimers[id] = setTimeout(() => {
    deactivate(room, id);
  }, 180000);
};

const onMessage = (
  ws: WebSocket,
  message: string,
  room: WSRoom,
) => {
  const {
    focusUpdate,
    numberUpdate,
    pencilMarkUpdate,
    newGame,
    undo,
    hint,
  }: {
    focusUpdate: FocusUpdate;
    numberUpdate: NumberUpdate;
    pencilMarkUpdate: PencilMarkUpdate;
    // Catch the rest until I type them
    // TODO type these
    // deno-lint-ignore no-explicit-any
    [propName: string]: any;
  } = JSON.parse(message);
  console.log(
    {
      focusUpdate,
      numberUpdate,
      pencilMarkUpdate,
      newGame,
      undo,
      hint,
      message,
    },
  );
  const updates = room.updates;
  if (hint) {
    const hintResponse = solver(
      JSON.parse(JSON.stringify(room.updates.sudokuObj.puzzle)),
      undefined,
      true,
    );
    for (const client of room.WSSockets) {
      // Send only to open clients including sender
      if (!client.isClosed) {
        client.send(JSON.stringify({ hint: hintResponse }));
      }
    }
  }
  // Recieved movement/focus update
  if (focusUpdate) {
    // update user
    updateFocus(room, focusUpdate);
  }
  // Recieved number update
  if (numberUpdate) {
    updates.updateNumber({ numberUpdate });
    console.log(
      room.updates.sudokuObj.puzzle[
        `r${numberUpdate.address.r}c${numberUpdate.address.c}`
      ],
    );
  }
  // Recieved pencil mark update
  if (pencilMarkUpdate) {
    updates.updatePencilMarks({ pencilMarkUpdate });
  }
  // Recieved undo request
  if (undo) {
    updates.undo(undo);
  }
  // console.log(newGame);
  if (newGame) {
    const startGameWorker = new Worker(
      new URL("./Workers/startGameWorker.ts", import.meta.url).href,
      {
        type: "module",
        deno: {
          namespace: true,
        },
      },
    );
    startGameWorker.postMessage(newGame);
    startGameWorker.onmessage = (message) => {
      room.updates.updateSudokuObj(message.data);
      // console.log(room.updates.sudokuObj);
      // Update updates and validation
      // For each user
      for (const id in room.WSUsers) {
        // Reset moves
        room.WSUsers[id].moves = [];
        // Reset position
        room.WSUsers[id].focus = { row: 1, col: 1 };
      }

      for (const client of room.WSSockets) {
        // Send only to open clients, including sender
        if (!client.isClosed) {
          // Update sudokuObj and users (which had values reset)
          client.send(
            JSON.stringify(
              { sudokuObj: room.updates.sudokuObj, users: room.WSUsers },
            ),
          );
        }
      }
    };
  } else if (!hint) {
    // Send to all connected
    for (const client of room.WSSockets) {
      // Send only to open clients, and not the one who sent a message
      if (!client.isClosed && client != ws) {
        client.send(message);
      }
    }
  }
};

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${hostname ??
      "localhost"}:${port}`,
  );
});

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

// const db = new MongoClass();
// const { puzzles } = db.connect();
// console.log(await puzzles.count());

// export const startNewGame = async () => {
//   let puzzle: Puzzle = new BlankPuzzle();
//   let solved: Puzzle = puzzle;
//   // Check for puzzles in db
//   if (await puzzles.count()) {
//     const found = await puzzles.findOne({ difficulty: "hard" });
//     puzzle = parsePuzzle(found?.puzzleString as string);
//     solved = solver(JSON.parse(JSON.stringify(puzzle))).puzzle;
//   } else {
//     puzzle = parsePuzzle(puzzleToString(createPuzzle("hard", ["xwing"])));
//     console.log("0\n0\n0\n0\n0");
//     solved = solver(JSON.parse(JSON.stringify(puzzle))).puzzle;
//   }

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

// const freeUser = (id: User["id"]) => {
//   delete WSusers[id];
// };

// const onClose = (ws: WebSocket, message: string, id: string) => {
//   freeColor(ws);
//   freeUser(id);
//   console.log(`socket closed: ${message}`);
//   for (let client of WSSockes) {
//     if (!client.isClosed) {
//       client.send(JSON.stringify({ users: WSusers }));
//     }
//   }
// };

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
