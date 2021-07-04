// solvers.ts
import { Address, change, solver } from "../../client/src/types.d.ts";
import {
  assign,
  convertToAddress,
  convertToIndex,
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
            if (updateSpecificPeers(puzzle, unit, number)) {
              changeCount++;
              changes.push({
                address,
                number,
                type,
              });
            }
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

            if (updateSpecificPeers(puzzle, unit, number)) {
              changeCount++;
              changes.push({
                address,
                number,
                type,
              });
            }
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
export function doublePairsSolver(
  puzzle: Puzzle,
  units?: number[][],
): change[] | number {
  if (units == undefined) {
    units = makeUnits();
  }
  let address: Address[],
    // Holds potential pairs to check, indexed by number (- 1)
    rowCandidates: Address[][][] = [[], [], [], [], [], [], [], [], []],
    colCandidates: Address[][][] = [[], [], [], [], [], [], [], [], []],
    changeCount: number;
  const changes: change[] = [];
  const type: solver = "doublePairs";

  // While there are changes
  do {
    changeCount = 0;
    rowCandidates = [[], [], [], [], [], [], [], [], []];
    colCandidates = [[], [], [], [], [], [], [], [], []];
    /**
     * Loop through squares (units indices 18-26)
     * Search squares that have only 2 locations for a certain number possible, which are both in the same row or col
     * Store them in candidates array at index associated with number
     *
     * Second loop: loop through candidates array by index (number), find a pair of addresses that satisfy double pairs
    */
    for (let i = 18; i <= 26; i++) {
      // Loop through numbers from 1-9
      for (let number = 1; number <= 9; number++) {
        // Filter cells by if they have number as a candidate
        const filteredCellIndices = units[i].filter((cellIndex) => {
          // Return true if cell is empty and contains number as candidate
          return puzzle.cells[cellIndex] == "." &&
            puzzle.untriedNumbers[cellIndex].includes(number);
        });
        // If length > 2, guaranteed not to work for double pairs
        if (filteredCellIndices.length <= 2) {
          /**
           * Three situations:
           * 1. Two cells are in a row, seperated by no more than 2
           * 2. Two cells are in a col, separated by 9 or 18
           * 3. Cells are not in a row or col, no double pairs
           */
          // Check if cells are in a row
          if (
            filteredCellIndices[1] - filteredCellIndices[0] <= 2
          ) {
            address = [
              convertToAddress(filteredCellIndices[0]),
              convertToAddress(filteredCellIndices[1]),
            ];
            rowCandidates[number - 1].push(address);
          } // Check if cells are in a col
          else if (
            filteredCellIndices[1] == filteredCellIndices[0] + 9 ||
            filteredCellIndices[1] == filteredCellIndices[0] + 18
          ) {
            address = [
              convertToAddress(filteredCellIndices[0]),
              convertToAddress(filteredCellIndices[1]),
            ];
            colCandidates[number - 1].push(address);
          }
        }
      }
    }
    let c1: number;
    let r1: number;
    let c2: number;
    let r2: number;
    let peers: number[];
    let rowCandidatesArr: Address[][];
    let colCandidatesArr: Address[][];
    // Second loop: loop through candidates array by index (number), find a pair of addresses that satisfy double pairs
    for (let number = 1; number <= 9; number++) {
      rowCandidatesArr = rowCandidates[number - 1];
      for (let i = 0; i < rowCandidatesArr.length; i++) {
        const element = rowCandidatesArr[i];
        // Look for another set of addresses with the same columns
        c1 = element[0].c;
        c2 = element[1].c;
        let pair: Address[][];
        for (let j = i + 1; j < rowCandidatesArr.length; j++) {
          if (
            rowCandidatesArr[j][0].c == c1 && rowCandidatesArr[j][1].c == c2
          ) {
            pair = [element, rowCandidatesArr[j]];
            // Update puzzle
            peers = [...getCol(element[0]), ...getCol(element[1])];
            r1 = element[0].r;
            r2 = rowCandidatesArr[j][0].r;
            peers = peers.filter((index) =>
              !(convertToAddress(index).r == r1 ||
                convertToAddress(index).r == r2)
            );
            if (updateSpecificPeers(puzzle, peers, number)) {
              changeCount++;
              changes.push({
                address: pair,
                number,
                type,
              });
            }
            break;
          }
        }
      }
      colCandidatesArr = colCandidates[number - 1];
      for (let i = 0; i < colCandidatesArr.length; i++) {
        const element = colCandidatesArr[i];
        // Look for another set of addresses with the same rows
        r1 = element[0].r;
        r2 = element[1].r;
        let pair: Address[][];
        for (let j = i + 1; j < colCandidatesArr.length; j++) {
          if (
            colCandidatesArr[j][0].r == r1 && colCandidatesArr[j][1].r == r2
          ) {
            pair = [element, colCandidatesArr[j]];
            // Update puzzle
            peers = [...getRow(element[0]), ...getRow(element[1])];
            c1 = element[0].c;
            c2 = colCandidatesArr[j][0].c;
            peers = peers.filter((index) =>
              !(convertToAddress(index).c == c1 ||
                convertToAddress(index).c == c2)
            );
            if (updateSpecificPeers(puzzle, peers, number)) {
              changeCount++;
              changes.push({
                address: pair,
                number,
                type,
              });
            }
            break;
          }
        }
      }
    }
  } while (changeCount);
  return changes;
}

// As defined at https://www.sudokuoftheday.com/techniques/multiple-lines/
// TODO Multiple Lines Solver
export function multipleLinesSolver(
  puzzle: Puzzle,
  units?: number[][],
): change[] | number {
  if (units == undefined) {
    units = makeUnits();
  }
  let address: Address[],
    // Holds potential pairs to check, indexed by number (- 1)
    rowCandidates: Address[][][] = [[], [], [], [], [], [], [], [], []],
    colCandidates: Address[][][] = [[], [], [], [], [], [], [], [], []],
    // Holds 3 booleans for whether a specific row in a square has candidates for a certain number
    r: boolean[],
    // Holds 3 booleans for whether a specific col in a square has candidates for a certain number
    c: boolean[],
    // Count of true values in and r and c respectively
    rNumTrue: number,
    cNumTrue: number,
    // index of first instance of a false value in r + c
    indexOfFalse: number,
    changeCount: number;
  const changes: change[] = [];
  const type: solver = "multipleLines";

  // While there are changes
  do {
    changeCount = 0;
    rowCandidates = [[], [], [], [], [], [], [], [], []];
    colCandidates = [[], [], [], [], [], [], [], [], []];
    /**
     * Loop through squares (units indices 18-26)
     * Search squares where candidates for a certain number are constrained to two rows or columns
     * Store them in candidates array at index associated with number
     *
     * Second loop: loop through candidates array by index (number), find a set of addresses that satisfy multiple lines
    */
    for (let i = 18; i <= 26; i++) {
      // Loop through numbers from 1-9
      for (let number = 1; number <= 9; number++) {
        // Filter cells by if they have number as a candidate
        const filteredCellIndices = units[i].filter((cellIndex) => {
          // Return true if cell is empty and contains number as candidate
          return puzzle.cells[cellIndex] == "." &&
            puzzle.untriedNumbers[cellIndex].includes(number);
        });
        r = [false, false, false];
        c = [false, false, false];
        // Set booleans
        for (const index of filteredCellIndices) {
          r[Math.floor(index / 9) % 3] = true;
          c[index % 3] = true;
        }
        /**
         * At least one boolean in r + c needs to be false
         * (there can't be a candidate in all rows and cols)
         * At least two booleans must be true in each of r and c
         *
         * 3 can be true in either of r and c, but not both
         *
         * The technique operates on whichever r or c has only 2 trues (can be both)
         */
        indexOfFalse = [...r, ...c].indexOf(true);
        rNumTrue = r.filter(Boolean).length;
        cNumTrue = c.filter(Boolean).length;
        // If there are no falses, or less than two trues in either c or r
        if (indexOfFalse == -1 || rNumTrue < 2 || cNumTrue < 2) {
          continue;
        }
        if (rNumTrue == 2) {
          // reset address
          address = [];
          filteredCellIndices.forEach((index) =>
            address.push(convertToAddress(index))
          );
          colCandidates[number - 1].push(address);
        }
        if (cNumTrue == 2) {
          // reset address
          address = [];
          filteredCellIndices.forEach((index) =>
            address.push(convertToAddress(index))
          );
          rowCandidates[number - 1].push(address);
        }
      }
    }
    let c1: number;
    let r1: number;
    let c2: number;
    let r2: number;
    let peers: number[];
    let rowCandidatesArr: Address[][];
    let colCandidatesArr: Address[][];
    let candidates: Address[];
    for (let number = 1; number <= 9; number++) {
      rowCandidatesArr = rowCandidates[number - 1];
      for (let i = 0; i < rowCandidatesArr.length; i++) {
        // Sort candidates by column
        candidates = rowCandidatesArr[i].sort((a, b) => {
          if (a.c < b.c) return -1;
          if (a.c > b.c) return 1;
          return 0;
        });
        // First element's column and last elements column will be different
        // This ensure we get both columns even if there are > 2 addresses
        c1 = candidates[0].c;
        c2 = candidates[candidates.length - 1].c;
        if (c1 == c2) {
          throw new Error("multiple lines solver: c1 and c2 are the same");
        }
        // Look for another set of addresses with the same columns
        let set: Address[][];
        for (let j = i + 1; j < rowCandidatesArr.length; j++) {
          const secondCandidates = rowCandidatesArr[j].sort((a, b) => {
            if (a.c < b.c) return -1;
            if (a.c > b.c) return 1;
            return 0;
          });
          if (
            secondCandidates[0].c == c1 &&
            secondCandidates[secondCandidates.length - 1].c == c2
          ) {
            set = [candidates, secondCandidates];
            // Update puzzle
            peers = [
              ...getCol(candidates[0]),
              ...getCol(candidates[candidates.length - 1]),
            ];
            const setIndices = [...candidates, ...secondCandidates].map((el) =>
              convertToIndex(el)
            );
            peers = peers.filter((index) => !setIndices.includes(index));
            if (updateSpecificPeers(puzzle, peers, number)) {
              changeCount++;
              changes.push({
                address: set,
                number,
                type,
              });
            }
            break;
          }
        }
      }
      colCandidatesArr = colCandidates[number - 1];
      for (let i = 0; i < colCandidatesArr.length; i++) {
        // Sort candidates by rows
        candidates = colCandidatesArr[i].sort((a, b) => {
          if (a.r < b.r) return -1;
          if (a.r > b.r) return 1;
          return 0;
        });
        // First element's row and last elements row will be different
        // This ensure we get both rows even if there are > 2 addresses
        r1 = candidates[0].r;
        r2 = candidates[candidates.length - 1].r;
        if (r1 == r2) {
          throw new Error("multiple lines solver: r1 and r2 are the same");
        }
        // Look for another set of addresses with the same columns
        let set: Address[][];
        for (let j = i + 1; j < colCandidatesArr.length; j++) {
          const secondCandidates = colCandidatesArr[j].sort((a, b) => {
            if (a.r < b.r) return -1;
            if (a.r > b.r) return 1;
            return 0;
          });
          if (
            secondCandidates[0].r == r1 &&
            secondCandidates[secondCandidates.length - 1].r == r2
          ) {
            set = [candidates, secondCandidates];
            // Update puzzle
            peers = [
              ...getRow(candidates[0]),
              ...getRow(candidates[candidates.length - 1]),
            ];
            const setIndices = [...candidates, ...secondCandidates].map((el) =>
              convertToIndex(el)
            );
            peers = peers.filter((index) => !setIndices.includes(index));
            if (updateSpecificPeers(puzzle, peers, number)) {
              changeCount++;
              changes.push({
                address: set,
                number,
                type,
              });
            }
            break;
          }
        }
      }
    }
  } while (changeCount);
  return changes;
}

// Used to easily call solver functions from creator.ts
export const solverObj: SolverObj = {
  nakedSingleSolver,
  hiddenSingleSolver,
  pointingSolver,
  doublePairsSolver,
  multipleLinesSolver,
};