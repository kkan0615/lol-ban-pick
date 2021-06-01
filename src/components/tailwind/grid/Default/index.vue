<template>
  <div
    class="grid w-full"
    :class="gridClasses"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'TGrid',
  props: {
    cols: {
      type: Number,
      require: false,
      default: 12,
    },
    sm: {
      type: Number,
      require: false,
      default: 0,
    },
    md: {
      type: Number,
      require: false,
      default: 0,
    },
    lg: {
      type: Number,
      require: false,
      default: 0,
    },
    xl: {
      type: Number,
      require: false,
      default: 0,
    },
    '2xl': {
      type: Number,
      require: false,
      default: 0,
    },
    gap: {
      type: Number,
      require: false,
      default: 4,
    },
  },
  setup (props) {
    const gridClasses = computed(() => {
      const classes = {
        [`grid-cols-${props.cols}`]: true,
        [`gap-${props.gap}`]: true,
      }

      /* control breakpoint */
      if (props.sm)
        classes[`sm:grid-cols-${props.sm}`] = true

      if (props.md)
        classes[`sm:grid-cols-${props.md}`] = true

      if (props.lg)
        classes[`sm:grid-cols-${props.lg}`] = true

      if (props.xl)
        classes[`sm:grid-cols-${props.xl}`] = true

      if (props['2xl'])
        classes[`sm:grid-cols-${props['2xl']}`] = true

      return classes
    })

    return {
      gridClasses
    }
  }
})
</script>
