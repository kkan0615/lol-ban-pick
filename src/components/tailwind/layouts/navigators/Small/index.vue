<template>
  <nav
    class="flex flex-col items-center h-full py-4 shadow-lg gap-y-3 overflow-y-auto"
    :class="wrapperClasses"
  >
    <slot />
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'TSmallNavigatorLayout',
  props: {
    width:{
      required: false,
      type: Number,
      default: 20,
    },
    color:{
      required: false,
      type: String,
      default: 'navigator',
    },
    textColor:{
      required: false,
      type: String,
      default: '',
    },
  },
  setup (props) {
    const wrapperClasses = computed(() =>{
      return {
        [`w-${props.width}`]: true,
        [`bg-${props.color}`]: true,
        [`text-${props.textColor}`]: !!props.textColor,
      }
    })

    return {
      wrapperClasses,
    }

  }
})
</script>
