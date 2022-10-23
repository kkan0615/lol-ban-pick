<template>
  <q-select
    :options="items"
    variant="outlined"
    label="Language"
    outlined
    dense
    :model-value="language"
    hide-details
    @update:model-value="handleChange"
  />
</template>
<script lang="ts">
export default {
  name: 'LolLanguageSelect',
}
</script>
<script setup lang="ts">
import { defineProps } from 'vue'
import { LolLanguagesType } from '@/types/models/lols/language'

interface Props {
  language: LolLanguagesType
  items: LolLanguagesType[]
}
const props = withDefaults(defineProps<Props>(), {
  language: 'en_US',
  items: () => [],
})

const emit = defineEmits<{
  (e: 'changed', newLanguage: LolLanguagesType): void
}>()

const handleChange = (newLanguage: LolLanguagesType) => {
  emit('changed', newLanguage)
}
</script>

