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

const testPuzzle =
  ".2.94.61.......5..7....8..4....1...3.67...94.2...9....3..4....6..4.......86.79.2.";
const puzzle = new Puzzle(testPuzzle);
mainSolver(puzzle);
printSudokuToConsole(puzzle);
