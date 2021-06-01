<template>
  <div
    class="flex items-center text-lg font-bold p-2"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TCardTitle',
  setup () {
    return
  }
})
</script>
