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

export const validatePuzzle = (
  puzzle: any,
  rows?: any,
  cols?: any,
  squares?: any
) => {
  rows = rows ?? makeRows(puzzle);
  cols = cols ?? makeCols(puzzle);
  squares = squares ?? makeSquares(puzzle);
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
// Creates an array of numbers 1-9, sorted
export const createOneNine = () => {
  return Array.from(Array(9), (_, i) => i + 1);
};

// Simply calls shuffle array on an array of numbers 1-9
export const createRandomOneNine = () => {
  return shuffleArray(createOneNine());
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
  let stringToPrint = "\n\n";
  for (const cellAddress in puzzleToPrint) {
    if (puzzleToPrint.hasOwnProperty(cellAddress)) {
      const cell = puzzleToPrint[cellAddress];
      stringToPrint = stringToPrint.concat(cell.number);
      // console.log(cell.number);
      if (cell.address.c == 9) {
        console.log(stringToPrint);
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

export const firstPassCandidateCalculator = (puzzle: any) => {
  const rows = makeRows(puzzle);
  const cols = makeCols(puzzle);
  const squares = makeSquares(puzzle);
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
        // For each non number in the row, add the unseenNumbers to the candidates array
        for (const cellAddress in unit) {
          if (unit.hasOwnProperty(cellAddress)) {
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
  }
  return { puzzle, rows, cols, squares };
};

// Updates the candidates in each peer of a cell that has been updated
export const updatePeerCandidates = (
  puzzle: any,
  cell: any,
  number: number,
  { rows, cols, squares }: any
) => {
  // Assemble peers
  let row,
    col,
    square = [];
  // console.log(rows, cols, squares);
  row = rows[`r${cell.address.r}`];
  col = cols[`c${cell.address.c}`];
  square = squares[getSquare(cell)];
  const peers: any = [
    ...Object.values(row),
    ...Object.values(col),
    ...Object.values(square),
  ];

  // Loop through peers
  peers.forEach((peer: any) => {
    // Only effect empty cells
    if (peer.number == ".") {
      // Get index (if any) of number
      const numberIndex = peer.candidates.indexOf(number);
      // If candidates includes number
      if (numberIndex != -1) {
        // Remove that candidate
        peer.candidates.splice(numberIndex, 1);
      }
    }
  });

  return puzzle;
};

/* 
The following function loops through a puzzle.
On each iteration it checks if any unit (row, col, square) 
has only one spot for a given number to go.
Then it checks for any cell that only has one candidate
Only stopping when no changes have been made in a given iteration
*/
export const hiddenAndNakedSingleSolver = (
  puzzle: any,
  candidates?: boolean,
  rows?: any,
  cols?: any,
  squares?: any
) => {
  // If candidates have not been assigned, assign them. Othrewise don't overwrite
  if (!candidates) {
    const firstPass = firstPassCandidateCalculator(puzzle);
    puzzle = firstPass.puzzle;
    rows = firstPass.rows;
    cols = firstPass.cols;
    squares = firstPass.squares;
  } else {
    rows = rows ?? makeRows(puzzle);
    cols = cols ?? makeCols(puzzle);
    squares = squares ?? makeSquares(puzzle);
  }

  let iterations = 0;
  let changes = 0;
  // For calculating cost/difficulty, tracks number of uses total
  let totalChanges = 0;
  // Holds changes, especially useful for hint creation
  let changesArray: any = [];

  do {
    changes = 0;

    for (let iteration = 0; iteration < 3; iteration++) {
      let units: any;
      let unit: any;
      switch (iteration) {
        case 0:
          units = rows;
          unit = "row";
          break;
        case 1:
          units = cols;
          unit = "col";
          break;
        case 2:
          units = squares;
          unit = "square";
          break;
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
              // Search for number
              filteredUnitCandidates.forEach((candidate: any) => {
                // Get cell
                let cell: any = Object.values(units[unitAddress]).find(
                  (el: any) => {
                    return el.candidates.includes(candidate);
                  }
                );
                if (cell) {
                  // Update number
                  puzzle[
                    `r${cell.address.r}c${cell.address.c}`
                  ].number = candidate;
                  puzzle = updatePeerCandidates(puzzle, cell, candidate, {
                    rows,
                    cols,
                    squares,
                  });
                  // Update changes
                  changes++;

                  // Push to changesArray
                  changesArray.push({
                    hiddenSingle: {
                      address: { r: cell.address.r, c: cell.address.c },
                      number: candidate,
                      unit,
                    },
                  });
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
          puzzle = updatePeerCandidates(puzzle, cell, cell.number, {
            rows,
            cols,
            squares,
          });
          // Update changes
          changes++;
          // Push to changesArray
          changesArray.push({
            nakedSingle: {
              address: { r: cell.address.r, c: cell.address.c },
              number: cell.number,
            },
          });
        }
      }
    }
    totalChanges += changes;
    iterations++;
  } while (changes > 0);
  return {
    puzzle,
    cost: totalChanges * 100,
    rows,
    cols,
    squares,
    changesArray,
  };
};

// Simple function to create a filled puzzle
export const createFilledPuzzle = () => {
  return fillInRemaining({ r: 1, c: 1 }, createBlankPuzzle(), []);
};

export const nakedPairTest =
  ".6745..2.......61.98...6..5.96.....2.7.24..6.21.6..57.7..1.4.5664.....9..5..6248.";

export const hiddenPairTest =
  "8.12.9....7.....82462..8...59..81...128534967.4.92.518.8.1...3621.8...5....4..8.1";

// From https://www.w3schools.com/JS/js_random.asp
function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// As defined at http://hodoku.sourceforge.net/en/tech_intersections.php#lc1
export const pointingLockedCandidatesSolver = (
  puzzle: any,
  rows?: any,
  cols?: any,
  squares?: any
) => {
  // puzzle = firstPassCandidateCalculator(puzzle);
  rows = rows ?? makeRows(puzzle);
  cols = cols ?? makeCols(puzzle);
  squares = squares ?? makeSquares(puzzle);
  let changes = 0;
  let totalChanges = 0;
  // Holds changes, especially useful for hint creation
  let changesArray: any = [];
  // Look through each square
  do {
    changes = 0;
    for (const squareAddress in squares) {
      if (squares.hasOwnProperty(squareAddress)) {
        const square = squares[squareAddress];
        // Array form 1-9
        const oneNine = createOneNine();
        // Loop through each number
        oneNine.forEach((number: number) => {
          // Filter cells by those whose candidates contains the number
          const filteredCells: any = Object.values(square).filter(
            (cell: any) => {
              return cell.candidates.includes(number);
            }
          );
          // If cells
          if (filteredCells.length) {
            /*
            We loop through the filtered cells
            Starting off with a rowcol of "empty"
            When we discover a cell with either the same col, or the same row, as last cell
            We set rowcol to row, or col respectively
            We only do this if rowcol is "empty" meaning that no other thing has been set
            Or if it's the same (we're assigning rowcol to "col", when it was previously "col")
           */
            let rowcol: any = "empty";
            // Loop through filteredCells
            for (
              let cellIndex = 1;
              cellIndex < filteredCells.length;
              cellIndex++
            ) {
              const cell: any = filteredCells[cellIndex];
              if (cell.address.c == filteredCells[cellIndex - 1].address.c) {
                rowcol = rowcol == "empty" || rowcol == "col" ? "col" : null;
              } else if (
                cell.address.r == filteredCells[cellIndex - 1].address.r
              ) {
                rowcol = rowcol == "empty" || rowcol == "row" ? "row" : null;
              } else {
                rowcol = null;
              }
            }
            // If rowcol row or col, we have found pointing candidates
            if (rowcol == "row" || rowcol == "col") {
              // Get unit
              const unit =
                rowcol == "row"
                  ? // Only referencing the first element of filtered cells here
                    // Because each element should share the same row or col
                    rows[`r${filteredCells[0].address.r}`]
                  : cols[`c${filteredCells[0].address.c}`];

              // Get an array of addresses in rncn format to not change
              // (the ones in the current square)
              const addressesToNotChange = filteredCells.map((cell: any) => {
                return `r${cell.address.r}c${cell.address.c}`;
              });
              // Loop through cells, avoiding those addresses in the current square
              // Also checking to see if the number we're looking to remove from candidates
              // Is indeed present
              for (const cellAddress in unit) {
                if (unit.hasOwnProperty(cellAddress)) {
                  if (!addressesToNotChange.includes(cellAddress)) {
                    if (unit[cellAddress].candidates.includes(number)) {
                      const cell = unit[cellAddress];
                      // Remove number from cell candidates
                      cell.candidates.splice(
                        cell.candidates.indexOf(number),
                        1
                      );
                      changes++;
                    }
                  }
                }
              }
              if (changes) {
                let rncnAddress = "";
                // Create address of the form r67c2 or r7c78
                if (rowcol == "row") {
                  rncnAddress = rncnAddress.concat(
                    `r${filteredCells[0].address.r}c${filteredCells[0].address.c}${filteredCells[1].address.c}`
                  );
                } else {
                  rncnAddress = rncnAddress.concat(
                    `r${filteredCells[0].address.r}${filteredCells[1].address.r}c${filteredCells[0].address.c}`
                  );
                }
                changesArray.push({
                  rncnAddress,
                  number,
                });
              }
            }
          }
        });
      }
    }
    totalChanges += changes;
  } while (changes > 0);

  // Return puzzle
  return { puzzle, changes: totalChanges, rows, cols, squares, changesArray };
};

// As defined at http://hodoku.sourceforge.net/en/tech_intersections.php#lc2
export const claimingLockedCandidatesSolver = (
  puzzle: any,
  rows?: any,
  cols?: any,
  squares?: any
) => {
  // puzzle = firstPassCandidateCalculator(puzzle);
  rows = rows ?? makeRows(puzzle);
  cols = cols ?? makeCols(puzzle);
  squares = squares ?? makeSquares(puzzle);
  let changes = 0;
  let totalChanges = 0;
  // Holds changes, especially useful for hint creation
  let changesArray: any = [];
  // Look through row,
  // Then look through col
  do {
    // Reset at beginning of each loop
    changes = 0;
    // Loop twice, first time through rows, second time through cols
    for (let iteration = 0; iteration < 2; iteration++) {
      let units: any;
      let unit: any;
      switch (iteration) {
        case 0:
          units = rows;
          unit = "row";
          break;
        case 1:
          units = cols;
          unit = "col";
          break;
      }

      for (const unitAddress in units) {
        if (units.hasOwnProperty(unitAddress)) {
          const unit = units[unitAddress];
          // Array from 1-9
          const oneNine = createOneNine();
          // Loop through each number
          oneNine.forEach((number: number) => {
            // Filter cells by those whose candidates contains the number
            const filteredCells: any = Object.values(unit).filter(
              (cell: any) => {
                return cell.candidates.includes(number);
              }
            );
            // If cells
            if (filteredCells.length) {
              /*
            We loop through the filtered cells
            Starting off with a square of "empty"
            When we discover a cell with the same square as last cell
            We set square to the output of getSquare()
            We only do this if square is "empty" meaning that no other thing has been set
            Or if it's the same square as previous
           */
              let square: any = "empty";
              // Loop through filteredCells
              for (
                // Start at one, so we can compare current and previous
                let cellIndex = 1;
                cellIndex < filteredCells.length;
                cellIndex++
              ) {
                const cell: any = filteredCells[cellIndex];
                // Compare squares
                if (
                  getSquare(cell) == getSquare(filteredCells[cellIndex - 1])
                ) {
                  // Check if square is empty, or it matches current square, otherwise set to null
                  square =
                    square == "empty" || square == getSquare(cell)
                      ? getSquare(cell)
                      : null;
                } else {
                  square = null;
                }
              }
              // If square not null or empty
              if (square != null && square != "empty") {
                // Get an array of addresses in rncn format to not change
                const addressesToNotChange = filteredCells.map((cell: any) => {
                  return `r${cell.address.r}c${cell.address.c}`;
                });
                // Loop through cells in the square
                // Checking to see if the number we're looking to remove from candidates
                // Is indeed present
                for (const cellAddress in squares[square]) {
                  if (squares[square].hasOwnProperty(cellAddress)) {
                    if (!addressesToNotChange.includes(cellAddress)) {
                      if (
                        squares[square][cellAddress].candidates.includes(number)
                      ) {
                        const cell = squares[square][cellAddress];
                        // Remove number from cell candidates
                        cell.candidates.splice(
                          cell.candidates.indexOf(number),
                          1
                        );
                        changes++;
                      }
                    }
                  }
                }
                if (changes) {
                  // Create address of the form r67c2 or r7c78
                  let rncnAddress = "";
                  if (unit == "row") {
                    rncnAddress = rncnAddress.concat(
                      `r${filteredCells[0].address.r}c${
                        filteredCells[0].address.c
                      }${filteredCells[1].address.c}${
                        filteredCells.length == 3
                          ? filteredCells[2].address.c
                          : ""
                      }`
                    );
                  } else {
                    rncnAddress = rncnAddress.concat(
                      `r${filteredCells[0].address.r}${
                        filteredCells[1].address.r
                      }${
                        filteredCells.length == 3
                          ? filteredCells[2].address.r
                          : ""
                      }c${filteredCells[0].address.c}`
                    );
                  }
                  changesArray.push({
                    rncnAddress,
                    number,
                  });
                }
              }
            }
          });
        }
      }
    }
    totalChanges += changes;
  } while (changes > 0);
  // Return puzzle
  return { puzzle, changes: totalChanges, rows, cols, squares, changesArray };
};

export const nakedPairSolver = (
  puzzle: any,
  rows?: any,
  cols?: any,
  squares?: any
) => {
  rows = rows ?? makeRows(puzzle);
  cols = cols ?? makeCols(puzzle);
  squares = squares ?? makeSquares(puzzle);
  let iterations = 0;
  let changes = 0;
  // For calculating cost/difficulty, tracks number of uses total
  let totalChanges = 0;
  // Holds changes, especially useful for hint creation
  let changesArray: any = [];

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

      for (const unitAddress in units) {
        if (units.hasOwnProperty(unitAddress)) {
          // Get array of candidate arrays in unit
          const unitCandidates = Object.values(units[unitAddress])
            // Return stringifiedcandidates of each cell
            .map((el: any) => el.candidates);
          // Filter candidates to include only those with two values
          const filteredUnitCandidates = unitCandidates.filter(
            (candidateArray: any) => candidateArray.length == 2
          );
          // Stringify to allow comparing
          const stringifiedUnitCandidates = filteredUnitCandidates.map(
            (el: any) => JSON.stringify(el)
          );

          // Further filter candidates to where we only have pairs of pairs
          const pairsFilteredUnitCandidates = stringifiedUnitCandidates
            .filter((el: any) => {
              // Returns true if there is more than 1 instance of a given pair
              return (
                stringifiedUnitCandidates.indexOf(el) !=
                stringifiedUnitCandidates.lastIndexOf(el)
              );
            })
            // Map them back to arrays
            .map((el: any) => JSON.parse(el));

          if (pairsFilteredUnitCandidates.length) {
            // Get pair
            const pair = pairsFilteredUnitCandidates[0];

            // Loop through unit
            for (const cellAddress in units[unitAddress]) {
              if (
                Object.prototype.hasOwnProperty.call(
                  units[unitAddress],
                  cellAddress
                )
              ) {
                const cell = units[unitAddress][cellAddress];
                // Don't alter pair
                if (JSON.stringify(cell.candidates) != JSON.stringify(pair)) {
                  // Chack for either candidate
                  if (cell.candidates.includes(pair[0])) {
                    // Remove candidate
                    cell.candidates.splice(cell.candidates.indexOf(pair[0]), 1);
                    // Update changes
                    changes++;
                  }
                  if (cell.candidates.includes(pair[1])) {
                    // Remove candidate
                    cell.candidates.splice(cell.candidates.indexOf(pair[1]), 1);
                    // Update changes
                    changes++;
                  }
                }
              }
            }

            // console.log("printing pairsFilteredUnitCandidates");
            // console.log(pairsFilteredUnitCandidates);
          }
          // Only count 1 change per unit
          totalChanges = changes > 0 ? totalChanges + 1 : totalChanges;
          changes = 0;
        }
      }
    }
  } while (changes > 0);

  // printSudokuToConsole(puzzle);
  return { puzzle, changes: totalChanges, rows, cols, squares };
};

export const hiddenPairSolver = (
  puzzle: any,
  rows?: any,
  cols?: any,
  squares?: any
) => {
  rows = rows ?? makeRows(puzzle);
  cols = cols ?? makeCols(puzzle);
  squares = squares ?? makeSquares(puzzle);
  let iterations = 0;
  let changes = 0;
  // For calculating cost/difficulty, tracks number of uses total
  let totalChanges = 0;
  // Holds changes, especially useful for hint creation
  let changesArray: any = [];

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

      for (const unitAddress in units) {
        if (units.hasOwnProperty(unitAddress)) {
          // Keep track of selected candidate arrays for this unit
          const candidateArrays: any = [];
          // Go by number
          for (let number = 1; number <= 9; number++) {
            // Get array of candidate arrays in unit
            const unitCandidates = Object.values(units[unitAddress])
              // Return stringifiedcandidates of each cell
              .map((el: any) => el.candidates);
            // Filter candidates by number
            const filteredUnitCandidates = unitCandidates.filter(
              (candidateArray: any) => candidateArray.includes(number)
            );
            if (filteredUnitCandidates.length == 2) {
              candidateArrays.push([number, ...filteredUnitCandidates]);
            }
          }
          if (candidateArrays.length) {
            // console.log("\n\n Arrays:");
            // console.log(candidateArrays);

            // Keep track of seen combinations of 1 and 2
            const seenCombinations: any = [];
            // Keep track of any hidden pairs we find
            const pairs: any = [];

            // Now we look through the candidateArrays for items
            // that have the same arrays at indexes 1 and 2
            for (let index = 0; index < candidateArrays.length; index++) {
              const array = candidateArrays[index];
              // Check if combination already seen
              if (
                seenCombinations.includes(JSON.stringify(array.slice(1).flat()))
              ) {
                // Found a pair
                pairs.push([
                  // Get the index of the found combination
                  // Plug that into candidate arrays,
                  candidateArrays[
                    seenCombinations.indexOf(
                      JSON.stringify(array.slice(1).flat())
                    )
                    // Get the first element to get the first number of the pair
                  ][0],
                  // Second number of the pair is the index we're currently on
                  candidateArrays[index][0],
                ]);
              }
              // Stringify to allow comparisions, omit first number
              seenCombinations.push(JSON.stringify(array.slice(1).flat()));
            }
            // If we have found any hidden pairs
            if (pairs.length) {
              // console.log("\n\n pairs:");
              // console.log(unitAddress);
              // console.log(pairs);
              // Since it's possible we found more than one pair, loop through pairs
              pairs.forEach((pair: any) => {
                // Loop through unit, find the two cells containing the numbers
                for (const cellAddress in units[unitAddress]) {
                  if (
                    Object.prototype.hasOwnProperty.call(
                      units[unitAddress],
                      cellAddress
                    )
                  ) {
                    const cell = units[unitAddress][cellAddress];
                    // Check first if there are more than 2 candidates
                    // Otherwise we wouldn't be changing anything
                    // We can safely check just for one
                    // Because the above code has filtered out alternatives
                    if (
                      cell.candidates.length > 2 &&
                      cell.candidates.includes(pair[0])
                    ) {
                      // Set candidates to pair, deleting all others
                      cell.candidates = pair;
                      changes++;
                    }
                  }
                }
                // console.log(changes);
                // Incease changes by one, if we've made any changes
                totalChanges = changes > 0 ? totalChanges + 1 : totalChanges;
                // Reset changes for next loop
                changes = 0;
              });
            }
          }
        }
      }
    }
  } while (changes > 0);

  // printSudokuToConsole(puzzle);
  return { puzzle, changes: totalChanges, rows, cols, squares };
};

/* 
Master solver method, calls each solver in succesion, 
Increasing complexity when a given solver changes nothing, 
And returning to start when a solver changes something 
*/

export const solver = (puzzle: any, difficulty?: any) => {
  difficulty = difficulty ?? "all";
  // First, populate candidates
  const firstPass = firstPassCandidateCalculator(puzzle);
  puzzle = firstPass.puzzle;
  let rows = firstPass.rows;
  let cols = firstPass.cols;
  let squares = firstPass.squares;
  let changes = 0;
  // Holds cost of each method used
  const cost: any = {
    hiddenSingle: 0,
    pointing: 0,
    claiming: 0,
    nakedPair: 0,
    hiddenPair: 0,
  };
  do {
    changes = 0;
    // Try naked and hidden candidate solver
    const hiddenSingle = hiddenAndNakedSingleSolver(
      puzzle,
      true,
      rows,
      cols,
      squares
    );
    // Update puzzle
    puzzle = hiddenSingle.puzzle;
    rows = hiddenSingle.rows;
    cols = hiddenSingle.cols;
    squares = hiddenSingle.squares;
    // Update cost
    cost.hiddenSingle += hiddenSingle.cost;
    // Update changes
    changes = hiddenSingle.cost > 0 ? changes + 1 : changes;

    if (hiddenSingle.cost > 0) {
      console.log("hiddenSingle")
      console.log(hiddenSingle.changesArray)
    }
    // Check difficulty. If easy, stick to above, else continue with more advanced methods
    if (difficulty != "easy") {
      // Then, try pointing candidate solver
      const pointing = pointingLockedCandidatesSolver(
        puzzle,
        rows,
        cols,
        squares
      );
      // Update puzzle
      puzzle = pointing.puzzle;
      rows = pointing.rows;
      cols = pointing.cols;
      squares = pointing.squares;
      // Update cost, initial cost higher than subsequent
      if (pointing.changes) {
        cost.pointing =
          cost.pointing > 0
            ? // Subsequent cost, 200
              (cost.pointing += pointing.changes * 200)
            : // First cost, 350, then add any additional changes, times 300
              350 + (pointing.changes - 1) * 200;
      }
      // Update changes
      changes = pointing.changes > 0 ? changes + 1 : changes;

      // If changes made, go the beginnig of the loop
      // In this way, we go progressively through the harder techniques
      // Only going to the next when the previous ones didn't work
      if (pointing.changes > 0) {
        console.log("pointing")
        console.log(pointing.changesArray)
        continue;
      }
      // Try naked pair solver
      const nakedPair = nakedPairSolver(puzzle, rows, cols, squares);
      // Update puzzle
      puzzle = nakedPair.puzzle;
      rows = nakedPair.rows;
      cols = nakedPair.cols;
      squares = nakedPair.squares;
      // Update cost, initial cost higher than subsequent
      if (nakedPair.changes) {
        // console.log(nakedPair.changes);
        cost.nakedPair =
          cost.nakedPair > 0
            ? // Subsequent cost, 200
              (cost.nakedPair += nakedPair.changes * 200)
            : // First cost, 350, then add any additional changes, times 200
              350 + (nakedPair.changes - 1) * 200;
      }
      // Update changes
      changes = nakedPair.changes > 0 ? changes + 1 : changes;
      // If changes made, go the beginnig of the loop
      // In this way, we go progressively through the harder techniques
      // Only going to the next when the previous ones didn't work
      if (nakedPair.changes > 0) {
        continue;
      }

      // Try pointing candidate solver
      const claiming = claimingLockedCandidatesSolver(
        puzzle,
        rows,
        cols,
        squares
      );
      // Update puzzle
      puzzle = claiming.puzzle;
      rows = claiming.rows;
      cols = claiming.cols;
      squares = claiming.squares;
      // Update cost, initial cost higher than subsequent
      if (claiming.changes) {
        // console.log(claiming.changes);
        cost.claiming =
          cost.claiming > 0
            ? // Subsequent cost, 200
              (cost.claiming += claiming.changes * 250)
            : // First cost, 350, then add any additional changes, times 200
              400 + (claiming.changes - 1) * 250;
      }
      // Update changes
      changes = claiming.changes > 0 ? changes + 1 : changes;
      // If changes made, go the beginnig of the loop
      // In this way, we go progressively through the harder techniques
      // Only going to the next when the previous ones didn't work
      if (claiming.changes > 0) {
        console.log("claiming")

        console.log(claiming.changesArray)
        continue;
      }

      const hiddenPair = hiddenPairSolver(puzzle, rows, cols, squares);
      // Update puzzle
      puzzle = hiddenPair.puzzle;
      rows = hiddenPair.rows;
      // console.log(rows);
      cols = hiddenPair.cols;
      squares = hiddenPair.squares;
      // Update cost, initial cost higher than subsequent
      if (hiddenPair.changes) {
        // console.log(hiddenPair.changes);
        cost.hiddenPair =
          cost.hiddenPair > 0
            ? // Subsequent cost, 250
              (cost.hiddenPair += hiddenPair.changes * 250)
            : // First cost, 350, then add any additional changes, times 250
              450 + (hiddenPair.changes - 1) * 250;
      }
      // Update changes
      changes = hiddenPair.changes > 0 ? changes + 1 : changes;
      // If changes made, go the beginnig of the loop
      // In this way, we go progressively through the harder techniques
      // Only going to the next when the previous ones didn't work
      if (hiddenPair.changes > 0) {
        // console.log(changeme.changesArray)
        continue;
      }

      // let totalCost = 0;
      // for (const costType in cost) {
      //   if (cost.hasOwnProperty(costType)) {
      //     totalCost += cost[costType];
      //   }
      // }
      //     return {puzzle, totalCost, cost};
    }
    // Repeat, if any changes were made
  } while (changes > 0);
  let totalCost = 0;
  for (const costType in cost) {
    if (cost.hasOwnProperty(costType)) {
      totalCost += cost[costType];
    }
  }
  // console.log(totalCost);
  return { puzzle, totalCost, cost };
  // Need to keep track of changes for each method
};

// Find the first spot in a puzzle where you can make an update
export const hint = (puzzle: any) => {};

export const createPuzzle = (difficulty?: any) => {
  // const startTimer = performance.now();
  const targetRanges: any = {
    easy: { min: 4300, max: 5500 },
    medium: { min: 5800, max: 6900 },
    hard: { min: 6600, max: 93000 },
    insane: { min: 8300, max: 14000 },
    diabolical: { min: 11000, max: 25000 },
  };

  // If no difficulty, default to medium
  difficulty = difficulty ?? "medium";
  // Get target range
  const targetRange = targetRanges[difficulty];

  // First get a filled puzzle

  let puzzle = createFilledPuzzle();

  const rows = makeRows(puzzle);
  const cols = makeCols(puzzle);
  const squares = makeSquares(puzzle);

  // Array to hold removed numbers
  let removed: any = [];
  // Iterations, so we can reset if needed
  let iterations: number = 0;
  let totalCost: number = 0;
  const populateAddresses = () => {
    let addresses: any = [];
    for (let rowIndex = 1; rowIndex <= 5; rowIndex++) {
      for (let colIndex = 1; colIndex <= 9; colIndex++) {
        const address = {
          r: rowIndex,
          c: colIndex,
        };
        if (rowIndex == 5 && colIndex == 6) {
          // console.log("break");
          break;
        }
        addresses.push(address);
      }
    }
    addresses = shuffleArray(addresses);
    return addresses;
  };

  // Object whose keys are puzzle strings
  // Values will be untred addresses
  let triedConfigurations: any = {};

  let cost: any = { hiddenSingle: 0, pointing: 0, claiming: 0 };

  // Remove pairs till we've reached our target
  while (totalCost <= targetRange.min) {
    iterations++;
    let firstAddress: number;
    let secondAddress: number;
    let firstNumber: number;
    let secondNumber: number;

    if (iterations % 500 == 0) {
      // console.log("resetting " + iterations / 500);
      // Reset puzzle
      puzzle = createFilledPuzzle();
      // Reset totalCost
      totalCost = 0;
      // Reset removed
      removed = [];
      // Reset triedConfigurations
      triedConfigurations = {};
    }
    // Test if triedConfigurations has current config
    if (!triedConfigurations.hasOwnProperty(puzzleToString(puzzle))) {
      // If not, populate it
      triedConfigurations[puzzleToString(puzzle)] = populateAddresses();
    }

    // Search for number that hasn't been removed
    // No need to check counterpart because we remove in pairs
    // So if one is removed, the other already is too
    do {
      // If no addresses left in tried configurations
      while (!triedConfigurations[puzzleToString(puzzle)].length) {
        // Backtrack
        const toReset = removed.pop();
        // Reset first number
        puzzle[`r${toReset.firstAddress}c${toReset.secondAddress}`].number =
          toReset.firstNumber;
        // Reset counterpart
        puzzle[
          `r${10 - toReset.firstAddress}c${10 - toReset.secondAddress}`
        ].number = toReset.secondNumber;
      }
      let address = triedConfigurations[puzzleToString(puzzle)].pop();
      firstAddress = address.r;
      secondAddress = address.c;
    } while (puzzle[`r${firstAddress}c${secondAddress}`].number == ".");

    // Save number (for backtracking)
    firstNumber = { ...puzzle[`r${firstAddress}c${secondAddress}`] }.number;
    secondNumber = {
      ...puzzle[`r${10 - firstAddress}c${10 - secondAddress}`],
    }.number;

    // Remove number
    puzzle[`r${firstAddress}c${secondAddress}`].number = ".";
    // Remove counterpart
    puzzle[`r${10 - firstAddress}c${10 - secondAddress}`].number = ".";
    // Add numbers to removed
    removed.push({ firstAddress, secondAddress, firstNumber, secondNumber });

    // Attempt to solve
    let attemptedPuzzle: any;
    const attemptedPuzzleObj = solver(
      JSON.parse(JSON.stringify(puzzle)),
      difficulty
    );
    attemptedPuzzle = attemptedPuzzleObj.puzzle;
    totalCost = attemptedPuzzleObj.totalCost;
    // console.log(totalCost);
    cost = attemptedPuzzleObj.cost;
    // Validate, check if valid, AND check if full
    const valid =
      validatePuzzle(attemptedPuzzle) &&
      puzzleToString(attemptedPuzzle).indexOf(".") == -1;
    // If invalid, or at a greater totalCost than the max
    if (!valid || totalCost > targetRange.max) {
      // if (totalCost > targetRange.max) {
      //   console.log("\n\n totalcost higher");
      //   console.log(totalCost);
      //   console.log(cost);
      // }
      // Backtrack
      // Reset first number
      puzzle[`r${firstAddress}c${secondAddress}`].number = firstNumber;
      // Reset counterpart
      puzzle[
        `r${10 - firstAddress}c${10 - secondAddress}`
      ].number = secondNumber;
      removed.pop();

      // Reset totalCost
      totalCost = 0;
    }
  }
  console.log(`\n\ntotalCost: ${totalCost}`);
  console.log(cost);
  return puzzle;
};

// await printSudokuToConsoleFormatted(solver(parsePuzzle(hiddenPairTest)).puzzle);
// console.log(solver(parsePuzzle(hiddenPairTest)).puzzle["r1c7"].candidates);

// const easyPuzzle = createEasyPuzzle();
// await printSudokuToConsoleFormatted(easyPuzzle);
// await printSudokuToConsoleFormatted(hiddenAndNakedSingleSolver(easyPuzzle));
// testSpeed(1);
