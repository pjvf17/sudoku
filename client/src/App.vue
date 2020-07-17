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
      <button
        @click="firstPassCandidateCalculator(sudokuObj.puzzle)"
        class="button"
      >Fill In Candiadtes?</button>
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
        console.log(sentSudokuObj);
        console.log(getPeers(sudokuObj.value.puzzle["r1c1"]));

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
        sudokuObj.value.puzzle[`r${address.r}c${address.c}`] = validateSquare(
          sudokuObj.value.puzzle[`r${address.r}c${address.c}`]
        );
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

    const makeRows = computed(() => {
      let rows = {};
      for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
        rows[`r${rowIndex}`] = [];
        for (let colIndex = 1; colIndex <= 9; colIndex++) {
          rows[`r${rowIndex}`].push(
            sudokuObj.value.puzzle[`r${rowIndex}c${colIndex}`]
          );
        }
      }
      return rows;
    });
    const makeCols = computed(() => {
      let cols = {};
      for (let colIndex = 1; colIndex <= 9; colIndex++) {
        cols[`c${colIndex}`] = [];
        for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
          cols[`c${colIndex}`].push(
            sudokuObj.value.puzzle[`r${rowIndex}c${colIndex}`]
          );
        }
      }
      return cols;
    });
    const getSquare = cell => {
      let s13 = [1, 2, 3];
      let s46 = [4, 5, 6];
      let s79 = [7, 8, 9];

      let square;
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
    const makeSquares = computed(() => {
      let squares = {
        s1: [],
        s2: [],
        s3: [],
        s4: [],
        s5: [],
        s6: [],
        s7: [],
        s8: [],
        s9: []
      };

      for (let rowIndex = 1; rowIndex <= 9; rowIndex++) {
        for (let colIndex = 1; colIndex <= 9; colIndex++) {
          squares[
            getSquare(sudokuObj.value.puzzle[`r${rowIndex}c${colIndex}`])
          ].push(sudokuObj.value.puzzle[`r${rowIndex}c${colIndex}`]);
        }
      }
      return squares;
    });

    const getPeers = cell => {
      // Define the three units we're pulling from
      console.log(cell);
      // console.log(toRaw(makeCols.value));
      // console.log(toRaw(makeRows.value));
      // console.log(toRaw(makeSquares.value));
      let row,
        col,
        square = [];
      row = makeRows.value[`r${cell.address.r}`];
      col = makeCols.value[`c${cell.address.c}`];
      square = makeSquares.value[getSquare(cell)];

      return { row, col, square };
    };

    const validateSquare = cell => {
      // Skip givens
      if (cell.given) {
        return cell;
      }
      const { row, col, square } = getPeers(cell);
      const peers = [...row, ...col, ...square];
      // console.log("validateSquare");
      let valid = true;
      for (let cellIndex = 0; cellIndex < peers.length; cellIndex++) {
        // Skip the cell we're checking
        if (peers[cellIndex].address != cell.address) {
          if (peers[cellIndex].number == cell.number) {
            valid = false;
            cell.valid.value = false;
          }
        }
        // Stop at first invalid
        if (!valid) {
          break;
        }
      }
      // If valid is still valid, reset cell
      if (valid) {
        cell.valid.value = true;
      }
      return cell;
    };

    const checkFocus = computed(() => {
      const focused = {};
      for (const userId in users.value) {
        if (Object.prototype.hasOwnProperty.call(users.value, userId)) {
          const user = users.value[userId];
          console.log(user.color.slice(0, 6));
          focused[`r${user.focus.row}c${user.focus.col}`] = user.color;
        }
      }
      return focused;
    });

    // Highlight other instances of numbers you are currently on
    const highlightNumbers = computed(() => {
      // Get your user
      const user = users.value[id.value];
      console.log("triggered");
      console.log(toRaw(user));

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
      console.log(number);
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

    const firstPassCandidateCalculator = puzzle => {
      const rows = makeRows;
      const cols = makeCols;
      const squares = makeSquares;
      for (let iteration = 0; iteration < 3; iteration++) {
        let units;
        switch (iteration) {
          case 0:
            units = rows;
            break;
          case 1:
            units = cols;
            break;
          case 2:
            units = squares;
            break;
        }
        // Update candidates for each cell
        for (const unitAddress in units) {
          // if (units.hasOwnProperty(unitAddress)) {
          const unit = units[unitAddress];
          // Create an array of the numbers in the row

          // First, create an array of the values
          const rowNumbers = Object.values(units[unitAddress])
            // Second, parse each value as a number
            .map(el => parseInt(el.number))
            // Third, filter out any non numbers
            .filter(el => !isNaN(el));

          // Create an array of numbers from 1 to 9
          let unseenNumbers = Array.from(Array(9), (_, i) => i + 1);
          // For each number in the row
          unseenNumbers = unseenNumbers.filter(number => {
            // Return only the numbers not in the row
            return !rowNumbers.includes(number);
          });
          // For each non number in the row, add the unseenNumbers to the candidates array
          for (const cellAddress in unit) {
            // if (unit.hasOwnProperty(cellAddress)) {
            if (unit[cellAddress].number == ".") {
              // If we're not on the first iteration of both the inner and outer loops
              // Get previous candidates of cell
              const previousCandidates =
                iteration == 0
                  ? Array.from(Array(9), (_, i) => i + 1)
                  : unit[cellAddress].candidates;
              // Reset candidates
              unit[cellAddress].candidates = [];
              unseenNumbers
                // Include only what previous candidates also has
                .filter(number => {
                  return previousCandidates.includes(number);
                })
                // Add each number to the candidates
                .forEach(number => {
                  unit[cellAddress].candidates.push(number);
                });
            }
            // }
          }
          // }
        }
      }
      console.log(puzzle);
      return puzzle;
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
          sudokuObj.value.puzzle[`r${row}c${col}`] = validateSquare(
            sudokuObj.value.puzzle[`r${row}c${col}`]
          );
          console.log(toRaw(sudokuObj.value.puzzle[`r${row}c${col}`]));
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
          sudokuObj.value.puzzle[`r${row}c${col}`] = validateSquare(
            sudokuObj.value.puzzle[`r${row}c${col}`]
          );

          // Send server update
          let { address } = sudokuObj.value.puzzle[`r${row}c${col}`];
          socket.send(
            JSON.stringify({ numberUpdate: { address, number: "" } })
          );
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
      console.log("starting new game");
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
      firstPassCandidateCalculator,
      highlightNumbers
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
