<template>
  <div class="w-full items-center flex">
    <div class="mx-2 -mt-1">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TListItemContent',
  setup () {
    return
  }
})
</script>
