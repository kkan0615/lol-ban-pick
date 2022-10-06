<template>
  <div
    class="controller"
  >
    <div
      class="content"
    >
      <div
        class="champion-list"
      >
        <LolChampionList
          :version="version"
          :champion-list="Object.values(championList)"
          @clicked="clickedChampion"
        />
      </div>
      <div
        class="others"
      >
        <v-btn
          :disabled="LolCompetitiveStep.BLUE_BAN_1 === step"
          color="warning"
        >
          Prev step
        </v-btn>
        <v-btn
          color="error"
        >
          Reset
        </v-btn>
        <div>
          @TODO: add Team setting dialog
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LolCompetitiveController',
}
</script>
<script setup lang="ts">
import useLolCompetitiveStore from '@/store/modules/lolCompetivie'
import { storeToRefs } from 'pinia'
import { LolCompetitiveStep } from '@/types/models/lols/competitive'
import LolChampionList from '@/components/lols/ChampionList/index.vue'
import useLolStore from '@/store/modules/lol'
import { LolChampionBanPick } from '@/types/models/lols/champion'

const competitiveStore = useLolCompetitiveStore()
const lolStore = useLolStore()
const { step } = storeToRefs(competitiveStore)
const { championList, version } = storeToRefs(lolStore)

/**
 * Champion is clicked in Champion list
 * @param champion
 */
const clickedChampion = (champion: LolChampionBanPick) => {
  if (step.value !== LolCompetitiveStep.END) {
    competitiveStore.nextStep(champion.champion)
  }
}
</script>
