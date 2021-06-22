import { mainSolver } from "../Generator/creator.ts";
import {
  printSudokuToConsole,
  Puzzle,
} from "../Generator/recursiveGenerator.ts";

const testPuzzle =
  "..253....6.8........3.7.2.4.2.16..8..4.....6..8..47.2.9.5.1.6........1.2....945..";
const puzzle = new Puzzle(testPuzzle);
// Screenshot Jun 3rd 2021
// const result =
  // "683295147457138296912647538348916725269754813175382469834561972526479381791823654";
// Solve puzzle
printSudokuToConsole(puzzle);
mainSolver(puzzle);
printSudokuToConsole(puzzle);
// printSudokuToConsole(result);
