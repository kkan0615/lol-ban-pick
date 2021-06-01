<template>
  <nav
    class="flex flex-col h-full py-4 shadow-lg gap-y-1 overflow-y-auto w-5"
    :class="wrapperClasses"
  >
    <slot />
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'TDrawerNavigatorLayout',
  props: {
    width:{
      required: false,
      type: Number,
      default: 52,
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
