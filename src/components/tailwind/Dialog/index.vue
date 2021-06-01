<template>
  <div
    class="fixed z-30 pt-16 left-0 top-0 w-full h-full overflow-auto rounded-md t-dialog-transition"
    style="background-color: rgba(0,0,0,0.6)"
    :style="{
      display: modelValue ? 'block' : 'none',
    }"
    @click.self="onClickOutSide"
  >
    <div
      class="m-auto p-10 ring-1"
      style="background-color: #fefefe"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from 'vue'

export default defineComponent({
  name: 'TDialog',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
      default: false,
    },
    clickOutside: {
      type: Boolean,
      required: false,
      default: true,
    }
  },
  setup (props) {
    const { emit } = useContext()

    const close = () => {
      emit('update:modelValue', false)
      emit('close', false)
    }

    const onClickOutSide = () => {
      if (props.clickOutside)
        close()
    }

    return {
      close,
      onClickOutSide
    }
  }
})
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
