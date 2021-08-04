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
  "1......5...719.....6..85.....6...54..21.4.36..93...1.....93..1.....547...7......5",
);
printSudokuToConsole(puzzle);
const { changes } = mainSolver(puzzle);
printSudokuToConsole(puzzle);
console.log(changes);
