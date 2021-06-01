<template>
  <li class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200 cursor-pointer">
    <slot />
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TPaginationPage',
  setup () {
    return
  }
})
</script>
