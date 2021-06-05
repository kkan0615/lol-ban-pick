import { LolChampionWithKey } from '@/interfaces/model/lol'

export interface CommonCodeState {
  lolChampions: LolChampionWithKey
}

/**
 * navigator
 */
export const commonState: CommonCodeState = {
  lolChampions: {} as LolChampionWithKey,
}
