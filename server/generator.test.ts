import {
  createBlankPuzzle,
  fillInRemaining,
  makeCols,
  makeRows,
  makeSquares,
  getSquare,
  puzzleToString,
  validatePuzzle,
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

await bench({
  name: "Fill in remaining benchmark",
  runs: 100,
  func(b): void {
    b.start();
    fillInRemaining({ r: 1, c: 1 }, createBlankPuzzle(), []);
    b.stop();
  },
});

runBenchmarks();

// setTimeout(()=>{
//     console.log("timeout!");
// }, 1000000000000000);
