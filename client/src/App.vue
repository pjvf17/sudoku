<template>
  <div id="app">
    <div class="pane">
      <table>
        <tbody>
          <tr v-for="rowIndex in 9" :key="rowIndex">
            <td
              v-for="colIndex in 9"
              :key="`r${rowIndex}c${colIndex}-td`"
              :id="`r${rowIndex}c${colIndex}-td-id`"
              :class="[{
                'border-right': ((colIndex) % 3) == 0, 
                'border-bottom': ((rowIndex) % 3) == 0, 
                'border-left': colIndex == 0, 'border-top': rowIndex == 0, 
                invalid: !sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].valid.value,
                'highlight-number': highlightNumbers == sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].number
              }]"
              @click="handleClick({row: rowIndex, col: colIndex})"
              :style="{ 
                'background-color': ((selfFocus.row == rowIndex 
                || selfFocus.col == colIndex) 
                && !checkFocus[`r${rowIndex}c${colIndex}`]) 
                ? `${color.slice(0,7)}44` : checkFocus[`r${rowIndex}c${colIndex}`]
              }"
            >
              <svg class="inputReplacement">
                <text
                  :class="[{bold: sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].given, invalid: !sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].valid.value}, 'svgText']"
                  x="50%"
                  y="60%"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  :ref="el => { inputs[`r${rowIndex}c${colIndex}`] = el }"
                >{{sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].number}}</text>
                <g
                  v-for="(pencilMark, index) in sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].pencilMarks"
                  :key="index"
                >
                  <circle
                    v-if="sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].pencilMarks[index] && sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].number == ''"
                    :class="[{'circle-number': highlightNumbers == index + 1}]"
                    :cy="9+(22*Math.floor(index / 3))"
                    :cx="8.5+(22 * (index % 3))"
                    r="8"
                  />
                  <text
                    v-if="sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].number == ''"
                    dominant-baseline="middle"
                    text-anchor="middle"
                  >
                    <tspan
                      style="font-size: 14px"
                      :y="10+(22*Math.floor(index / 3))"
                      :x="8+(22 * (index % 3))"
                      v-if="sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].pencilMarks[index]"
                    >{{index+1}}</tspan>
                  </text>
                </g>
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
      <span
        class="notation-text"
        style="color: white"
      >{{ notating ? "Notation Mode On" : "Notation Mode Off" }}</span>
      <button @click="newGame()" class="button">Start New Game</button>
      <button @click="firstPassCandidateCalculator()" class="button">Fill In Candidates</button>
    </div>
  </div>
</template>

<script>
console.log(process.env.VUE_APP_WS_URL);

const wsUrl = process.env.VUE_APP_WS_URL ?? "ws://tealog.xyz:8010";
console.log(wsUrl);

const socket = new WebSocket(wsUrl);
/* eslint-disable */

import { ref, onBeforeUnmount, onBeforeUpdate, toRaw, computed } from "vue";
import {
  setPuzzle,
  validateSquare,
  firstPassCandidateCalculator
} from "./use/puzzleValidation.js";
import updates from "./use/puzzleUpdates";

/* eslint-enable */

