<template>
  <div class="popup" ref="popup">
    <h3 class="title" v-if="title">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
const BasePopup = defineComponent({
  emits: ["outside"],
  props: {
    title: String,
  },
  /*eslint no-unused-vars: off*/
  setup(_, { emit }) {
    const popup = ref();
    const checkForPopupElementAndDisable = (event: MouseEvent) => {
      // Check if popup has a value, else return
      if (!popup.value) {
        return;
      }
      // Can't be sure that it is in fact a Div, however, it will give access to 'parentElement'
      const target = event.target as HTMLDivElement;

      // Check if target is part of popup, otherwise close popup
      if (
        !(
          // Can we create some kind of loop to check this?
          (
            target == popup.value ||
            target.parentElement == popup.value ||
            target.parentElement?.parentElement == popup.value
          )
        )
      ) {
        emit("outside");
        console.log("emitted");
      }
    };
    document.body.addEventListener("mousedown", checkForPopupElementAndDisable);
    return { popup };
  },
  // Add event emitter for click outside elemnt (if possible)
  name: "BasePopup",
});
export default BasePopup;
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
