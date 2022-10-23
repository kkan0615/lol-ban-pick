<template>
  <q-select
    :options="items"
    variant="outlined"
    label="Version"
    outlined
    dense
    :model-value="version"
    hide-details
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

