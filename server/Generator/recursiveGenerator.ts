// recursiveGenerator.ts

/** A recursive version of some generator.ts functions
 * Changes from generator.ts:
 * Puzzles are redefined as arrays, creating less overhead
 * parsePuzzle does not exist, instead Puzzle is a class with a constructor
*/

import { Address } from "../../client/src/types.d.ts";
import { createRandomOneNine } from "../generator.ts";

export class Puzzle {
  // Numbers or "."
  cells: (number | string)[] = [];
  givens: boolean[] = [];
  untriedNumbers: number[][] = [];
  constructor(puzzleToParse?: string) {
    const newPuzzle = puzzleToParse == undefined;
    if (puzzleToParse == undefined) {
      puzzleToParse =
        ".................................................................................";
    }
    if (puzzleToParse.length != 81) {
      throw new Error("puzzle length is != 81");
    }
    for (let i = 0; i < 81; i++) {
      const char = puzzleToParse.charAt(i);
      const charAsNumber = parseInt(char);
      if (
        char != "." &&
        (isNaN(charAsNumber) || charAsNumber < 1 || charAsNumber > 9)
      ) {
        throw new Error("puzzleToParse contains invalid digit");
      }
      this.cells[i] = isNaN(charAsNumber) ? char : charAsNumber;
      this.givens[i] = char != ".";
      // If it's an empty cell, create untriedNumbers array
      if (!this.givens[i]) {
        // If puzzle was passed in, create random array, otherwise create fixed array
        this.untriedNumbers[i] = newPuzzle
          ? createRandomOneNine()
          : [1, 2, 3, 4, 5, 6, 7, 8, 9];
      }
    }
    for (let i = 0; i < 81; i++) {
      if (this.cells[i] != ".") {
        updatePeers(i, this, this.cells[i] as number);
      }
    }
  }
  public clone(): Puzzle {
    const puzzle = new Puzzle();
    puzzle.cells = [...this.cells];
    for (let i = 0; i < 81; i++) {
      // Set given cells untriedNumbers to []
      if (this.givens[i]) {
        puzzle.untriedNumbers[i] = [];
      } else {
        puzzle.untriedNumbers[i] = this.untriedNumbers[i]?.slice();
      }
    }
    puzzle.givens = [...this.givens];
    return puzzle;
  }
}

/**
 *
 * @param address
 * @returns arr of length 9 containing the indices of all 9 cells in the row
 */
export const getRow = (address: Address): number[] => {
  const arr: number[] = [];
  for (let i = (address.r - 1) * 9, j = 0; i < (address.r) * 9; i++, j++) {
    arr[j] = i;
  }
  return arr;
};
/**
 *
 * @param address
 * @returns arr of length 9 containing the indices of all 9 cells in the column
 */
export const getCol = (address: Address): number[] => {
  const arr: number[] = [];
  for (
    let j = 0, i = j * 9 + (address.c - 1);
    j < 9;
    j++, i = j * 9 + (address.c - 1)
  ) {
    arr[j] = i;
  }
  return arr;
};

/**
 *
 * @param address
 * @returns arr of length 9 containing the indices of all 9 cells in the square
 */
export const getSquare = (address: Address): number[] => {
  const arr: number[] = [];
  const startCol = address.c - ((address.c - 1) % 3);
  const startRow = address.r - ((address.r - 1) % 3);
  let col = startCol;
  let row = startRow;
  let j = (startRow - 1) * 9 + (startCol - 1);
  for (let i = 0; i < 9; i++) {
    arr[i] = j;
    if (i % 3 == 2) {
      row++;
      j = (row - 1) * 9 + (startCol - 1);
      col = startCol;
    } else {
      col++;
      j = (row - 1) * 9 + (col - 1);
    }
  }
  return arr;
};

/**
 * Returns an array of units
 *
 * @returns Array of arrays of indexes of cells
 */
export function makeUnits(): number[][] {
  const arr: number[][] = [];
  const address = { r: 1, c: 1 };
  // Rows
  for (let i = 0; i < 9; i++) {
    address.r = i + 1;
    arr[i] = getRow(address);
  }
  // Columns
  address.r = 1;
  for (let i = 0; i < 9; i++) {
    address.c = i + 1;
    // i + 9 because we've already written to the first 9 indices
    arr[i + 9] = getCol(address);
  }
  // Squares
  for (let i = 0; i < 63; i += 3) {
    // If not at first index, and at % 9 == 0
    // We're at the beginning of a row
    // Too not add the same square, jump down 2 rows, by adding 18
    if (i != 0 && i % 9 == 0) {
      i += 18;
    }
    // Not gonna bother updating the address, this is less complicated
    arr.push(getSquare(convertToAddress(i)));
  }
  return arr;
}

/**
 *
 * @param index
 * @returns address version of the index
 */
export const convertToAddress = (index: number): Address => {
  return {
    r: (Math.floor(index / 9)) + 1,
    c: (index % 9) + 1,
  };
};

/**
 *
 * @param address
 * @returns index version of the address
 */
