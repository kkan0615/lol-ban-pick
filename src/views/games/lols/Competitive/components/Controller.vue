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
          :champion-list="ChampionList"
          @clicked="clickedChampion"
        />
      </div>
      <div
        class="others"
      >
        <v-btn
          :disabled="LolCompetitiveStep.BLUE_BAN_1 === step"
          color="warning"
          @click="onClickPrevBtn"
        >
          Prev step
        </v-btn>
        <v-btn
          color="error"
        >
          Reset
        </v-btn>
        <div>
          <LolVersionSelect
            :version="version"
            :items="versionList"
            @changed="onChangedVersion"
          />
        </div>
        <div>
          <LolLanguageSelect
            :language="language"
            :items="languageList"
            @changed="onChangedLanguage"
          />
        </div>
        <LolCompetitiveSettingForm />
        <LolCompetitiveTeamForm />
        <LolCompetitiveTeamForm
          red
        />
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
import useLolStore from '@/store/modules/lol'
import { LolChampionBanPick } from '@/types/models/lols/champion'
import LolVersionSelect from '@/components/lols/VersionSelect/index.vue'
import LolLanguageSelect from '@/components/lols/LanguageSelect/index.vue'
import { LolLanguagesType } from '@/types/models/lols/language'
import LolChampionList from '@/components/lols/ChampionList/index.vue'
import LolCompetitiveTeamForm from '@/views/games/lols/Competitive/components/TeamForm.vue'
import LolCompetitiveSettingForm from '@/views/games/lols/Competitive/components/SettingForm.vue'

const lolStore = useLolStore()
const competitiveStore = useLolCompetitiveStore()
const { version, versionList, language, languageList, ChampionList } = storeToRefs(lolStore)
const { step } = storeToRefs(competitiveStore)

/**
 * Champion is clicked in Champion list
 * @param champion
 */
const clickedChampion = (champion: LolChampionBanPick) => {
  if (step.value !== LolCompetitiveStep.END) {
    competitiveStore.nextStep(champion.champion)
  }
}

const onClickPrevBtn = () => {
  competitiveStore.prevStep()
}

const onChangedVersion = (newVersion: string) => {
  lolStore.setVersion(newVersion)
}

const onChangedLanguage = (newLanguage: LolLanguagesType) => {
  lolStore.setLanguage(newLanguage)
}
</script>
