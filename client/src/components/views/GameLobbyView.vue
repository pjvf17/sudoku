<template>
  <div id="main">
    <div id="gamelist-container">
      <div class="gamelist">
        <!-- <RouterLink to="/puzzle">Puzzle</RouterLink> -->
      </div>
      <div class="actions">
        <base-button style="margin-top: auto" @mouseup="newGamePopup = true"
          >New Game</base-button
        >
      </div>
      <base-popup class="flex flex-column" title="Create Room" v-if="newGamePopup">
        <base-input id="title" name="title" v-model="title"></base-input>
        <base-button @mouseup="createRoom()">Create Room</base-button>
      </base-popup>
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from "../Base/BaseButton.vue";
import BasePopup from "../Base/BasePopup.vue";
import BaseInput from "../Base/BaseInput.vue";
import { ref, defineComponent } from "vue";
// import { RouterLink } from "vue-router";
import router from "../../router";

const GameLobbyView = defineComponent({

  setup() {
    const newGamePopup = ref(false);
    const title = ref<string>();

    const createRoom = () => {
      console.log(title.value)
      if (!title.value) {
        return;
      }
      // TODO Ask server if name is taken

      // Redirect to room
      router.push(`/puzzle/${title.value}`)
    }
    return {
      newGamePopup,
      title,
      createRoom
    };
  },
  components: {
    // RouterLink,
    BasePopup,
    BaseButton,
    BaseInput,
  },
  name: "GameLobbyView",
});
export default GameLobbyView;
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

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
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
