<template>
  <button @click="$emit('click', $event)" @mouseup="$emit('mousup', $event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton"
}
</script>

<style lang="scss" scoped>
@import "node_modules/nord/src/sass/nord.scss";
$box-shadow: 0px 0px 15px 0px
  rgba(
    $color: #000000,
    $alpha: 0.3
  );
$inverse-box-shadow: 0px 0px 15px 0px inset
  rgba(
    $color: #000000,
    $alpha: 0.1
  );

button {
  // width: 30%;
  margin: auto;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 3px;
  box-shadow: $box-shadow;
  border: none;
  background-color: $nord6;
  font-family: Nunito, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  transition: 0.5s ease;
  &:hover {
    // box-shadow: $inverse-box-shadow;
    // background-color: $nord1;
    // color: $nord4;
    // box-shadow: 0px 0px 15px 5px rgba($color: $nord4, $alpha: 0.9);
  }
  &:active {
    box-shadow: 0px 0px 15px 0px inset rgba($color: #000000, $alpha: 0.9);
  }
}
</style>