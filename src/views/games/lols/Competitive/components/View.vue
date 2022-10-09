<template>
  <div
    class="view"
  >
    <div
      class="content tw-space-x-4"
    >
      <LolCompetitiveTeam
        :team="blueTeam"
        :pick-list="blueTeamPickList"
        :ban-list="blueTeamBanList"
      />
      <div
        class="tw-w-32 tw-h-24 tw-flex tw-items-center tw-justify-center"
      >
        <div
          class="tw-flex tw-flex-col tw-items-center"
        >
          <div>
            {{ formatLanguage }}
          </div>
          <div
            class="tw-text-2xl tw-text-zinc-400"
          >
            {{ version }}
          </div>
        </div>
      </div>
      <LolCompetitiveTeam
        :team="redTeam"
        :pick-list="redTeamPickList"
        :ban-list="redTeamBanList"
        red
      />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LolCompetitiveView',
}
</script>
<script setup lang="ts">
import LolCompetitiveTeam from '@/views/games/lols/Competitive/components/Team.vue'
import useLolCompetitiveStore from '@/store/modules/lolCompetivie'
import { storeToRefs } from 'pinia'
import useLolStore from '@/store/modules/lol'

const lolStore = useLolStore()
const competitiveStore = useLolCompetitiveStore()
const { version, language } = storeToRefs(lolStore)
const { blueTeam, redTeam, blueTeamBanList, redTeamBanList, blueTeamPickList, redTeamPickList } = storeToRefs(competitiveStore)

const formatLanguage = computed(() => language.value.split('_')[0].toUpperCase())

</script>
