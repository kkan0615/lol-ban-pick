import {
  Store as VuexStore,
  Module,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { RootState } from '@/store'
import { applicationState, ApplicationState } from '@/store/modules/application/state'
import { applicationGetters, ApplicationGetters } from '@/store/modules/application/getters'
import { applicationMutations, ApplicationMutations } from '@/store/modules/application/mutations'
import { ApplicationActions, applicationActions } from '@/store/modules/application/actions'

export type Store<S = ApplicationState> = Omit<
VuexStore<S>,
'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof ApplicationMutations, P extends Parameters<ApplicationMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<ApplicationMutations[K]>
} & {
  getters: {
    [K in keyof ApplicationGetters]: ReturnType<ApplicationGetters[K]>;
  }
} & {
  dispatch<K extends keyof ApplicationActions>(
    key: K,
    payload?: Parameters<ApplicationActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ApplicationActions[K]>
}

export const applicationModule: Module<ApplicationState, RootState> = {
  // @TODO: namespaced 어떻게 쓸지고민하기
  // namespaced: true,
  state: applicationState,
  getters: applicationGetters,
  mutations: applicationMutations,
  actions: applicationActions,
}
