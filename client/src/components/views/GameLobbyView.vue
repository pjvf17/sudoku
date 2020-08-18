<template>
  <div id="main">
    <div id="gamelist-container">
      <div class="gamelist">
        <RouterLink to="/puzzle">Puzzle</RouterLink>
      </div>
      <div class="actions">
        <BaseButton style="margin-top: auto">New Game</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../Base/BaseButton.vue";

const { RouterLink } = require("vue-router");
export default {
  components: {
    RouterLink,
    BaseButton
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
  box-shadow: 0px 0px 25px 0px
  rgba(
    $color: #000000,
    $alpha: 0.3,
  );  background-color: $nord4;
  display: flex;
}

.gamelist {
  height: 100%;
  width: 100%;
  display: flex;
}


</style>
