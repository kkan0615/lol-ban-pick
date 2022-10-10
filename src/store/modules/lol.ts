import { defineStore } from 'pinia'
import { LolLanguagesType } from '@/types/models/lols/language'
import { LolSummonSpell, LolSummonSpellReq } from '@/types/models/lols/summonSpell'
import lolRequest from '@/utils/requests/lol'
import { LolChampionBanPick, LolChampionListReq } from '@/types/models/lols/champion'

export interface LolState {
  versionList: string[]
  languageList: LolLanguagesType[]
  championList: Record<string, LolChampionBanPick>
  spellList: LolSummonSpell[]
  version: string
  language: LolLanguagesType
}

const useLolStore = defineStore('lol', {
  state: (): LolState => {
    return {
      versionList: [],
      languageList: [],
      championList: {},
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
    ChampionList (state) {
      return Object.values(state.championList).sort((a, b) => a.champion.name.localeCompare(b.champion.name))
    },
    ClassicSummonSpellList (state) {
      return state.spellList.filter(summonSpell => summonSpell.modes.includes('CLASSIC'))
    },
  },
  actions: {
    /**
     * Set version
     */
    setVersion(newVersion: string) {
      this.version = newVersion
    },
    /**
     * Set version
     */
    setLanguage(newLanguage: LolLanguagesType) {
      this.language = newLanguage
    },
    /**
     *
     */
    async loadVersionList () {
      try {
        // Load version list
        const res = await lolRequest.get<string[]>('/lolApi/versions.json')
        this.versionList = res.data
        // First version is recent version
        this.version = res.data[0]
      } catch (e) {
        console.error(e)
        throw e
      }
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
    async loadLanguageList () {
      try {
        const res = await lolRequest.get<LolLanguagesType[]>('/lolCdnApi/languages.json')
        this.languageList = res.data
        // Check current region is supported
        const currentRegion = navigator.language.replace('-', '_')
        if (res.data.findIndex(language => language === currentRegion) !== -1) {
          this.language = currentRegion as LolLanguagesType
        } else {
          this.language = 'en_US'
        }
        this.language = 'ko_KR'
      } catch (e) {
        console.error(e)
        throw e
      }
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
    async loadChampionList () {
      try {
        const res =
          await lolRequest.get<LolChampionListReq>(`/lolCdnApi/${this.version}/data/${this.language}/champion.json`)
        const resChampionList = res.data.data
        this.resetChampionList()
        for (const resChampionListKey in resChampionList) {
          this.championList[resChampionListKey] = {
            champion: resChampionList[resChampionListKey],
            picked: false,
            banded: false,
          } as LolChampionBanPick
        }
      } catch (e) {
        console.error(e)
        throw e
      }
    },
    /**
     *
     */
    resetChampionList () {
      this.championList = {}
    },
    /**
     *
     */
    async loadSummonSpellList () {
      try {
        const res = await lolRequest.get<LolSummonSpellReq>(`/lolCdnApi/${this.version}/data/${this.language}/summoner.json`)
        this.spellList = Object.values(res.data.data)
      } catch (e) {
        console.error(e)
        throw e
      }
    },
    /**
     *
     */
    resetSummonSpellList () {
      this.spellList = []
    },
  }
})


export default useLolStore
