import { SnackbarOption } from '@/interfaces/system/snackbar'
import { DEFAULT_LOL_VERSION, LolLanguagesEnum } from '@/interfaces/model/lol'
import { LocalStorageKeyEnum } from '@/interfaces/system/localStorage'
import { LolChampion } from '@/interfaces/model/lol/Champion'

export interface CommonCodeState {
  lolChampions: Array<LolChampion>
}

/**
 * navigator
 */
export const commonState: CommonCodeState = {
  lolChampions: [],
}
