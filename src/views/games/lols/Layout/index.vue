<template>
  <RouterView />
</template>
<script lang="ts">
export default {
  name: 'LolLayout',
}
</script>
<script setup lang="ts">
import useLolStore from '@/store/modules/lol'

const lolStore = useLolStore()

const isLoading = ref(true)
const isError = ref(false)

try {
  await lolStore.loadVersionList()
  await lolStore.loadLanguageList()
  await lolStore.loadChampionList()
} catch (e) {
  console.error(e)
  isError.value = true
} finally {
  isLoading.value = false
}
</script>
