<template>
  <div
    class="tw-h-full tw-flex tw-space-x-2"
  >
    <LolBanListChampion
      v-for="(champion) in banListWithEmpty"
      :key="champion.key"
      :champion="champion"
      :version="version"
      :is-red="isRed"
    />
  </div>
</template>
<script lang="ts">
export default {
  name: 'LolBanList',
}
</script>
<script setup lang="ts">
import { LolChampion } from '@/types/models/lols/champion'
import { defineProps } from 'vue'
import LolBanListChampion from '@/components/lols/BanList/components/Champion.vue'

interface Props {
  banList: LolChampion[]
  version: string
  isRed?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  banList: () => new Array(5).fill(() =>{ return {} as LolChampion}),
  version: '',
  isRed: false,
})

const banListWithEmpty = computed(() => {
  const emptyList: LolChampion[] = new Array(5 - props.banList.length).fill(() =>{ return {} as LolChampion})
  const result = ([] as LolChampion[]).concat(props.banList).concat(emptyList)
  if (props.isRed) {
    return result.reverse()
  }

  return result
})

</script>

