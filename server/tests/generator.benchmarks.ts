import {
  createPuzzle,
  fillInRemaining,
  hasUniqueSolution,
  parsePuzzle,
} from "../generator.ts";
import {
  fillInRemaining as recursiveFillInRemaining,
  hasUniqueSolution as recursiveHasUniqueSolution,
  Puzzle as RecursivePuzzle,
  search,
  setUntriedNumbers,
} from "../Generator/recursiveGenerator.ts";

import {
  bench,
  runBenchmarks,
} from "https://deno.land/std@0.96.0/testing/bench.ts";
import { Difficulty, Puzzle } from "../../client/src/types.d.ts";

// await bench({
//   name: "Fill in remaining",
//   runs: 500,
//   func(b): void {
//     b.start();
//     fillInRemaining();
//     b.stop();
//   },
// });

/** 19/05/21 10:43:58
 * Fill in remaning – 10000 runs avg: 12.6372ms
 * Recursive fill in remaining – 10000 runs avg: 4.868ms
 * Or 2.59597371 times faster, or > 2 and a half times faster
 */

await bench({
  name: "Recursive fill in remaining",
  runs: 1000,
  func(b): void {
    b.start();
    recursiveFillInRemaining();
    b.stop();
  },
  // With eliminate() implemented: 3.716ms 500 run avg
  // With eliminate() looping until 0 changes: 3.476ms 5000 run avg
  // With eliminate() checking units: 8.688ms 1000 run avg
  // With eliminate() not checking units for new puzzles: 3.538 1000 run avg
});

// await bench({
//   name: "Solve easy puzzle",
//   runs: 1000,
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
//   runs: 1000,
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

await bench({
  name: "filling, 6 spots unfilled",
  runs: 1000,
  func(b): void {
    const testPuzzle1 =
    "2861597433576482194197..5688219654376938741257453..8965682..974134597682972486351";
    const puzzle = new RecursivePuzzle(testPuzzle1);
    b.start();
    recursiveFillInRemaining(puzzle);
    b.stop();
  },
  // 0.44ms 100 run avg
  // With eliminate() implemented: 0.156ms 1000 run avg
  // With eliminate() looping until 0 changes: 0.108ms 1000 run avg
  // With eliminate() checking units: 0.18ms 1000 run avg
});

await bench({
  name: "filling, many spots unfilled, easier puzzle",
  runs: 1000,
  func(b): void {
    const testPuzzle1 =
    ".76...3.9...639.2....7..61....9.6.54....8....68.3.4....91..3....2.867...5.8...73.";
    
    const puzzle = new RecursivePuzzle(testPuzzle1);
    b.start();
    recursiveFillInRemaining(puzzle);
    b.stop();
  },
  // 138.44ms 50 run avg
  // With updatePeers in puzzle constructor: 4.16ms 100 run avg
  // With eliminate() implemented: 1.168ms 1000 run avg
  // With eliminate() looping until 0 changes: 0.686ms 1000 run avg
  // With eliminate() checking units: 0.472ms 1000 run avg
});
await bench({
  name: "filling, many spots unfilled",
  runs: 1000,
  func(b): void {
    const testPuzzle1 =
    ".8...9743.5...8.1..1.......8....5......8.4......3....6.......7..3.5...8.9724...5.";
    
    const puzzle = new RecursivePuzzle(testPuzzle1);
    b.start();
    recursiveFillInRemaining(puzzle);
    b.stop();
  },
  // 5356ms 5 run avg
  // With updatePeers in puzzle constructor: 14.62ms 100 run avg
  // With eliminate() implemented: 9.54ms 100 run avg
  // With eliminate() looping until 0 changes: 6.48ms 100 run avg
  // With eliminate() checking units: 1.308ms 1000 run avg
});

// await bench({
//   name: "Check uniqueness",
//   runs: 10,
//   func(b):void {
//     b.start();
//     // For the following two examples, see:
//     // https://www.sudokudragon.com/unsolvable.htm
//     const testPuzzle1 =
//       "2861597433576482194197..5688219654376938741257453..8965682..974134597682972486351";
//     hasUniqueSolution(parsePuzzle(testPuzzle1));
//     const testPuzzle2 =
//       ".8...9743.5...8.1..1.......8....5......8.4......3....6.......7..3.5...8.9724...5.";
//     // Assert that the puzzle is not unique
//     hasUniqueSolution(parsePuzzle(testPuzzle2));
//     // Took this puzzle from test above this, solving a puzzle with xwing
//     const testPuzzle3 =
//       "1......5...719.....6..85.....6...54..21.4.36..93...1.....93..1.....547...7......5";
//     hasUniqueSolution(parsePuzzle(testPuzzle3));
//     b.stop();
//   }
//   // 15450.8ms 10 run avg
// })


await bench({
  name: "Recursive – check uniqueness",
  runs: 1000,
  func(b): void {
    b.start();
    // For the following two examples, see:
    // https://www.sudokudragon.com/unsolvable.htm
    const testPuzzle1 =
      "2861597433576482194197..5688219654376938741257453..8965682..974134597682972486351";
    recursiveHasUniqueSolution(new RecursivePuzzle(testPuzzle1));
    const testPuzzle2 =
      ".8...9743.5...8.1..1.......8....5......8.4......3....6.......7..3.5...8.9724...5.";
    // Assert that the puzzle is not unique
    recursiveHasUniqueSolution(new RecursivePuzzle(testPuzzle2));
    // Took this puzzle from test above this, solving a puzzle with xwing
    const testPuzzle3 =
      "1......5...719.....6..85.....6...54..21.4.36..93...1.....93..1.....547...7......5";
    recursiveHasUniqueSolution(new RecursivePuzzle(testPuzzle3));
    b.stop();
  },
  // 63.88ms 100 runs avg
  // With eliminate() implemented: 18.32 100 run avg
  // With eliminate() looping until 0 changes: 12.92ms 100 run avg
  // With eliminate() checking units: 7.042ms 1000 run avg
});

runBenchmarks();
