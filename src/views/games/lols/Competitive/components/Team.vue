<template>
  <div
    class="tw-grow tw-w-full tw-flex tw-flex-col tw-space-y-4"
  >
    <div
      class="tw-h-24 tw-flex tw-items-center tw-text-4xl tw-font-bold tw-mix-blend-difference"
      :class="{
        'tw-flex-row-reverse': red
      }"
      :style="{
        'background': team.color
      }"
    >
      <div
        class="tw-p-2"
      >
        <img
          v-if="logoSrc"
          class="tw-w-20 tw-aspect-square"
          :src="logoSrc"
        >
      </div>
      <div
        class="tw-mx-auto"
      >
        {{ team.name }}
      </div>
      <div>
        {{ team.win }}
      </div>
    </div>
    <div
      class="tw-flex"
      :class="{
        'tw-flex-row-reverse': red
      }"
    >
      <LolCompetitiveBan
        v-for="(ban, index) in banListWithEmpty"
        :key="`ban-${red ? 'red' : 'blue'}-${index}`"
        :ban="ban"
        :red="red"
      />
    </div>
    <div
      class="tw-grid tw-grid-cols-5"
    >
      <LolCompetitivePick
        v-for="(pick, index) in pickListWithEmpty"
        :key="`pick-${red ? 'red' : 'blue'}-${index}`"
        :pick="pick"
        :index="index"
        :red="red"
      />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LolCompetitiveTeam',
}
</script>
<script setup lang="ts">
import { defineProps } from 'vue'
import { LolCompetitivePick as Pick, LolCompetitiveTeam } from '@/types/models/lols/competitive'
import LolCompetitivePick from '@/views/games/lols/Competitive/components/Pick.vue'
import { LolChampion } from '@/types/models/lols/champion'
import LolCompetitiveBan from '@/views/games/lols/Competitive/components/Ban.vue'

interface Props {
  team: LolCompetitiveTeam
  banList: LolChampion[]
  pickList: Pick[]
  red?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  team: () => ({} as LolCompetitiveTeam),
  banList: () => [],
  pickList: () => [],
  red: false,
})

const logoSrc = computed(() => props.team.logo ? URL.createObjectURL(props.team.logo) : null)

const banListWithEmpty = computed(() => {
  const emptyList: LolChampion[] = new Array(5 - props.banList.length).fill(() => { return {} as LolChampion})
  const result = ([] as LolChampion[]).concat(props.banList).concat(emptyList)

  return result
})

const pickListWithEmpty = computed(() => {
  const emptyList: Pick[] = new Array(5 - props.pickList.length).fill(() => { return {} as Pick})
  const result = ([] as Pick[]).concat(props.pickList).concat(emptyList)

  return result
})

</script>
