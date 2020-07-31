// generator.ts

import {
  Cell,
  Puzzle,
  Units,
  Unit,
  Address,
  Difficulty,
  Cost,
  Technique,
  Score,
} from "../client/src/types.d.ts";
import { BlankPuzzle } from "./createBlankPuzzle.ts";

// Validation framework

export const makeRows = (puzzle: Puzzle) => {
  let rows: Units = {
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
export const makeCols = (puzzle: Puzzle) => {
  let cols: Units = {
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

export const getSquare = (cell: Cell) => {
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

export const makeSquares = (puzzle: Puzzle) => {
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
      squares[getSquare(puzzle[`r${rowIndex}c${colIndex}`])][
        `r${rowIndex}c${colIndex}`
      ] = puzzle[`r${rowIndex}c${colIndex}`];
    }
  }

  return squares;
};

export const validateCell = (
  cell: Cell,
  { rows, cols, squares }: { rows: Units; cols: Units; squares: Units },
  number: Cell["number"],
) => {
  let row: Unit, col: Unit, square: Unit;

  row = rows[`r${cell.address.r}`];
  col = cols[`c${cell.address.c}`];
  square = squares[getSquare(cell)];
  const peers: Cell[] = [
    ...Object.values(row),
    ...Object.values(col),
    ...Object.values(square),
  ];
  let valid = true;
  valid = peers.findIndex((el: any) => {
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
  puzzle: Puzzle,
  rows?: Units,
  cols?: Units,
  squares?: Units,
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

      let row: Unit = rows[`r${cell.address.r}`];
      let col: Unit = cols[`c${cell.address.c}`];
      let square: Unit = squares[getSquare(cell)];

      const peers: Cell[] = [
        ...Object.values(row),
        ...Object.values(col),
        ...Object.values(square),
      ];

      let valid = true;

      // The only difference in code is here
      valid = peers.findIndex((el: Cell) => {
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
export const shuffleArray = (array: any[]) => {
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
export const createRandomOneNine = (): number[] => {
  return shuffleArray(createOneNine());
};

export const parsePuzzle = (puzzleToParse: string): Puzzle => {
  let puzzle: Puzzle = new BlankPuzzle();

  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    for (let colIndex = 0; colIndex < 9; colIndex++) {
      // console.log(rowIndex*9+colIndex)
      const cell = puzzleToParse.substr(rowIndex * 9 + colIndex, 1);
      let formattedCell: Cell;
      if (cell != ".") {
        // Make a cell object with given equal to true
        formattedCell = {
          number: cell,
          given: true,
          valid: true,
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
          valid: true,
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

export const printSudokuToConsole = (puzzleToPrint: Puzzle) => {
  let stringToPrint = "\n\n";
  for (const cellAddress in puzzleToPrint) {
    if (puzzleToPrint.hasOwnProperty(cellAddress)) {
      const cell = puzzleToPrint[cellAddress];
      stringToPrint = stringToPrint.concat(String(cell.number));
      // console.log(cell.number);
      if (cell.address.c == 9) {
        console.log(stringToPrint);
        stringToPrint = "";
      }
    }
  }
};

export const printSudokuToConsoleFormatted = async (puzzleToPrint: Puzzle) => {
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

export const puzzleToString = (puzzle: Puzzle) => {
  let puzzleString: string = "";

  for (const cellAddress in puzzle) {
    if (puzzle.hasOwnProperty(cellAddress)) {
      const cell = puzzle[cellAddress];
      // console.log(cell.number);
      puzzleString = puzzleString.concat(String(cell.number));
    }
  }

  return puzzleString;
};

export const fillInRemaining = (): Puzzle => {
  let address: Address = { r: 1, c: 1 };
  let puzzle: Puzzle = new BlankPuzzle();
  let addressesComplete: Address[] = [];
  let rows = makeRows(puzzle);
  let squares = makeSquares(puzzle);
  // const cols = makeCols(puzzle);

  let count = 0;
  // WHile we're not at the last cell
  while (address.c < 10 && address.r < 10) {
    count++;
    if (count == 600) {
      puzzle = new BlankPuzzle();
      // puzzle = generateDiagonalSquares(puzzle);
      rows = makeRows(puzzle);
      squares = makeSquares(puzzle);
      count = 0;
      address = { r: 1, c: 1 };
      addressesComplete = [];
    }
    // Check to see if there are untriedNumbers
    if (puzzle[`r${address.r}c${address.c}`].untriedNumbers!.length != 0) {
      // While there are numbers left
      while (puzzle[`r${address.r}c${address.c}`].untriedNumbers!.length != 0) {
        // Try an untried number

        // Get number, removing each number from the untriedNumbers array to make no repeats
        const number = Number(
          puzzle[`r${address.r}c${address.c}`].untriedNumbers!.pop(),
        );

        const cols = makeCols(puzzle);

        const valid = validateCell(
          puzzle[`r${address.r}c${address.c}`],
          { rows, cols, squares },
          number,
        );

        // Validate cell
        // If invalid
        if (!valid) {
          // Reset number
          puzzle[`r${address.r}c${address.c}`].number = ".";
          puzzle[`r${address.r}c${address.c}`].valid = true;
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
        address = addressesComplete.pop() as Address;
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

export const firstPassCandidateCalculator = (puzzle: Puzzle) => {
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
              const previousCandidates = iteration == 0
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
  puzzle: Puzzle,
  cell: Cell,
  number: Cell["number"],
  {
    rows,
    cols,
    squares,
  }: {
    rows: Units;
    cols: Units;
    squares: Units;
  },
) => {
  // Assemble peers
  let row: Unit, col: Unit, square: Unit;
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
  puzzle: Puzzle,
  candidates?: boolean,
  rows?: Units,
  cols?: Units,
  squares?: Units,
) => {
  // If candidates have not been assigned, assign them. Othrewise don't overwrite
  if (!candidates) {
    const firstPass = firstPassCandidateCalculator(puzzle);
    puzzle = firstPass.puzzle;
    rows = firstPass.rows;
    cols = firstPass.cols;
    squares = firstPass.squares;
  }
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
            cell.number = cell!.candidates.pop() as number;
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
                  },
                );
                if (cell) {
                  // Update number
                  puzzle[
                    `r${cell.address.r}c${cell.address.c}`
                  ].number = candidate;

                  const rowsToSend: Units = rows as Units;
                  const colsToSend: Units = cols as Units;
                  const squaresToSend: Units = squares as Units;

                  puzzle = updatePeerCandidates(puzzle, cell, candidate, {
                    rows: rowsToSend,
                    cols: colsToSend,
                    squares: squaresToSend,
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
  return fillInRemaining();
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
  puzzle: Puzzle,
  rows?: Units,
  cols?: Units,
  squares?: Units,
) => {
  // puzzle = firstPassCandidateCalculator(puzzle);
  rows = rows ?? makeRows(puzzle);
  cols = cols ?? makeCols(puzzle);
  squares = squares ?? makeSquares(puzzle);
  let changes = 0;
  let totalChanges = 0;
  // Holds changes, especially useful for hint creation
  let changesArray: any[] = [];
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
            },
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
              const unit = rowcol == "row"
                ? // Only referencing the first element of filtered cells here
                // Because each element should share the same row or col
                  rows![`r${filteredCells[0].address.r}`]
                : cols![`c${filteredCells[0].address.c}`];

              // Get an array of addresses in rncn format to not change
              // (the ones in the current square)
              const addressesToNotChange = filteredCells.map((cell: Cell) => {
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
                        1,
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
                    `r${filteredCells[0].address.r}c${
                      filteredCells[0].address.c
                    }${filteredCells[1].address.c}`,
                  );
                } else {
                  rncnAddress = rncnAddress.concat(
                    `r${filteredCells[0].address.r}${
                      filteredCells[1].address.r
                    }c${filteredCells[0].address.c}`,
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
  puzzle: Puzzle,
  rows?: Units,
  cols?: Units,
  squares?: Units,
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
      let units: Units = rows;
      let unitType: string;
      switch (iteration) {
        case 0:
          units = rows;
          unitType = "row";
          break;
        case 1:
          units = cols;
          unitType = "col";
          break;
      }

      for (const unitAddress in units) {
        if (units.hasOwnProperty(unitAddress)) {
          const unit: Unit = units[unitAddress];
          // Array from 1-9
          const oneNine = createOneNine();
          // Loop through each number
          oneNine.forEach((number: number) => {
            // Filter cells by those whose candidates contains the number
            const filteredCells: Cell[] = Object.values(unit).filter(
              (cell: Cell) => {
                return cell.candidates.includes(number);
              },
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
              let square: string | null = "empty";
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
                  square = square == "empty" || square == getSquare(cell)
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
                for (const cellAddress in squares![square]) {
                  if (squares![square].hasOwnProperty(cellAddress)) {
                    if (!addressesToNotChange.includes(cellAddress)) {
                      if (
                        squares![square][cellAddress].candidates.includes(
                          number,
                        )
                      ) {
                        const cell = squares![square][cellAddress];
                        // Remove number from cell candidates
                        cell.candidates.splice(
                          cell.candidates.indexOf(number),
                          1,
                        );
                        changes++;
                      }
                    }
                  }
                }
                if (changes) {
                  // Create address of the form r67c2 or r7c78
                  let rncnAddress = "";
                  if (unitType == "row") {
                    rncnAddress = rncnAddress.concat(
                      `r${filteredCells[0].address.r}c${
                        filteredCells[0].address.c
                      }${filteredCells[1].address.c}${
                        filteredCells.length == 3
                          ? filteredCells[2].address.c
                          : ""
                      }`,
                    );
                  } else {
                    rncnAddress = rncnAddress.concat(
                      `r${filteredCells[0].address.r}${
                        filteredCells[1].address.r
                      }${
                        filteredCells.length == 3
                          ? filteredCells[2].address.r
                          : ""
                      }c${filteredCells[0].address.c}`,
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
  puzzle: Puzzle,
  rows?: Units,
  cols?: Units,
  squares?: Units,
) => {
  rows = rows ?? makeRows(puzzle);
  cols = cols ?? makeCols(puzzle);
  squares = squares ?? makeSquares(puzzle);
  let iterations = 0;
  let changes = 0;
  // For calculating cost/difficulty, tracks number of uses total
  let totalChanges = 0;
  // Holds changes, especially useful for hint creation
  let changesArray: any[] = [];

  do {
    changes = 0;

    for (let iteration = 0; iteration < 3; iteration++) {
      let units: Units = rows;
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
            (candidateArray: any) => candidateArray.length == 2,
          );
          // Stringify to allow comparing
          const stringifiedUnitCandidates = filteredUnitCandidates.map(
            (el: any) => JSON.stringify(el),
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
                  cellAddress,
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
          if (changes > 0) {
            changesArray.push({
              pair: pairsFilteredUnitCandidates[0],
              unitAddress,
            });
          }
          // Only count 1 change per unit
          totalChanges = changes > 0 ? totalChanges + 1 : totalChanges;
          changes = 0;
        }
      }
    }
  } while (changes > 0);

  // printSudokuToConsole(puzzle);
  return { puzzle, changes: totalChanges, rows, cols, squares, changesArray };
};

export const hiddenPairSolver = (
  puzzle: Puzzle,
  rows?: Units,
  cols?: Units,
  squares?: Units,
) => {
  rows = rows ?? makeRows(puzzle);
  cols = cols ?? makeCols(puzzle);
  squares = squares ?? makeSquares(puzzle);
  let iterations = 0;
  let changes = 0;
  // For calculating cost/difficulty, tracks number of uses total
  let totalChanges = 0;
  // Holds changes, especially useful for hint creation
  let changesArray: any[] = [];

  do {
    changes = 0;

    for (let iteration = 0; iteration < 3; iteration++) {
      let units: Units = rows;
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
              (candidateArray: any) => candidateArray.includes(number),
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
                      JSON.stringify(array.slice(1).flat()),
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
                      cellAddress,
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
                if (changes) {
                  changesArray.push({
                    pair,
                    unitAddress,
                  });
                }
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
  return { puzzle, changes: totalChanges, rows, cols, squares, changesArray };
};

/* 
  X-Wing specification: http://hodoku.sourceforge.net/en/tech_fishb.php#bf2
  Take two rows (the base sets). 
  If you can find two columns, such that all candidates of a specific digit 
  (the fish digit) in both rows are containd in the columns (the cover sets), 
  all fish candidates in the columns that are not part of the rows can be eliminated. 
  The result is called an X-Wing in the rows.
  If you exchange the terms rows and columns in the description above, you get an X-Wing in the columns.
*/

/* 
  The following function will loop through rows, then columns
  On finding a unit that has only two instances of a number, 
  Search the rest of that type of unit for another unit that has that number in 
  The same location
*/

export const xwingSolver = (
  puzzle: Puzzle,
  rows?: Units,
  cols?: Units,
  squares?: Units,
) => {
  rows = rows ?? makeRows(puzzle);
  cols = cols ?? makeCols(puzzle);
  squares = squares ?? makeSquares(puzzle);
  let iterations = 0;
  let changes = 0;
  // For calculating cost/difficulty, tracks number of uses total
  let totalChanges = 0;
  // Holds changes, especially useful for hint creation
  let changesArray: any[] = [];

  do {
    changes = 0;

    for (let iteration = 0; iteration < 3; iteration++) {
      let units: Units = rows;
      let unitType: string;
      switch (iteration) {
        case 0:
          units = rows;
          unitType = "row";
          break;
        case 1:
          units = cols;
          unitType = "col";
          break;
      }
      for (const unitAddress in units) {
        if (Object.prototype.hasOwnProperty.call(units, unitAddress)) {
          const unit = units[unitAddress];
          createOneNine().forEach((number) => {
            // Filter unit by number
            const filteredUnit = Object.values(units[unitAddress]).filter(
              (el: Cell) => {
                return el.candidates.includes(number) && el.number == ".";
              },
            );
            // If there are only 2 items in the array
            // There are only two instances of a number
            if (filteredUnit.length == 2) {
              // Now we loop through the units again,
              // Looking for a seperate unit with the same number in the same places
              for (const secondUnitAddress in units) {
                if (
                  Object.prototype.hasOwnProperty.call(units, secondUnitAddress)
                ) {
                  const secondUnit = units[secondUnitAddress];
                  // Skip over the unit we're checking against
                  if (secondUnitAddress != unitAddress) {
                    const secondFilteredUnit = Object.values(
                      units[secondUnitAddress],
                    ).filter((el: Cell) => {
                      return el.candidates.includes(number);
                    });
                    // Only two instances of the number
                    if (secondFilteredUnit.length == 2) {
                      // If looking in rows, we need the columns to be the same
                      if (unitType == "row") {
                        // Checks if both the first and the second elements
                        // Of each filtered unit have the same column
                        if (
                          secondFilteredUnit[0].address.c ==
                            filteredUnit[0].address.c &&
                          secondFilteredUnit[1].address.c ==
                            filteredUnit[1].address.c
                        ) {
                          // Look through each column for other cells with this candidate
                          // That are not in the rows we're checking
                          // And remove them
                          for (
                            const cellAddress in cols![
                              `c${filteredUnit[0].address.c}`
                            ]
                          ) {
                            if (
                              Object.prototype.hasOwnProperty.call(
                                cols![`c${filteredUnit[0].address.c}`],
                                cellAddress,
                              ) && cols![`c${filteredUnit[0].address.c}`][
                                  cellAddress
                                ].number == "."
                            ) {
                              const cell = cols![
                                `c${filteredUnit[0].address.c}`
                              ][cellAddress];
                              // If not in either of the rows
                              if (
                                cell.address.r != filteredUnit[0].address.r &&
                                cell.address.r !=
                                  secondFilteredUnit[0].address.r
                              ) {
                                if (cell.candidates.includes(number)) {
                                  cell.candidates.splice(
                                    cell.candidates.indexOf(number),
                                    1,
                                  );
                                  changes++;
                                }
                              }
                            }
                          }
                          for (
                            const cellAddress in cols![
                              `c${filteredUnit[1].address.c}`
                            ]
                          ) {
                            if (
                              Object.prototype.hasOwnProperty.call(
                                cols![`c${filteredUnit[1].address.c}`],
                                cellAddress,
                              ) && cols![`c${filteredUnit[1].address.c}`][
                                  cellAddress
                                ].number == "."
                            ) {
                              const cell = cols![
                                `c${filteredUnit[1].address.c}`
                              ][cellAddress];
                              // If not in either of the rows
                              if (
                                cell.address.r != filteredUnit[1].address.r &&
                                cell.address.r !=
                                  secondFilteredUnit[1].address.r
                              ) {
                                if (cell.candidates.includes(number)) {
                                  cell.candidates.splice(
                                    cell.candidates.indexOf(number),
                                    1,
                                  );
                                  changes++;
                                }
                              }
                            }
                          }
                        }
                        // if (changes) {
                        //   changesArray.push({
                        //     unitAddress,
                        //     secondUnitAddress,
                        //     number,
                        //   });
                        // }
                        // totalChanges += changes;
                        // changes = 0;
                      } // If looking in cols, we need the rows to be the same
                      else if (unitType == "col") {
                        // Checks if both the first and the second elements
                        // Of each filtered unit have the same column
                        if (
                          secondFilteredUnit[0].address.r ==
                            filteredUnit[0].address.r &&
                          secondFilteredUnit[1].address.r ==
                            filteredUnit[1].address.r
                        ) {
                          // Look through each row for other cells with this candidate
                          // That are not in the columns we're checking
                          // And remove them
                          for (
                            const cellAddress in rows![
                              `r${filteredUnit[0].address.r}`
                            ]
                          ) {
                            if (
                              Object.prototype.hasOwnProperty.call(
                                rows![`r${filteredUnit[0].address.r}`],
                                cellAddress,
                              ) && rows![`r${filteredUnit[0].address.r}`][
                                  cellAddress
                                ].number == "."
                            ) {
                              const cell = rows![
                                `r${filteredUnit[0].address.r}`
                              ][cellAddress];
                              // If not in either of the columns
                              if (
                                cell.address.c != filteredUnit[0].address.c &&
                                cell.address.c !=
                                  secondFilteredUnit[0].address.c
                              ) {
                                if (cell.candidates.includes(number)) {
                                  cell.candidates.splice(
                                    cell.candidates.indexOf(number),
                                    1,
                                  );
                                  changes++;
                                }
                              }
                            }
                          }

                          for (
                            const cellAddress in rows![
                              `r${filteredUnit[1].address.r}`
                            ]
                          ) {
                            if (
                              Object.prototype.hasOwnProperty.call(
                                rows![`r${filteredUnit[1].address.r}`],
                                cellAddress,
                              ) && rows![`r${filteredUnit[1].address.r}`][
                                  cellAddress
                                ].number == "."
                            ) {
                              const cell = rows![
                                `r${filteredUnit[1].address.r}`
                              ][cellAddress];

                              // If not in either of the columns
                              if (
                                cell.address.c != filteredUnit[1].address.c &&
                                cell.address.c !=
                                  secondFilteredUnit[1].address.c
                              ) {
                                if (cell.candidates.includes(number)) {
                                  cell.candidates.splice(
                                    cell.candidates.indexOf(number),
                                    1,
                                  );
                                  changes++;
                                }
                              }
                            }
                          }
                          // if (changes) {
                          //   changesArray.push({
                          //     unitAddress,
                          //     secondUnitAddress,
                          //     number,
                          //   });
                          // }
                          // totalChanges += changes;
                          // changes = 0;
                        }
                      }
                    }
                  }
                }
              }
            }
          });
        }
      }
    }
    totalChanges += changes;
  } while (changes > 0);
  return { puzzle, changes: totalChanges, rows, cols, squares, changesArray };
};

export const parsePencilMarksToCandidates = (puzzle: Puzzle) => {
  for (const cellIndex in puzzle) {
    if (Object.prototype.hasOwnProperty.call(puzzle, cellIndex)) {
      const cell = puzzle[cellIndex];
      if (cell.number == ".") {
        for (
          let pencilMarkIndex = 0;
          pencilMarkIndex < cell.pencilMarks.length;
          pencilMarkIndex++
        ) {
          const pencilMark = cell.pencilMarks[pencilMarkIndex];
          if (pencilMark) {
            cell.candidates.push(pencilMarkIndex + 1);
          }
        }
      }
    }
  }
  return puzzle;
};

export class ScoreClass {
  [index: string]: Cost
  hiddenSingle: Cost = {
    firstUse: 100,
    subUses: 100,
    total: 0,
    difficulty: "easy",
  };
  pointing: Cost = {
    firstUse: 350,
    subUses: 200,
    total: 0,
    difficulty: "medium",
  };
  claiming: Cost = {
    firstUse: 400,
    subUses: 250,
    total: 0,
    difficulty: "medium",
  };
  nakedPair: Cost = {
    firstUse: 350,
    subUses: 200,
    total: 0,
    difficulty: "medium",
  };
  hiddenPair: Cost = {
    firstUse: 450,
    subUses: 250,
    total: 0,
    difficulty: "medium",
  };
  xwing: Cost = {
    firstUse: 450,
    subUses: 250,
    total: 0,
    difficulty: "hard",
  };
}

export const calculateCost = (cost: Cost, changes: number) => {
  if (changes) {
    cost.total = cost.total > 0
      ? (cost.total += changes * cost.subUses)
      : cost.firstUse + (changes - 1) * cost.subUses;
  }
  return cost;
};

export enum DifficultyValues {
  easy,
  medium,
  hard,
  insane,
  diabolical,
}

/* 
Master solver method, calls each solver in succesion, 
Increasing complexity when a given solver changes nothing, 
And returning to start when a solver changes something 
*/

export const solver = (puzzle: Puzzle, difficulty?: string, hint?: boolean) => {
  difficulty = difficulty ?? "all";
  // First, populate candidates
  let rows = makeRows(puzzle);
  let cols = makeCols(puzzle);
  let squares = makeSquares(puzzle);
  // If not going for a hint
  if (!hint) {
    // Populate candidates
    const firstPass = firstPassCandidateCalculator(puzzle);
    ({ puzzle, rows, cols, squares } = firstPass);
  } else {
    puzzle = parsePencilMarksToCandidates(puzzle);
  }

  let changes = 0;
  // For passing back to hint
  let change: any;
  // Holds cost of each method used
  const cost: Score = new ScoreClass();
  cost.xwing.subUses = 100;
  do {
    // If in hint mode, stop at first changes
    if (hint && changes) {
      // Locate which technique had the change
      return change;
    }
    changes = 0;
    // Try naked and hidden candidate solver
    const hiddenSingle = hiddenAndNakedSingleSolver(
      puzzle,
      true,
      rows,
      cols,
      squares,
    );
    // Update puzzle
    ({ puzzle, rows, cols, squares } = hiddenSingle);
    // Update cost
    cost.hiddenSingle.total += hiddenSingle.cost;
    // Update changes
    changes = hiddenSingle.cost > 0 ? changes + 1 : changes;

    if (hiddenSingle.cost > 0) {
      // Set change to first element of changes
      change = hiddenSingle.changesArray[0];
      continue;
    }
    // Check difficulty. If easy, stick to above, else continue with more advanced methods
    if (difficulty != "easy") {
      // Then, try pointing candidate solver
      const pointing = pointingLockedCandidatesSolver(
        puzzle,
        rows,
        cols,
        squares,
      );
      ({ puzzle, rows, cols, squares } = pointing);
      // Update cost, initial cost higher than subsequent
      cost.pointing = calculateCost(cost.pointing, pointing.changes);
      changes = pointing.changes > 0 ? changes + 1 : changes;
      if (pointing.changes > 0) {
        change = { pointing: pointing.changesArray[0] };
        continue;
      }
      const nakedPair = nakedPairSolver(puzzle, rows, cols, squares);
      ({ puzzle, rows, cols, squares } = nakedPair);
      cost.nakedPair = calculateCost(cost.nakedPair, nakedPair.changes);
      changes = nakedPair.changes > 0 ? changes + 1 : changes;
      if (nakedPair.changes > 0) {
        change = { nakedPair: nakedPair.changesArray[0] };
        continue;
      }
      const claiming = claimingLockedCandidatesSolver(
        puzzle,
        rows,
        cols,
        squares,
      );
      ({ puzzle, rows, cols, squares } = claiming);
      cost.claiming = calculateCost(cost.claiming, claiming.changes);
      changes = claiming.changes > 0 ? changes + 1 : changes;
      if (claiming.changes > 0) {
        change = { claiming: claiming.changesArray[0] };
        continue;
      }
      const hiddenPair = hiddenPairSolver(puzzle, rows, cols, squares);
      ({ puzzle, rows, cols, squares } = hiddenPair);
      cost.hiddenPair = calculateCost(cost.hiddenPair, hiddenPair.changes);
      changes = hiddenPair.changes > 0 ? changes + 1 : changes;
      if (hiddenPair.changes > 0) {
        change = { hiddenPair: hiddenPair.changesArray[0] };
        continue;
      }
      if (difficulty != "medium") {
        const xwing = xwingSolver(puzzle, rows, cols, squares);
        ({ puzzle, rows, cols, squares } = xwing);
        cost.xwing = calculateCost(cost.xwing, xwing.changes);
        changes = xwing.changes > 0 ? changes + 1 : changes;
        if (xwing.changes > 0) {
          change = { xwing: xwing.changesArray[0] };
          continue;
        }
      }
    }
    // Repeat, if any changes were made
  } while (changes > 0);
  let totalCost = 0;
  for (const costType in cost) {
    if (cost.hasOwnProperty(costType)) {
      totalCost += cost[costType as Technique].total;
    }
  }
  // console.log(cost);
  return { puzzle, totalCost, cost };
  // Need to keep track of changes for each method
};

export const createPuzzle = (
  difficulty?: Difficulty,
  reqTechs?: Technique[],
) => {
  let cost: Score = new ScoreClass();
  if (difficulty) {
    // If any of the required techniques passed has a higher minimum difficulty than the difficulty passed, return an error
    reqTechs?.forEach((tech) => {
      if (
        DifficultyValues[cost[tech].difficulty] >
          DifficultyValues[difficulty as Difficulty]
      ) {
        throw new Error("Required techniques don't match difficulty level");
      }
    });
  }
  // const startTimer = performance.now();
  const targetRanges = {
    easy: { min: 4300, max: 5500 },
    medium: { min: 5800, max: 6900 },
    hard: { min: 6900, max: 93000 },
    insane: { min: 8300, max: 14000 },
    diabolical: { min: 11000, max: 25000 },
  };

  // If no difficulty, default to medium
  difficulty = difficulty ?? "medium";
  // Get target range
  const targetRange = targetRanges[difficulty];

  // First get a filled puzzle
  let puzzle = createFilledPuzzle();

  // Array to hold removed numbers
  let removed: any[] = [];
  // Iterations, so we can reset if needed
  let iterations: number = 0;
  let totalCost: number = 0;
  const populateAddresses = () => {
    let addresses: Address[] = [];
    for (let rowIndex = 1; rowIndex <= 5; rowIndex++) {
      for (let colIndex = 1; colIndex <= 9; colIndex++) {
        const address = {
          r: rowIndex,
          c: colIndex,
        };
        if (rowIndex == 5 && colIndex == 6) {
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

  // Remove pairs till we've reached our target
  while (totalCost <= targetRange.min ){
    iterations++;
    let firstAddress: number;
    let secondAddress: number;
    let firstNumber: Cell["number"];
    let secondNumber: Cell["number"];

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
    let attemptedPuzzle: Puzzle;
    const attemptedPuzzleObj = solver(
      JSON.parse(JSON.stringify(puzzle)),
      difficulty,
    );
    attemptedPuzzle = attemptedPuzzleObj.puzzle;
    totalCost = attemptedPuzzleObj.totalCost;
    cost = attemptedPuzzleObj.cost as ScoreClass;
    // Validate, check if valid, AND check if full
    const valid = validatePuzzle(attemptedPuzzle) &&
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
  console.log(iterations / 500);
  console.log(`\n\ntotalCost: ${totalCost}`);
  console.log(cost);
  return puzzle;
};
