/* eslint-disable */
import { ref, toRaw } from "vue";
import { setPuzzle, validateSquare } from "./puzzleValidation";
/* eslint-enable */

const updates = {
  sudokuObj: ref({}),
  users: ref({}),

  setPuzzle: function(obj) {
    this.sudokuObj = obj;
    // Sets puzzle on validation
    setPuzzle(obj);
  },

  setUsers: function(users) {
    this.users = users;
  },

  updateNumber: function({ numberUpdate }, undo) {
    let { address, number, id } = numberUpdate;

    const originalState = {
      ...this.sudokuObj.value.puzzle[`r${address.r}c${address.c}`],
    };
    this.sudokuObj.value.puzzle[`r${address.r}c${address.c}`].number = number;
    this.sudokuObj.value.puzzle[`r${address.r}c${address.c}`] = validateSquare(
      this.sudokuObj.value.puzzle[`r${address.r}c${address.c}`]
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

  updatePencilMarks: function({ pencilMarkUpdate }, undo) {
    let { address, pencilMark, pencilMarks, id } = pencilMarkUpdate;
    // To return original state for undoing
    const originalState = [
      ...this.sudokuObj.value.puzzle[`r${address.r}c${address.c}`].pencilMarks,
    ];
    // If pencilMark not delete, and we don't have pencilMarks obj
    if (pencilMark != "delete" && !pencilMarks) {
      // Toggle mark
      this.sudokuObj.value.puzzle[`r${address.r}c${address.c}`].pencilMarks[
        pencilMark - 1
      ] = !this.sudokuObj.value.puzzle[`r${address.r}c${address.c}`]
        .pencilMarks[pencilMark - 1];
    } else if (pencilMarks) {
      this.sudokuObj.value.puzzle[
        `r${address.r}c${address.c}`
      ].pencilMarks = pencilMarks;
    } else {
      this.sudokuObj.value.puzzle[`r${address.r}c${address.c}`].pencilMarks = [
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
  undo: function(userId) {
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
