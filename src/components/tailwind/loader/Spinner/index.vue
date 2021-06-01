<template>
  <div
    class="loader animate-spin"
    :style="{
      height,
      width,
    }"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TLoaderSpinner',
  props: {
    height: {
      type: String,
      required: false,
      default: '120px',
    },
    width: {
      type: String,
      required: false,
      default: '120px',
    },
  },
  setup () {
    return
  }
})
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
