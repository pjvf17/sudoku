/* eslint-disable */
import { ref, toRaw } from "vue";
import { setPuzzle, validateSquare } from "./puzzleValidation";
import { NumberUpdate, Puzzle, PencilMarkUpdate } from "../../../types";
/* eslint-enable */

interface Ref<T> {
  value: T;
}

const updates = {
  sudokuObj: ref<Puzzle>(),
  users: ref({}),

  setPuzzle: function(obj: Ref<Puzzle>) {
    this.sudokuObj = obj;
    // Sets puzzle on validation
    setPuzzle(obj);
  },

  setUsers: function(users) {
    this.users = users;
  },

  updateNumber: function(
    { numberUpdate }: { numberUpdate: NumberUpdate },
    undo?: boolean
  ) {
    console.log(toRaw(this.sudokuObj.value));
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
      const inverseUpdate = { ...numberUpdate };
      // Update number to original
      inverseUpdate.number = originalState.number;
      // Edit moves
      this.users.value[id].moves.push({ numberUpdate: inverseUpdate });
    }
  },

  updatePencilMarks: function(
    { pencilMarkUpdate }: { pencilMarkUpdate: PencilMarkUpdate },
    undo?: boolean
  ) {
    let { address, pencilMark, pencilMarks, id } = pencilMarkUpdate;
    // To return original state for undoing
    const originalState = [
      ...this.sudokuObj.value[`r${address.r}c${address.c}`].pencilMarks,
    ];
    // If pencilMark not delete, and we don't have pencilMarks obj
    if (pencilMark != "delete" && !pencilMarks) {
      // Toggle mark
      this.sudokuObj.value[`r${address.r}c${address.c}`].pencilMarks[
        pencilMark - 1
      ] = !this.sudokuObj.value[`r${address.r}c${address.c}`].pencilMarks[
        pencilMark - 1
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
      const inverseUpdate = { ...pencilMarkUpdate };
      // Update request
      inverseUpdate.pencilMarks = originalState;
      // Update moves
      this.users.value[id].moves.push({ pencilMarkUpdate: inverseUpdate });
    }
  },
  undo: function(userId: string) {
    // Get last move for this player
    const move = this.users.value[userId].moves.pop();
    // Check if the move is a number update
    if (move.numberUpdate) {
      this.updateNumber({ numberUpdate: move.numberUpdate }, true);
      // Check if it's a pencilMarkUpdate
    } else if (move.pencilMarkUpdate) {
      this.updatePencilMarks({ pencilMarkUpdate: move.pencilMarkUpdate }, true);
    }
  },
};

export default updates;
