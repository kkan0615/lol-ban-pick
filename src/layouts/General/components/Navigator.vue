<template>
  <t-small-navigator-layout>
    <div
      v-for="route in generalRoutes"
      :key="route.name"
      class="w-full"
    >
      <navigator-menu-general-layout
        v-if="!route.meta.hidden"
        :value="route"
        @click="onClickMenu(route)"
      >
        {{ route.meta.icon }}
      </navigator-menu-general-layout>
    </div>
    <navigator-menu-general-layout
      class="mt-auto"
      @click="onClickAdminMenu"
    >
      admin_panel_settings
    </navigator-menu-general-layout>
  </t-small-navigator-layout>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import TSmallNavigatorLayout from '@/components/tailwind/layouts/navigators/Small/index.vue'
import NavigatorMenuGeneralLayout from '@/layouts/General/components/NavigatorMenu.vue'
import useStore from '@/store'
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'
import { getParentRoute } from '@/utils/router'

export default defineComponent({
  name: 'NavigatorGeneralLayout',
  components: { NavigatorMenuGeneralLayout, TSmallNavigatorLayout },
  setup () {
    const store = useStore()
    const route =  useRoute()
    const router = useRouter()

    const generalRoutes = computed(() => store ? store.state.menu.generalRoutes : [])
    const activingName = computed(() => {
      if (!route.name)
        return ''

      const result = getParentRoute(route.name as string)
      return result ? result.name : ''
    })

    const onClickMenu = async (clickedRoute: RouteRecordRaw) => {
      await router.push({ name: clickedRoute.name })
    }

    const onClickAdminMenu = async () => {
      await router.push({ name: 'AdminLayout' })
    }

    return {
      generalRoutes,
      activingName,
      onClickMenu,
      onClickAdminMenu,
    }
  }
})
</script>
