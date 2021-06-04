import { MutationTree } from 'vuex'
import { CommonCodeState } from './state'
import { LolChampion } from '@/interfaces/model/lol/Champion'
import { LolChampionReturnData } from '@/interfaces/model/lol'

export enum CommonCodeMutationTypes {
  SET_LOL_CHAMPIONS = 'COMMON_CODE_SET_LOL_CHAMPIONS',
}

export type CommonCodeMutations<S = CommonCodeState> = {
  [CommonCodeMutationTypes.SET_LOL_CHAMPIONS](state: S, payload: LolChampionReturnData): void
}

export const commonCodeMutations: MutationTree<CommonCodeState> & CommonCodeMutations = {
  [CommonCodeMutationTypes.SET_LOL_CHAMPIONS] (state, payload) {
    state.lolChampions = payload
  },
}
