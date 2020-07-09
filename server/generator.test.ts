import {
  createBlankPuzzle,
  fillInRemaining,
  makeCols,
  makeRows,
  makeSquares,
  getSquare,
  puzzleToString,
  validatePuzzle,
  singleCandidateAndPositionSolver,
  parsePuzzle,
  createEasyPuzzle,
} from "./generator.ts";
import { assertEquals, assert } from "https://deno.land/std/testing/asserts.ts";
import { runBenchmarks, bench } from "https://deno.land/std/testing/bench.ts";

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
  name: "Single candidate and position solver correctly solves easy puzzle",
  fn(): void {
    const solvedPuzzle =
      "276518349814639527359742618132976854947185263685324971791253486423867195568491732";
    const solvedBySolver = singleCandidateAndPositionSolver(
      parsePuzzle(easyPuzzleString)
    );
    assertEquals(puzzleToString(solvedBySolver), solvedPuzzle);
  },
});

Deno.test({
  name: "Easy Puzzle Generator creates puzzle solveable by single candidate and position techniques",
  fn():void {
    const easyPuzzle = createEasyPuzzle();
    const solvedPuzzle = singleCandidateAndPositionSolver(easyPuzzle);
    assert(validatePuzzle(solvedPuzzle));
  }
})

await bench({
  name: "Fill in remaining",
  runs: 100,
  func(b): void {
    b.start();
    fillInRemaining({ r: 1, c: 1 }, createBlankPuzzle(), []);
    b.stop();
  },
});

// await bench({
//   name: "Solve easy puzzle",
//   runs: 100,
//   func(b): void {
//     b.start();
//     singleCandidateAndPositionSolver(parsePuzzle(easyPuzzleString));
//     b.stop();
//   },
// });

await bench({
  name: "Create easy puzzle",
  runs: 100,
  func(b):void{
    b.start();
    createEasyPuzzle();
    b.stop();
  }
})



runBenchmarks();

// setTimeout(()=>{
//     console.log("timeout!");
// }, 1000000000000000);
