import {
  assert,
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.96.0/testing/asserts.ts";
import { Puzzle } from "../Generator/recursiveGenerator.ts"

import { nakedSingleSolver } from "../Generator/solvers.ts";

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
