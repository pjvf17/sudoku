import {
  assert,
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.100.0/testing/asserts.ts";
import { mainSolver } from "../Generator/creator.ts";
import {
  fillInRemaining,
  printSudokuToConsole,
  Puzzle,
} from "../Generator/recursiveGenerator.ts";

import { hiddenSingleSolver, nakedSingleSolver } from "../Generator/solvers.ts";

Deno.test({
  name: "nakedSingleSolver gets to correct state",
  fn(): void {
    const testPuzzle =
      "...5.69.882.1...5..9..28761..16...................15..45286..7..3...4.959.72.5...";
    const puzzle = new Puzzle(testPuzzle);
    nakedSingleSolver(puzzle);
    // There's a screenshot of this if needed (May 21st 2021)
    const result =
      "173546928826197354594328761..16.......59.......94.15..452869173638714295917235..6";
    assertEquals(puzzle.cells, new Puzzle(result).cells);
  },
});

/* TODO get better test for hiddenSingleSolver
Problem is that it skips naked singles, and sudokus can be solved in any order
So it's hard to test by an entire puzzle
Might be possible to do it with an almost solved puzzle or something, I'm not sure
*/

// Deno.test({
//   name: "hiddenSingleSolver gets to correct state",
//   fn(): void {
//     const testPuzzle =
//       "1...9....2..4..6.9.5...8.17...14..837.58231.638..79...42.7...6.8.3..4.......8...4";
//     const puzzle = new Puzzle(testPuzzle);
//     // Screenshot Jun 3rd 2021
//     const result =
//       "1...9....2.84..6.9.5...8.17..21457837.58231.638..79...42.7...6.8.3..4.......8...4";
//     assertEquals(puzzle.cells, new Puzzle(result).cells);
//   },
// });

Deno.test({
  name: "hiddenSingleSolver gets to correct state",
  fn(): void {
    const testPuzzle =
      ".67....2.3...........62.43.5...1279.2..5.7..6.7136...2.35.41...........8.9....61.";
    const result =
      "467139825352784961819625437586412793243597186971368542635841279124976358798253614";
    const puzzle = new Puzzle(testPuzzle);
    // Solve puzzle
    mainSolver(puzzle);
    assertEquals(puzzle.cells, new Puzzle(result).cells);
    assertEquals(puzzle.cells, fillInRemaining(new Puzzle(testPuzzle)).cells);
  },
});

Deno.test({
  name: "hiddenSingleSolver gets to correct state 2",
  fn(): void {
    const testPuzzle =
      ".....51.7.........9..64..38.4..1672..6.....1..7538..6.83..61..2.........7.18.....";
    const result =
      "683295147457138296912647538348916725269754813175382469834561972526479381791823654";
    const puzzle = new Puzzle(testPuzzle);
    // Solve puzzle
    mainSolver(puzzle);
    assertEquals(puzzle.cells, new Puzzle(result).cells);
    assertEquals(puzzle.cells, fillInRemaining(new Puzzle(testPuzzle)).cells);
  },
});
Deno.test({
  name: "mainSolver gets to correct state with pointing puzzle",
  fn(): void {
    const testPuzzle =
      "..253....6.8........3.7.2.4.2.16..8..4.....6..8..47.2.9.5.1.6........1.2....945..";
    const result =
      "472539816658421379193876254729165483341982765586347921935218647864753192217694538";
    const puzzle = new Puzzle(testPuzzle);
    // Solve puzzle
    mainSolver(puzzle);
    assertEquals(puzzle.cells, new Puzzle(result).cells);
    assertEquals(puzzle.cells, fillInRemaining(new Puzzle(testPuzzle)).cells);
  },
});
Deno.test({
  name: "mainSolver gets to correct state with double pair puzzle",
  fn(): void {
    const testPuzzle =
      "934.6..5...6..4923..89...468..546..76...1...55..39..6236.4.127.47.6..5...8....634";
    const puzzle = new Puzzle(testPuzzle);
    // Solve puzzle
    mainSolver(puzzle);
    assertEquals(puzzle.cells[75], 7);
    assertEquals(puzzle.cells, fillInRemaining(new Puzzle(testPuzzle)).cells);
  },
});
Deno.test({
  name: "mainSolver gets to correct state with multiple lines puzzle",
  fn(): void {
    const testPuzzle =
      "..9.3.6...36.14.891..869.35.9....8...1.....9..68.9.17.6.19.3..297264.3....3.2.9..";
    const puzzle = new Puzzle(testPuzzle);
    assert(puzzle.untriedNumbers[27].includes(5));
    assert(puzzle.untriedNumbers[36].includes(5));
    assert(puzzle.untriedNumbers[45].includes(5));
    // Solve puzzle
    mainSolver(puzzle);
    // Solver correctly got rid of this numbers from candidancy
    assert(!puzzle.untriedNumbers[27].includes(5));
    assert(!puzzle.untriedNumbers[36].includes(5));
    assert(!puzzle.untriedNumbers[45].includes(5));
    // assertEquals(puzzle.cells, fillInRemaining(new Puzzle(testPuzzle)).cells);
  },
});

Deno.test({
  name: "mainSolver gets to correct state with naked pairs puzzle",
  fn(): void {
    const puzzle = new Puzzle("4..27.6..798156234.2.84...7237468951849531726561792843.82.15479.7..243....4.87..2");
    mainSolver(puzzle);
    assertEquals(puzzle.cells[79], 6);
  }
})

Deno.test({
  name: "mainSolver solves puzzle with nakedSingle, nakedCandidate, Pointing, Double Pairs, Multiple Lines, and Naked Pairs",
  fn(): void {
    const testPuzzle = ".2.94.61.......5..7....8..4....1...3.67...94.2...9....3..4....6..4.......86.79.2.";
    const puzzle = new Puzzle(testPuzzle);
    mainSolver(puzzle);
    assertEquals(puzzle.cells, fillInRemaining(new Puzzle(testPuzzle)).cells);
  }
})
