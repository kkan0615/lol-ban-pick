import { defineStore } from 'pinia'
import { LolChampion } from '@/types/models/lols/champion'
import { LolCompetitiveStep } from '@/types/models/lols/competitive'
import useLolStore from '@/store/modules/lol'
import { LolStreamPick, LolStreamSettingTeam } from '@/types/models/lols/stream'

export interface LolCompetitiveStream {
  timer: NodeJS.Timeout | null
  seconds: number
  step: LolCompetitiveStep
  blueTeam: LolStreamSettingTeam
  redTeam: LolStreamSettingTeam
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
      timer: null,
      seconds: 60,
      step: 0,
      blueTeam: {} as LolStreamSettingTeam,
      redTeam: {} as LolStreamSettingTeam,
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
    setBlueTeam(newTeam: Partial<LolStreamSettingTeam>) {
      this.blueTeam = { ...this.blueTeam, ...newTeam }
    },
    setReadTeam(newTeam: Partial<LolStreamSettingTeam>) {
      this.redTeam = { ...this.blueTeam, ...newTeam }
    },
    resetTimer() {
      this.clearTimer()
      this.seconds = 60
      this.timer = setInterval(() => {
        this.seconds -= 1
        if (this.seconds <= 0) {
          this.clearTimer()
        }
      }, 1000)
    },
    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
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
          this.blueTeamBanList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.RED_BAN_1: {
          this.redTeamBanList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.BLUE_BAN_2: {
          this.blueTeamBanList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.RED_BAN_2: {
          this.redTeamBanList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.BLUE_BAN_3: {
          this.blueTeamBanList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.RED_BAN_3: {
          this.redTeamBanList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
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
          this.redTeamBanList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.BLUE_BAN_4: {
          this.blueTeamBanList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.RED_BAN_5: {
          this.redTeamBanList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
          lolStore.championList[champion.id].banded = true
          break
        }
        case LolCompetitiveStep.BLUE_BAN_5: {
          this.blueTeamBanList.push({
            champion: champion,
            spellList: [undefined, undefined],
          })
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
      ++this.step
      this.resetTimer()
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
      this.resetTimer()
    },
  }
})


export default useLolCompetitiveStreamStore
