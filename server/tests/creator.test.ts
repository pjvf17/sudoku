import { createPuzzle, mainSolver } from "../Generator/creator.ts";
import { fillInRemaining, printSudokuToConsole, Puzzle } from "../Generator/recursiveGenerator.ts";
import {
   assert,
   assertEquals,
   assertThrows,
 } from "https://deno.land/std@0.100.0/testing/asserts.ts";

Deno.test({
  name: "Create Puzzle creates a puzzle",
  fn(): void {
    const puzzle = createPuzzle("easy");
    assert(typeof puzzle != "number");
  },
});
Deno.test({
  name: "Create Puzzle creates a puzzle solvable by mainSolver",
  fn(): void {
    let puzzle = createPuzzle("easy");
    if (typeof puzzle != "number") {
       puzzle = puzzle.resetUntriedNumbers();
       mainSolver(puzzle);
       // Check that all cells are filled
       assert(!puzzle.cells.includes("."));
       // Check that fillInRemaining finds the same solution
       assertEquals(puzzle.cells, fillInRemaining(puzzle.clone()).cells)
    }
  },
});
Deno.test({
  name: "Create Puzzle creates a unique puzzle",
  fn(): void {
    const puzzle = createPuzzle("easy");
    if (typeof puzzle != "number") {
      assert(fillInRemaining(puzzle.resetUntriedNumbers(), true));
    }
  },
});
Deno.test({
   name: "Create puzzle creates a medium puzzle",
   fn(): void {
      const puzzle = createPuzzle("medium");
      if (typeof puzzle != "number") {
         const first = puzzle.resetUntriedNumbers();
         const second = puzzle.resetUntriedNumbers();
         mainSolver(first, "easy");
         assert(first.cells.includes("."));
         mainSolver(second, "medium");
         assert(!second.cells.includes("."));         
      }
   }
})
