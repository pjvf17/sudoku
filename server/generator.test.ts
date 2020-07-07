import { createBlankPuzzle, fillInRemaining } from "./generator.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { runBenchmarks, bench } from "https://deno.land/std/testing/bench.ts";



bench({
  name: "runs100ForIncrementX1e6",
  runs: 1000,
  func(b): void {
    b.start();
    fillInRemaining({ r: 1, c: 1 }, createBlankPuzzle(), []);
    b.stop();
  },
});

runBenchmarks()
