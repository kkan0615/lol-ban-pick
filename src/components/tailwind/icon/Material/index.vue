<template>
  <span
    class="align-middle"
    :class="classes"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'TMaterialIcon',
  props: {
    filled: {
      type: Boolean,
      required: false,
      default: false,
    },
    outlined: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup (props) {
    const classes = computed(() => {
      return {
        'material-icons': props.filled,
        'material-icons-outlined': props.outlined,
      }
    })

    return {
      classes,
    }
  }
})
</script>
