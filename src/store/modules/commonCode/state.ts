import { LolChampionWithKey } from '@/interfaces/model/lol'

export interface CommonCodeState {
  lolChampions: LolChampionWithKey
  lolVersions: Array<string>
}

/**
 * navigator
 */
export const commonState: CommonCodeState = {
  lolChampions: {} as LolChampionWithKey,
  lolVersions: [],
}
