// solvers.ts
import { Address, change, solver } from "../../client/src/types.d.ts";
import {
  assign,
  convertToAddress,
  getCol,
  getRow,
  makeUnits,
  Puzzle,
  SolverObj,
  updatePeers,
  updateSpecificPeers,
} from "./recursiveGenerator.ts";

/* A collection of functions that represent human solving methods
Each solver will:
Accept the puzzle as the first paramater
Accept an optional input of units
Keep track of changes in order to make hint creation simple
Returns changes */

/* TODO add check somewhere to verify that no empty cell has
0 candidates */

/**
 *
 * @param puzzle
 * @returns changes, or -1 on error
 */
export function nakedSingleSolver(
  puzzle: Puzzle,
  units?: number[][],
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
  } while (changeCount);
  return changes;
}

/**
 * Looks only for hidden singles, if it finds a cell but it's
 * a naked single, it doesn't update it. This is done to allow
 * hint creation to be straightforward (i.e, if the next move is
 * a naked single, it's correctly marked as such)
 *
 * @param puzzle
 * @returns changes or -1 on error
 */
export function hiddenSingleSolver(
  puzzle: Puzzle,
  units?: number[][],
): change[] | number {
  if (units == undefined) {
    units = makeUnits();
  }
  let index: number,
    number: number,
    ret: number,
    changeCount: number;
  const changes: change[] = [];
  const type: solver = "hiddenSingle";

  // While there are changes
  do {
    changeCount = 0;
    // Much code taken from elimante() in recursiveGenerator.ts
    // Loop through rows, columns, and squares
    for (const unit of units) {
      // Loop through numbers
      for (let i = 0; i < 9; i++) {
        const containsNumber = [];
        // Get untriedNumbers for each index in unit
        const untried = unit.map((i) => puzzle.untriedNumbers[i]);
        // Get cells for each index in unit
        const cells = unit.map((i) => puzzle.cells[i]);
        // Skip if number is contained in any of the cells in the unit
        if (cells.includes(i + 1)) {
          continue;
        }
        for (let j = 0; j < 9; j++) {
          // Skipping filled
          if (cells[j] != ".") {
            continue;
          }
          // Check if current index contains number
          if (untried[j].includes(i + 1)) {
            // Add to list of indices that can take this number
            containsNumber.push(j);
          }
        }
        // If theres only one cell that can take this number
        if (containsNumber.length == 1) {
          index = unit[containsNumber[0]];
          // If cell number of candidates is == 1,
          // It's a naked single, not hidden
          if (puzzle.untriedNumbers[index].length == 1) continue;
          number = i + 1;
          ret = assign(index, puzzle, number);
          // If unable to assign, return -1
          if (ret == -1) {
            return ret;
          }
          updatePeers(index, puzzle, number);
          // Save change
          changes.push({
            address: [convertToAddress(index)],
            number,
            type,
          });
          changeCount++;
        }
      }
    }
  } while (changeCount);
  return changes;
}

// TODO Naked Pair Solver

// TODO Hidden Pair Solver
// TODO Naked Triple Solver
// TODO Hidden Triple Solver
// TODO Naked Quad Solver
// TODO Hidden Quad Solver

// As defined at http://hodoku.sourceforge.net/en/tech_intersections.php#lc1

export function pointingSolver(
  puzzle: Puzzle,
  units?: number[][],
): change[] | number {
  if (units == undefined) {
    units = makeUnits();
  }
  let address: Address[],
    // Successful pointing unit to update
    unit: number[],
    changeCount: number;
  const changes: change[] = [];
  const type: solver = "pointing";

  // While there are changes
  do {
    changeCount = 0;
    // Loop through squares (units indices 18-26)
    for (let i = 18; i <= 26; i++) {
      // Loop through numbers from 1-9
      for (let number = 1; number <= 9; number++) {
        // Filter cells by if they have number as a candidate
        const filteredCellIndices = units[i].filter((cellIndex) => {
          // Return true if cell is empty and contains number as candidate
          return puzzle.cells[cellIndex] == "." &&
            puzzle.untriedNumbers[cellIndex].includes(number);
        });
        // If length > 3, guaranteed not to have pointing candidates
        if (filteredCellIndices.length <= 3) {
          /**
           * Three situations:
           * 1. Cells are in a row, 2 or 3, seperated by 1
           * 2. Cells are in a col, 2 or 3, separated by 9
           * 3. Cells are not in a row or col, no pointing candidates
           */
          // Check if cells are in a row
          if (
            filteredCellIndices[1] == filteredCellIndices[0] + 1 &&
            /* True if there are only 2 cells, or if the third cell index is second
            cell index + 1 */
            (filteredCellIndices.length == 2 ||
              filteredCellIndices[2] == filteredCellIndices[1] + 1)
          ) {
            // Get row and update candidates
            unit = getRow(convertToAddress(filteredCellIndices[0]));
            // Remove indices of pointing candidates
            unit = unit.filter((index) => !filteredCellIndices.includes(index));

            // Save change
            address = [
              convertToAddress(filteredCellIndices[0]),
              convertToAddress(filteredCellIndices[1]),
            ];
            if (filteredCellIndices.length == 3) {
              address.push(convertToAddress(filteredCellIndices[2]));
            }
            changes.push({
              address,
              number,
              type,
            });
            if (updateSpecificPeers(puzzle, unit, number)) changeCount++;
          } // Check if cells are in a col
          else if (
            filteredCellIndices[1] == filteredCellIndices[0] + 9 &&
            /* True if there are only 2 cells, or if the third cell index is second
            cell index + 9 */
            (filteredCellIndices.length == 2 ||
              filteredCellIndices[2] == filteredCellIndices[1] + 9)
          ) {
            // Get row and update candidates
            unit = getCol(convertToAddress(filteredCellIndices[0]));
            // Remove indices of pointing candidates
            unit = unit.filter((index) => !filteredCellIndices.includes(index));

            // Save change
            address = [
              convertToAddress(filteredCellIndices[0]),
              convertToAddress(filteredCellIndices[1]),
            ];
            // If third cell, add
            if (filteredCellIndices.length == 3) {
              address.push(convertToAddress(filteredCellIndices[2]));
            }
            changes.push({
              address,
              number,
              type,
            });
            if (updateSpecificPeers(puzzle, unit, number)) changeCount++;
          }
        }
      }
    }
  } while (changeCount);
  return changes;
}

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

// As defined at https://www.sudokuoftheday.com/techniques/double-pairs/
// TODO Double Pairs Solver



// As defined at https://www.sudokuoftheday.com/techniques/multiple-lines/
// TODO Multiple Lines Solver

// Used to easily call solver functions from creator.ts
export const solverObj: SolverObj = {
  nakedSingleSolver,
  hiddenSingleSolver,
  pointingSolver,
};
