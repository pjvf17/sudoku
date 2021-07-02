import { mainSolver } from "../Generator/creator.ts";
import {
  printSudokuToConsole,
  Puzzle,
} from "../Generator/recursiveGenerator.ts";

const testPuzzle =
  "934.6..5...6..4923..89...468..546..76...1...55..39..6236.4.127.47.6..5...8....634";
const puzzle = new Puzzle(testPuzzle);
// Screenshot Jun 3rd 2021
// const result =
// "683295147457138296912647538348916725269754813175382469834561972526479381791823654";
// Solve puzzle
printSudokuToConsole(puzzle);
mainSolver(puzzle);
printSudokuToConsole(puzzle);
// printSudokuToConsole(result);
