<template>
  <input :type="type" :name="name ?? 'input'" :id="id ?? null" :value="modelValue" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

const BaseInput = defineComponent({
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
  },
  setup() {},
});
export default BaseInput;
</script>

<style lang="scss" scoped>
  
</style>
