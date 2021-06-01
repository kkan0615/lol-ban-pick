<template>
  <button
    class="text-gray-600 py-1 px-3 block hover:text-blue-500 focus:outline-none text-blue-500  font-medium border-blue-500"
    :class="{
      'border-b-2': activatedTab,
    }"
    @click="onClickTab"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, inject, onBeforeUnmount, onMounted, ref, useContext } from 'vue'
import { TTabsProvideKey } from '@/components/tailwind/Tabs/types'

export default defineComponent({
  name: 'TTab',
  setup () {
    const { emit } = useContext()
    const tabsInjection = inject(TTabsProvideKey)
    const uid = ref(0)

    const activatedTab = computed(() => {
      const instance = getCurrentInstance()

      if (!tabsInjection || !instance)
        return false

      return tabsInjection.currentTab.value === instance.uid
    })

    onMounted(() => {
      const instance = getCurrentInstance()
      if (instance && tabsInjection) {
        tabsInjection.register(instance.uid)
        uid.value = instance.uid
      }
    })

    onBeforeUnmount(() => {
      const instance = getCurrentInstance()
      if (instance && tabsInjection)
        tabsInjection.unregister(instance.uid)
    })

    const onClickTab = (event: MouseEvent) => {
      if (tabsInjection) {
        tabsInjection.changeCurrentTabToUid(uid.value)
      }
      emit('click', event)
    }

    return {
      activatedTab,
      onClickTab,
    }
  }
})
</script>
