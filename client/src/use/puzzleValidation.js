/* eslint-disable */

import { computed, ref, toRaw } from "vue";
/* eslint-enable */

let sudokuObj = ref({});
let userId = ref({});
let socket;

export const setPuzzle = (obj) => {
  sudokuObj = obj;
};

export const setId = (id) => {
  userId = id;
};

export const setSocket = (socketToSet) => {
  socket = socketToSet;
};

const makeRows = computed(() => {
  let rows = {};
  for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
    rows[`r${rowIndex}`] = [];
    for (let colIndex = 1; colIndex <= 9; colIndex++) {
      rows[`r${rowIndex}`].push(
        sudokuObj.value.puzzle[`r${rowIndex}c${colIndex}`]
      );
    }
  }
  return rows;
});
const makeCols = computed(() => {
  let cols = {};
  for (let colIndex = 1; colIndex <= 9; colIndex++) {
    cols[`c${colIndex}`] = [];
    for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
      cols[`c${colIndex}`].push(
        sudokuObj.value.puzzle[`r${rowIndex}c${colIndex}`]
      );
    }
  }
  return cols;
});
const getSquare = (cell) => {
  let s13 = [1, 2, 3];
  let s46 = [4, 5, 6];
  let s79 = [7, 8, 9];

  let square;
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
const makeSquares = computed(() => {
  let squares = {
    s1: [],
    s2: [],
    s3: [],
    s4: [],
    s5: [],
    s6: [],
    s7: [],
    s8: [],
    s9: [],
  };

  for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
    for (let colIndex = 1; colIndex <= 9; colIndex++) {
      squares[
        getSquare(sudokuObj.value.puzzle[`r${rowIndex}c${colIndex}`])
      ].push(sudokuObj.value.puzzle[`r${rowIndex}c${colIndex}`]);
    }
  }
  return squares;
});

const getPeers = (cell) => {
  let row,
    col,
    square = [];
  row = makeRows.value[`r${cell.address.r}`];
  col = makeCols.value[`c${cell.address.c}`];
  square = makeSquares.value[getSquare(cell)];

  return { row, col, square };
};

export const validateSquare = (cell) => {
  // Skip givens
  if (cell.given) {
    return cell;
  }
  const { row, col, square } = getPeers(cell);
  const peers = [...row, ...col, ...square];
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

export const firstPassCandidateCalculator = () => {
  const rows = makeRows.value;
  const cols = makeCols.value;
  const squares = makeSquares.value;

  for (const cellAddress in sudokuObj.value.puzzle) {
    if (
      Object.prototype.hasOwnProperty.call(sudokuObj.value.puzzle, cellAddress)
    ) {
      sudokuObj.value.puzzle[cellAddress].candidates = [];
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
    for (const unitAddress in units) {
      // if (units.hasOwnProperty(unitAddress)) {
      const unit = units[unitAddress];
      // Create an array of the numbers in the row

      // First, create an array of the values
      const rowNumbers = Object.values(units[unitAddress])
        // Second, parse each value as a number
        .map((el) => parseInt(el.number))
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
        if (unit[cellAddress].number == "") {
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
  for (const cellAddress in sudokuObj.value.puzzle) {
    if (
      Object.prototype.hasOwnProperty.call(sudokuObj.value.puzzle, cellAddress)
    ) {
      // Creates array of 9 false values, resets pencilmMarks
      sudokuObj.value.puzzle[cellAddress].pencilMarks = Array.from(
        { length: 9 },
        () => false
      );
      sudokuObj.value.puzzle[cellAddress].candidates.forEach((candidate) => {
        sudokuObj.value.puzzle[cellAddress].pencilMarks[candidate - 1] = true;
        // Send to server
        const pencilMarkUpdate = {
          address: sudokuObj.value.puzzle[cellAddress].address,
          pencilMark: candidate,
          id: userId.value,
        };
        socket.send(
          JSON.stringify({
            pencilMarkUpdate,
          })
        );
      });
    }
  }
};
