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
  "6..8.27357.235694.3..4.7.621..975.242..183.79.79624..34..56.2.7.6724.3..92.7384.6",
);
mainSolver(puzzle);
printSudokuToConsole(puzzle);
