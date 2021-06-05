import { ActionContext, ActionTree } from 'vuex'
import { CommonCodeMutations, CommonCodeMutationTypes } from './mutations'
import { CommonCodeState } from './state'
import { RootState } from '@/store'
import { LolChampion } from '@/interfaces/model/lol/Champion'
import defaultAxios from '@/utils/lib/axioses/default'
import { LolChampionReturn, LolChampionWithKey } from '@/interfaces/model/lol'

export enum CommonCodeActionTypes {
  SET_LOL_CHAMPIONS = 'COMMON_CODE_SET_LOL_CHAMPIONS',
  LOAD_LOL_CHAMPIONS = 'COMMON_CODE_LOAD_LOL_CHAMPIONS',
  LOAD_LOL_VERSIONS = 'COMMON_CODE_LOAD_LOL_VERSIONS',
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
    payload: LolChampionWithKey,
  ): void
  [CommonCodeActionTypes.LOAD_LOL_CHAMPIONS](
    { commit, state, rootState }: AugmentedActionContext,
  ): void
  [CommonCodeActionTypes.LOAD_LOL_VERSIONS](
    { commit, state, rootState }: AugmentedActionContext,
  ): void
}

export const commonCodeActions: ActionTree<CommonCodeState, RootState> & CommonCodeActions = {
  [CommonCodeActionTypes.SET_LOL_CHAMPIONS] ({ commit }, payload) {
    commit(CommonCodeMutationTypes.SET_LOL_CHAMPIONS, payload)
  },
  async [CommonCodeActionTypes.LOAD_LOL_CHAMPIONS] ({ commit, rootState }) {
    /* State of application store */
    const applicationState = rootState.application
    const res = (await defaultAxios.get<LolChampionReturn>(
      `/lolCdnApi/${applicationState.lolVersion}/data/${applicationState.lolLanguage}/champion.json`)).data
    commit(CommonCodeMutationTypes.SET_LOL_CHAMPIONS, res.data)
  },
  async [CommonCodeActionTypes.LOAD_LOL_VERSIONS] ({ commit }) {
    const res = (await defaultAxios.get<Array<string>>(
      '/lolApi/versions.json')).data
    commit(CommonCodeMutationTypes.SET_LOL_VERSIONS, res)
  },
}
