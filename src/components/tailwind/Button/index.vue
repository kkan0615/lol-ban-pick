<template>
  <button
    type="button"
    class="flex justify-center items-center rounded capitalize focus:outline-none leading-6 text-sm hover:opacity-70"
    :class="buttonClasses"
    :disabled="disabled"
    :readonly="readonly"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'TButton',
  props: {
    text: {
      type: Boolean,
      required: false,
      default: false,
    },
    block: {
      type: Boolean,
      required: false,
      default: false,
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false,
    },
    icon: {
      type: Boolean,
      required: false,
      default: false,
    },
    shadow: {
      type: Boolean,
      required: false,
      default: true,
    },
    color: {
      type: String,
      required: false,
      default: 'primary',
    },
    textColor: {
      type: String,
      required: false,
      default: 'textPrimary',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup (props) {
    const buttonClasses = computed(() => {
      return {
        [`bg-${props.color}-500`]: !props.text,
        [`text-${props.textColor}-500`]: !props.text,
        ['w-full']: props.block,
        ['rounded-md']: props.rounded,
        ['shadow']: props.shadow && !props.text,
        ['px-2']: !props.icon,
        ['py-1']: !props.icon,
        ['opacity-50']: props.disabled
      }
    })
    return {
      buttonClasses,
    }
  }
})
</script>
