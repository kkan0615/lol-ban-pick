<template>
  <div
    class="tw-h-full tw-flex tw-flex-col tw-space-y-2"
  >
    <StreamLolCompetitiveViewChampion
      v-for="pick in pickListWithEmpty"
      :key="pick"
      :pick="pick"
      :version="version"
      :is-red="isRed"
    />
  </div>
</template>
<script lang="ts">
export default {
  name: 'StreamLolCompetitiveViewChampionList',
}
</script>
<script setup lang="ts">
import { defineProps } from 'vue'
import { LolStreamPick } from '@/types/models/lols/stream'
import StreamLolCompetitiveViewChampion from '@/views/streams/lols/competitive/View/components/Champion.vue'

interface Props {
  pickList: LolStreamPick[]
  version: string
  isRed?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  pickList: () => [],
  version: '',
  isRed: false,
})

const pickListWithEmpty = computed(() => {
  const emptyList: LolStreamPick[] = new Array(5 - props.pickList.length).fill(() =>{ return {} as LolStreamPick})
  const result = ([] as LolStreamPick[]).concat(props.pickList).concat(emptyList)

  if (props.isRed) {
    return result.reverse()
  }

  return result
})

</script>

