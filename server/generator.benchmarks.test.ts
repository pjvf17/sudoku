import {
  createBlankPuzzle,
  fillInRemaining,
  createEasyPuzzle,
  printSudokuToConsole,
} from "./generator.ts";
import { runBenchmarks, bench } from "https://deno.land/std/testing/bench.ts";

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
  func(b): void {
    b.start();
    const puzzle = createEasyPuzzle();
    b.stop();
  },
});

runBenchmarks();