export default {
  setup() {
    onBeforeUnmount(() => {
      socket.close(1000, "logging off");
    });

    socket.onopen = function() {
      console.log("connection established");
    };
    const color = ref({});
    const sudokuObj = ref({});
    const users = ref({});
    const id = ref({});
    const notating = ref(false);
    // const focused = ref({});

    socket.onmessage = function({ data }) {
      const {
        // Color assignment, sent once
        color: sentColor,
        // Sudoku puzzle, sent once
        sudokuObj: sentSudokuObj,
        // Id assignment, sent once
        id: sentid,
        // Users obj, sent once
        users: sentUsers,
        // FocusUpdate, sent whenver someone moves
        focusUpdate,
        // NumberUpdate, sent whenever someone changes a number
        numberUpdate,
        // PencilMarkUpdate, sent whenever someone changes a pencil mark
        pencilMarkUpdate
      } = JSON.parse(data);

      const {
        puzzle: sentPuzzle,
        sentRows,
        sentCols,
        sentSquares
      } = sentSudokuObj ? sentSudokuObj : {};

      if (sentSudokuObj) {
        sudokuObj.value.puzzle = sentPuzzle;
        sudokuObj.value.rows = sentRows;
        sudokuObj.value.cols = sentCols;
        sudokuObj.value.squares = sentSquares;
        setPuzzle(sudokuObj);
        updates.setPuzzle(sudokuObj);
      }
      if (sentUsers) {
        users.value = sentUsers;
      }
      if (sentColor) {
        color.value = sentColor;
        document.documentElement.style.setProperty(`--color`, `${sentColor}`);
      }
      if (sentid) {
        id.value = sentid;
      }
      // update focus
      if (focusUpdate) {
        const { id, focus } = focusUpdate;
        users.value[id].focus = focus;
      }
      // update a number
      if (numberUpdate) {
        updates.updateNumber({ numberUpdate });
      }
      // update a pencilmark
      if (pencilMarkUpdate) {
        updates.updatePencilMarks({ pencilMarkUpdate });
      }
    };

    const checkFocus = computed(() => {
      const focused = {};
      for (const userId in users.value) {
        if (Object.prototype.hasOwnProperty.call(users.value, userId)) {
          const user = users.value[userId];
          focused[`r${user.focus.row}c${user.focus.col}`] = user.color;
        }
      }
      return focused;
    });

    // Highlight other instances of numbers you are currently on
    const highlightNumbers = computed(() => {
      // Get your user
      const user = users.value[id.value];

      let number = null;
      // If user is focused
      if (user.focus.row != null) {
        // Check if there is a number in the cell
        if (
          sudokuObj.value.puzzle[`r${user.focus.row}c${user.focus.col}`]
            .number != ""
        ) {
          number =
            sudokuObj.value.puzzle[`r${user.focus.row}c${user.focus.col}`]
              .number;
        }
      }
      return number;
    });

    const selfFocus = computed(() => {
      return users.value[id.value].focus;
    });
    // For reference: https://composition-api.vuejs.org/api.html#template-refs

    // For refs
    const inputs = ref({});

    // make sure to reset the refs before each update
    onBeforeUpdate(() => {
      inputs.value = {};
    });

    const move = (row, col, rowDir, colDir) => {
      row = row + rowDir;
      col = col + colDir;
      // Don't go beyond edge
      if (row > 9 || col > 9 || row < 1 || col < 1) {
        return;
      }
      inputs.value[`r${row}c${col}`].focus();
      users.value[id.value].focus = { row, col };
      socket.send(
        JSON.stringify({
          focusUpdate: {
            id: id.value,
            focus: { row, col }
          }
        })
      );
    };

    const handleInput = ({ key, event }) => {
      const acceptedKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const arrowKeys = ["ArrowDown", "ArrowRight", "ArrowLeft", "ArrowUp"];
      // Address of cursor
      let { row, col } = users.value[id.value].focus;
      // Check for null
      if (row == null || col == null) {
        // Set to top right
        row = 1;
        col = 1;
        users.value[id.value].focus = { row, col };
        socket.send(
          JSON.stringify({
            focusUpdate: {
              id: id.value,
              focus: { row, col }
            }
          })
        );
        // end function
        return;
      }
      // Only allow change of non-givens
      if (
        !sudokuObj.value.puzzle[`r${row}c${col}`].given &&
        acceptedKeys.includes(key)
      ) {
        event.preventDefault();
        if (notating.value) {
          let { address } = sudokuObj.value.puzzle[`r${row}c${col}`];
          // Create pencilMarkUpdate object
          const pencilMarkUpdate = { address, pencilMark: key };
          // Update local
          updates.updatePencilMarks({ pencilMarkUpdate });
          // Update server
          socket.send(JSON.stringify({ pencilMarkUpdate }));
        } else {
          let { address } = sudokuObj.value.puzzle[`r${row}c${col}`];
          // Create numberupdate object
          const numberUpdate = { address, number: key };
          // Change local copy of puzzle
          updates.updateNumber({ numberUpdate });
          // Send server update
          socket.send(JSON.stringify({ numberUpdate }));
        }
      } else if (key == "Backspace") {
        event.preventDefault();

        // Check if in notation mode
        if (notating.value) {
          let { address } = sudokuObj.value.puzzle[`r${row}c${col}`];
          // Create pencilMarkUpdate object
          const pencilMarkUpdate = { address, pencilMark: "delete" };
          // Update local
          updates.updatePencilMarks({ pencilMarkUpdate });
          // Update server
          socket.send(
            JSON.stringify({
              pencilMarkUpdate
            })
          );
        } else {
          let { address } = sudokuObj.value.puzzle[`r${row}c${col}`];
          // Create numberupdate object
          const numberUpdate = { address, number: "" };
          // Change local copy of puzzle
          updates.updateNumber({ numberUpdate });
          // Send server update
          socket.send(JSON.stringify({ numberUpdate }));
        }
      } else if (arrowKeys.includes(key)) {
        event.preventDefault();
        switch (key) {
          case "ArrowRight":
            move(row, col, 0, 1, "row");
            break;
          case "ArrowLeft":
            move(row, col, 0, -1, "row");
            break;
          case "ArrowDown":
            move(row, col, 1, 0, "col");
            break;
          case "ArrowUp":
            move(row, col, -1, 0, "col");
            break;
        }
      } else if (key == "Shift") {
        notating.value = !notating.value;
      } else if (key.toLowerCase() == "z" && event.metaKey) {
        socket.send(JSON.stringify({ undo: true }));
      }
    };

    document.body.addEventListener("keydown", function() {
      handleInput({ key: event.key, event });
    });

    const handleClick = ({ row, col }) => {
      users.value[id.value].focus = { row, col };
      socket.send(
        JSON.stringify({
          focusUpdate: {
            id: id.value,
            focus: { row: row, col: col }
          }
        })
      );
    };

    const newGame = () => {
      socket.send(JSON.stringify({ newGame: true }));
    };

    return {
      selfFocus,
      sudokuObj,
      newGame,
      handleInput,
      handleClick,
      inputs,
      color,
      id,
      checkFocus,
      users,
      notating,
      highlightNumbers,
      firstPassCandidateCalculator
    };
  }
};
</script>

