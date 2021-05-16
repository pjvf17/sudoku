// / <reference lib="webworker" />
import { Difficulty } from "../../client/src/types.d.ts";
import {
  createPuzzle,
  // printSudokuToConsole,
  parsePuzzle,
  puzzleToString,
  solver,
} from "../generator.ts";

const startNewGame = (difficulty: Difficulty) => {
  const puzzle = parsePuzzle(puzzleToString(createPuzzle(difficulty)));
  console.log("0\n0\n0\n0\n0");
  const solved = solver(JSON.parse(JSON.stringify(puzzle))).puzzle;
  return { puzzle, solved };
};

self.onmessage = function (msg) {
  const difficulty:Difficulty = msg.data;
  console.log("difficulty:");
  console.log(difficulty);

  console.log("WebWorker Starting New Game");
  postMessage(startNewGame(difficulty));
};
