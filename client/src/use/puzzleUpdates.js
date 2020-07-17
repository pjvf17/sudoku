import { ref } from "vue";
import { setPuzzle, validateSquare } from "./puzzleValidation";

const updates = {
  sudokuObj: ref({}),

  setPuzzle: function(obj) {
    this.sudokuObj = obj;
    setPuzzle(obj);
  },

  updateNumber: function({numberUpdate}) {
    let { address, number } = numberUpdate;
    this.sudokuObj.value.puzzle[`r${address.r}c${address.c}`].number = number;
    this.sudokuObj.value.puzzle[`r${address.r}c${address.c}`] = validateSquare(
      this.sudokuObj.value.puzzle[`r${address.r}c${address.c}`]
    );
  },
  updatePencilMarks: function({pencilMarkUpdate}) {
    let { address, pencilMark } = pencilMarkUpdate;
    if (pencilMark != "delete") {
      // Toggle mark
      this.sudokuObj.value.puzzle[`r${address.r}c${address.c}`].pencilMarks[
        pencilMark - 1
      ] = !this.sudokuObj.value.puzzle[`r${address.r}c${address.c}`].pencilMarks[
        pencilMark - 1
      ];
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
  },
};

export default updates;
