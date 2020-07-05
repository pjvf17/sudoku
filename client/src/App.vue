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
              :class="[{'border-right': ((colIndex) % 3) == 0, 'border-bottom': ((rowIndex) % 3) == 0, 'border-left': colIndex == 0, 'border-top': rowIndex == 0, invalid: !sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].valid.value }]"
              @click="handleClick({row: rowIndex, col: colIndex})"
              :style="{ 'background-color': checkFocus[`r${rowIndex}c${colIndex}`]}"
            >
              <!-- <input
                :value="sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].number"
                @keydown.exact="handleInput({cell: sudokuObj.puzzle[`r${rowIndex}c${colIndex}`], 
                row: rowIndex, 
                col: colIndex, 
                key: $event.key, 
                $event,
              })"
                type="text"
                :name="`${colIndex}+${rowIndex}`"
                :id="`${colIndex}+${rowIndex}`"
                :class="[{'border-right': ((colIndex) % 3) == 0, 'border-bottom': ((rowIndex) % 3) == 0, 'border-left': colIndex == 0, 'border-top': rowIndex == 0, bold: sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].given, invalid: !sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].valid.value }]"
                :disabled="sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].given"
                @click="handleClick({row: rowIndex, col: colIndex})"
                :style="{ 'background-color': checkFocus[`r${rowIndex}c${colIndex}`]}"
              />-->
              <svg class="inputReplacement">
                <text
                  :class="[{bold: sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].given}, 'svgText']"
                  x="50%"
                  y="60%"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  :ref="el => { inputs[`r${rowIndex}c${colIndex}`] = el }"
                >{{sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].number}}</text>
                <text
                  v-if="sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].number == ''"
                  x="50%"
                  y="60%"
                  dominant-baseline="middle"
                  text-anchor="middle"
                >
                  <tspan
                    style="font-size: 14px"
                    y="13"
                    x="8"
                  >{{ sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].pencilMarks[0] ? 1 : ""}}</tspan>
                  <tspan
                    style="font-size: 14px"
                    y="13"
                    x="30"
                  >{{ sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].pencilMarks[1] ? 2 : ""}}</tspan>
                  <tspan
                    style="font-size: 14px"
                    y="13"
                    x="52"
                  >{{ sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].pencilMarks[2] ? 3 : ""}}</tspan>
                  <tspan
                    style="font-size: 14px"
                    y="35"
                    x="8"
                  >{{ sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].pencilMarks[3] ? 4 : ""}}</tspan>
                  <tspan
                    style="font-size: 14px"
                    y="35"
                    x="30"
                  >{{ sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].pencilMarks[4] ? 5 : ""}}</tspan>
                  <tspan
                    style="font-size: 14px"
                    y="35"
                    x="52"
                  >{{ sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].pencilMarks[5] ? 6 : ""}}</tspan>
                  <tspan
                    style="font-size: 14px"
                    y="57"
                    x="8"
                  >{{ sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].pencilMarks[6] ? 7 : ""}}</tspan>
                  <tspan
                    style="font-size: 14px"
                    y="57"
                    x="30"
                  >{{ sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].pencilMarks[7] ? 8 : ""}}</tspan>
                  <tspan
                    style="font-size: 14px"
                    y="57"
                    x="52"
                  >{{ sudokuObj.puzzle[`r${rowIndex}c${colIndex}`].pencilMarks[8] ? 9 : ""}}</tspan>
                </text>
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
      <span style="color: white">{{ notating ? "Notation Mode On" : "Notiation Mode Off" }}</span>
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
        console.log(sentPuzzle);
        // focused.value = {};
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
        // console.log(focusUpdate);
        const { id, focus } = focusUpdate;
        // console.log(users.value[id]);
        users.value[id].focus = focus;
        // console.log(toRaw(users.value));
      }
      // update a number
      if (numberUpdate) {
        let { address, number } = numberUpdate;
        sudokuObj.value.puzzle[`r${address.r}c${address.c}`].number = number;
      }
      // update a pencilmark
      if (pencilMarkUpdate) {
        let { address, pencilMark } = pencilMarkUpdate;
        if (pencilMark != "delete") {
          // Toggle mark
          sudokuObj.value.puzzle[`r${address.r}c${address.c}`].pencilMarks[
            pencilMark - 1
          ] = !sudokuObj.value.puzzle[`r${address.r}c${address.c}`].pencilMarks[
            pencilMark - 1
          ];
        } else {
          sudokuObj.value.puzzle[`r${address.r}c${address.c}`].pencilMarks = [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
          ];
        }
      }
    };

    const checkFocus = computed(() => {
      // reset focus
      const focused = {};
      for (const userId in users.value) {
        if (Object.prototype.hasOwnProperty.call(users.value, userId)) {
          const user = users.value[userId];
          focused[`r${user.focus.row}c${user.focus.col}`] = user.color;
        }
      }
      return focused;
    });
    // For reference: https://composition-api.vuejs.org/api.html#template-refs

    // For refs
    const inputs = ref({});

    // make sure to reset the refs before each update
    onBeforeUpdate(() => {
      // console.log(toRaw(inputs.value));
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
      // console.log(event);
      // console.log(key);
      // console.log(event);
      const acceptedKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const arrowKeys = ["ArrowDown", "ArrowRight", "ArrowLeft", "ArrowUp"];
      // Address of cursor
      let { row, col } = users.value[id.value].focus;
      // Check for null
      // console.log(row);
      // console.log(col);
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
          console.log(row);
          console.log(col);
          // Toggle notation for number on local copy
          console.log(sudokuObj.value.puzzle[`r${row}c${col}`].pencilMarks);

          sudokuObj.value.puzzle[`r${row}c${col}`].pencilMarks[
            key - 1
          ] = !sudokuObj.value.puzzle[`r${row}c${col}`].pencilMarks[key - 1];
          let { address } = sudokuObj.value.puzzle[`r${row}c${col}`];
          socket.send(
            JSON.stringify({ pencilMarkUpdate: { address, pencilMark: key } })
          );
        } else {
          // Change local copy of puzzle
          sudokuObj.value.puzzle[`r${row}c${col}`].number = key;
          // Send server update
          let { address } = sudokuObj.value.puzzle[`r${row}c${col}`];
          socket.send(
            JSON.stringify({ numberUpdate: { address, number: key } })
          );
        }
      } else if (key == "Backspace") {
        event.preventDefault();

        // Check if in notation mode
        if (notating.value) {
          // Toggle notation for number on local copy
          sudokuObj.value.puzzle[`r${row}c${col}`].pencilMarks = [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
          ];
          let { address } = sudokuObj.value.puzzle[`r${row}c${col}`];
          socket.send(
            JSON.stringify({
              pencilMarkUpdate: { address, pencilMark: "delete" }
            })
          );
        } else {
          // Change local copy of puzzle
          sudokuObj.value.puzzle[`r${row}c${col}`].number = "";
          // Send server update
          let { address } = sudokuObj.value.puzzle[`r${row}c${col}`];
          socket.send(
            JSON.stringify({ numberUpdate: { address, number: "" } })
          );
        }
      } else if (arrowKeys.includes(key)) {
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
    return {
      sudokuObj,
      handleInput,
      handleClick,
      inputs,
      color,
      id,
      checkFocus,
      users,
      notating
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
  border: 1px solid #ccc;
  // background-color: var(--color);

  input,
  .inputReplacement {
    margin: 0;
    padding: 0;
    font-size: 40px;
    width: 63px;
    height: 63px;
    text-align: center;
    color: grey;
    font-style: italic;
    font-family: Consolea, "Courier New", Courier, monospace;
    caret-color: transparent !important;
    z-index: 3;
    &:focus {
      outline: none;
      // opacity: 0.5;
    }

    text {
      fill: grey;
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

.border-right {
  border-right: $border;
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

.invalid {
  color: red;
}
</style>
