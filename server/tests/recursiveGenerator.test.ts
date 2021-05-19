import {
  assert,
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.96.0/testing/asserts.ts";
import {
  assign,
  convertToAddress,
  fillInRemaining,
  getPeers,
  hasUniqueSolution,
  Puzzle,
  validateCell,
} from "../recursiveGenerator.ts";

Deno.test({
  name:
    "recursiveGenerator – validateCell validates the cells of filled puzzles",
  fn(): void {
    const testPuzzle =
      "345729681812643957679581324934158762257496813186372549768914235493265178521837496";
    const puzzle = new Puzzle(testPuzzle);
    for (let i = 0; i < puzzle.cells.length; i++) {
      assert(
        validateCell(convertToAddress(i), puzzle, puzzle.cells[i] as number),
      );
    }
  },
});

Deno.test({
  name:
    "recursiveGenerator – newPuzzle() correctly throws error with invalid digit",
  fn(): void {
    const puzzleString =
      "^...............&................................................................";
    assertThrows(() => {
      new Puzzle(puzzleString);
    });
  },
});

Deno.test({
  name:
    "recursiveGenerator – newPuzzle() correctly throws error with short puzzle",
  fn(): void {
    const puzzleString =
      "................................................................................";
    assertThrows(() => {
      new Puzzle(puzzleString);
    });
  },
});

Deno.test({
  name:
    "recursiveGenerator – newPuzzle() correctly throws error with long puzzle",
  fn(): void {
    const puzzleString =
      "..................................................................................";
    assertThrows(() => {
      new Puzzle(puzzleString);
    });
  },
});

Deno.test({
  name: "recursiveGenerator – newPuzzle() correctly works with valid puzzle",
  fn(): void {
    const puzzleString =
      ".................................................................................";
    new Puzzle(puzzleString);
  },
});

Deno.test({
  name: "recursiveGenerator – fillInRemaining returns a complete puzzle",
  fn(): void {
    const puzzle = fillInRemaining();
    for (let i = 0; i < puzzle.cells.length; i++) {
      const cell = puzzle.cells[i];
      assert(cell != ".", "puzzle contains empty cell");
      assert(validateCell(convertToAddress(i), puzzle, cell as number));
    }
  },
});

Deno.test({
  name: "recursiveGenerator – fillInRemaining completes a puzzle",
  fn(): void {
    const testPuzzle =
      "2861597433576482194197..5688219654376938741257453..8965682..974134597682972486351";
    const puzzle = fillInRemaining(new Puzzle(testPuzzle));
    for (const cell of puzzle.cells) {
      assert(cell != ".", "puzzle has empty cell");
    }
  },
});

Deno.test({
  name:
    "recursiveGenerator – fillInRemaining completes a puzzle with many cells empty",
  fn(): void {
    const testPuzzle =
      ".76...3.9...639.2....7..61....9.6.54....8....68.3.4....91..3....2.867...5.8...73.";
    const puzzle = fillInRemaining(new Puzzle(testPuzzle));
    for (const cell of puzzle.cells) {
      assert(cell != ".", "puzzle has empty cell");
    }
  },
});

Deno.test({
  name:
    "recursiveGenerator – fillInRemaining completes a puzzle with many cells empty, harder puzzle",
  fn(): void {
    const testPuzzle =
      ".8...9743.5...8.1..1.......8....5......8.4......3....6.......7..3.5...8.9724...5.";
    const puzzle = fillInRemaining(new Puzzle(testPuzzle));
    for (const cell of puzzle.cells) {
      assert(cell != ".", "puzzle has empty cell");
    }
  },
});

Deno.test({
  name: "recursiveGenerator – getPeers returns correct peers",
  fn(): void {
    const peers = getPeers(convertToAddress(5));
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    peers.sort((a, b) => a - b);
    const expected = [
      0,
      1,
      2,
      3,
      4,
      6,
      7,
      8,
      12,
      13,
      14,
      21,
      22,
      23,
      32,
      41,
      50,
      59,
      68,
      77,
    ];
    assertEquals(
      peers,
      expected,
    );
  },
});

Deno.test({
  name:
    "recursiveGenerator – hasUniqueSolution correctly identifies unique and non-unique puzzles",
  fn(): void {
    // For the following two examples, see:
    // https://www.sudokudragon.com/unsolvable.htm
    const testPuzzle1 =
      "2861597433576482194197..5688219654376938741257453..8965682..974134597682972486351";
    let unique = hasUniqueSolution(new Puzzle(testPuzzle1));
    const testPuzzle2 =
      ".8...9743.5...8.1..1.......8....5......8.4......3....6.......7..3.5...8.9724...5.";
    // Assert that the puzzle is not unique
    unique = hasUniqueSolution(new Puzzle(testPuzzle2));
    assert(!unique);
    // Took this puzzle from test above this, solving a puzzle with xwing
    const testPuzzle3 =
      "1......5...719.....6..85.....6...54..21.4.36..93...1.....93..1.....547...7......5";
    unique = hasUniqueSolution(new Puzzle(testPuzzle3));
    assert(unique);
  },
});

// Deno.test({
//   name: "recursiveGenerator – assign correctly updates peers",
//   fn(): void {
//     const puzzleString =
//       ".................................................................................";
//     const puzzle = new Puzzle(puzzleString);
//     assign(0, puzzle, 2);
//     const peers = getPeers(convertToAddress(0));
//     for (const index of peers) {
//       assert(
//         !puzzle.untriedNumbers[index].includes(2),
//         "peer untriedNumbers contains number",
//       );
//     }
//   },
// });
