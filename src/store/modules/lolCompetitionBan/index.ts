import {
  Store as VuexStore,
  Module,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { RootState } from '@/store'
import { lolCompetitionBanState, LolCompetitionBanState } from '@/store/modules/lolCompetitionBan/state'
import { lolCompetitionBanGetters, LolCompetitionBanGetters } from '@/store/modules/lolCompetitionBan/getters'
import { lolCompetitionBanBanMutations, LolCompetitionBanMutations } from '@/store/modules/lolCompetitionBan/mutations'
import { lolCompetitionBanActions, LolCompetitionBanActions } from '@/store/modules/lolCompetitionBan/actions'

export type Store<S = LolCompetitionBanMutations> = Omit<
VuexStore<S>,
'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof LolCompetitionBanMutations, P extends Parameters<LolCompetitionBanMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<LolCompetitionBanMutations[K]>
} & {
  getters: {
    [K in keyof LolCompetitionBanGetters]: ReturnType<LolCompetitionBanGetters[K]>;
  }
} & {
  dispatch<K extends keyof LolCompetitionBanActions>(
    key: K,
    payload?: Parameters<LolCompetitionBanActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<LolCompetitionBanActions[K]>
}

export const LolCompetitionBanModule: Module<LolCompetitionBanState, RootState> = {
  // @TODO: namespaced 어떻게 쓸지고민하기
  // namespaced: true,
  state: lolCompetitionBanState,
  getters: lolCompetitionBanGetters,
  mutations: lolCompetitionBanBanMutations,
  actions: lolCompetitionBanActions,
}
