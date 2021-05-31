// solvers.ts
import { Address } from "../../client/src/types.d.ts";
import {
  assign,
  convertToAddress,
  Puzzle,
  updatePeers,
} from "./recursiveGenerator.ts";

/* A collection of functions that represent human solving methods
Each solver will:
Accept the puzzle as the first paramater
Accept an optional input of units
Keep track of changes in order to make hint creation simple
Returns changes */

// List of solvers
type solver =
  | "nakedSingle"
  | "hiddenSingle"
  | "nakedPair"
  | "hiddenPair"
  | "nakedTriple"
  | "hiddenTriple"
  | "nakedQuad"
  | "hiddenQuad"
  | "pointing"
  | "claiming";

/**
 * address[]: Location(s) that the change effects
 *
 * number: which number is being effected
 *
 * type: which solver is used
 */
type change = {
  address: Address[];
  number: number;
  type: solver;
};

// TODO Naked Single Solver
/**
 *
 * @param puzzle
 * @returns changes, or -1 on error
 */
export function nakedSingleSolver(
  puzzle: Puzzle,
): change[] | number {
  const changes: change[] = [];
  const type: solver = "nakedSingle";
  let ret: number;
  // Keeps track of amount of changes per while loop iteration
  let changeCount;
  // While making changes 
  do {
    changeCount = 0;
    // Loop through all cells
    for (let i = 0; i < 81; i++) {
      // Skip over filled
      if (puzzle.cells[i] != ".") continue;
      // Check if there's only one candidate
      if (puzzle.untriedNumbers[i].length == 1) {
        const number = puzzle.untriedNumbers[i][0];
        // Assign
        ret = assign(i, puzzle, number);
        if (ret == -1) {
          return -1;
        }
        // Update peers
        updatePeers(i, puzzle, number);
        // Save change
        changes.push({
          address: [convertToAddress(i)],
          number,
          type,
        });
        changeCount++;
      }
    }
  } while (changeCount)
  return changes;
}

// TODO Hidden Single Solver
// TODO Naked Pair Solver
// TODO Hidden Pair Solver
// TODO Naked Triple Solver
// TODO Hidden Triple Solver
// TODO Naked Quad Solver
// TODO Hidden Quad Solver
// As defined at http://hodoku.sourceforge.net/en/tech_intersections.php#lc1
// TODO Pointing Solver
// As defined at http://hodoku.sourceforge.net/en/tech_intersections.php#lc2
// TODO Claiming Solver
/**
 * X-Wing specification: http://hodoku.sourceforge.net/en/tech_fishb.php#bf2
 * Take two rows (the base sets).
 * If you can find two columns, such that all candidates of a specific digit
 * (the fish digit) in both rows are containd in the columns (the cover sets),
 * all fish candidates in the columns that are not part of the rows can be eliminated.
 * The result is called an X-Wing in the rows.
 * If you exchange the terms rows and columns in the description above, you get an X-Wing in the columns.
*/
// TODO X-Wing Solver
