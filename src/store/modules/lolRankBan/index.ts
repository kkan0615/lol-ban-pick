import {
  Store as VuexStore,
  Module,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { RootState } from '@/store'
import { lolRankBanState, LolRankBanState } from '@/store/modules/lolRankBan/state'
import { lolRankBanGetters, LolRanKBanGetters } from '@/store/modules/lolRankBan/getters'
import { lolRanKBanMutations, LolRanKBanMutations } from '@/store/modules/lolRankBan/mutations'
import { lolRanKBanActions, LolRanKBanActions } from '@/store/modules/lolRankBan/actions'

export type Store<S = LolRankBanState> = Omit<
VuexStore<S>,
'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof LolRanKBanMutations, P extends Parameters<LolRanKBanMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<LolRanKBanMutations[K]>
} & {
  getters: {
    [K in keyof LolRanKBanGetters]: ReturnType<LolRanKBanGetters[K]>;
  }
} & {
  dispatch<K extends keyof LolRanKBanActions>(
    key: K,
    payload?: Parameters<LolRanKBanActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<LolRanKBanActions[K]>
}

export const lolRankBanModule: Module<LolRankBanState, RootState> = {
  // @TODO: namespaced 어떻게 쓸지고민하기
  // namespaced: true,
  state: lolRankBanState,
  getters: lolRankBanGetters,
  mutations: lolRanKBanMutations,
  actions: lolRanKBanActions,
}
