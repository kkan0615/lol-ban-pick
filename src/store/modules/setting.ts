import { defineStore } from 'pinia'
import { DEFAULT_LANG, SupportedLang } from '@/types/system'
import { getShortLang, getSystemLang, setLang } from '@/utils/lang'
import i18n from '@/locales'

export interface SettingState {
  lang: SupportedLang | null
}

const useSettingStore = defineStore('setting', {
  state: (): SettingState => {
    return {
      lang: null,
    }
  },
  getters: {
    /**
     * Get current Theme
     * @param state
     */
    Lang (state) {
      return state.lang || DEFAULT_LANG
    },
  },
  actions: {
    initSetting() {
      // Initialize current lang
      this.lang = getSystemLang()
      i18n.global.locale = this.lang
    },
    /**
     * Set Language
     * @param lang - supported language or preference
     */
    setLang (lang: SupportedLang | 'preference') {
      setLang(lang)
      this.lang = getShortLang() as SupportedLang
      i18n.global.locale = this.lang
    },
  }
})


export default useSettingStore
