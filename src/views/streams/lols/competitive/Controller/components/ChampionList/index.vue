<template>
  <div
    class="tw-h-full tw-flex tw-flex-col tw-space-y-2"
  >
    <StreamLolCompetitiveControllerChampionListChampion
      :version="version"
    />
  </div>
</template>
<script lang="ts">
export default {
  name: 'StreamLolCompetitiveControllerChampionList',
}
</script>
<script setup lang="ts">
import { LolChampionBanPick } from '@/types/models/lols/champion'
import { defineProps } from 'vue'
import LolChampionListChampion from '@/components/lols/ChampionList/components/Champion.vue'
import StreamLolCompetitiveControllerChampionListChampion
  from '@/views/streams/lols/competitive/Controller/components/ChampionList/components/Champion.vue'

interface Props {
  championList: LolChampionBanPick[]
  version: string
}
const props = withDefaults(defineProps<Props>(), {
  championList: () => [],
  version: '',
})
const emit = defineEmits<{
  (e: 'clicked', champion: LolChampionBanPick): void
}>()


</script>

