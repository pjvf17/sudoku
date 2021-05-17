import {
  createPuzzle,
  fillInRemaining,
  hasUniqueSolution,
  hiddenAndNakedSingleSolver,
  parsePuzzle,
  printSudokuToConsole,
  puzzleToString,
  solver,
  validatePuzzle,
} from "../generator.ts";
import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.96.0/testing/asserts.ts";
import {
  convertToAddress,
  Puzzle,
  validateCell,
} from "../recursiveGenerator.ts";

Deno.test({
  name: "Fill in remaining creates a filled puzzle",
  fn(): void {
    const newPuzzle = fillInRemaining();
    assert(puzzleToString(newPuzzle).indexOf(".") == -1);
  },
});

Deno.test({
  name: "Fill in remaining creates a valid puzzle",
  fn(): void {
    assert(validatePuzzle(fillInRemaining()));
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
      false,
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
      solvedLockedTestPuzzle,
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
    assert(
      puzzleToString(solver(parsePuzzle(testPuzzle)).puzzle),
      solvedTestPuzzle,
    );
  },
});

Deno.test({
  name:
    "recursiveGenerator's validateCell validates the cells of filled puzzles",
  fn(): void {
    const testPuzzle =
      "345729681812643957679581324934158762257496813186372549768914235493265178521837496";
    const puzzle = new Puzzle(testPuzzle);
    for (let i = 0; i < puzzle.cells.length; i++) {
      assert(validateCell(convertToAddress(i), puzzle, puzzle.cells[i] as number));
    }
  },
});

Deno.test({
  name: "Solve Puzzle with xwing",
  fn(): void {
    const testPuzzle =
      "1......5...719.....6..85.....6...54..21.4.36..93...1.....93..1.....547...7......5";
    const solvedPuzzle = solver(parsePuzzle(testPuzzle)).puzzle;
    assert(puzzleToString(solvedPuzzle).indexOf(".") == -1);
  },
});

Deno.test({
  name: "hasUniqueSolution correctly identifies unique and non-unique puzzles",
  fn(): void {
    // For the following two examples, see:
    // https://www.sudokudragon.com/unsolvable.htm
    const testPuzzle1 =
      "2861597433576482194197..5688219654376938741257453..8965682..974134597682972486351";
    let unique = hasUniqueSolution(parsePuzzle(testPuzzle1));
    const testPuzzle2 =
      ".8...9743.5...8.1..1.......8....5......8.4......3....6.......7..3.5...8.9724...5.";
    // Assert that the puzzle is not unique
    unique = hasUniqueSolution(parsePuzzle(testPuzzle2));
    assert(!unique);
    // Took this puzzle from test above this, solving a puzzle with xwing
    const testPuzzle3 =
      "1......5...719.....6..85.....6...54..21.4.36..93...1.....93..1.....547...7......5";
    unique = hasUniqueSolution(parsePuzzle(testPuzzle3));
    assert(unique);
  },
});

// setTimeout(()=>{
//     console.log("timeout!");
// }, 1000000000000000);
