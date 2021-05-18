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
  given: boolean[] = [];
  untriedNumbers: number[][] = [];
  constructor(puzzleToParse: string) {
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
      this.given[i] = char != ".";
      // If it's an empty cell, create untriedNumbers array
      if (!this.given[i]) {
        this.untriedNumbers[i] = createRandomOneNine();
      }
    }
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
  checkSolutionCount: boolean,
  puzzleToCheck: Puzzle,
): number | Puzzle;
/**
  * @returns puzzle
  */
export function fillInRemaining(): Puzzle;
export function fillInRemaining(
  checkSolutionCount?: boolean,
  puzzleToCheck?: Puzzle,
): Puzzle | number {
  let puzzle: Puzzle;
  if (checkSolutionCount) {
    if (puzzleToCheck == undefined) {
      throw new Error(
        "checkSolutionCount is true but puzzleToCheck is undefined",
      );
    }
    puzzle = puzzleToCheck;
  } else {
    puzzle = new Puzzle(
      ".................................................................................",
    );
  }
  let address: Address = { r: 1, c: 1 };
  let solutionCount = 0;
  return search(puzzle);
}

/**
 * Finds values to put in cells
 *
 * @param puzzle
 */
export function search(puzzle: Puzzle): (Puzzle | number) {
  // Return puzzle if full
  if (!puzzle.cells.includes(".")) {
    return puzzle;
  }
  // Select cell with fewest possibilities
  // https://stackoverflow.com/questions/18277774/whats-the-best-way-to-find-the-shortest-array-in-a-two-dimensional-array
  let shortestIndex = 0;

  puzzle.untriedNumbers.reduce(function (p, c, i) {
    shortestIndex = p.length > c.length ? i : shortestIndex;
    // If cell is filled, return previous
    if (puzzle.cells[shortestIndex] != ".") {
      return p;
    }
    return p.length > c.length ? c : p;
  }, { length: Infinity });
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
  return search(puzzle);
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
  const peers = getPeers(address);
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
  // Return 0 on success
  return 0;
}
