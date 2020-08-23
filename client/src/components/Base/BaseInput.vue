<template>
  <input
    @input="updateValue($event)"
    :type="type"
    :name="name ?? 'input'"
    :id="id ?? null"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

const BaseInput = defineComponent({
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
    name: String,
    type: String,
    id: String,
  },
  setup(props, { emit }) {
    const updateValue = (event:InputEvent) => {
      const target:HTMLInputElement = event.target as HTMLInputElement;
      emit("update:modelValue", target.value);
    };
    return {
      updateValue,
    };
  },
});
export default BaseInput;
</script>

<style lang="scss" scoped>
input {
  height: 2em;
}
</style>
