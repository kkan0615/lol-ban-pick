import { SnackbarOption } from '@/interfaces/system/snackbar'
import { DEFAULT_LOL_VERSION, LolChampionReturnData, LolLanguagesEnum } from '@/interfaces/model/lol'
import { LocalStorageKeyEnum } from '@/interfaces/system/localStorage'
import { LolChampion } from '@/interfaces/model/lol/Champion'

export interface CommonCodeState {
  lolChampions: LolChampionReturnData
}

/**
 * navigator
 */
export const commonState: CommonCodeState = {
  lolChampions: {} as LolChampionReturnData,
}
