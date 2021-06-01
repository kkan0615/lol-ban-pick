<template>
  <div class="w-6 flex flex-col items-center">
    <div class="flex relative w-5 h-5 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TListItemAvatar',
  setup () {
    return
  }
})
</script>
