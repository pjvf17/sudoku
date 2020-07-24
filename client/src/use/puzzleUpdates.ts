/* eslint-disable */
import { ref, toRaw } from "vue";
import { setPuzzle, validateSquare } from "./puzzleValidation";
import {NumberUpdate, Puzzle, Users, PencilMarkUpdate} from "../types"
/* eslint-enable */

interface Ref<T> {
  value: T;
}

class Updates {
  sudokuObj: Ref<Puzzle>;
  users: Ref<Users>;

  constructor(puzzle: Ref<Puzzle>, users: Ref<Users>) {
    this.sudokuObj = puzzle;
    this.users = users;
    setPuzzle(puzzle);
  }

  updateNumber(
    { numberUpdate }: { numberUpdate: NumberUpdate },
    undo?: boolean
  ) {
    let { address, number, id } = numberUpdate;

    const originalState = {
      ...this.sudokuObj.value[`r${address.r}c${address.c}`],
    };
    this.sudokuObj.value[`r${address.r}c${address.c}`].number = number;
    this.sudokuObj.value[`r${address.r}c${address.c}`] = validateSquare(
      this.sudokuObj.value[`r${address.r}c${address.c}`]
    );
    // If not undoing a move
    if (!undo) {
      const inverseUpdate: NumberUpdate = { ...numberUpdate };
      // Update number to original
      inverseUpdate.number = originalState.number;
      // Edit moves
      this.users.value[id].moves.push({ numberUpdate: inverseUpdate });
    }
  }

  updatePencilMarks(
    { pencilMarkUpdate }: { pencilMarkUpdate: PencilMarkUpdate },
    undo?: boolean
  ) {
    let { address, pencilMark, pencilMarks, id } = pencilMarkUpdate;
    // To return original state for undoing
    const originalState:boolean[] = [
      ...this.sudokuObj.value[`r${address.r}c${address.c}`].pencilMarks,
    ];
    // If pencilMark not delete, and we don't have pencilMarks obj
    if (pencilMark != "delete" && !pencilMarks) {
      // Toggle mark
      this.sudokuObj.value[`r${address.r}c${address.c}`].pencilMarks[
        Number(pencilMark) - 1
      ] = !this.sudokuObj.value[`r${address.r}c${address.c}`].pencilMarks[
        Number(pencilMark) - 1
      ];
    } else if (pencilMarks) {
      this.sudokuObj.value[
        `r${address.r}c${address.c}`
      ].pencilMarks = pencilMarks;
    } else {
      this.sudokuObj.value[`r${address.r}c${address.c}`].pencilMarks = [
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
      const inverseUpdate:PencilMarkUpdate = { ...pencilMarkUpdate };
      // Update request
      inverseUpdate.pencilMarks = originalState;
      // Update moves
      this.users.value[id].moves.push({ pencilMarkUpdate: inverseUpdate });
    }
  }
  undo(userId: string) {
    // Check that there is in fact a move to undo
    if (this.users.value[userId].moves.length) {
      // Get last move for this player
      const move = this.users.value[userId].moves.pop();
      // Check if the move is a number update
      if (move!.numberUpdate) {
        this.updateNumber({ numberUpdate: move!.numberUpdate }, true);
        // Check if it's a pencilMarkUpdate
      } else if (move!.pencilMarkUpdate) {
        this.updatePencilMarks(
          { pencilMarkUpdate: move!.pencilMarkUpdate },
          true
        );
      }
    }
  }
}

export default Updates;
