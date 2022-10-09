<template>
  <div
    class="tw-h-[300px] tw-border tw-w-full"
    :class="{
      'tw-border-blue-500': !red,
      'tw-border-red-500': red,
    }"
  >
    <img
      v-if="pick.champion"
      class="tw-h-full"
      :src="src"
    >
  </div>
</template>
<script lang="ts">
export default {
  name: 'LolCompetitivePick',
}
</script>
<script setup lang="ts">
import { defineProps } from 'vue'
import { LolCompetitivePick } from '@/types/models/lols/competitive'

interface Props {
  pick: LolCompetitivePick
  red?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  pick: () => ({} as LolCompetitivePick),
  red: false
})

const src = computed(() => props.pick.champion ? `/lolCdnApi/img/champion/loading/${props.pick.champion.id}_0.jpg` : '')
</script>
