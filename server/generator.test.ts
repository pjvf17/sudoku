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
  createPuzzle,
  printSudokuToConsole,
  solver,
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

Deno.test({
  name: "Hidden and naked single solver correctly solves easy puzzle",
  fn(): void {
    const easyPuzzleString =
      ".76...3.9...639.2....7..61....9.6.54....8....68.3.4....91..3....2.867...5.8...73.";
    const solvedPuzzle =
      "276518349814639527359742618132976854947185263685324971791253486423867195568491732";
    const solvedBySolver = hiddenAndNakedSingleSolver(
      parsePuzzle(easyPuzzleString),
      false
    ).puzzle;
    assertEquals(puzzleToString(solvedBySolver), solvedPuzzle);
  },
});

Deno.test({
  name:
    "Easy Puzzle Generator creates puzzle solveable by hidden and naked single techniques",
  fn(): void {
    const easyPuzzle = createPuzzle();
    const solvedPuzzle = hiddenAndNakedSingleSolver(easyPuzzle, false).puzzle;
    assert(validatePuzzle(solvedPuzzle));
  },
});

Deno.test({
  name: "Solver correctly solves puzzle with pointing locked candidates",
  fn(): void {
    const lockedTestPuzzle =
      "1......6..32...1...9.18.....5.4..2..6.3.5.7.1..7..9.5.....93.8...9...34..6......5";
    const solvedLockedTestPuzzle =
      "175932864832645179496187523951476238643258791287319456714593682529861347368724915";
    assert(
      puzzleToString(solver(parsePuzzle(lockedTestPuzzle)).puzzle),
      solvedLockedTestPuzzle
    );
  },
});

// setTimeout(()=>{
//     console.log("timeout!");
// }, 1000000000000000);
