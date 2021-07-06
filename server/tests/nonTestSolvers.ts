import { createPuzzle, mainSolver } from "../Generator/creator.ts";
import {
  printSudokuToConsole,
  Puzzle,
} from "../Generator/recursiveGenerator.ts";

const puzzle = createPuzzle("easy");
if (typeof puzzle == "number") {
   console.log(puzzle)
} else {
   printSudokuToConsole(puzzle);
}
