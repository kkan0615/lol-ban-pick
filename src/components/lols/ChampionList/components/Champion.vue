<template>
  <UseImage
    :src="`/lolCdnApi/${version}/img/champion/${champion.champion.id}.png`"
    :class="{
      'tw-cursor-pointer': !champion.picked && !champion.banded,
      'tw-grayscale': champion.picked || champion.banded
    }"
    @click="handleClick"
  >
    <template #loading>
      <LolChampionListChampionLoading />
    </template>

    <template #error>
      Failed
    </template>
  </UseImage>
</template>
<script lang="ts">
export default {
  name: 'LolChampionListChampion',
}
</script>
<script setup lang="ts">
import { LolChampionBanPick } from '@/types/models/lols/champion'
import { defineProps } from 'vue'
import { UseImage } from '@vueuse/components'
import LolChampionListChampionLoading from '@/components/lols/ChampionList/components/ChampionLoading.vue'

interface Props {
  champion: LolChampionBanPick
  version: string
}
const props = withDefaults(defineProps<Props>(), {
  champion: () => {return {} as LolChampionBanPick},
  version: '',
})

const emit = defineEmits<{
  (e: 'click', champion: LolChampionBanPick): void
}>()

const handleClick = () => {
  emit('click', props.champion)
}

</script>

