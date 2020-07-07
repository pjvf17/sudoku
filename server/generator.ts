// generator.ts

// Validation framework

const makeRows = (puzzle: any) => {
  let rows: any = {
    r1: {},
    r2: {},
    r3: {},
    r4: {},
    r5: {},
    r6: {},
    r7: {},
    r8: {},
    r9: {},
  };
  for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
    for (let colIndex = 1; colIndex <= 9; colIndex++) {
      rows[`r${rowIndex}`][`r${rowIndex}c${colIndex}`] =
        puzzle[`r${rowIndex}c${colIndex}`];
    }
  }
  return rows;
};
const makeCols = (puzzle: any) => {
  let cols: any = {
    c1: {},
    c2: {},
    c3: {},
    c4: {},
    c5: {},
    c6: {},
    c7: {},
    c8: {},
    c9: {},
  };
  for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
    for (let colIndex = 1; colIndex <= 9; colIndex++) {
      cols[`c${colIndex}`][`r${rowIndex}c${colIndex}`] =
        puzzle[`r${rowIndex}c${colIndex}`];
    }
  }
  return cols;
};

const getSquare = (cell: any) => {
  let s13 = [1, 2, 3];
  let s46 = [4, 5, 6];
  let s79 = [7, 8, 9];

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

const makeSquares = (puzzle: any) => {
  let squares: any = {
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
      squares[getSquare(puzzle[`r${rowIndex}c${colIndex}`])][
        `r${rowIndex}c${colIndex}`
      ] = puzzle[`r${rowIndex}c${colIndex}`];
    }
  }

  return squares;
};

const getPeers = (cell: any, puzzle: any, { rows, cols, squares }: any) => {
  // Define the three units we're pulling from
  // const rows = makeRows(puzzle);
  // const cols = makeCols(puzzle);
  // const squares = makeSquares(puzzle);
  let row,
    col,
    square = [];
  row = rows[`r${cell.address.r}`];
  col = cols[`c${cell.address.c}`];
  square = squares[getSquare(cell)];

  return { row, col, square };
};

const validateSquare = (
  cell: any,
  puzzle: any,
  { rows, cols, squares }: any,
  number: number
) => {
  // Skip givens
  // if (cell.given) {
  //   return cell;
  // }
  let row,
    col,
    square = [];
  row = rows[`r${cell.address.r}`];
  col = cols[`c${cell.address.c}`];
  square = squares[getSquare(cell)];
  const peers: any = [
    ...Object.values(row),
    ...Object.values(col),
    ...Object.values(square),
  ];
  // console.log("validateSquare");
  let valid = true;
  // peers.find(el=>{
  //   console.log(el);
  //   return el.number == number
  // })
  for (let cellIndex = 0; cellIndex < peers.length && valid; cellIndex++) {
    if (peers[cellIndex].number == number) {
      valid = false;
      // cell.valid.value = false;
    }
    // Stop at first invalid
    // if (!valid) {
    //   break;
    // }
  }
  // If valid is still valid, reset cell
  // if (valid) {
  //   cell.valid.value = true;
  // }
  return valid;
};

// From https://stackoverflow.com/a/12646864
const shuffleArray = (array: any) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// start with blank puzzle structure
const createBlankPuzzle = () => {
  let puzzleString = "";
  let puzzle: any = {};
  for (let i = 0; i < 81; i++) {
    puzzleString = puzzleString.concat(".");
  }
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    for (let colIndex = 0; colIndex < 9; colIndex++) {
      // console.log(rowIndex*9+colIndex)
      const cell = puzzleString.substr(rowIndex * 9 + colIndex, 1);
      let formattedCell = {};
      if (cell != ".") {
        // Make a cell object with given equal to true
        formattedCell = {
          number: cell,
          given: true,
          valid: {
            value: true,
            reason: null,
          },
          pencilMarks: [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
          candidates: [],
          address: { r: rowIndex + 1, c: colIndex + 1 },
        };
      } else {
        formattedCell = {
          number: ".",
          // given: false,
          // pencilMarks: [
          //   false,
          //   false,
          //   false,
          //   false,
          //   false,
          //   false,
          //   false,
          //   false,
          //   false,
          // ],
          valid: { value: true, reason: null },
          // candidates: [],
          address: { r: rowIndex + 1, c: colIndex + 1 },
          untriedNumbers: shuffleArray(Array.from(Array(9), (_, i) => i + 1)),
        };
      }
      // Convert to rncn notation indexed from 1
      puzzle[`r${rowIndex + 1}c${colIndex + 1}`] = formattedCell;
    }
  }

  return puzzle;
};

