/* eslint-disable */
import Validation from "./serverSidePuzzleValidation.ts";
import type {
  NumberUpdate,
  Puzzle,
  Users,
  PencilMarkUpdate,
  Cell,
} from "../client/src/types.d.ts";
/* eslint-enable */

class Updates {
  sudokuObj: { puzzle: Puzzle; solved?: Puzzle };
  users: Users;
  validation: Validation;

  constructor(
    sudokuObj: { puzzle: Puzzle; solved?: Puzzle },
    users: Users,
  ) {
    this.sudokuObj = sudokuObj;
    this.users = users;
    this.validation = new Validation(this.sudokuObj.puzzle);
  }

  updateSudokuObj(sudokuObj: { puzzle: Puzzle; solved?: Puzzle }) {
    this.sudokuObj = sudokuObj;
    this.validation = new Validation(this.sudokuObj.puzzle);
  }

  updateNumber(
    { numberUpdate }: { numberUpdate: NumberUpdate },
    // Denotes if we're undoing a move
    undo = false,
  ) {
    let { address, number, id, associatedPencilMarkUpdates } = numberUpdate;
    const originalState = {
      ...this.sudokuObj.puzzle[`r${address.r}c${address.c}`],
    };
    this.sudokuObj.puzzle[`r${address.r}c${address.c}`].number = number;
    this.sudokuObj.puzzle[
      `r${address.r}c${address.c}`
    ] = this.validation.validateSquare(
      this.sudokuObj.puzzle[`r${address.r}c${address.c}`],
    );
    // If not undoing a move add to moves
    if (!undo) {
      // If no associated PencilMarkUpdates, assemble them
      associatedPencilMarkUpdates = associatedPencilMarkUpdates ??
        this.updatePeerCandidates(
          this.sudokuObj.puzzle[`r${address.r}c${address.c}`],
          id,
        );

      const inverseUpdate: NumberUpdate = { ...numberUpdate };
      // Update numberUpdate
      inverseUpdate.associatedPencilMarkUpdates = associatedPencilMarkUpdates;
      // Update number to original
      inverseUpdate.number = originalState.number;
      // Add to moves
      this.users[id].moves.push({ numberUpdate: inverseUpdate });
    } else {
      // Undo each pencilMarkUpdate
      associatedPencilMarkUpdates?.forEach((pencilMarkUpdate) => {
        this.updatePencilMarks({ pencilMarkUpdate }, true);
      });
    }
  }

  // Updates the candidates in each peer of a cell that has been updated
  updatePeerCandidates = (cell: Cell, id: string) => {
    // Assemble peers
    const { row, col, square } = this.validation.getPeers(cell);
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
          ...this.sudokuObj.puzzle[`r${peer.address.r}c${peer.address.c}`]
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
          id: id,
        };
        // Push update to array
        pencilMarkUpdates.push(inverseUpdate);
      }
    });
    return pencilMarkUpdates;
  };

  updatePencilMarks(
    { pencilMarkUpdate }: { pencilMarkUpdate: PencilMarkUpdate },
    // Denotes if we're undoing a move
    undo = false,
  ) {
    const { address, pencilMark, pencilMarks, id } = pencilMarkUpdate;
    // To return original state for undoing
    const originalState: boolean[] = [
      ...this.sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks,
    ];
    // If pencilMark not delete, and we don't have pencilMarks obj
    if (pencilMark != "delete" && !pencilMarks) {
      // Toggle mark
      this.sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks[
        Number(pencilMark) - 1
      ] = !this.sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks[
        Number(pencilMark) - 1
      ];
    } else if (pencilMarks) {
      this.sudokuObj.puzzle[
        `r${address.r}c${address.c}`
      ].pencilMarks = pencilMarks;
    } else {
      this.sudokuObj.puzzle[`r${address.r}c${address.c}`].pencilMarks = [
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
    // If not undoing a move
    if (!undo) {
      const inverseUpdate: PencilMarkUpdate = { ...pencilMarkUpdate };
      // Update request
      inverseUpdate.pencilMarks = originalState;
      // Update moves
      this.users[id].moves.push({ pencilMarkUpdate: inverseUpdate });
      // If not from server
    }
  }
  undo(userId: string) {
    // Check that there is in fact a move to undo
    if (this.users[userId].moves.length) {
      // Get last move for this player
      const move = this.users[userId].moves.pop();
      // Check if the move is a number update
      if (move!.numberUpdate) {
        this.updateNumber({ numberUpdate: move!.numberUpdate }, true);
        // Check if it's a pencilMarkUpdate
      } else if (move!.pencilMarkUpdate) {
        console.log("sending");
        this.updatePencilMarks(
          { pencilMarkUpdate: move!.pencilMarkUpdate },
          true,
        );
      }
    }
  }
}

export default Updates;
