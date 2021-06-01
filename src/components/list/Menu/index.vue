<template>
  <div
    class="flex w-full pr-2"
  >
    <div
      class="py-1 px-2 hover:text-primary-500 gap-x-4 flex items-center w-full"
      :class="{
        'bg-gray-400': active,
        'rounded-r-2xl': active,
        'text-white': active,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from 'vue'
import { RouteRecordRaw, useRoute } from 'vue-router'
import { getRouteInfo } from '@/utils/router'

export default defineComponent({
  name: 'MenuList',
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup () {
    const { emit } = useContext()

    const onClickIcon = (event: MouseEvent) => {
      emit('click', event)
    }

    return {
      onClickIcon,
    }
  }
})
</script>
