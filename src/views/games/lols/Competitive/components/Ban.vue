<template>
  <div
    class="tw-h-[72px] tw-border tw-aspect-square"
    :class="{
      'tw-border-blue-500': !red,
      'tw-border-red-500': red,
    }"
  >
    <img
      v-if="ban.id"
      class="tw-h-full"
      :src="src"
    >
  </div>
</template>
<script lang="ts">
export default {
  name: 'LolCompetitiveBan',
}
</script>
<script setup lang="ts">
import { defineProps } from 'vue'
import { LolChampion } from '@/types/models/lols/champion'
import { storeToRefs } from 'pinia'
import useLolStore from '@/store/modules/lol'

const lolStore = useLolStore()

interface Props {
  ban: LolChampion
  red?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  ban: () => ({} as LolChampion),
  red: false
})

const { version } = storeToRefs(lolStore)

const src = computed(() => props.ban.id ? `/lolCdnApi/${version.value}/img/champion/${props.ban.id}.png` : '')
</script>
