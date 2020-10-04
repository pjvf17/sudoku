/* eslint-disable */
import type { Puzzle, Cell, Units, Unit, PencilMarkUpdate, User } from "../client/src/types.d.ts";
/* eslint-enable */



class Validation {
    puzzle: Puzzle;

    constructor(puzzle: Puzzle) {
        this.puzzle = puzzle;
    }

    makeRows = () => {
        let rows: Units = {};
        for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
            // Initialize row
            rows[`r${rowIndex}`] = {};
            for (let colIndex = 1; colIndex <= 9; colIndex++) {
                rows[`r${rowIndex}`][`r${rowIndex}c${colIndex}`] =
                    this.puzzle[`r${rowIndex}c${colIndex}`];
            }
        }
        return rows;
    }
    makeCols = () => {
        let cols: Units = {};
        for (let colIndex = 1; colIndex <= 9; colIndex++) {
            // Initialize col
            cols[`c${colIndex}`] = {};
            for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
                cols[`c${colIndex}`][`r${rowIndex}c${colIndex}`] =
                    this.puzzle[`r${rowIndex}c${colIndex}`];
            }
        }
        return cols;
    }
    getSquare = (cell: Cell): string => {
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
    makeSquares = () => {
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
                squares[this.getSquare(this.puzzle[`r${rowIndex}c${colIndex}`])][
                    `r${rowIndex}c${colIndex}`
                ] = this.puzzle[`r${rowIndex}c${colIndex}`];
            }
        }
        return squares;
    }

    getPeers = (cell: Cell) => {
        const rows: Units = this.makeRows();
        const cols: Units = this.makeCols();
        const squares: Units = this.makeSquares();
        let row: Unit,
            col: Unit,
            square: Unit;
        row = rows[`r${cell.address.r}`];
        col = cols[`c${cell.address.c}`];
        square = squares[this.getSquare(cell)];

        return { row, col, square };
    };

    validateSquare = (cell: Cell) => {
        // Skip givens
        if (cell.given) {
            return cell;
        }
        const { row, col, square } = this.getPeers(cell);
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
                    cell.valid = false;
                }
            }
            // Stop at first invalid
            if (!valid) {
                break;
            }
        }
        // If valid is still valid, reset cell
        if (valid) {
            cell.valid = true;
        }
        return cell;
    };

}
export default Validation