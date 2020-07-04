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
            >
              <input
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
                :ref="el => { inputs[`r${rowIndex}c${colIndex}`] = el }"
                @click="handleClick({row: rowIndex, col: colIndex})"
                :style="{ 'background-color': checkFocus[`r${rowIndex}c${colIndex}`]}"
              />
            </td>
          </tr>
        </tbody>
      </table>
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
        // // FocusUpdate, sent whenver someone moves
        focusUpdate,
        // // NumberUpdate, sent whenever someone changes a number
        numberUpdate
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
    };

    const checkFocus = computed(() => {
      // reset focus
      const focused = {};
      for (const userId in users.value) {
        if (Object.prototype.hasOwnProperty.call(users.value, userId)) {
          const user = users.value[userId];
          // skip self
          if (user.id != id.value) {
            focused[`r${user.focus.row}c${user.focus.col}`] = user.color;
            // console.log(focused);
          }
        }
      }
      // console.log(focused);
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

    const getUser = () => {
      let count = 0;
      while (count < users.value.length) {
        if (users.value[count].id == id.value) {
          return count;
        }
        count++;
      }
    };

    const recursiveMove = (row, col, rowDir, colDir, dir, count) => {
      try {
        // console.log(row);
        // console.log(col);
        // console.log(rowDir), console.log(colDir), console.log(dir);
        if (!inputs.value[`r${row + rowDir}c${col + colDir}`].disabled) {
          // inputs.value[row + rowDir][col + colDir].focus();
          inputs.value[`r${row + rowDir}c${col + colDir}`].focus();
          // users.value[getUser()].focus = {
          //   row: row + rowDir,
          //   col: col + colDir
          // };
          // focused.value = {};
          // socket.send(JSON.stringify({ sudokuObj: sudokuObj.value }));
          socket.send(
            JSON.stringify({
              focusUpdate: {
                id: id.value,
                focus: { row: row + rowDir, col: col + colDir }
              }
            })
          );
        } else {
          if (dir == "row") {
            // console.log("rowDir");
            // console.log(rowDir);
            if (colDir > 0) {
              colDir++;
            } else if (colDir < 0) {
              colDir--;
            }
          } else if (dir == "col") {
            if (rowDir > 0) {
              rowDir++;
            } else if (rowDir < 0) {
              rowDir--;
            }
          }
          count++;
          if (count > 4) {
            return 0;
          }
          recursiveMove(row, col, rowDir, colDir, dir, count);
        }
      } catch {
        // console.log(err);
        // console.log(row);
        // console.log(col);
        // console.log(rowDir), console.log(colDir), console.log(dir);
        // console.log(toRaw(inputs.value));
      }
    };

    const handleInput = ({ cell, row, col, key, $event }) => {
      const acceptedKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const arrowKeys = ["ArrowDown", "ArrowRight", "ArrowLeft", "ArrowUp"];

      // Only allow change of non-givens
      if (!cell.given && acceptedKeys.includes(key)) {
        $event.preventDefault();
        // Update sudokuObj
        sudokuObj.value.puzzle[`r${row}c${col}`].number = key;

        let { address } = sudokuObj.value.puzzle[`r${row}c${col}`];

        socket.send(JSON.stringify({ numberUpdate: { address, number: key } }));
      } else if (key == "Backspace") {
        $event.preventDefault();
        sudokuObj.value.puzzle[`r${row}c${col}`].number = "";

        let { address } = sudokuObj.value.puzzle[`r${row}c${col}`];

        socket.send(JSON.stringify({ numberUpdate: { address, number: "" } }));
      } else if (arrowKeys.includes(key)) {
        switch (key) {
          case "ArrowRight":
            recursiveMove(row, col, 0, 1, "row");
            break;
          case "ArrowLeft":
            recursiveMove(row, col, 0, -1, "row");
            break;
          case "ArrowDown":
            recursiveMove(row, col, 1, 0, "col");
            break;
          case "ArrowUp":
            recursiveMove(row, col, -1, 0, "col");
            break;
        }
      } else if (key != "Tab") {
        $event.preventDefault();
      }
    };
    const handleClick = ({ row, col }) => {
      // users.value[getUser()].focus = {
      //   row,
      //   col
      // };
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
      // focused,
      users
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

td {
  padding: 0;
  margin: 0;
  line-height: 20px;
  background-color: $nord5;

  input {
    margin: 0;
    padding: 0;
    font-size: 40px;
    width: 63px;
    height: 63px;
    border: 1px solid #ccc;
    text-align: center;
    color: grey;
    font-style: italic;
    font-family: Consolea, "Courier New", Courier, monospace;
    background-color: $nord5;
    caret-color: transparent !important;

    &:focus {
      outline: none;
      // opacity: 0.5;
      background-color: var(--color);
    }

    // &:disabled {
    // background-color: white;
    // }
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
