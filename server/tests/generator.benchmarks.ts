import {
  createPuzzle,
  fillInRemaining,
  hasUniqueSolution,
} from "../generator.ts";
import { fillInRemaining as recursiveFillInRemaining } from "../recursiveGenerator.ts";

import {
  bench,
  runBenchmarks,
} from "https://deno.land/std@0.96.0/testing/bench.ts";
import { Difficulty, Puzzle } from "../../client/src/types.d.ts";

await bench({
  name: "Fill in remaining",
  runs: 10000,
  func(b): void {
    b.start();
    fillInRemaining();
    b.stop();
  },
});

/** 19/05/21 10:43:58
 * Fill in remaning – 10000 runs avg: 12.6372ms
 * Recursive fill in remaining – 10000 runs avg: 4.868ms
 * Or 2.59597371 times faster, or > 2 and a half times faster
 */

await bench({
  name: "Recursive fill in remaining",
  runs: 10000,
  func(b): void {
    b.start();
    recursiveFillInRemaining();
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

// await bench({
//   name: "Create easy puzzle",
//   runs: 20,
//   func(b): void {
//     b.start();
//     const puzzle = createPuzzle("easy");
//     b.stop();
//   },
// });

// await bench({
//   name: "Create medium puzzle",
//   runs: 20,
//   func(b): void {
//     b.start();
//     const puzzle = createPuzzle("medium");
//     b.stop();
//   },
// });

// await bench({
//   name: "Create xwing required puzzle",
//   runs: 5,
//   func(b): void {
//     b.start();
//     createPuzzle("hard", ["xwing"]);
//     b.stop();
//   },
// });

// With reset at 100. And Secondary backtrack, 20 runs: 2313.7ms
// With reset at 100. No secondary backtrack, 20 runs: 3919.8ms
// With reset at 100. Shuffled address arary, secondary backtrack, 20 runs: 1481.7ms;
// With reset at 100. Shuffled address arary, secondary backtrack, 20 runs: 2023ms;
// With reset at 100. Shuffled address arary, secondary backtrack, 20 runs: 1335.6ms;
// With reset at 100. Shuffled address arary, secondary backtrack, 100 runs: 1768.62ms;
// With triedConfigruations at 100. Secondary backtrack, 100 runs, no reset: 10234.28ms;
// With triedConfigruations at 100. Secondary backtrack, 100 runs, reset at 200: 2490.42ms;
// With triedConfigruations at 100. No secondary backtrack, 100 runs, reset at 200:  2339.88ms;
// With triedConfigruations at 100. No secondary backtrack, 100 runs, reset at 50: 2122.58ms

// await bench({
//   name: "check uniqueness",
//   runs: 100,
//   func(b): void {
//     const puzzles:Puzzle[] = [];
//     let difficulty:Difficulty = "easy";
//     for (let i = 0; i < 3; i++) {
//       puzzles[i] = createPuzzle(difficulty);
//       if (i == 1) {
//         difficulty = "medium";
//       }
//       if (i == 2) {
//         difficulty = "hard";
//       }
//     }
//     b.start();
//     for (let i = 0; i < puzzles.length; i++) {
//       hasUniqueSolution(puzzles[i]);
//     }
//     b.stop()
//   }
// })
// 17/05/21 1:32pm 612.24ms 100 runs

runBenchmarks();
