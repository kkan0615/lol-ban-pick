<template>
  <div
    class="tw-h-full tw-flex tw-flex-col tw-space-y-2"
  >
    <div>
      <input
        v-model="searchText"
        type="text"
      >
    </div>
    <div
      class="tw-grid tw-grid-cols-6 tw-gap-2 tw-overflow-auto"
    >
      <LolChampionListChampion
        v-for="champion in championListBySearch"
        :key="champion.champion.key"
        :champion="champion"
        :version="version"
        @clicked="clickChampion"
      />
      <!--      <LolChampionListChampion-->
      <!--        :champion="championListBySearch[0]"-->
      <!--        :version="version"-->
      <!--        @clicked="clickChampion"-->
      <!--      />-->
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LolChampionList',
}
</script>
<script setup lang="ts">
import { LolChampionBanPick } from '@/types/models/lols/champion'
import { defineProps } from 'vue'
import LolChampionListChampion from '@/components/lols/ChampionList/components/Champion.vue'

interface Props {
  championList: LolChampionBanPick[]
  version: string
}
const props = withDefaults(defineProps<Props>(), {
  championList: () => [],
  version: ''
})
const emit = defineEmits<{
  (e: 'clicked', champion: LolChampionBanPick): void
}>()

const searchText = ref('')

const championListBySearch = computed(() => {
  return props.championList.filter((champion) => searchText.value ?
    (champion.champion.name.toLowerCase().includes(searchText.value) || champion.champion.id.toLowerCase().includes(searchText.value))
    : true)
})

const clickChampion = (champion: LolChampionBanPick) => {
  emit('clicked', champion)
}

</script>

