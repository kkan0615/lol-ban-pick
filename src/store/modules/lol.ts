import { defineStore } from 'pinia'
import { LolLanguagesType } from '@/types/models/lols/language'
import { LolSummonSpell } from '@/types/models/lols/summonSpell'
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
    // DoubleCount (state) {
    //   // @TODO: Add return default language if there is no language.
    //   return state.count * 2
    // },
  },
  actions: {
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
        // 12.18.1/data/en_US/champion.json
        const res =
          await lolRequest.get<LolChampionListReq>(`/lolCdnApi/${this.version}/data/${this.language}/champion.json`)
        const resChampionList = res.data.data
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
