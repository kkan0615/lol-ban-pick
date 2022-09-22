import { defineStore } from 'pinia'
import { LolChampion } from '@/types/models/lols/champion'
import { LolCompetitiveStep } from '@/types/models/lols/competitive'
import useLolStore from '@/store/modules/lol'

export interface LolCompetitiveStream {
  step: LolCompetitiveStep
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
     * Pass to next step
     * @param champion {LolChampion} : Selected champion
     */
    nextStep (champion: LolChampion) {
      const lolStore = useLolStore()
      if (lolStore.championList[champion.id].banded || lolStore.championList[champion.id].picked) {
        throw new Error('Champion is already picked or baned')
      }

      switch (this.step) {
        case LolCompetitiveStep.BLUE_BAN_1: {
          this.blueTeamBanList.push(champion)
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.RED_BAN_1: {
          this.redTeamBanList.push(champion)
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.BLUE_BAN_2: {
          this.blueTeamBanList.push(champion)
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.RED_BAN_2: {
          this.redTeamBanList.push(champion)
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.BLUE_BAN_3: {
          this.blueTeamBanList.push(champion)
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.RED_BAN_3: {
          this.redTeamBanList.push(champion)
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.BLUE_PICK_1: {
          this.blueTeamPickList.push(champion)
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.RED_PICK_1: {
          this.redTeamPickList.push(champion)
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.RED_PICK_2: {
          this.redTeamPickList.push(champion)
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.BLUE_PICK_2: {
          this.blueTeamPickList.push(champion)
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.BLUE_PICK_3: {
          this.blueTeamPickList.push(champion)
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.RED_PICK_3: {
          this.redTeamPickList.push(champion)
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.RED_BAN_4: {
          this.redTeamBanList.push(champion)
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.BLUE_BAN_4: {
          this.blueTeamBanList.push(champion)
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.RED_BAN_5: {
          this.redTeamBanList.push(champion)
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.BLUE_BAN_5: {
          this.blueTeamBanList.push(champion)
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.RED_PICK_4: {
          this.redTeamPickList.push(champion)
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.BLUE_PICK_4: {
          this.blueTeamPickList.push(champion)
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.BLUE_PICK_5: {
          this.blueTeamPickList.push(champion)
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.RED_PICK_5: {
          this.redTeamPickList.push(champion)
          lolStore.championList[champion.id].picked = true
          break
        }
      }
      ++this.step
    },
    /**
     * back to prev step
     */
    prevStep () {
      const lolStore = useLolStore()
      --this.step
      switch (this.step) {
        case LolCompetitiveStep.BLUE_BAN_1: {
          const champion = this.blueTeamBanList.pop()
          if (champion)
            lolStore.championList[champion.id].banded = false
          break
        }
        case LolCompetitiveStep.RED_BAN_1: {
          const champion = this.redTeamBanList.pop()
          if (champion)
            lolStore.championList[champion.id].banded = false
          break
        }
        case LolCompetitiveStep.BLUE_BAN_2: {
          const champion = this.blueTeamBanList.pop()
          if (champion)
            lolStore.championList[champion.id].banded = false
          break
        }
        case LolCompetitiveStep.RED_BAN_2: {
          const champion = this.redTeamBanList.pop()
          if (champion)
            lolStore.championList[champion.id].banded = false
          break
        }
        case LolCompetitiveStep.BLUE_BAN_3: {
          const champion = this.blueTeamBanList.pop()
          if (champion)
            lolStore.championList[champion.id].banded = false
          break
        }
        case LolCompetitiveStep.RED_BAN_3: {
          const champion = this.redTeamBanList.pop()
          if (champion)
            lolStore.championList[champion.id].banded = false
          break
        }
        case LolCompetitiveStep.BLUE_PICK_1: {
          const champion = this.blueTeamPickList.pop()
          if (champion)
            lolStore.championList[champion.id].picked = false
          break
        }
        case LolCompetitiveStep.RED_PICK_1: {
          const champion = this.redTeamPickList.pop()
          if (champion)
            lolStore.championList[champion.id].picked = false
          break
        }
        case LolCompetitiveStep.RED_PICK_2: {
          const champion = this.redTeamPickList.pop()
          if (champion)
            lolStore.championList[champion.id].picked = false
          break
        }
        case LolCompetitiveStep.BLUE_PICK_2: {
          const champion = this.blueTeamPickList.pop()
          if (champion)
            lolStore.championList[champion.id].picked = false
          break
        }
        case LolCompetitiveStep.BLUE_PICK_3: {
          const champion = this.blueTeamPickList.pop()
          if (champion)
            lolStore.championList[champion.id].picked = false
          break
        }
        case LolCompetitiveStep.RED_PICK_3: {
          const champion = this.redTeamPickList.pop()
          if (champion)
            lolStore.championList[champion.id].picked = false
          break
        }
        case LolCompetitiveStep.RED_BAN_4: {
          const champion = this.redTeamBanList.pop()
          if (champion)
            lolStore.championList[champion.id].banded = false
          break
        }
        case LolCompetitiveStep.BLUE_BAN_4: {
          const champion = this.blueTeamBanList.pop()
          if (champion)
            lolStore.championList[champion.id].banded = false
          break
        }
        case LolCompetitiveStep.RED_BAN_5: {
          const champion = this.redTeamBanList.pop()
          if (champion)
            lolStore.championList[champion.id].banded = false
          break
        }
        case LolCompetitiveStep.BLUE_BAN_5: {
          const champion = this.blueTeamBanList.pop()
          if (champion)
            lolStore.championList[champion.id].banded = false
          break
        }
        case LolCompetitiveStep.RED_PICK_4: {
          const champion = this.redTeamPickList.pop()
          if (champion)
            lolStore.championList[champion.id].picked = false
          break
        }
        case LolCompetitiveStep.BLUE_PICK_4: {
          const champion = this.blueTeamPickList.pop()
          if (champion)
            lolStore.championList[champion.id].picked = false
          break
        }
        case LolCompetitiveStep.BLUE_PICK_5: {
          const champion = this.blueTeamPickList.pop()
          if (champion)
            lolStore.championList[champion.id].picked = false
          break
        }
        case LolCompetitiveStep.RED_PICK_5: {
          const champion = this.redTeamPickList.pop()
          if (champion)
            lolStore.championList[champion.id].picked = false
          break
        }
      }
      ++this.step
    },
  }
})


export default useLolCompetitiveStreamStore
