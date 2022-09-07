<template>
  <div>
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import useSettingStore from '@/store/modules/setting'
import { useDarkOption } from '@/types/system'
const settingStore = useSettingStore()

/* Initialize Setting */
// Initialize setting store
settingStore.initSetting()
// Dark option
useDark(useDarkOption)
</script>
<style>
</style>
