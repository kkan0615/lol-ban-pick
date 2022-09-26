<template>
  <div
    class="tw-w-1/5 tw-border"
    :class="{
      'tw-border-blue-500': !isRed,
      'tw-border-red-500': isRed
    }"
    style="aspect-ratio: 1/1;"
  >
    <UseImage
      v-if="champion.id"
      :src="`/lolCdnApi/${version}/img/champion/${champion.id}.png`"
    >
      <template #loading>
        <LolBanListChampionLoading />
      </template>

      <template #error>
        Failed, {{ champion }}
      </template>
    </UseImage>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LolBanListChampion',
}
</script>
<script setup lang="ts">
import { LolChampion } from '@/types/models/lols/champion'
import { defineProps } from 'vue'
import { UseImage } from '@vueuse/components'
import LolBanListChampionLoading from '@/components/lols/BanList/components/ChampionLoading.vue'

interface Props {
  champion: LolChampion
  version: string
  isRed?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  champion: () => {return {} as LolChampion},
  version: '',
  isRed: false,
})

</script>

