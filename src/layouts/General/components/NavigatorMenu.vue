<template>
  <div
    class="flex w-full"
  >
    <div
      v-if="active"
      class="border-2 rounded-md border-primary-500"
    />
    <div
      class="mx-auto py-1 px-2 hover:bg-gray-100 hover:text-primary-500"
    >
      <t-material-icon
        class="text-3xl cursor-pointer"
        @click="onClickIcon"
      >
        <slot />
      </t-material-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from 'vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import { RouteRecordRaw, useRoute } from 'vue-router'
import { getParentRoute, getRouteInfo } from '@/utils/router'

export default defineComponent({
  name: 'NavigatorMenuGeneralLayout',
  components: { TMaterialIcon },
  props: {
    value: {
      type: Object,
      required: false,
      default: () => {
        return {} as RouteRecordRaw
      },
    }
  },
  setup (props) {
    const route = useRoute()
    const { emit } = useContext()

    const active = computed(() => {
      /* value */
      const value = props.value as RouteRecordRaw
      /* route information of value */
      const routeInfo = getRouteInfo(value.name as string)
      if (routeInfo && !routeInfo.children)
        return route.name === value.name
      else if (routeInfo && routeInfo.children)
        return routeInfo.children.findIndex(child => child.name === route.name) >= 0

      return false
    })

    const onClickIcon = (event: MouseEvent) => {
      emit('click', event)
    }

    return {
      active,
      onClickIcon,
    }
  }
})
</script>
