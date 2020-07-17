let sudokuObj: any;

export const setSudokuObj = (obj:any) => {
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

export const getSquare = (cell: any) => {
  let s13: any = [1, 2, 3];
  let s46: any = [4, 5, 6];
  let s79: any = [7, 8, 9];

  let square: any;
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
  let squares: any = {
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
      squares[getSquare(sudokuObj.puzzle[`r${rowIndex}c${colIndex}`])].push(
        sudokuObj.puzzle[`r${rowIndex}c${colIndex}`]
      );
    }
  }

  return squares;
};

export const getPeers = (cell: any) => {
  // Define the three units we're pulling from
  const rows: any = makeRows();
  const cols: any = makeCols();
  const squares: any = makeSquares();
  let row: any,
    col: any,
    square: any = [];
  row = rows[`r${cell.address.r}`];
  col = cols[`c${cell.address.c}`];
  square = squares[getSquare(cell)];

  return { row, col, square };
};

export const validateSquare = (cell: any) => {
  // Skip givens
  if (cell.given) {
    return cell;
  }
  const { row, col, square }: any = getPeers(cell);
  const peers: any = [...row, ...col, ...square];
  // console.log("validateSquare");
  for (let cellIndex = 0; cellIndex < peers.length; cellIndex++) {
    // Skip the cell we're checking
    if (peers[cellIndex].address != cell.address) {
      if (peers[cellIndex].number == cell.number) {
        cell.valid.value = false;
      }
    }
    // Stop at first invalid
    if (!cell.valid.value) {
      break;
    }
  }
  return cell;
};

export const updateNumber = ({ address, number }: any) => {
  // To return original state for undoing
  const originalState: any = {
    ...sudokuObj.puzzle[`r${address.r}c${address.c}`],
  };
  sudokuObj.puzzle[`r${address.r}c${address.c}`].number = number;
  validateSquare(sudokuObj.puzzle[`r${address.r}c${address.c}`]);
  return originalState.number;
};

export const updatePencilMark = (
  { address, pencilMark }: any,
  pencilMarks?: any
) => {
  // To return original state for undoing
  const originalState: any = [
    ...sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks,
  ];
  if (pencilMark != "delete") {
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
  // Return the original state, for use in undoing
  return originalState;
};
