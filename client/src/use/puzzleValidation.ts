/* eslint-disable */
import { computed, ref, toRaw } from "vue";
import { Puzzle, Cell, Units, Unit } from "../types";

/* eslint-enable */

interface Ref<T> {
  value: T;
}

let sudokuObj = ref<Puzzle>(null);
let userId = ref<string>(null);
let socket: any;

export const setPuzzle = (obj: Ref<Puzzle>) => {
  sudokuObj = obj;
};

export const setId = (id: Ref<string>) => {
  userId = id;
};

export const setSocket = (socketToSet: any) => {
  socket = socketToSet;
};

const makeRows: Ref<Units> = computed(() => {
  let rows: Units = {};
  for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
    // Initialize row

    rows[`r${rowIndex}`] = {};

    for (let colIndex = 1; colIndex <= 9; colIndex++) {
      rows[`r${rowIndex}`][`r${rowIndex}c${colIndex}`] =
        sudokuObj.value[`r${rowIndex}c${colIndex}`];
    }
  }
  return rows;
});
const makeCols: Ref<Units> = computed(() => {
  let cols: Units = {};
  for (let colIndex = 1; colIndex <= 9; colIndex++) {
    // Initialize col
    cols[`c${colIndex}`] = {};
    for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
      cols[`c${colIndex}`][`r${rowIndex}c${colIndex}`] =
        sudokuObj.value[`r${rowIndex}c${colIndex}`];
    }
  }
  return cols;
});
const getSquare = (cell: Cell): string => {
  let s13 = [1, 2, 3];
  let s46 = [4, 5, 6];
  let s79 = [7, 8, 9];

  let square: number[] = [1, 2, 3];
  if (cell.address.r >= 1 && cell.address.r <= 3) {
    square = s13;
  }
  if (cell.address.r >= 4 && cell.address.r <= 6) {
    square = s46;
  }
  if (cell.address.r >= 7 && cell.address.r <= 9) {
    square = s79;
  }
  return `s${square[Math.floor((cell.address.c - 1) / 3)]}`;
};
const makeSquares: Ref<Units> = computed(() => {
  let squares: Units = {
    s1: {},
    s2: {},
    s3: {},
    s4: {},
    s5: {},
    s6: {},
    s7: {},
    s8: {},
    s9: {},
  };

  for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
    for (let colIndex = 1; colIndex <= 9; colIndex++) {
      squares[getSquare(sudokuObj.value[`r${rowIndex}c${colIndex}`])][
        `r${rowIndex}c${colIndex}`
      ] = sudokuObj.value[`r${rowIndex}c${colIndex}`];
    }
  }
  return squares;
});

const getPeers = (cell: Cell) => {
  let row: Unit, col: Unit, square: Unit;
  row = makeRows.value[`r${cell.address.r}`];
  col = makeCols.value[`c${cell.address.c}`];
  square = makeSquares.value[getSquare(cell)];

  return { row, col, square };
};

export const validateSquare = (cell: Cell) => {
  // Skip givens
  if (cell.given) {
    return cell;
  }
  const { row, col, square } = getPeers(cell);
  const peers = [
    ...Object.values(row),
    ...Object.values(col),
    ...Object.values(square),
  ];
  let valid = true;
  for (let cellIndex = 0; cellIndex < peers.length; cellIndex++) {
    // Skip the cell we're checking
    if (peers[cellIndex].address != cell.address) {
      if (peers[cellIndex].number == cell.number) {
        valid = false;
        cell.valid.value = false;
      }
    }
    // Stop at first invalid
    if (!valid) {
      break;
    }
  }
  // If valid is still valid, reset cell
  if (valid) {
    cell.valid.value = true;
  }
  return cell;
};

// Adapated from ../server/generator.ts

