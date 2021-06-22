import {
  assert,
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.96.0/testing/asserts.ts";
import { mainSolver } from "../Generator/creator.ts";
import {
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
  },
});
