import { ActionContext, ActionTree } from 'vuex'
import { CommonCodeMutations, CommonCodeMutationTypes } from './mutations'
import { CommonCodeState } from './state'
import { RootState } from '@/store'
import { LolChampion } from '@/interfaces/model/lol/Champion'

export enum CommonCodeActionTypes {
  SET_LOL_CHAMPIONS = 'COMMON_CODE_SET_LOL_CHAMPIONS',
}

export type AugmentedActionContext = {
  commit<K extends keyof CommonCodeMutations>(
    key: K,
    payload?: Parameters<CommonCodeMutations[K]>[1]
  ): ReturnType<CommonCodeMutations[K]>
} & Omit<ActionContext<CommonCodeState, RootState>, 'commit'>

export interface CommonCodeActions {
  [CommonCodeActionTypes.SET_LOL_CHAMPIONS](
    { commit, state, rootState }: AugmentedActionContext,
    payload: Array<LolChampion>
  ): void
}

export const commonCodeActions: ActionTree<CommonCodeState, RootState> & CommonCodeActions = {
  [CommonCodeActionTypes.SET_LOL_CHAMPIONS] ({ commit }, payload) {
    commit(CommonCodeMutationTypes.SET_LOL_CHAMPIONS, payload)
  },
}
