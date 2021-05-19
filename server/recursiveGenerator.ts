// recursiveGenerator.ts

/** A recursive version of some generator.ts functions
 * Changes from generator.ts:
 * Puzzles are redefined as arrays, creating less overhead
 * parsePuzzle does not exist, instead Puzzle is a class with a constructor
*/

import { Address } from "../client/src/types.d.ts";
import { createRandomOneNine } from "./generator.ts";

export class Puzzle {
  // Numbers or "."
  cells: (number | string)[] = [];
  givens: boolean[] = [];
  untriedNumbers: number[][] = [];
  constructor(puzzleToParse?: string) {
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
      this.cells[i] = char;
      this.givens[i] = char != ".";
      // If it's an empty cell, create untriedNumbers array
      if (!this.givens[i]) {
        this.untriedNumbers[i] = createRandomOneNine();
      }
    }
  }
  public clone(): Puzzle {
    const puzzle = new Puzzle();
    puzzle.cells = [...this.cells];
    for (let i = 0; i < this.untriedNumbers.length; i++) {
      // Skip over givens (they don't have untriedNumbers)
      if (!this.givens[i]) {
        puzzle.untriedNumbers[i] = this.untriedNumbers[i].slice();
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
      if(puzzle1Search.cells[i] !== puzzle2Search.cells[i]) return false
    }

    return true;
  } else {
    puzzle = new Puzzle();
    const ret = search(puzzle);
    if (typeof ret == "number") {
      throw new Error("search returned a number");
    }
    return ret;
  }
}

export function setUntriedNumbers(puzzle: Puzzle, arr: number[]) {
  for (let i = 0; i < puzzle.cells.length; i++) {
    puzzle.untriedNumbers[i] = [...arr];
  }
}

/**
 * Finds values to put in cells
 *
 * @param puzzle
 */
export function search(puzzle: Puzzle, mostRecent?: number): (Puzzle | number) {
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
  let ret;
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
    ret = search(puzzle.clone(), shortestIndex);
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

export function hasUniqueSolution(puzzle: Puzzle): boolean {
  const ret = fillInRemaining(puzzle, true);
  return ret;
}
