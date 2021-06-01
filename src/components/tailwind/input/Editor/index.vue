<template>
  <div
    :id="id"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Prototype',
  props: {
    id: {
      type: String,
      required: false,
      default: 'rich-editor',
    }
  },
  setup () {
    return
  }
})
</script>
