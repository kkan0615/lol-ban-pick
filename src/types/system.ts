import { UseColorModeOptions, UseDarkOptions } from '@vueuse/core'

/**
 * dark option parameter in vueuse plugin
 */
export const useDarkOption: UseDarkOptions = {
  selector: 'html', // Add at HTML
  valueDark: 'tw-dark', // This project uses prefix "tw-"
}

export const useColorModeOptions: UseColorModeOptions = {
  modes: {
    dark: 'tw-dark',
    light: 'tw-light',
  }
}


/**
 * Lang code table: http://www.lingoes.net/en/translator/langcode.htm
 */
export type SupportedLang = 'en' | 'ko'
export const supportedLangList: (SupportedLang | string)[] = ['en', 'ko']
export const DEFAULT_LANG: SupportedLang = 'en'
