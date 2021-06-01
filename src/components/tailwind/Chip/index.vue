<template>
  <span
    class="flex items-center rounded-full px-2 py-1 text-xs font-bold mr-3"
    :class="{
      [`text-${textColor}`]: true,
      [`bg-${color}`]: true
    }"
  >
    <slot />
    <t-button
      v-if="closable"
      class="ml-1"
      icon
      @click="onClickCloseButton"
    >
      <t-material-icon
        class="text-sm"
      >
        close
      </t-material-icon>
    </t-button>
  </span>
</template>

<script lang="ts">
import { defineComponent, useContext } from 'vue'
import TButton from '@/components/tailwind/Button/index.vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'

export default defineComponent({
  name: 'TChip',
  components: { TMaterialIcon, TButton },
  props: {
    color: {
      type: String,
      required: false,
      default: 'primary-500',
    },
    textColor: {
      type: String,
      required: false,
      default: 'textPrimary-500',
    },
    closable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup () {
    const { emit } = useContext()
    const onClickCloseButton = () => {
      emit('click:close')
    }
    return {
      onClickCloseButton
    }
  }
})
</script>
