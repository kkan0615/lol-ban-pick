<template>
  <nav class="flex flex-col sm:flex-row">
    <slot />
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, provide, ref, useContext } from 'vue'
import { TTabsProvideKey } from '@/components/tailwind/Tabs/types'

export default defineComponent({
  name: 'TTabs',
  props: {
    modelValue: {
      type: Number,
      required: false,
      default: 0,
    }
  },
  setup (props) {
    const { emit } = useContext()

    const tabs = ref<Array<number>>([])

    const currentTab = computed(() => {
      if (!tabs.value || tabs.value.length <= 0)
        return null

      return tabs.value[props.modelValue || 0]
    })

    const register = (uid: number) => {
      tabs.value.push(uid)
    }

    const unregister = (uid: number) => {
      const index = tabs.value.findIndex(c => (c as any).uid === uid)
      if (index > -1) {
        tabs.value.splice(index, 1)
      }
    }

    const changeCurrentTabToUid = (uid: number) => {
      const foundIndex = tabs.value.findIndex(tab => tab === uid)
      if (foundIndex >= 0)
        emit('update:modelValue', foundIndex)
    }

    provide(TTabsProvideKey, {
      currentTab: currentTab,
      register,
      unregister,
      changeCurrentTabToUid,
    })

    return {
      tabs,
      currentTab,
    }
  }
})
</script>
