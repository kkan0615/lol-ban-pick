import { createI18n } from 'vue-i18n'
import enDictionary from './langs/en'
import koDictionary from '@/locales/langs/ko'
import { SupportedLang } from '@/types/system'

// Default locale
export const DEFAULT_FALLBACK_LOCALE = 'en'

const messages: Record<SupportedLang, any> = {
  /* English */
  en: enDictionary,
  /* Korean */
  ko: koDictionary,
}

const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_FALLBACK_LOCALE,
  fallbackLocale: DEFAULT_FALLBACK_LOCALE,
  messages,
})

export default i18n
