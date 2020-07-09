// generator.ts

// Validation framework

export const makeRows = (puzzle: any) => {
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
export const makeCols = (puzzle: any) => {
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

export const getSquare = (cell: any) => {
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

export const makeSquares = (puzzle: any) => {
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

export const validateCell = (
  cell: any,
  puzzle: any,
  { rows, cols, squares }: any,
  number: number
) => {
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
  let valid = true;
  valid =
    peers.findIndex((el: any) => {
      return el.number == number;
    }) == -1
      ? true
      : false;

  return valid;
};

/*
Most of the time, the following function isn't worth it. 
It's best use is for testing other, more targetted validation methods to make sure they work
*/

export const validatePuzzle = (puzzle: any) => {
  const rows = makeRows(puzzle);
  const cols = makeCols(puzzle);
  const squares = makeSquares(puzzle);
  // Assume valid
  let valid = true;
  for (const cellAddress in puzzle) {
    if (puzzle.hasOwnProperty(cellAddress)) {
      const cell = puzzle[cellAddress];

      // Most of this code is the same as in
      // validateCell

      let row = rows[`r${cell.address.r}`];
      let col = cols[`c${cell.address.c}`];
      let square = squares[getSquare(cell)];

      const peers: any = [
        ...Object.values(row),
        ...Object.values(col),
        ...Object.values(square),
      ];

      let valid = true;

      // The only difference in code is here
      valid =
        peers.findIndex((el: any) => {
          // This checks against cell address as well as number,
          // Instead of just number as in validateCell
          return el.number == cell.number && el.address != cell.address;
        }) == -1
          ? true
          : false;

      if (!valid) {
        // console.log(cell.address);
        return valid;
      }
    }
  }
  return valid;
};

// From https://stackoverflow.com/a/12646864
export const shuffleArray = (array: any) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Simply calls shuffle array on an array of numbers 1-9
export const createRandomOneNine = () => {
  return shuffleArray(Array.from(Array(9), (_, i) => i + 1));
};

// start with blank puzzle structure
export const createBlankPuzzle = () => {
  let puzzleString = "";
  let puzzle: any = {};
  for (let i = 0; i < 81; i++) {
    puzzleString = puzzleString.concat(".");
  }

  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    for (let colIndex = 0; colIndex < 9; colIndex++) {
      // console.log(rowIndex*9+colIndex)
      const cell = puzzleString.substr(rowIndex * 9 + colIndex, 1);
      puzzle[`r${rowIndex + 1}c${colIndex + 1}`] = {
        number: ".",
        given: false,
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
        valid: { value: true, reason: null },
        candidates: [],
        address: { r: rowIndex + 1, c: colIndex + 1 },
        untriedNumbers: createRandomOneNine(),
      };
    }
  }

  return puzzle;
};

export const parsePuzzle = (puzzleToPorse: any) => {
  let puzzle: any = {};

  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    for (let colIndex = 0; colIndex < 9; colIndex++) {
      // console.log(rowIndex*9+colIndex)
      const cell = puzzleToPorse.substr(rowIndex * 9 + colIndex, 1);
      let formattedCell;
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
          given: false,
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
          valid: { value: true, reason: null },
          candidates: [],
          address: { r: rowIndex + 1, c: colIndex + 1 },
          untriedNumbers: createRandomOneNine(),
        };
      }
      // Convert to rncn notation indexed from 1
      puzzle[`r${rowIndex + 1}c${colIndex + 1}`] = formattedCell;
    }
  }
  return puzzle;
};

// Fill in diagonal squares
export const generateSquare = (square: any, sIndex: number, puzzle: any) => {
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

export const generateDiagonalSquares = (puzzle: any) => {
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

export const printSudokuToConsole = (puzzleToPrint: any) => {
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
        stringToPrint = "";
      }
    }
  }
  // await Deno.stdout.write(new TextEncoder().encode("\n\n"));
};

