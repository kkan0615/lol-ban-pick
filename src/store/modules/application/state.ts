import { SnackbarOption } from '@/types/system/snackbar'
import { DEFAULT_LOL_VERSION, LolLanguagesEnum } from '@/types/model/lol'
import { LocalStorageKeyEnum } from '@/types/system/localStorage'

export interface ApplicationState {
  lolVersion: string
  lolLanguage: LolLanguagesEnum
  subNavigator: boolean
  navigator: boolean
  userNavigator: boolean
  snackbar: SnackbarOption
}

/**
 * navigator
 */
export const applicationState: ApplicationState = {
  lolVersion: localStorage.getItem(LocalStorageKeyEnum.LOL_VERSION) || DEFAULT_LOL_VERSION,
  lolLanguage: (localStorage.getItem(LocalStorageKeyEnum.LOL_LANGUAGE) as LolLanguagesEnum) || LolLanguagesEnum.ko_KR,
  subNavigator: true,
  navigator: false,
  userNavigator: true,
  snackbar: {} as SnackbarOption
}
