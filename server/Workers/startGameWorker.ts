import {
    puzzleToString,
    createPuzzle,
    solver,
    printSudokuToConsole,
    parsePuzzle,
  } from "../generator.ts";

const startNewGame = () => {
    const puzzle = parsePuzzle(puzzleToString(createPuzzle("hard")));
    console.log("0\n0\n0\n0\n0");
    const solved = solver(JSON.parse(JSON.stringify(puzzle))).puzzle;
    return { puzzle, solved }
};

self.onmessage = function () {
    console.log("WebWorker Starting New Game");
    postMessage(startNewGame());
}