export const printSudokuToConsoleFormatted = async (puzzleToPrint: any) => {
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

export const puzzleToString = (puzzle: any) => {
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

// console.log(puzzleToString(initalPuzzle));

export const fillInRemaining: any = (
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
  while (address.c < 10 && address.r < 10) {
    count++;
    if (count == 600) {
      puzzle = createBlankPuzzle();
      // puzzle = generateDiagonalSquares(puzzle);
      rows = makeRows(puzzle);
      squares = makeSquares(puzzle);
      count = 0;
      address = { r: 1, c: 1 };
      addressesComplete = [];
    }
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

        const valid = validateCell(
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
          } else {
            return puzzle;
          }
        }
      }
    } else {
      // No numbers left
      // Reset numbers
      puzzle[
        `r${address.r}c${address.c}`
      ].untriedNumbers = createRandomOneNine();
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

/* 

The following function loops through a puzzle.
On each iteration, it updates candidates for each cell
Then it checks if any unit (row, col, square) has only one spot for a given number to go
Then it checks for any cell that only has one candidate
Only stopping when no changes have been made in a given iteration

*/

export const singleCandidateAndPositionSolver = (puzzle: any) => {
  const rows = makeRows(puzzle);
  const cols = makeCols(puzzle);
  const squares = makeSquares(puzzle);

  let iterations = 0;
  let changes = 0;

  do {
    changes = 0;

    for (let iteration = 0; iteration < 3; iteration++) {
      let units: any;
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
        if (units.hasOwnProperty(unitAddress)) {
          const unit = units[unitAddress];

          // Create an array of the numbers in the row

          // First, create an array of the values
          const rowNumbers = Object.values(units[unitAddress])
            // Second, parse each value as a number
            .map((el: any) => parseInt(el.number))
            // Third, filter out any non numbers
            .filter((el: any) => !isNaN(el));

          // Create an array of numbers from 1 to 9
          let unseenNumbers = Array.from(Array(9), (_, i) => i + 1);
          // For each number in the row
          unseenNumbers = unseenNumbers.filter((number: any) => {
            // Return only the numbers not in the row
            return !rowNumbers.includes(number);
          });
          // For each non number in the row, add the unseenNumbers to the candidates Set
          for (const cellAddress in unit) {
            if (unit.hasOwnProperty(cellAddress)) {
              if (unit[cellAddress].number == ".") {
                // If we're not on the first iteration of both the inner and outer loops
                // Get previous candidates of cell
                const previousCandidates =
                  iterations == 0 && iteration == 0
                    ? Array.from(Array(9), (_, i) => i + 1)
                    : unit[cellAddress].candidates;
                // Reset candidates
                unit[cellAddress].candidates = [];
                unseenNumbers
                  // Include only what previous candidates also has
                  .filter((number: any) => {
                    return previousCandidates.includes(number);
                  })
                  // Add each number to the candidates
                  .forEach((number: any) => {
                    unit[cellAddress].candidates.push(number);
                  });
              }
            }
          }
        }
      }
      // Find cells where there is only one spot in a unit for a given number
      // And update them
      for (const unitAddress in units) {
        if (units.hasOwnProperty(unitAddress)) {
          // Get array of candidate arrays in unit
          const unitCandidates = Object.values(units[unitAddress])
            // Return candidates of each cell
            .flatMap((el: any) => el.candidates);

          const filteredUnitCandidates = unitCandidates.filter((el: any) => {
            // Returns true if there is only one instance of a given number
            return unitCandidates.indexOf(el) == unitCandidates.lastIndexOf(el);
          });
          try {
            if (filteredUnitCandidates.length) {
              // console.log(filteredUnitCandidates);

              filteredUnitCandidates.forEach((candidate: any) => {
                let cell: any = Object.values(units[unitAddress]).find(
                  (el: any) => {
                    return el.candidates.includes(candidate);
                  }
                );
                if (cell) {
                  puzzle[
                    `r${cell.address.r}c${cell.address.c}`
                  ].number = candidate;
                  changes++;
                  // Reset candidates
                  puzzle[
                    `r${cell.address.r}c${cell.address.c}`
                  ].candidates = [];
                }
              });
            }
          } catch (err) {
            console.error(err);
            break;
          }
        }
      }
    }
    // Update any cells where there is only one candidate
    for (const cellAddress in puzzle) {
      if (
        puzzle.hasOwnProperty(cellAddress) &&
        puzzle[cellAddress].number == "."
      ) {
        const cell = puzzle[cellAddress];
        // If only one candidate
        if (cell.candidates.length == 1) {
          // Set number to candidate
          cell.number = cell.candidates.pop();
          changes++;
        }
      }
    }
    iterations++;
  } while (changes > 0);
  return puzzle;
};

// Simple function to create a filled puzzle
export const createFilledPuzzle = () => {
  return fillInRemaining({ r: 1, c: 1 }, createBlankPuzzle(), []);
};

// From https://www.w3schools.com/JS/js_random.asp
function getRndInteger(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export const createEasyPuzzle = () => {
  // First get a filled puzzle
  let puzzle = createFilledPuzzle();

  /* 
  Remove a random cell (that's not the middle?)
  Remove its counterpart for symmetry  
  Call the easiest solver
  If the easiest solver can't solve the resulting puzzle, backtrack
  Otherwise go back to beginning
  */

  // Array to hold removed numbers
  let removed: any = [];
  // Iterations, so we can reset if needed
  let iterations:number = 0;

  const length = getRndInteger(21, 25);

  while (removed.length < length) {
    iterations++;
    // console.log(iterations);
    if (iterations == 40) {
      iterations = 0;
      // Reset puzzle
      puzzle = createFilledPuzzle();
      // Reset removed
      removed = [];
    }

    let firstAddress = getRndInteger(1,9);
    let secondAddress = getRndInteger(1,9);
    // Search for number that hasn't been removed
    // No need to check counterpart because we remove in pairs
    // So if one is removed, the other already is too
    while (puzzle[`r${firstAddress}c${secondAddress}`].number == ".") {
      firstAddress = getRndInteger(1,9);
      secondAddress = getRndInteger(1,9);
    }

    // Save number (for backtracking)
    const firstNumber = { ...puzzle[`r${firstAddress}c${secondAddress}`] }
      .number;
    const secondNumber = { ...puzzle[`r${10 - firstAddress}c${10 - secondAddress}`] }
      .number;

    // Remove number
    puzzle[`r${firstAddress}c${secondAddress}`].number = ".";
    // Remove counterpart
    puzzle[`r${10 - firstAddress}c${10 - secondAddress}`].number = ".";
    // Add numbers to removed
    removed.push({ firstAddress, secondAddress, firstNumber, secondNumber });

    // Attempt to solve
    const attemptedPuzzle = singleCandidateAndPositionSolver(
      JSON.parse(JSON.stringify(puzzle))
    );
    // Validate
    const valid = validatePuzzle(attemptedPuzzle);
    // If invalid
    if (!valid) {
      // Backtrack
      // Reset first number
      puzzle[`r${firstAddress}c${secondAddress}`].number = firstNumber;
      // Reset counterpart
      puzzle[`r${10 - firstAddress}c${10 - secondAddress}`].number = secondNumber;
      // Remove from removed
      removed.pop();
    }
  }

  return puzzle
};

export const testSpeed = async (iterations: number) => {
  const startTimer = performance.now();
  let count = 0;
  while (count < iterations) {
    // Start from first
    let newPuzzle = fillInRemaining({ r: 1, c: 1 }, createBlankPuzzle(), []);
    await printSudokuToConsoleFormatted(newPuzzle);
    // console.log(validatePuzzle(newPuzzle));
    // printSudokuToConsole(newPuzzle);
    count++;
    if (puzzleToString(newPuzzle).indexOf(".") != -1) {
      console.log(count);

      await printSudokuToConsoleFormatted(newPuzzle);
      return;
    }
    // console.log(count);
  }
  const endTimer = performance.now();
  const result = (endTimer - startTimer) / iterations;
  console.log(`On average, it took ${result}ms per puzzle`);
};

// const easyPuzzle = createEasyPuzzle();
// await printSudokuToConsoleFormatted(easyPuzzle);
// await printSudokuToConsoleFormatted(singleCandidateAndPositionSolver(easyPuzzle));
// testSpeed(1);
