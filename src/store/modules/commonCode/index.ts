import {
  Store as VuexStore,
  Module,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { RootState } from '@/store'
import { commonState, CommonCodeState } from '@/store/modules/commonCode/state'
import { commonCodeGetters, CommonCodeGetters } from '@/store/modules/commonCode/getters'
import { commonCodeMutations, CommonCodeMutations } from '@/store/modules/commonCode/mutations'
import { commonCodeActions, CommonCodeActions } from '@/store/modules/commonCode/actions'

export type Store<S = CommonCodeState> = Omit<
VuexStore<S>,
'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof CommonCodeMutations, P extends Parameters<CommonCodeMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<CommonCodeMutations[K]>
} & {
  getters: {
    [K in keyof CommonCodeGetters]: ReturnType<CommonCodeGetters[K]>;
  }
} & {
  dispatch<K extends keyof CommonCodeActions>(
    key: K,
    payload?: Parameters<CommonCodeActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<CommonCodeActions[K]>
}

export const commonCodeModule: Module<CommonCodeState, RootState> = {
  // @TODO: namespaced 어떻게 쓸지고민하기
  // namespaced: true,
  state: commonState,
  getters: commonCodeGetters,
  mutations: commonCodeMutations,
  actions: commonCodeActions,
}
