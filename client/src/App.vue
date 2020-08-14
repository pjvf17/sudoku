<template>
  <div id="app">
    <RouterView></RouterView>
  </div>
</template>

<script>
const { RouterView } = require("vue-router");

export default {
  components: {
    RouterView,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>