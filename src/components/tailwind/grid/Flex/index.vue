<template>
  <div
    class="flex w-full"
    :class="{
      [`items-${alignItem}`]: true
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TFlexGrid',
  props: {
    alignItem: {
      type: String,
      required: false,
      default: 'center'
    },
  },
  setup () {
    return
  }
})
</script>
