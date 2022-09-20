import { defineStore } from 'pinia'
import { LolLanguagesType } from '@/types/models/lols/language'
import { LolSummonSpell } from '@/types/models/lols/summonSpell'

export interface LolState {
  versionList: string[]
  languageList: LolLanguagesType[]
  championList: any[]
  spellList: LolSummonSpell[]
  version: string
  language: LolLanguagesType
}

const useLolStore = defineStore('lol', {
  state: (): LolState => {
    return {
      versionList: [],
      languageList: [],
      championList: [],
      spellList: [],
      version: '',
      language: 'en_US', // @TODO: Change to const variable
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
     *
     */
    loadVersionList () {
      this.versionList = []
    },
    /**
     *
     */
    resetVersionList () {
      this.versionList = []
    },
    /**
     *
     */
    loadLanguageList () {
      this.languageList = []
    },
    /**
     *
     */
    resetLanguageList () {
      this.languageList = []
    },
    /**
     *
     */
    loadChampionList () {
      this.championList = []
    },
    /**
     *
     */
    resetChampionList () {
      this.championList = []
    },
    /**
     *
     */
    loadSpellList () {
      this.spellList = []
    },
    /**
     *
     */
    resetSpellList () {
      this.spellList = []
    },
  }
})


export default useLolStore