let initalPuzzle = createBlankPuzzle();

// Fill in diagonal squares
const generateSquare = (square: any, sIndex: number, puzzle: any) => {
  const numbers = Array.from(Array(9), (_, i) => i + 1);
  shuffleArray(numbers);
  for (const rncnAddress in square) {
    if (square.hasOwnProperty(rncnAddress)) {
      // Get reference to cell
      const cell = square[rncnAddress];
      // Get number, removing each number from the numbers array to make no repeats
      const number = numbers.pop();
      // Save number to cell
      cell.number = number;
      // Get address from cell
      const { address } = cell;
      // Save to puzzle
      puzzle[`r${address.r}c${address.c}`] = cell;

      square[rncnAddress] = cell;
    }
  }
  return puzzle;
  //   console.log("square ended: " + sIndex)
  //   console.log(square);
};

const generateDiagonalSquares = (puzzle: any) => {
  const squares = makeSquares(puzzle);
  // Make top right square
  puzzle = generateSquare(squares["s1"], 1, puzzle);
  // Make middle square
  puzzle = generateSquare(squares["s5"], 5, puzzle);
  // Make bottom left square
  puzzle = generateSquare(squares["s9"], 9, puzzle);
  // console.log(squares["s1"]);
  return puzzle;
};

initalPuzzle = generateDiagonalSquares(initalPuzzle);

const printSudokuToConsole = (puzzleToPrint: any) => {
  // await Deno.stdout.write(new TextEncoder().encode("\n\n"));
  let stringToPrint = "";
  for (const cellAddress in puzzleToPrint) {
    if (puzzleToPrint.hasOwnProperty(cellAddress)) {
      const cell = puzzleToPrint[cellAddress];
      stringToPrint = stringToPrint.concat(cell.number);
      // console.log(cell.number);
      // await Deno.stdout.write(new TextEncoder().encode(`  ${cell.number}  `));
      if (cell.address.c == 9) {
        // await Deno.stdout.write(new TextEncoder().encode("\n\n"));
        console.log(stringToPrint);
        stringToPrint = "";
      }
    }
  }
  // await Deno.stdout.write(new TextEncoder().encode("\n\n"));
};

const printSudokuToConsoleFormatted = async (puzzleToPrint: any) => {
  await Deno.stdout.write(new TextEncoder().encode("\n\n"));
  for (const cellAddress in puzzleToPrint) {
    if (puzzleToPrint.hasOwnProperty(cellAddress)) {
      const cell = puzzleToPrint[cellAddress];
      await Deno.stdout.write(new TextEncoder().encode(`  ${cell.number}  `));
      if (cell.address.c == 9) {
        await Deno.stdout.write(new TextEncoder().encode("\n\n"));
      }
    }
  }
  await Deno.stdout.write(new TextEncoder().encode("\n\n"));
};

const puzzleToString = (puzzle: any) => {
  let puzzleString: string = "";

  for (const cellAddress in puzzle) {
    if (puzzle.hasOwnProperty(cellAddress)) {
      const cell = puzzle[cellAddress];
      // console.log(cell.number);
      puzzleString = puzzleString.concat(cell.number);
    }
  }

  return puzzleString;
};

console.log(puzzleToString(initalPuzzle));

