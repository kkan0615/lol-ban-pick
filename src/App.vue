<template>
  <div
    class="h-full bg-background"
  >
    <snackbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Snackbar from '@/components/Snackbar/index.vue'

export default defineComponent({
  name: 'Prototype',
  components: { Snackbar },
  setup () {
    return
  }
})
</script>
