import { mainSolver } from "../Generator/creator.ts";
import {
  printSudokuToConsole,
  Puzzle,
} from "../Generator/recursiveGenerator.ts";

const testPuzzle =
  "..9.3.6...36.14.891..869.35.9....8...1.....9..68.9.17.6.19.3..297264.3....3.2.9.."
const puzzle = new Puzzle(testPuzzle);
// Screenshot Jun 3rd 2021
// const result =
// "683295147457138296912647538348916725269754813175382469834561972526479381791823654";
// Solve puzzle
printSudokuToConsole(puzzle);
mainSolver(puzzle);
printSudokuToConsole(puzzle);
// printSudokuToConsole(result);
