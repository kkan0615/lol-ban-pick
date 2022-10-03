<template>
  <div
    :ref="containerRef"
    class="tw-h-1/5 tw-border tw-relative tw-pb-40"
    :class="{
      'tw-border-blue-500': !isRed,
      'tw-border-red-500': isRed
    }"
  >
    <!--    v-if="pick && pick.champion"-->
    <img
      class="tw-absolute tw-w-full"
    >
    <!--          :src="`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gwen_0.jpg`"
-->
    <!--    http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${pick.champion.id}_0.jpg-->
    <!-- http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg -->
  </div>
</template>
<script lang="ts">
export default {
  name: 'StreamLolCompetitiveViewChampion',
}
</script>
<script setup lang="ts">
import { defineProps } from 'vue'
import { LolStreamPick } from '@/types/models/lols/stream'

interface Props {
  pick: LolStreamPick
  version: string
  isRed?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  pick: () => {return {} as LolStreamPick},
  version: '',
  isRed: false,
})

const containerRef = ref<HTMLDivElement>()

onMounted(() => {
  if (containerRef.value) {
    containerRef.value.style.background = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg'
    // http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg`

  }
})
</script>
<style>
.test {
  left: -50px;
}
</style>
