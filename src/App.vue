<template>
  <div>
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import useSettingStore from '@/store/modules/setting'
import { useColorModeOptions } from '@/types/system'
import { useQuasar } from 'quasar'

const q = useQuasar()
const settingStore = useSettingStore()
/* Initialize Setting */
// Initialize setting store
settingStore.initSetting()
// Dark option
const mode = useColorMode(useColorModeOptions)
console.log(mode.value)
q.dark.set(mode.value === 'dark')

</script>
<style>
</style>
