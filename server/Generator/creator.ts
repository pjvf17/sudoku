// creator.ts

import { solverObj } from "./solvers.ts";

import {
  change,
  Cost,
  Difficulty,
  Scores,
  scores,
  solver,
} from "../../client/src/types.d.ts";
import { makeUnits, Puzzle, solverFunction } from "./recursiveGenerator.ts";
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
  // Set diffIndex to max it could be
  let diffIndex: number = difficulties.length;
  // If a difficulty was supplied, reset diffIndex to that difficulty index
  if (difficulty != undefined) {
    diffIndex = difficulties.indexOf(difficulty);
  }
  // While changes are made, loop through functions
  for (const solverName in scores) {
    if (Object.prototype.hasOwnProperty.call(scores, solverName)) {
      const costObj = scores[solverName as solver];
      // Check if difficulty of solver is less than or equal to supplied difficulty
      if (difficulties.indexOf(costObj.difficulty) <= diffIndex) {
        // Call solver
        solverObj[solverName as solverFunction](puzzle);
      }
    }
  }
}
