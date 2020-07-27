let sudokuObj: any;
import { NumberUpdate, Puzzle, Users, Unit, PencilMarkUpdate, Cell, Units } from "../client/src/types.d.ts";


export const setSudokuObj = (obj: any) => {
  sudokuObj = obj;
};

export const makeRows = () => {
  let rows: any = {};
  for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
    rows[`r${rowIndex}`] = [];
    for (let colIndex = 1; colIndex <= 9; colIndex++) {
      rows[`r${rowIndex}`].push(sudokuObj.puzzle[`r${rowIndex}c${colIndex}`]);
    }
  }
  return rows;
};

export const makeCols = () => {
  let cols: any = {};
  for (let colIndex = 1; colIndex <= 9; colIndex++) {
    cols[`c${colIndex}`] = [];
    for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
      cols[`c${colIndex}`].push(sudokuObj.puzzle[`r${rowIndex}c${colIndex}`]);
    }
  }
  return cols;
};

export const getSquare = (cell: Cell) => {
  let s13 = [1, 2, 3];
  let s46 = [4, 5, 6];
  let s79 = [7, 8, 9];

  let square = s13;
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

export const makeSquares = () => {
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
};

export const getPeers = (cell: Cell) => {
  // Define the three units we're pulling from
  const rows: Units = makeRows();
  const cols: Units = makeCols();
  const squares: Units = makeSquares();
  let row: Unit,
    col: Unit,
    square: Unit;
  row = rows[`r${cell.address.r}`];
  col = cols[`c${cell.address.c}`];
  square = squares[getSquare(cell)];

  return { row, col, square };
};

export const validateSquare = (cell: Cell) => {
  // Skip givens
  if (cell.given) {
    return cell;
  }
  const { row, col, square } = getPeers(cell);
  const peers: Cell[] = [
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

export const updateNumber = (numberUpdate: NumberUpdate) => {
  const { address, number } = numberUpdate;
  // To return original state for undoing
  const originalState: NumberUpdate = {
    ...sudokuObj.puzzle[`r${address.r}c${address.c}`],
  };
  sudokuObj.puzzle[`r${address.r}c${address.c}`].number = number;
  validateSquare(sudokuObj.puzzle[`r${address.r}c${address.c}`]);

  // Return inverse of request

  // Update number to original
  numberUpdate.number = originalState.number;
  return numberUpdate;
};

// Updates the candidates in each peer of a cell that has been updated
export const updatePeerCandidates = (cell: Cell) => {
  // Assemble peers
  const { row, col, square } = getPeers(cell);
  const peers: Cell[] = [
    ...Object.values(row),
    ...Object.values(col),
    ...Object.values(square),
  ];
  // Array to return to updateNumber
  const pencilMarkUpdates: PencilMarkUpdate[] = [];
  // Loop through peers
  peers.forEach((peer) => {
    // Only effect empty cells and cells that have the number in pencilMarks
    if (peer.number == "." && peer.pencilMarks[Number(cell.number) - 1]) {
      // Keep original
      const originalState: boolean[] = [
        ...sudokuObj.value[`r${peer.address.r}c${peer.address.c}`]
          .pencilMarks,
      ];
      // Update pencilMarks on local
      peer.pencilMarks[Number(cell.number) - 1] = false;
      // Assemble Inverse Update
      const inverseUpdate: PencilMarkUpdate = {
        address: peer.address,
        // Sending pencilMarks instead of pencilMark means that instead of toggling
        // This array will replace the previous
        pencilMarks: originalState,
        id: this.validation.userId.value,
      };
      // Push update to array
      pencilMarkUpdates.push(inverseUpdate);
      // this.socket.send(
      //   JSON.stringify({
      //     pencilMarkUpdate,
      //   })
      // );
    }
  });
  return pencilMarkUpdates;
};

export const updatePencilMark = (pencilMarkUpdate: any) => {
  const { address, pencilMark, pencilMarks } = pencilMarkUpdate;
  // To return original state for undoing
  const originalState: any = [
    ...sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks,
  ];
  // If pencilMark not delete, and we don't have pencilMarks obj
  if (pencilMark != "delete" && !pencilMarks) {
    // Toggle mark
    sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks[
      pencilMark - 1
    ] = !sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks[
      pencilMark - 1
    ];
  } else if (pencilMarks) {
    sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks = pencilMarks;
  } else {
    sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
  }

  pencilMarkUpdate.pencilMarks = originalState;
  // Return the original state, for use in undoing
  return pencilMarkUpdate;
};
