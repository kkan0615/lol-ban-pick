import { defineStore } from 'pinia'
import { LolChampion } from '@/types/models/lols/champion'
import { LolCompetitiveStep } from '@/types/models/lols/competitive'
import useLolStore from '@/store/modules/lol'
import { LolStreamPick } from '@/types/models/lols/stream'

export interface LolCompetitiveStream {
  step: LolCompetitiveStep
  blueTeamPlayerList: string[]
  redTeamPlayerList: string[]
  blueTeamPickList: LolStreamPick[]
  redTeamPickList: LolStreamPick[]
  blueTeamBanList: LolStreamPick[]
  redTeamBanList: LolStreamPick[]
}

const useLolCompetitiveStreamStore = defineStore('lolCompetitiveStream', {
  state: (): LolCompetitiveStream => {
    return {
      step: 0,
      blueTeamPlayerList: [],
      redTeamPlayerList: [],
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
          this.blueTeamBanList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.RED_BAN_1: {
          this.redTeamBanList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.BLUE_BAN_2: {
          this.blueTeamBanList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.RED_BAN_2: {
          this.redTeamBanList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.BLUE_BAN_3: {
          this.blueTeamBanList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.RED_BAN_3: {
          this.redTeamBanList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.BLUE_PICK_1: {
          this.blueTeamPickList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.RED_PICK_1: {
          this.redTeamPickList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.RED_PICK_2: {
          this.redTeamPickList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.BLUE_PICK_2: {
          this.blueTeamPickList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.BLUE_PICK_3: {
          this.blueTeamPickList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.RED_PICK_3: {
          this.redTeamPickList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.RED_BAN_4: {
          this.redTeamBanList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.BLUE_BAN_4: {
          this.blueTeamBanList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.RED_BAN_5: {
          this.redTeamBanList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.BLUE_BAN_5: {
          this.blueTeamBanList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.RED_PICK_4: {
          this.redTeamPickList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.BLUE_PICK_4: {
          this.blueTeamPickList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.BLUE_PICK_5: {
          this.blueTeamPickList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.RED_PICK_5: {
          this.redTeamPickList.push({
            champion: champion,
            spellOne: undefined,
            spellTwo: undefined,
          })
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
          const element = this.blueTeamBanList.pop()
          if (element)
            lolStore.championList[element.champion.id].banded = false
          break
        }
        case LolCompetitiveStep.RED_BAN_1: {
          const element = this.redTeamBanList.pop()
          if (element)
            lolStore.championList[element.champion.id].banded = false
          break
        }
        case LolCompetitiveStep.BLUE_BAN_2: {
          const element = this.blueTeamBanList.pop()
          if (element)
            lolStore.championList[element.champion.id].banded = false
          break
        }
        case LolCompetitiveStep.RED_BAN_2: {
          const element = this.redTeamBanList.pop()
          if (element)
            lolStore.championList[element.champion.id].banded = false
          break
        }
        case LolCompetitiveStep.BLUE_BAN_3: {
          const element = this.blueTeamBanList.pop()
          if (element)
            lolStore.championList[element.champion.id].banded = false
          break
        }
        case LolCompetitiveStep.RED_BAN_3: {
          const element = this.redTeamBanList.pop()
          if (element)
            lolStore.championList[element.champion.id].banded = false
          break
        }
        case LolCompetitiveStep.BLUE_PICK_1: {
          const element = this.blueTeamPickList.pop()
          if (element)
            lolStore.championList[element.champion.id].picked = false
          break
        }
        case LolCompetitiveStep.RED_PICK_1: {
          const element = this.redTeamPickList.pop()
          if (element)
            lolStore.championList[element.champion.id].picked = false
          break
        }
        case LolCompetitiveStep.RED_PICK_2: {
          const element = this.redTeamPickList.pop()
          if (element)
            lolStore.championList[element.champion.id].picked = false
          break
        }
        case LolCompetitiveStep.BLUE_PICK_2: {
          const element = this.blueTeamPickList.pop()
          if (element)
            lolStore.championList[element.champion.id].picked = false
          break
        }
        case LolCompetitiveStep.BLUE_PICK_3: {
          const element = this.blueTeamPickList.pop()
          if (element)
            lolStore.championList[element.champion.id].picked = false
          break
        }
        case LolCompetitiveStep.RED_PICK_3: {
          const element = this.redTeamPickList.pop()
          if (element)
            lolStore.championList[element.champion.id].picked = false
          break
        }
        case LolCompetitiveStep.RED_BAN_4: {
          const element = this.redTeamBanList.pop()
          if (element)
            lolStore.championList[element.champion.id].banded = false
          break
        }
        case LolCompetitiveStep.BLUE_BAN_4: {
          const element = this.blueTeamBanList.pop()
          if (element)
            lolStore.championList[element.champion.id].banded = false
          break
        }
        case LolCompetitiveStep.RED_BAN_5: {
          const element = this.redTeamBanList.pop()
          if (element)
            lolStore.championList[element.champion.id].banded = false
          break
        }
        case LolCompetitiveStep.BLUE_BAN_5: {
          const element = this.blueTeamBanList.pop()
          if (element)
            lolStore.championList[element.champion.id].banded = false
          break
        }
        case LolCompetitiveStep.RED_PICK_4: {
          const element = this.redTeamPickList.pop()
          if (element)
            lolStore.championList[element.champion.id].picked = false
          break
        }
        case LolCompetitiveStep.BLUE_PICK_4: {
          const element = this.blueTeamPickList.pop()
          if (element)
            lolStore.championList[element.champion.id].picked = false
          break
        }
        case LolCompetitiveStep.BLUE_PICK_5: {
          const element = this.blueTeamPickList.pop()
          if (element)
            lolStore.championList[element.champion.id].picked = false
          break
        }
        case LolCompetitiveStep.RED_PICK_5: {
          const element = this.redTeamPickList.pop()
          if (element)
            lolStore.championList[element.champion.id].picked = false
          break
        }
      }
      ++this.step
    },
  }
})


export default useLolCompetitiveStreamStore
