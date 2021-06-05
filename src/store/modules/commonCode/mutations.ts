import { MutationTree } from 'vuex'
import { CommonCodeState } from './state'
import { LolChampionWithKey } from '@/interfaces/model/lol'

export enum CommonCodeMutationTypes {
  SET_LOL_CHAMPIONS = 'COMMON_CODE_SET_LOL_CHAMPIONS',
  SET_LOL_VERSIONS = 'COMMON_CODE_SET_LOL_VERSIONS',
}

export type CommonCodeMutations<S = CommonCodeState> = {
  [CommonCodeMutationTypes.SET_LOL_CHAMPIONS](state: S, payload: LolChampionWithKey): void
  [CommonCodeMutationTypes.SET_LOL_VERSIONS](state: S, payload: Array<string>): void
}

export const commonCodeMutations: MutationTree<CommonCodeState> & CommonCodeMutations = {
  [CommonCodeMutationTypes.SET_LOL_CHAMPIONS] (state, payload) {
    state.lolChampions = Object.assign(state.lolChampions, payload)
  },
  [CommonCodeMutationTypes.SET_LOL_VERSIONS] (state, payload) {
    state.lolVersions = payload
  },
}
