import { DEFAULT_LANG, SupportedLang, supportedLangList } from '@/types/system'
import { LocalStorageKey } from '@/types/storage'

/**
 * Get current language
 * @return lang - en-US
 */
export const getLang = () => {
  if (localStorage.getItem(LocalStorageKey.Lang)) {
    return localStorage.getItem(LocalStorageKey.Lang) as SupportedLang
  }

  return navigator.languages && navigator.languages[0] || navigator.language
}

/**
 * Get current short language
 * @return lang - ko, en
 */
export const getShortLang = () => {
  const lang = getLang()

  return lang.split('-')[0]
}

/**
 * Get Supported system language
 * @return lang - supported language
 */
export const getSystemLang = (): SupportedLang => {
  const lang = getLang()
  const shortLang = getShortLang()

  if (supportedLangList.includes(lang)) {
    return lang as SupportedLang
  } else if (supportedLangList.includes(shortLang)) {
    return shortLang as SupportedLang
  } else {
    return DEFAULT_LANG
  }
}

/**
 * Set language
 * @param lang - supported language, preference: change to default language
 */
export const setLang = (lang: SupportedLang | 'preference') => {
  if (lang === 'preference') {
    localStorage.removeItem(LocalStorageKey.Lang)
  } else {
    localStorage.setItem(LocalStorageKey.Lang, lang)
  }
}
