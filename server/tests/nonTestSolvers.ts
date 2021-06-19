import { mainSolver } from "../Generator/creator.ts";
import { printSudokuToConsole, Puzzle } from "../Generator/recursiveGenerator.ts";

const testPuzzle =
  "1...9....2..4..6.9.5...8.17...14..837.58231.638..79...42.7...6.8.3..4.......8...4";
const puzzle = new Puzzle(testPuzzle);
// Screenshot Jun 3rd 2021
const result =
  "1...9....2.84..6.9.5...8.17..21457837.58231.638..79...42.7...6.8.3..4.......8...4";
// Solve puzzle
printSudokuToConsole(puzzle);
mainSolver(puzzle);
printSudokuToConsole(puzzle);
mainSolver(puzzle);
printSudokuToConsole(puzzle);
printSudokuToConsole(result);
console.log("debugg");
