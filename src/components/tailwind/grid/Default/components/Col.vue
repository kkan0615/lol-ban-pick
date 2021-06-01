<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TCol',
  props: {
    colSpan: {
      type: Number,
      require: false,
      default: 0,
    },
  },
  setup () {
    return
  }
})
</script>
