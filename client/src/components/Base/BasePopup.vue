<template>
  <div class="popup">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
    name: "BasePopup"
};
</script>

<style lang="scss" scoped>
@import "node_modules/nord/src/sass/nord.scss";
@import "src/sass/_borders.scss";

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
