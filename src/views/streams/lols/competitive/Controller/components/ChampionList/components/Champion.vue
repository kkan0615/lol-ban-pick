<template>
  <UseImage
    :src="`/lolCdnApi/${props.version}/img/champion/${props.champion.champion.id}.png`"
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
  name: 'StreamLolCompetitiveControllerChampionListChampion',
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
  (e: 'clicked', champion: LolChampionBanPick): void
}>()

const handleClick = () => {
  if (!props.champion.picked && !props.champion.banded)
    emit('clicked', props.champion)
}

</script>

