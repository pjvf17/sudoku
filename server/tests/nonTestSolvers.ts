import { mainSolver } from "../Generator/creator.ts";
import {
  printSudokuToConsole,
  Puzzle,
} from "../Generator/recursiveGenerator.ts";

const testPuzzle =
  ".....51.7.........9..64..38.4..1672..6.....1..7538..6.83..61..2.........7.18.....";
const puzzle = new Puzzle(testPuzzle);
// Screenshot Jun 3rd 2021
const result =
  "683295147457138296912647538348916725269754813175382469834561972526479381791823654";
// Solve puzzle
printSudokuToConsole(puzzle);
mainSolver(puzzle);
printSudokuToConsole(puzzle);
printSudokuToConsole(result);
