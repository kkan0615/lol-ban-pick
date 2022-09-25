<template>
  <v-select
    :items="items"
    label="LolVersion"
    density="compact"
    :model-value="version"
    @update:model-value="handleChange"
  />
</template>
<script lang="ts">
export default {
  name: 'LolVersionSelect',
}
</script>
<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  version: string
  items: string[]
}
const props = withDefaults(defineProps<Props>(), {
  version: '',
  items: () => [],
})

const emit = defineEmits<{
  (e: 'changed', newVersion: string): void
}>()

const handleChange = (newVersion: string) => {
  emit('changed', newVersion)
}
</script>

