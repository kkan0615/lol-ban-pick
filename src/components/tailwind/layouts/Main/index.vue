<template>
  <div
    class="sm:w-3/5 h-full ml-auto mr-auto my-2"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayoutComp',
  setup () {
    return
  }
})
</script>
