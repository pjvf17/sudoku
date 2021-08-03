import { Difficulty } from "../../client/src/constants.ts";
import { createPuzzle, mainSolver } from "../Generator/creator.ts";
import {
  printSudokuToConsole,
  Puzzle,
} from "../Generator/recursiveGenerator.ts";

// const dif:Difficulty = "easy"
// const puzzle = createPuzzle(dif);
// if (typeof puzzle == "number") {
//    console.log(puzzle)
// } else {
//    console.log(mainSolver(puzzle.clone().resetUntriedNumbers(), dif).changes);
//    printSudokuToConsole(puzzle);
// }

const puzzle = new Puzzle(
  ".9.73.1..2735146984.196....36248.91............7..328.72984.3.11.8.79.2......1879",
);
printSudokuToConsole(puzzle);
const {changes} = mainSolver(puzzle);
printSudokuToConsole(puzzle);
console.log(changes);
