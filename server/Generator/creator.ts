// creator.ts

import { solverObj } from "./solvers.ts";

import type {
  change,
  // Cost,
  Difficulty,
  // Scores,
  solver,
} from "../../client/src/types.d.ts";
import { scores } from "../../client/src/constants.ts";
import { makeUnits, printSudokuToConsole, Puzzle, solverFunction } from "./recursiveGenerator.ts";
import { difficulties } from "../../client/src/constants.ts";

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
 * @returns change if hint is true, nothing otherwise (just modifies the puzzle)
 */
export function mainSolver(puzzle: Puzzle, difficulty?: Difficulty): void;
export function mainSolver(
  puzzle: Puzzle,
  difficulty?: Difficulty,
  hint?: boolean,
): change;
export function mainSolver(
  puzzle: Puzzle,
  difficulty?: Difficulty,
  hint?: boolean,
): void | change {
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
  let changes = 0;
  // Set diffIndex to max it could be
  let diffIndex: number = difficulties.length;
  // If a difficulty was supplied, reset diffIndex to that difficulty index
  if (difficulty != undefined) {
    diffIndex = difficulties.indexOf(difficulty);
  }
  // While changes are made, loop through functions
  do {
    changes = 0;
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
              changes += ret.length;
            }
          }
        }
      }
    }
  } while (changes);
}
