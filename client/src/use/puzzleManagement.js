import {computed, ref } from "vue";

let sudokuObj = ref({});

export const setPuzzle = (obj) => {
  sudokuObj = obj;
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
