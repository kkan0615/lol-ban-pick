<template>
  <q-menu
    top
    offset-y
  >
    <template #activator="{ props }">
      <button
        class="tw-w-1/3 tw-aspect-square tw-border tw-border-primary-main"
        v-bind="props"
      >
        <div
          class="tw-h-full"
        >
          <img
            v-if="modelValue.id"
            :src="`/lolCdnApi/${version}/img/spell/${modelValue.id}.png`"
            class="tw-h-full"
          >
          <div
            v-else
            class="tw-h-full tw-w-full"
          />
        </div>
      </button>
    </template>
    <q-card>
      <q-card-section
        class="tw-grid tw-grid-cols-2 tw-gap-2"
      >
        <div
          v-for="item in items"
          :key="item.id"
        >
          <button
            :disabled="modelValue.id === item.id || otherSummonSpell.id === item.id"
            @click="onClickSummonSpell(item)"
          >
            <img
              :class="{
                'tw-grayscale': modelValue.id === item.id || otherSummonSpell.id === item.id
              }"
              :alt="item.name"
              :src="`/lolCdnApi/${version}/img/spell/${item.id}.png`"
            >
          </button>
        </div>
      </q-card-section>
    </q-card>
  </q-menu>
</template>
<script lang="ts">
export default {
  name: 'LolSummonSpellMenu',
}
</script>
<script setup lang="ts">
import { defineProps } from 'vue'
import { LolSummonSpell } from '@/types/models/lols/summonSpell'

interface Props {
  modelValue: LolSummonSpell
  otherSummonSpell: LolSummonSpell,
  items: LolSummonSpell[]
  version: string
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({} as LolSummonSpell),
  otherSummonSpell: () => ({} as LolSummonSpell),
  items: () => [],
  version: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', newSummonSpell: LolSummonSpell): void
}>()

const onClickSummonSpell = (summonSpell: LolSummonSpell) => {
  if (props.modelValue.id !== summonSpell.id ) {
    emit('update:modelValue', summonSpell)
  }
}
</script>

