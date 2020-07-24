<template>
  <div id="app">
    <div class="pane" v-if="sudokuObj">
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
                invalid: !sudokuObj[`r${rowIndex}c${colIndex}`].valid.value,
                'highlight-number': highlightNumbers == sudokuObj[`r${rowIndex}c${colIndex}`].number
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
                  :class="[{bold: sudokuObj[`r${rowIndex}c${colIndex}`].given, invalid: !sudokuObj[`r${rowIndex}c${colIndex}`].valid.value}, 'svgText']"
                  x="50%"
                  y="60%"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  :ref="el => { inputs[`r${rowIndex}c${colIndex}`] = el }"
                >{{sudokuObj[`r${rowIndex}c${colIndex}`].number == "." ? "" : sudokuObj[`r${rowIndex}c${colIndex}`].number}}</text>
                <g
                  v-for="(pencilMark, index) in sudokuObj[`r${rowIndex}c${colIndex}`].pencilMarks"
                  :key="index"
                >
                  <circle
                    v-if="sudokuObj[`r${rowIndex}c${colIndex}`].pencilMarks[index] && sudokuObj[`r${rowIndex}c${colIndex}`].number == '.'"
                    :class="[{'circle-number': highlightNumbers == index + 1}]"
                    :cy="9+(22*Math.floor(index / 3))"
                    :cx="8.5+(22 * (index % 3))"
                    r="8"
                  />
                  <text
                    v-if="sudokuObj[`r${rowIndex}c${colIndex}`].number == '.'"
                    dominant-baseline="middle"
                    text-anchor="middle"
                  >
                    <tspan
                      style="font-size: 14px"
                      :y="10+(22*Math.floor(index / 3))"
                      :x="8+(22 * (index % 3))"
                      v-if="sudokuObj[`r${rowIndex}c${colIndex}`].pencilMarks[index]"
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
      <div class="actions">
        <BaseButton @click="newGame()" class="button">Start New Game</BaseButton>
        <div class="popup" v-if="checkNew" ref="popup">
          <h3 class="title">Are you sure you want to start a new game?</h3>
          <div class="actions">
            <BaseButton @mouseup="newGame(true)" class="yes">Start new game</BaseButton>
            <BaseButton @click="checkNew = false" class="no">Take me back</BaseButton>
          </div>
        </div>
        <BaseButton @mouseup="firstPassCandidateCalculator()" class="button">Fill In Candidates</BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
console.log(process.env.VUE_APP_WS_URL);

const wsUrl = process.env.VUE_APP_WS_URL ?? "ws://tealog.xyz:8010";
console.log(wsUrl);

const socket = new WebSocket(wsUrl);

import BaseButton from "./components/Base/BaseButton.vue";

/* eslint-disable */
import { ref, onBeforeUnmount, onBeforeUpdate, toRaw, computed } from "vue";

import {
  setPuzzle,
  validateSquare,
  firstPassCandidateCalculator,
  setId,
  setSocket,
  updatePeerCandidates
} from "./use/puzzleValidation";
import Updates from "./use/puzzleUpdates";
import {
  NumberUpdate,
  PencilMarkUpdate,
  Address,
  Cell,
  Puzzle,
  Users
} from "./types";

/* eslint-enable */

