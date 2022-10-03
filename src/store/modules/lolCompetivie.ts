import { defineStore } from 'pinia'
import { LolChampion } from '@/types/models/lols/champion'
import { LolCompetitivePick, LolCompetitiveStep, LolCompetitiveTeam } from '@/types/models/lols/competitive'
import useLolStore from '@/store/modules/lol'

export interface LolCompetitive {
  step: LolCompetitiveStep
  blueTeam: LolCompetitiveTeam
  redTeam: LolCompetitiveTeam
  blueTeamPlayerList: string[]
  redTeamPlayerList: string[]
  blueTeamPickList: LolCompetitivePick[]
  redTeamPickList: LolCompetitivePick[]
  blueTeamBanList: LolChampion[]
  redTeamBanList: LolChampion[]
}

const useLolCompetitiveStore = defineStore('lolCompetitive', {
  state: (): LolCompetitive => {
    return {
      step: 0,
      blueTeam: {
        name: 'Blue'
      } as LolCompetitiveTeam,
      redTeam: {
        name: 'Red'
      } as LolCompetitiveTeam,
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
    initTeams() {
      //
    },
    setBlueTeam(newTeam: Partial<LolCompetitiveTeam>) {
      this.blueTeam = { ...this.blueTeam, ...newTeam }
    },
    setRedTeam(newTeam: Partial<LolCompetitiveTeam>) {
      this.redTeam = { ...this.blueTeam, ...newTeam }
    },
    resetGame() {
      this.step = 0
      this.blueTeamPlayerList = []
      this.redTeamPlayerList = []
      this.blueTeamPickList = []
      this.redTeamPickList = []
      this.blueTeamBanList = []
      this.redTeamBanList = []
    },
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
          this.blueTeamPickList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.RED_PICK_1: {
          this.redTeamPickList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.RED_PICK_2: {
          this.redTeamPickList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.BLUE_PICK_2: {
          this.blueTeamPickList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.BLUE_PICK_3: {
          this.blueTeamPickList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.RED_PICK_3: {
          this.redTeamPickList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
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
          this.redTeamPickList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.BLUE_PICK_4: {
          this.blueTeamPickList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.BLUE_PICK_5: {
          this.blueTeamPickList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
          lolStore.championList[champion.id].picked = true
          break
        }
        case LolCompetitiveStep.RED_PICK_5: {
          this.redTeamPickList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
          lolStore.championList[champion.id].picked = true
          break
        }
      }
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
      --this.step
    },
  }
})


export default useLolCompetitiveStore