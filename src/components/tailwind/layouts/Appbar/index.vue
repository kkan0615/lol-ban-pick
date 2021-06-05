<template>
  <nav
    class="flex items-center px-2 w-full"
    :class="wrapperClasses"
  >
    <slot />
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'TAppbar',
  props: {
    height:{
      required: false,
      type: Number,
      default: 12,
    },
    color:{
      required: false,
      type: String,
      default: 'app-bar',
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
        [`text-${props.textColor}`]: !!props.textColor,
      }
    })

    return {
      wrapperClasses,
    }
  }
})
</script>
