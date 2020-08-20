<template>
  <div id="main">
    <div id="gamelist-container">
      <div class="gamelist">
        <RouterLink to="/puzzle">Puzzle</RouterLink>
      </div>
      <div class="actions">
        <base-button style="margin-top: auto" @mouseup="newGamePopup = true"
          >New Game</base-button
        >
      </div>
      <base-popup title="New Game Popup" v-if="newGamePopup">
      </base-popup>
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from "../Base/BaseButton.vue";
import BasePopup from "../Base/BasePopup.vue";
import { ref } from "vue";

const { RouterLink } = require("vue-router");
export default {
  setup() {
    const newGamePopup = ref(false);
    return {
      newGamePopup,
    };
  },
  components: {
    RouterLink,
    BasePopup,
    BaseButton,
  },
  name: "GameLobbyView",
};
</script>

<style lang="scss" scoped>
@use "src/sass/_containerStyles" as c;
@import "src/sass/_borders.scss";
@import "node_modules/nord/src/sass/nord.scss";

#main {
  @include c.mainContainer;
}

#gamelist-container {
  background-color: $nord2;
  width: 40em;
  height: 95vh;
  margin: auto;
  box-shadow: $box-shadow;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
}

a {
  margin: auto;
  color: white;
  text-decoration: none;
}

.actions {
  height: 20%;
  width: 100%;
  box-shadow: 0px 0px 25px 0px rgba($color: #000000, $alpha: 0.3);
  background-color: $nord4;
  display: flex;
}

.gamelist {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
