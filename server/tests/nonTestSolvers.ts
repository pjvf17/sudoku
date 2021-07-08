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

const puzzle = new Puzzle("4..27.6..798156234.2.84...7237468951849531726561792843.82.15479.7..243....4.87..2");
printSudokuToConsole(puzzle);
