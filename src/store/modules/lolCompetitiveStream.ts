import { defineStore } from 'pinia'
import { LolChampion } from '@/types/models/lols/champion'

export interface LolCompetitiveStream {
  step: number
  blueTeamPickList: LolChampion[]
  redTeamPickList: LolChampion[]
  blueTeamBanList: LolChampion[]
  redTeamBanList: LolChampion[]
}

const useLolCompetitiveStreamStore = defineStore('lolCompetitiveStream', {
  state: (): LolCompetitiveStream => {
    return {
      step: 0,
      blueTeamPickList: [],
      redTeamPickList: [],
      blueTeamBanList: [],
      redTeamBanList: [],
    }
  },
  getters: {
    /**
     * Get double count
     * @param state
     */
    // DoubleCount (state) {
    //   // @TODO: Add return default language if there is no language.
    //   return state.count * 2
    // },
  },
  actions: {
    /**
     * Set the count
     * @param count
     */
    nextStep () {
    //
    },
  }
})


export default useLolCompetitiveStreamStore
