// creator.ts

import { solverObj } from "./solvers.ts";

import type {
  Address,
  change,
  // Cost,
  Difficulty,
  Score,
  Scores,
  // Scores,
  solver,
} from "../../client/src/types.d.ts";
import { scores } from "../../client/src/constants.ts";
import {
  fillInRemaining,
  makeUnits,
  printSudokuToConsole,
  Puzzle,
  solverFunction,
} from "./recursiveGenerator.ts";
import { difficulties } from "../../client/src/constants.ts";
import { shuffleArray } from "../generator.ts";

/**
 * This file is devoted to the actual creation of an unsolved
 * sudoku puzzle.
 */

/**
 * Solves a puzzle using solvers from solvers.ts
 *
 * @param puzzle
 * @param difficulty If omitted, no cap on techniques
 * @param hint, determines if we are returning a hint or not
 * @returns cost and changes[]
 */

export function mainSolver(
  puzzle: Puzzle,
  difficulty?: Difficulty,
  hint?: boolean,
): { cost: number; changes: change[] } {
  /**
    * TODO implement hint handling. Requires deciding if I'm changing puzzle representation
    * outside of generators.
    */
  if (hint) {
    throw new Error("This function is not implemented yet");
  }
  // Make units once to pass them to solvers, instead of having solvers remake them everytime
  const units = makeUnits();
  // Return from solverFunction
  let ret: number | change[];
  // Tracks if we've made changes this iteration
  let changeCount = 0;
  let changes: change[] = [];
  // Set diffIndex to max it could be
  let diffIndex: number = difficulties.length;
  // Stores the overall cost of solving the puzzle
  let cost = 0;
  // Stores whether a particular solver has been used yet. Due to firstUse and subUses being seperate
  const solverUsed: { [K in solver]: boolean } = {
    nakedSingle: false,
    hiddenSingle: false,
    nakedPair: false,
    hiddenPair: false,
    doublePairs: false,
    multipleLines: false,
    nakedTriple: false,
    hiddenTriple: false,
    nakedQuad: false,
    hiddenQuad: false,
    pointing: false,
    claiming: false,
    xwing: false,
  };
  // If a difficulty was supplied, reset diffIndex to that difficulty index
  if (difficulty != undefined) {
    diffIndex = difficulties.indexOf(difficulty);
  }
  // While changes are made, loop through functions
  do {
    changeCount = 0;
    for (const solverName in scores) {
      if (Object.prototype.hasOwnProperty.call(scores, solverName)) {
        const costObj = scores[solverName as solver];
        // Check if difficulty of solver is less than or equal to supplied difficulty
        if (difficulties.indexOf(costObj.difficulty) <= diffIndex) {
          // TODO get rid of this once all solvers implemented
          // Check if solver is implemented
          if (
            typeof solverObj[`${solverName}Solver` as solverFunction] !=
              "function"
          ) {
            continue;
          }
          // Call solver
          ret = solverObj[`${solverName}Solver` as solverFunction](puzzle);
          if (ret == -1) {
            throw new Error(`Encountered -1 with ${solverName}`);
          } else {
            // Verify it's not a number
            if (typeof ret != "number") {
              if (ret.length) {
                changeCount += ret.length;
                changes.push(...ret);
                // Save cost
                // If solver already used
                if (solverUsed[solverName as solver]) {
                  cost += costObj.subUses * ret.length;
                } else {
                  cost += costObj.firstUse;
                  cost += costObj.subUses * (ret.length - 1);
                }
                // If there were changes don't go to the next solver
                // This is to prevent harder techniques from being used unless necesarry
                break;
              }
            }
          }
        }
      }
    }
  } while (changeCount);
  return { cost, changes };
}

/**
 *
 * @param difficulty Optional target difficulty, defaults to medium,
 */
export function createPuzzle(difficulty?: Difficulty): Puzzle | number {
  if (difficulty == undefined) {
    difficulty = "medium";
  }
  max = targetRanges[difficulty as Difficulty].max;
  min = targetRanges[difficulty as Difficulty].min;
  let ret: number | Puzzle;
  do {
    iterations = 0;
    ret = createPuzzleHelper(difficulty, fillInRemaining());
  } while (typeof ret == "number");
  return ret;
}

const targetRanges: { [K in Difficulty]: { min: number; max: number } } = {
  easy: { min: 4300, max: 5500 },
  medium: { min: 5800, max: 6900 },
  hard: { min: 6500, max: 9300 },
  insane: { min: 8300, max: 14000 },
  diabolical: { min: 11000, max: 25000 },
};

let iterations = 0;
let max: number, min: number;
let indexToRemove: number;
let ret: number | Puzzle;
/**
 * Private function for createPuzzle
 */
function createPuzzleHelper(
  difficulty: Difficulty,
  puzzle: Puzzle,
  untriedIndices?: boolean[],
): Puzzle | number {
  iterations++;

  if (untriedIndices == undefined) {
    untriedIndices = new Array(41).fill(false);
  }
  do {
    do {
      // Generate number from 0-40
      indexToRemove = Math.round(Math.random() * 40);
    } while (
      // Continue until encountering an untried index
      untriedIndices[indexToRemove]
    );
    untriedIndices[indexToRemove] = true;
    // Counterpart of above
    const counterpart = 80 - indexToRemove;
    // Remove cells
    puzzle.cells[indexToRemove] = ".";
    puzzle.cells[counterpart] = ".";
    if (iterations < 25) {
      ret = createPuzzleHelper(difficulty, puzzle.clone(), [...untriedIndices]);
    } else {
      // Test if solvable
      const testPuzzle = puzzle.resetUntriedNumbers();
      const { cost } = mainSolver(testPuzzle, difficulty);
      // If unsolved or cost > target's max
      if (
        testPuzzle.cells.includes(".") ||
        cost > max ||
        iterations >= 200
      ) {
        return -1;
      } else if (
        cost <= max &&
        cost >= min &&
        // Checks if unique
        fillInRemaining(puzzle.resetUntriedNumbers(), true)
      ) {
        return puzzle;
      } else {
        ret = createPuzzleHelper(difficulty, puzzle.clone(), [
          ...untriedIndices,
        ]);
      }
    }
  } while (ret == -1);
  return ret;
}
