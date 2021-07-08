import { Difficulty } from "../../client/src/constants.ts";
import { createPuzzle, mainSolver } from "../Generator/creator.ts";
import {
  printSudokuToConsole,
  Puzzle,
} from "../Generator/recursiveGenerator.ts";

const dif:Difficulty = "easy"
const puzzle = createPuzzle(dif);
if (typeof puzzle == "number") {
   console.log(puzzle)
} else {
   console.log(mainSolver(puzzle.clone().resetUntriedNumbers(), dif).changes);
   printSudokuToConsole(puzzle);
}