const fillInRemaining: any = (
  address: any,
  puzzle: any,
  addressesComplete: any
  // triedConfigurations: [string]
) => {
  address = JSON.parse(JSON.stringify(address));
  puzzle = JSON.parse(JSON.stringify(puzzle));
  addressesComplete = JSON.parse(JSON.stringify(addressesComplete));
  let rows = makeRows(puzzle);
  let squares = makeSquares(puzzle);
  // const cols = makeCols(puzzle);

  let count = 0;
  // WHile we're not at the last cell
  while (`r${address.r}c${address.c}` != "r9c9") {
    count++;
    if (count == 600) {
      puzzle = createBlankPuzzle();
      puzzle = generateDiagonalSquares(puzzle);
      rows = makeRows(puzzle);
      squares = makeSquares(puzzle);
      count = 0;
      address = { r: 1, c: 1 };
      addressesComplete = [];
    }
    // Loop till address not a number
    while (typeof puzzle[`r${address.r}c${address.c}`].number == "number") {
      // If not at end of columns
      if (address.c != 9) {
        // Increase column by one
        address.c++;
        // If not at end of rows
      } else if (address.r != 9) {
        // Reset column
        address.c = 1;
        // Increase row by one
        address.r++;
      } else {
        // At the end
        return puzzle;
      }
    }
    // We should now have an address of an unfilled number

    // Check to see if there are untriedNumbers
    if (puzzle[`r${address.r}c${address.c}`].untriedNumbers.length != 0) {
      // While there are numbers left
      while (puzzle[`r${address.r}c${address.c}`].untriedNumbers.length != 0) {
        // Try an untried number

        // Get number, removing each number from the untriedNumbers array to make no repeats
        const number = puzzle[
          `r${address.r}c${address.c}`
        ].untriedNumbers.pop();

        const cols = makeCols(puzzle);

        const valid = validateSquare(
          puzzle[`r${address.r}c${address.c}`],
          puzzle,
          { rows, cols, squares },
          number
        );

        //   console.log(puzzle[`r${address.r}c${address.c}`].number);
        // Validate cell
        // If invalid
        if (!valid) {
          // Reset number
          puzzle[`r${address.r}c${address.c}`].number = ".";
          puzzle[`r${address.r}c${address.c}`].valid.value = true;
          // Is valid
        } else {
          puzzle[`r${address.r}c${address.c}`].number = number;
          // Push to completed
          addressesComplete.push(Object.assign({}, address));

          // If not at end of columns
          if (address.c != 9) {
            // Increase column by one
            address.c++;
            break;
            // return fillInRemaining(address, puzzle, addressesComplete);
            // If not at end of rows
          } else if (address.r != 9) {
            // Reset column
            address.c = 1;
            // Increase row by one
            address.r++;
            break;
            // return fillInRemaining(address, puzzle, addressesComplete);
          }
        }
      }
    } else {
      // No numbers left
      // Reset numbers
      puzzle[`r${address.r}c${address.c}`].untriedNumbers = shuffleArray(
        Array.from(Array(9), (_, i) => i + 1)
      );
      if (addressesComplete.length) {
        // Remove last address from address complete array
        address = addressesComplete.pop();
        // Reset the number at the address we're backtracking to

        puzzle[`r${address.r}c${address.c}`].number = ".";
      } else {
        // If nothing to backtrack to, give up
        return puzzle;
      }
    }
  }

  return puzzle;
};

let iterations = 0;

const startTimer = performance.now();

const testSpeed = async (iterations: number) => {
  const startTimer = performance.now();
  let count = 0;
  while (count < iterations) {
    // Start from first
    let newPuzzle = fillInRemaining(
      { r: 1, c: 1 },
      generateDiagonalSquares(createBlankPuzzle()),
      []
    );
  printSudokuToConsole(newPuzzle);
    count++;
    if (puzzleToString(newPuzzle).indexOf(".") != -1) {
      console.log(count);

      await printSudokuToConsoleFormatted(newPuzzle);
      return;
    }
    console.log(count);
  }
  const endTimer = performance.now();
  const result = (endTimer - startTimer) / iterations;
  console.log(`On average, it took ${result}ms per puzzle`);
};

testSpeed(1000);

// Averaging 250-300ms

// console.log(puzzle);

// console.log(makeSquares());
