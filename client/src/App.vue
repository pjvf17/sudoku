<template>
  <div id="app">
    <div class="pane">
      <table>
        <tbody>
          <tr v-for="(row, rowIndex) in sudokuObj.puzzle" :key="rowIndex">
            <td
              v-for="(cell, colIndex) in row"
              :key="`${colIndex}+${rowIndex}-td`"
              :id="`${colIndex}+${rowIndex}-td-id`"
              :style="{'background-color': cell.focus}"
            >
              <input
                :value="cell.number"
                @keydown.exact="handleInput({
                cell, 
                row: rowIndex, 
                col: colIndex, 
                key: $event.key, 
                $event,
              })"
                type="text"
                :name="`${colIndex}+${rowIndex}`"
                :id="`${colIndex}+${rowIndex}`"
                :class="[{'border-right': ((colIndex+1) % 3) == 0, 'border-bottom': ((rowIndex+1) % 3) == 0, 'border-left': colIndex == 0, 'border-top': rowIndex == 0, bold: cell.given, invalid: !cell.valid.value }, 'sudoku-board-cell']"
                :disabled="cell.given"
                :ref="el => { inputs[rowIndex][colIndex] = el }"
                @click="handleClick({row: rowIndex, col: colIndex})"
                :style="{ 'background-color': focused[`${colIndex}-${rowIndex}`]}"
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

import { ref, onBeforeUnmount, onBeforeUpdate, toRaw } from "vue";
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
    const id = ref({});
    const focused = ref({});

    socket.onmessage = function({ data }) {
      const {
        color: sentColor,
        sudokuObj: sentSudokuObj,
        id: sentid
      } = JSON.parse(data);
      const { puzzle: sentPuzzle, users: sentUsers } = sentSudokuObj
        ? sentSudokuObj
        : {};
      if (sentPuzzle) {
        sudokuObj.value.puzzle = sentPuzzle;
        sudokuObj.value.users = sentUsers;
        focused.value = {};
        checkFocus();
      }
      if (sentColor) {
        color.value = sentColor;
        document.documentElement.style.setProperty(`--color`, `${sentColor}`);
      }
      if (sentid) {
        id.value = sentid;
      }
    };

    const checkFocus = () => {
      for (
        let userIndex = 0;
        userIndex < sudokuObj.value.users.length;
        userIndex++
      ) {
        const user = sudokuObj.value.users[userIndex];
        if (user.id != id.value) {
          focused.value[`${user.focus.col}-${user.focus.row}`] = user.color;
        }
      }
    };
    // For reference: https://composition-api.vuejs.org/api.html#template-refs

    // For refs
    const inputs = ref([]);
    inputs.value.push([]);
    inputs.value.push([]);
    inputs.value.push([]);
    inputs.value.push([]);
    inputs.value.push([]);
    inputs.value.push([]);
    inputs.value.push([]);
    inputs.value.push([]);
    inputs.value.push([]);

    // make sure to reset the refs before each update
    onBeforeUpdate(() => {
      // console.log(toRaw(inputs.value));
      inputs.value = [];
      inputs.value.push([]);
      inputs.value.push([]);
      inputs.value.push([]);
      inputs.value.push([]);
      inputs.value.push([]);
      inputs.value.push([]);
      inputs.value.push([]);
      inputs.value.push([]);
      inputs.value.push([]);
    });

    const getUser = () => {
      let count = 0;
      while (count < sudokuObj.value.users.length) {
        if (sudokuObj.value.users[count].id == id.value) {
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
        if (!inputs.value[row + rowDir][col + colDir].disabled) {
          inputs.value[row + rowDir][col + colDir].focus();
          sudokuObj.value.users[getUser()].focus = {
            row: row + rowDir,
            col: col + colDir
          };
          focused.value = {};
          checkFocus();
          socket.send(JSON.stringify({ sudokuObj: sudokuObj.value }));
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
        // console.log(sudokuObj.value.puzzle[row][col]);
        // console.log(value);
        sudokuObj.value.puzzle[row][col].number = key;
        // console.log(sudokuObj.value.puzzle[row][col]);
        // Send to socket server
        // console.log("sending");
        // console.log(toRaw(sudokuObj.value.puzzle));
        socket.send(JSON.stringify({ sudokuObj: sudokuObj.value }));
      } else if (key == "Backspace") {
        $event.preventDefault();
        sudokuObj.value.puzzle[row][col].number = "";

        // console.log(toRaw(sudokuObj.value.puzzle));
        socket.send(JSON.stringify({ sudokuObj: sudokuObj.value }));
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
      sudokuObj.value.users[getUser()].focus = {
        row,
        col
      };
      focused.value = {};
      checkFocus();
      socket.send(JSON.stringify({ sudokuObj: sudokuObj.value }));
    };
    return {
      sudokuObj,
      handleInput,
      handleClick,
      inputs,
      color,
      id,
      checkFocus,
      focused
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