export default {
  setup() {
    onBeforeUnmount(() => {
      socket.close(1000, "logging off");
    });

    socket.onopen = function() {
      console.log("connection established");
      setSocket(socket);
    };
    const color = ref({});
    const sudokuObj = ref<Puzzle>(null);
    const users = ref<Users>();
    const id = ref<string>();
    const notating = ref<boolean>(false);
    const candidates = ref<boolean>(false);
    let updates: Updates;
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
        pencilMarkUpdate,
        // Undo request
        undo
      }: {
        numberUpdate: NumberUpdate;
        pencilMarkUpdate: PencilMarkUpdate;
        id: string;
        color: string;
        users: Users
      } = JSON.parse(data);

      const { puzzle: sentPuzzle }: { puzzle: Puzzle } = sentSudokuObj
        ? sentSudokuObj
        : {};

      if (sentSudokuObj) {
        sudokuObj.value = sentPuzzle;
        setPuzzle(sudokuObj);
        updates = new Updates(sudokuObj, users);
      }
      if (sentUsers) {
        users.value = sentUsers;
        updates.users.value = users.value;
      }
      if (sentColor) {
        color.value = sentColor;
        document.documentElement.style.setProperty(`--color`, `${sentColor}`);
      }
      if (sentid) {
        id.value = sentid;
        setId(id);
      }
      // update focus
      if (focusUpdate) {
        try {
          const { id, focus } = focusUpdate;
          users.value[id].focus = focus;
        } catch (err) {
          console.log(JSON.parse(data));
          console.log(err);
          console.log(toRaw(users.value));
          console.log(toRaw(id.value));
        }
      }
      // update a number
      if (numberUpdate) {
        updates.updateNumber({ numberUpdate });
      }
      // update a pencilmark
      if (pencilMarkUpdate) {
        updates.updatePencilMarks({ pencilMarkUpdate });
      }
      // undo a move
      if (undo) {
        updates.undo(undo);
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
          sudokuObj.value[`r${user.focus.row}c${user.focus.col}`].number != "."
        ) {
          number =
            sudokuObj.value[`r${user.focus.row}c${user.focus.col}`].number;
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
        // Set to middle
        row = 5;
        col = 5;
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
        !sudokuObj.value[`r${row}c${col}`].given &&
        acceptedKeys.includes(key)
      ) {
        event.preventDefault();
        if (notating.value) {
          let { address } = sudokuObj.value[`r${row}c${col}`];
          // Create pencilMarkUpdate object
          const pencilMarkUpdate = { address, pencilMark: key, id: id.value };
          // Update local
          updates.updatePencilMarks({ pencilMarkUpdate });
          // Update server
          socket.send(JSON.stringify({ pencilMarkUpdate }));
        } else {
          let { address } = sudokuObj.value[`r${row}c${col}`];
          // Create numberupdate object
          const numberUpdate = { address, number: key, id: id.value };
          // Change local copy of puzzle
          updates.updateNumber({ numberUpdate });
          // Send server update
          socket.send(JSON.stringify({ numberUpdate }));
          // Update peer candidates
          updatePeerCandidates(sudokuObj.value[`r${row}c${col}`]);
        }
      } else if (key == "Backspace") {
        event.preventDefault();

        // Check if in notation mode
        if (notating.value) {
          let { address } = sudokuObj.value[`r${row}c${col}`];
          // Create pencilMarkUpdate object
          const pencilMarkUpdate = {
            address,
            pencilMark: "delete",
            id: id.value
          };
          // Update local
          updates.updatePencilMarks({ pencilMarkUpdate });
          // Update server
          socket.send(
            JSON.stringify({
              pencilMarkUpdate
            })
          );
        } else {
          let { address } = sudokuObj.value[`r${row}c${col}`];
          // Create numberupdate object
          const numberUpdate = { address, number: ".", id: id.value };
          // Change local copy of puzzle
          updates.updateNumber({ numberUpdate });
          // Send server update
          socket.send(JSON.stringify({ numberUpdate }));
        }
      } else if (arrowKeys.includes(key)) {
        event.preventDefault();
        switch (key) {
          case "ArrowRight":
            move(row, col, 0, 1);
            break;
          case "ArrowLeft":
            move(row, col, 0, -1);
            break;
          case "ArrowDown":
            move(row, col, 1, 0);
            break;
          case "ArrowUp":
            move(row, col, -1, 0);
            break;
        }
      } else if (key == "Shift") {
        notating.value = !notating.value;
      } else if (key.toLowerCase() == "z" && event.metaKey) {
        // Update local
        updates.undo(id.value);
        socket.send(JSON.stringify({ undo: id.value }));
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

    const popup = ref(null);
    const checkNew = ref(false);

    const checkForPopupElementAndDisable = event => {
      // Check if target is part of popup, otherwise close popup
      if (
        checkNew.value &&
        !(
          event.target == popup.value ||
          event.target.parentElement == popup.value ||
          event.target.parentElement.parentElement == popup.value
        )
      ) {
        checkNew.value = false;
        // Remove self
        document.body.removeEventListener(
          "mousedown",
          checkForPopupElementAndDisable
        );
      }
    };

    const newGame = check => {
      console.log("triggered");
      if (!check) {
        document.body.addEventListener(
          "mousedown",
          checkForPopupElementAndDisable
        );
        checkNew.value = true;
      } else {
        socket.send(JSON.stringify({ newGame: true }));
        checkNew.value = false;
        document.body.removeEventListener(
          "mousedown",
          checkForPopupElementAndDisable
        );
      }
    };

    return {
      popup,
      checkNew,
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
      firstPassCandidateCalculator,
      candidates
    };
  },
  components: {
    BaseButton
  }
};
</script>

<style lang="scss">
@import "node_modules/nord/src/sass/nord.scss";

body {
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
  font-family: Nunito, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

$border: 2px solid black;
$box-shadow: 0px 0px 15px 0px
  rgba(
    $color: #000000,
    $alpha: 0.3
  );

.pane {
  padding: 1em;
  border-radius: 3px;
  box-shadow: $box-shadow;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 2em;
}

.button {
  width: 30%;
  margin: auto;
  margin-top: 1em;
  padding: 1em;
  border-radius: 3px;
  box-shadow: $box-shadow;
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
  font-family: Consolea, "Courier New", Courier, monospace;
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

.actions {
  display: flex;
}

.popup {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  width: 25em;
  height: 10em;
  background: $nord2;
  border-radius: 3px;
  box-shadow: $box-shadow;
  margin: auto;
  padding: 0.5em;
  padding-bottom: 1em;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  .title {
    color: $nord4;
  }
}
</style>