export const convertToIndex = (address: Address): number => {
  return (address.r - 1) * 9 + (address.c - 1);
};

/**
 *
 * @param address
 * @param puzzle
 * @param number
 * @returns true if no peers have number, false otherwise
 */
export const validateCell = (
  address: Address,
  puzzle: Puzzle,
  number: number,
): boolean => {
  const peers = getPeers(address);
  return peers.findIndex((peer) => {
    return puzzle.cells[peer] == number;
  }) == -1;
};

/**
 * Returns indexes of peers of cell, not including the cell itself
 *
 * @param address Address of cell to get peers of
 * @returns
 */
export const getPeers = (address: Address): number[] => {
  // Make set to remove duplicate
  const arr = Array.from(
    new Set([
      ...getCol(address),
      ...getRow(address),
      ...getSquare(address),
    ]),
  );
  const index = convertToIndex(address);
  arr.splice(arr.indexOf(index), 1);
  return arr;
};

/**
 *
 * @returns Number of solutions if checkSolutionCount == true
 * @returns Filled in puzzle if false
 */
export function fillInRemaining(
  puzzleToCheck: Puzzle,
  checkSolutionCount: boolean,
): boolean;
/**
  * @returns puzzle
  */
export function fillInRemaining(puzzleToCheck: Puzzle): Puzzle;
export function fillInRemaining(): Puzzle;
export function fillInRemaining(
  puzzleToCheck?: Puzzle,
  checkSolutionCount?: boolean,
): Puzzle | boolean {
  let puzzle: Puzzle;
  if (checkSolutionCount) {
    if (puzzleToCheck == undefined) {
      throw new Error(
        "checkSolutionCount is true but puzzleToCheck is undefined",
      );
    }
    // If checking, create two puzzles, cloned from original
    // Untried numbers will be in ascending order for one, descending for the other:
    const puzzle1 = puzzleToCheck.clone();
    setUntriedNumbers(puzzle1, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const puzzle2 = puzzleToCheck.clone();
    setUntriedNumbers(puzzle2, [9, 8, 7, 6, 5, 4, 3, 2, 1]);
    const puzzle1Search = search(puzzle1);
    const puzzle2Search = search(puzzle2);
    if (typeof puzzle1Search == "number") {
      throw new Error("puzzle1 failed");
    }
    if (typeof puzzle2Search == "number") {
      throw new Error("puzzle2 failed");
    }
    // Test if all cells are the same
    // https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
    let i = puzzle1Search.cells.length;
    while (i--) {
      if (puzzle1Search.cells[i] !== puzzle2Search.cells[i]) return false;
    }

    return true;
  } else {
    puzzle = puzzleToCheck == undefined ? new Puzzle() : puzzleToCheck;
    const ret = search(puzzle, undefined, puzzleToCheck !== undefined);
    if (typeof ret == "number") {
      throw new Error("search returned a number");
    }
    return ret;
  }
}

export function setUntriedNumbers(puzzle: Puzzle, arr: number[]) {
  for (let i = 0; i < puzzle.cells.length; i++) {
    if (puzzle.cells[i] == ".") {
      puzzle.untriedNumbers[i] = [...arr];
    }
  }
  for (let i = 0; i < 81; i++) {
    if (puzzle.cells[i] != ".") {
      updatePeers(i, puzzle, puzzle.cells[i] as number);
    }
  }
}

/**
 * Finds values to put in cells
 *
 * @param puzzle
 */
export function search(puzzle: Puzzle, mostRecent?: number, useUnits = true): (Puzzle | number) {
  // Return puzzle if full
  if (!puzzle.cells.includes(".")) {
    return puzzle;
  }

  // Update the peers of the most recent cell update
  if (mostRecent) {
    if (puzzle.cells[mostRecent] == ".") {
      throw new Error("mostRecent cell not filled");
    }
    // Can be sure that the cell contains a number, now
    updatePeers(mostRecent, puzzle, puzzle.cells[mostRecent] as number);
  }

  let ret: (Puzzle | number) = eliminate(puzzle, useUnits);
  // If eliminate fails, puzzle in current config not solvable
  if (ret == -1) {
    return -1;
  }
  // Return puzzle if full
  if (!puzzle.cells.includes(".")) {
    return puzzle;
  }

  // Select cell with fewest possibilities
  // Find first empty cell
  let shortestIndex = puzzle.cells.findIndex((cell) => cell == ".");

  for (let i = 0; i < puzzle.untriedNumbers.length; i++) {
    // Skip filled
    if (puzzle.cells[i] != ".") {
      continue;
    }
    // If current untried numbers arr length is less than previous, update
    shortestIndex = puzzle.untriedNumbers[i].length <
        puzzle.untriedNumbers[shortestIndex].length
      ? i
      : shortestIndex;
  }
  do {
    // If no more untried numbers, return -1
    if (puzzle.untriedNumbers[shortestIndex].length == 0) {
      return -1;
    }
    let number = puzzle.untriedNumbers[shortestIndex].pop() as number;
    while (assign(shortestIndex.valueOf(), puzzle, number) == -1) {
      // If no more untried numbers, return -1
      if (puzzle.untriedNumbers[shortestIndex].length == 0) {
        return -1;
      }
      number = puzzle.untriedNumbers[shortestIndex].pop() as number;
    }
    // If here, assign() was successful
    ret = search(puzzle.clone(), shortestIndex, useUnits);
  } while (ret == -1);
  return ret;
}

/**
 * Attempts to assign a number to a cell, and updates all peers
 *
 * @param index: Cell index to assign number to
 * @param number: Number to assign
 * @param puzzle: Puzzle to change
 * @returns -1 if unsuccessful, 0 on success
 */
export function assign(index: number, puzzle: Puzzle, number: number): number {
  const address = convertToAddress(index);
  const valid = validateCell(address, puzzle, number);
  // Return -1 if invalid
  if (!valid) {
    return -1;
  }
  // Update cell
  puzzle.cells[index] = number;
  // Return 0 on success
  return 0;
}

/**
 * Removes all instances of number from peers of cell at index
 *
 * @param index index of cell
 * @param puzzle
 * @param number number to remove from peers
 */
export function updatePeers(index: number, puzzle: Puzzle, number: number) {
  const peers = getPeers(convertToAddress(index));
  // Update peers
  for (const i of peers) {
    // Skip over filled cells
    if (puzzle.cells[i] != ".") {
      continue;
    }
    index = puzzle.untriedNumbers[i].indexOf(number);
    // If untriedNumbers contains number, remove it
    if (index != -1) {
      puzzle.untriedNumbers[i].splice(index, 1);
    }
  }
}

/**
 * Solver function that uses standard sudoku rules to solve
 * Locates any cells with untriedNumbers.length = 1 and assigns that number and updates peers
 * 
 *
 * @param puzzle
 * @param hiddenSingles
 * 
 * Determines whether to check for hidden singles (speeds up everything but raw puzzle creation, which it slows)
 * 
 * @returns status code, 0 on success, -1 on failure (meaning encountered a spot that means this puzzle can't be solved as is)
 */
export function eliminate(puzzle: Puzzle, hiddenSingles:boolean): number {
  let length: number;
  let ret: number;
  let number: number;
  let changes: number;
  let index: number;
  let units:number[][] = [];
  if (hiddenSingles) {
    units = makeUnits();
  }
  do {
    changes = 0;
    // Loop through all cells and checks how many numbers can go in each cell
    // If the answer is 1, update it
    for (let i = 0; i < 81; i++) {
      // skip filled
      if (puzzle.cells[i] != ".") {
        continue;
      }
      length = puzzle.untriedNumbers[i].length;
      if (length == 1) {
        number = puzzle.untriedNumbers[i].pop() as number;
        ret = assign(i, puzzle, number);
        // If unable to assign, return -1
        if (ret == -1) {
          return ret;
        }
        updatePeers(i, puzzle, number);
        // TODO can we loop over just peers?
        changes++;
      }
      if (length == 0) {
        return -1;
      }
    }
    // Return puzzle if full
    if (!puzzle.cells.includes(".")) {
      return 0;
    }
    // If not checking units
    if (!hiddenSingles) {
      continue;
    }
    // Loop through rows, columns, and squares
    for (const unit of units) {
      // Loop through numbers
      for (let i = 0; i < 9; i++) {
        const containsNumber = [];
        // Get untriedNumbers for indices
        const untried = unit.map((i) => puzzle.untriedNumbers[i]);
        // Get cells for indices
        const cells = unit.map((i) => puzzle.cells[i]);
        // Skip if number is contained in a cell
        if (cells.includes(i + 1)) {
          continue;
        }
        for (let j = 0; j < 9; j++) {
          // Skipping filled
          if (cells[j] != ".") {
            continue;
          }
          if (untried[j].includes(i + 1)) {
            // Add to indices that contain number
            containsNumber.push(j);
          }
        }
        if (containsNumber.length == 1) {
          index = unit[containsNumber[0]];
          number = i + 1;
          ret = assign(index, puzzle, number);
          // If unable to assign, return -1
          if (ret == -1) {
            return ret;
          }
          updatePeers(index, puzzle, number);
          // TODO can we loop over just peers?
          changes++;
        }
      }
    }
    // Return puzzle if full
    if (!puzzle.cells.includes(".")) {
      return 0;
    }
  } while (changes);
  // If no errors encountered, return 0 on success
  return 0;
}

export function hasUniqueSolution(puzzle: Puzzle): boolean {
  const ret = fillInRemaining(puzzle, true);
  return ret;
}

// fillInRemaining(new Puzzle());
// console.log(iterations);
// iterations = 0;
// const testPuzzle1 =
//   ".76...3.9...639.2....7..61....9.6.54....8....68.3.4....91..3....2.867...5.8...73.";

// const puzzle = new Puzzle(testPuzzle1);
// // setUntriedNumbers(puzzle, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// fillInRemaining(puzzle);
// console.log(iterations);
// iterations = 0;
