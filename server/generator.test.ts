import {
  fillInRemaining,
  puzzleToString,
  validatePuzzle,
  hiddenAndNakedSingleSolver,
  parsePuzzle,
  createPuzzle,
  solver,
} from "./generator.ts";
import { assertEquals, assert } from "https://deno.land/std/testing/asserts.ts";

Deno.test({
  name: "Fill in remaining creates a filled puzzle",
  fn(): void {
    let newPuzzle = fillInRemaining();
    assert(puzzleToString(newPuzzle).indexOf(".") == -1);
  },
});

Deno.test({
  name: "Fill in remaining creates a valid puzzle",
  fn(): void {
    assert(
      validatePuzzle(fillInRemaining())
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
    const easyPuzzle = createPuzzle("easy");
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

Deno.test({
  name:
    "Solver correctly solves puzzle with pointing locked candidates, naked pairs, and hidden pairs",
  fn(): void {
    const testPuzzle =
      "..5.2......26...57.7.5..3....41...6..5.496.1..8...25....8..4.3.49...51......3.4..";
    const solvedTestPuzzle =
      "345729681812643957679581324934158762257496813186372549768914235493265178521837496";
    // printSudokuToConsole(solver(parsePuzzle(testPuzzle)).puzzle);
    assert(
      puzzleToString(solver(parsePuzzle(testPuzzle)).puzzle),
      solvedTestPuzzle
    );
  },
});

// setTimeout(()=>{
//     console.log("timeout!");
// }, 1000000000000000);
