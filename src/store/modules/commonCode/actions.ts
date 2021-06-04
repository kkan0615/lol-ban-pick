import { ActionContext, ActionTree } from 'vuex'
import { CommonCodeMutations, CommonCodeMutationTypes } from './mutations'
import { CommonCodeState } from './state'
import { RootState } from '@/store'
import { LolChampion } from '@/interfaces/model/lol/Champion'
import defaultAxios from '@/utils/lib/axioses/default'
import { LOL_VERSIONS_URL, LolChampionReturn, LolChampionReturnData } from '@/interfaces/model/lol'

export enum CommonCodeActionTypes {
  SET_LOL_CHAMPIONS = 'COMMON_CODE_SET_LOL_CHAMPIONS',
  LOAD_LOL_CHAMPIONS = 'COMMON_CODE_LOAD_LOL_CHAMPIONS',
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
    payload: LolChampionReturnData,
  ): void
  [CommonCodeActionTypes.LOAD_LOL_CHAMPIONS](
    { commit, state, rootState }: AugmentedActionContext,
  ): void
}

export const commonCodeActions: ActionTree<CommonCodeState, RootState> & CommonCodeActions = {
  [CommonCodeActionTypes.SET_LOL_CHAMPIONS] ({ commit }, payload) {
    commit(CommonCodeMutationTypes.SET_LOL_CHAMPIONS, payload)
  },
  async [CommonCodeActionTypes.LOAD_LOL_CHAMPIONS] ({ commit, rootState }) {
    const res = (await defaultAxios.get<LolChampionReturn>(
      `/lolCdnApi/${rootState.application.lolVersion}/data/${rootState.application.lolLanguage}/champion.json`)).data
    console.log(res)
    commit(CommonCodeMutationTypes.SET_LOL_CHAMPIONS, res.data)
  },
}