// Updates the candidates in each peer of a cell that has been updated
export const updatePeerCandidates = (cell: Cell) => {
  // Assemble peers
  const { row, col, square } = getPeers(cell);
  const peers: Cell[] = [
    ...Object.values(row),
    ...Object.values(col),
    ...Object.values(square),
  ];
  // Loop through peers
  peers.forEach((peer) => {
    // Only effect empty cells
    if (peer.number == ".") {
      // Update pencilMarks
      peer.pencilMarks[Number(cell.number) - 1] = false;
      // Send to server
      const pencilMarkUpdate = {
        address: peer.address,
        // Sending pencilMarks instead of pencilMark means that instead of toggling
        // This array will replace the previous
        pencilMarks: peer.pencilMarks,
        id: userId.value,
      };
      socket.send(
        JSON.stringify({
          pencilMarkUpdate,
        })
      );
    }
  });
};

export const firstPassCandidateCalculator = () => {
  const rows = makeRows.value;
  const cols = makeCols.value;
  const squares = makeSquares.value;

  for (const cellAddress in sudokuObj.value) {
    if (Object.prototype.hasOwnProperty.call(sudokuObj.value, cellAddress)) {
      sudokuObj.value[cellAddress].candidates = [];
      // Creates array of 9 false values, resets pencilmMarks
      sudokuObj.value[cellAddress].pencilMarks = Array.from(
        { length: 9 },
        () => false
      );
    }
  }

  for (let iteration = 0; iteration < 3; iteration++) {
    let units;
    switch (iteration) {
      case 0:
        units = rows;
        break;
      case 1:
        units = cols;
        break;
      case 2:
        units = squares;
        break;
    }
    // Update candidates for each cell
    for (const unitsAddress in units) {
      // if (units.hasOwnProperty(unitsAddress)) {
      const unit = units[unitsAddress];
      // Create an array of the numbers in the row

      // First, create an array of the values
      const rowNumbers = Object.values(units[unitsAddress])
        // Second, parse each value as a number
        .map((el: Cell) => Number(el.number))
        // Third, filter out any non numbers
        .filter((el) => !isNaN(el));

      // Create an array of numbers from 1 to 9
      let unseenNumbers = Array.from(Array(9), (_, i) => i + 1);
      // For each number in the row
      unseenNumbers = unseenNumbers.filter((number) => {
        // Return only the numbers not in the row
        return !rowNumbers.includes(number);
      });
      // For each non number in the row, add the unseenNumbers to the candidates array
      for (const cellAddress in unit) {
        if (unit[cellAddress].number == ".") {
          // If we're not on the first iteration of both the inner and outer loops
          // Get previous candidates of cell
          const previousCandidates =
            iteration == 0
              ? Array.from(Array(9), (_, i) => i + 1)
              : unit[cellAddress].candidates;
          // Reset candidates
          unit[cellAddress].candidates = [];
          unseenNumbers
            // Include only what previous candidates also has
            .filter((number) => {
              return previousCandidates.includes(number);
            })
            // Add each number to the candidates
            .forEach((number) => {
              unit[cellAddress].candidates.push(number);
            });
        }
      }
    }
  }
  // Loop over cells, apply candidates to pencilmarks
  for (const cellAddress in sudokuObj.value) {
    if (Object.prototype.hasOwnProperty.call(sudokuObj.value, cellAddress)) {
      // Update pencilmarks
      sudokuObj.value[cellAddress].candidates.forEach((candidate: number) => {
        sudokuObj.value[cellAddress].pencilMarks[candidate - 1] = true;
      });
      // Send to server
      const pencilMarkUpdate = {
        address: sudokuObj.value[cellAddress].address,
        // Sending pencilMarks instead of pencilMark means that instead of toggling
        // This array will replace the previous
        pencilMarks: sudokuObj.value[cellAddress].pencilMarks,
        id: userId.value,
      };
      socket.send(
        JSON.stringify({
          pencilMarkUpdate,
        })
      );
    }
  }
  return sudokuObj.value;
};
