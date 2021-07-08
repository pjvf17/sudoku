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
  createPuzzle as createPuzzleNew
} from "../Generator/creator.ts"
import {
  bench,
  runBenchmarks,
} from "https://deno.land/std@0.100.0/testing/bench.ts";
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
//   runs: 200,
//   func(b): void {
//     b.start();
//     const puzzle = createPuzzle("easy");
//     b.stop();
//   },
// });
// 2021-07-06 5:44pm : 29.65ms 200 run

await bench({
  name: "Create easy puzzle new",
  runs: 1000,
  func(b): void {
    b.start();
    const puzzle = createPuzzleNew("easy");
    b.stop();
  },
});
// 2021-07-06 5:44pm : 39.9ms 200 run
// 6:05pm With doing 15 pairs first: 29.3
// 7-7 2:53 reset at 100: 22.46ms 200 run
// 5:39 moved check unique: 16.1ms
// With upgraded resetUntriedNumbers: 1000 runs avg: 15.1ms
// Old: 1000 runs avg: 14.39ms

// await bench({
//   name: "Create medium puzzle",
//   runs: 20,
//   func(b): void {
//     b.start();
//     const puzzle = createPuzzle("medium");
//     b.stop();
//   },
// });
// 2021-07-06 6:00pm : 1823.66ms 200 run

await bench({
  name: "Create medium puzzle new",
  runs: 20,
  func(b): void {
    b.start();
    const puzzle = createPuzzleNew("medium");
    b.stop();
  },
});
// 2021-07-06 6:00pm : 1894.6ms 200 run
// 6:05pm With doing 25 pairs first: 1705ms 20 run
// 07-07 2:43pm slight change in ifs, 1745.5ms 20 run (close enough that it's probably the same as above)
// 2:50 resetting at 400: 1906.8ms 20
// Resetting at 800: 2438.7ms
// at 200: 1495.7ms, think this might be a fluke
// at 100 with 15 pairs: 2409.8ms 20
// 7:42 With moved check unique: 1247.9ms

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

// Medium iterations: 

/* 
1696
    754
    160
    1826
    81
    25
    423
    288
    410
    473
    51
    267
    462
    452
    232
    224
    485
    2481
    179
    618
    683
    295
    45
    95
    156
    454
    2190
    355
    311
    49
    1109
    620
    517
    156
    525
    35
    461
    1389
    816
    686
    2021
    71
    1093
    161
    3085
    210
    253
    138
    513
    25
    653
    229
    1200
    226
    301
    966
    402
    88
    164
    2271
    583
    403
    91
    252
    953
    478
    536
    698
    227
    1124
    1103
    381
    1279
    1898
    76
    626
    1397
    77
    1635
    119
    50
    712
    1256
    946
    41
    37
    448
    135
    297
    137
    1110
    1410
    506
    86
    431
    1654
    306
    47
    1284
    1256
    500
    73
    636
    797
    89
    1754
    291
    86
    921
    286
    106
    654
    86
    413
    60
    230
    1409
    1562
    577
    62
    83
    325
    859
    726
    150
    2203
    326
    4620
    809
    831
    112
    43
    249
    369
    319
    1245
    351
    819
    542
    802
    307
    367
    1621
    599
    819
    272
    779
    1781
    289
    445
    207
    71
    340
    101
    211
    614
    102
    1193
    1142
    152
    92
    264
    289
    58
    1125
    65
    863
    27
    164
    81
    226
    495
    131
    340
    343
    631
    909
    787
    155
    959
    2444
    425
    116
    286
    554
    117
    286
    1083
    2134
    230
    730
    1481
    510
    758
    199
    212
    3776
    867
    3462
*/