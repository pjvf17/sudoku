<template>
  <RouterLink to="/puzzle"></RouterLink>
</template>

<script>
const { RouterLink } = require("vue-router");
export default {
  components: {
    RouterLink,
  },
  name: "GameLobbyView",
};
</script>

<style lang="scss">
a {
  width: 1em;
  height: 1em;
  display: block;
  background: black;
}
</style>
