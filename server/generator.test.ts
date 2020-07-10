import {
  createBlankPuzzle,
  fillInRemaining,
  makeCols,
  makeRows,
  makeSquares,
  getSquare,
  puzzleToString,
  validatePuzzle,
  hiddenAndNakedSingleSolver,
  parsePuzzle,
  createEasyPuzzle,
  printSudokuToConsole,
} from "./generator.ts";
import { assertEquals, assert } from "https://deno.land/std/testing/asserts.ts";

Deno.test({
  name: "Fill in remaining creates a filled puzzle",
  fn(): void {
    let newPuzzle = fillInRemaining({ r: 1, c: 1 }, createBlankPuzzle(), []);
    assert(puzzleToString(newPuzzle).indexOf(".") == -1);
  },
});

Deno.test({
  name: "Fill in remaining creates a valid puzzle",
  fn(): void {
    assert(
      validatePuzzle(fillInRemaining({ r: 1, c: 1 }, createBlankPuzzle(), []))
    );
  },
});

// // From https://www.sudokuoftheday.com/dailypuzzles/archive/archivepuzzle/?days=0&level=1
// // (Might have changed)
// // Should only need single candidate and single position techniques
const easyPuzzleString =
  ".76...3.9...639.2....7..61....9.6.54....8....68.3.4....91..3....2.867...5.8...73.";

Deno.test({
  name: "Hidden and naked single solver correctly solves easy puzzle",
  fn(): void {
    const solvedPuzzle =
      "276518349814639527359742618132976854947185263685324971791253486423867195568491732";
    const solvedBySolver = hiddenAndNakedSingleSolver(
      parsePuzzle(easyPuzzleString)
    ).puzzle;
    assertEquals(puzzleToString(solvedBySolver), solvedPuzzle);
  },
});

Deno.test({
  name: "Easy Puzzle Generator creates puzzle solveable by hidden and naked single techniques",
  fn():void {
    const easyPuzzle = createEasyPuzzle();
    const solvedPuzzle = hiddenAndNakedSingleSolver(easyPuzzle).puzzle;
    assert(validatePuzzle(solvedPuzzle));
  }
})


// setTimeout(()=>{
//     console.log("timeout!");
// }, 1000000000000000);