<style lang="scss">
@import "node_modules/nord/src/sass/nord.scss";

body {
  font-family: Consolea, "Courier New", Courier, monospace;
  margin: 0;
  padding: 0;
}
#app {
  // font-family: 'Courier New', Courier, monospace;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: $nord1;
}

$border: 2px solid black;

.pane {
  padding: 1em;
  border-radius: 3px;
  box-shadow: 0px 0px 15px 0px rgba($color: #000000, $alpha: 0.3);
  margin: auto;
  display: flex;
  flex-direction: column;
}

.button {
  width: 30%;
  margin: auto;
  margin-top: 1em;
  padding: 1em;
  border-radius: 3px;
  box-shadow: 0px 0px 15px 0px rgba($color: #000000, $alpha: 0.3);
  border: none;
  background-color: $nord6;
}

.notation-text {
  margin: auto;
  margin-top: 0.5em;
  width: 30%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  margin: auto;
}

tr {
  background-color: $nord5;
}

td {
  padding: 0;
  margin: 0;
  line-height: 20px;
  width: 63px;
  height: 63px;
  background-color: $nord5;
  border: 1px solid darken($color: $nord5, $amount: 10);
  transition: 0.1s ease;

  // background-color: var(--color);

  input,
  .inputReplacement {
    margin: 0;
    padding: 0;
    font-size: 40px;
    line-height: 20px;
    width: 63px;
    height: 63px;
    text-align: center;
    color: grey;
    font-style: italic;
    font-family: Consolea, "Courier New", Courier, monospace;
    caret-color: transparent !important;
    z-index: 3;
    display: block;
    max-height: 100%;

    &:focus {
      outline: none;
      // opacity: 0.5;
    }

    text {
      fill: grey;
      &.invalid {
        fill: red;
      }
    }

    // &:disabled {
    // background-color: white;
    // }
  }
}

.svgText {
  z-index: 3;
  &.bold {
    fill: black;
  }
}

circle {
  transition: 0.1s ease;

  fill: transparent;
  &.circle-number {
    fill: darken($color: $nord5, $amount: 15);
  }
}

.border-right {
  border-right: $border;
}

.highlight-number {
  background-color: darken($color: $nord5, $amount: 15);
}

.border-left {
  border-left: $border;
}

.border-bottom {
  border-bottom: $border;
}

.border-top {
  border-top: $border;
}

.bold {
  font-style: normal;
  color: black;
  font-weight: 600;
}
</style>
