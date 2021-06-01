import { ActionContext, ActionTree } from 'vuex'
import { UserMutations, UserMutationTypes } from './mutations'
import { UserState } from './state'
import { RootState } from '@/store'

export enum UserActionTypes {
  SET_USER = 'USER_SET_USER',
  UPDATE_USER = 'USER_UPDATE_USER',
  LOGIN = 'USER_LOGIN',
  LOGOUT = 'USER_LOGOUT'
}

export type AugmentedActionContext = {
  commit<K extends keyof UserMutations>(
    key: K,
    payload: Parameters<UserMutations[K]>[1]
  ): ReturnType<UserMutations[K]>
} & Omit<ActionContext<UserState, RootState>, 'commit'>

export interface UserActions {
  [UserActionTypes.SET_USER](
    { commit }: AugmentedActionContext,
    payload: UserState
  ): void
  [UserActionTypes.UPDATE_USER](
    { commit }: AugmentedActionContext,
  ): void
  [UserActionTypes.LOGIN](
    { commit }: AugmentedActionContext,
  ): void
  [UserActionTypes.LOGOUT](
    { commit }: AugmentedActionContext,
  ): void
}

export const userActions: ActionTree<UserState, RootState> & UserActions = {
  [UserActionTypes.SET_USER] ({ commit }, payload) {
    commit(UserMutationTypes.SET_USER, payload)
  },
  async [UserActionTypes.UPDATE_USER] ({ commit }) {
    commit(UserMutationTypes.SET_USER, {
      id: 1,
      name: 'Test Admin',
      img: 'https://randomuser.me/api/portraits/men/62.jpg',
      color: '#1231f',
      nickname: 'Penguin King',
      Friends: [],
    })
  },
  [UserActionTypes.LOGIN] ({ commit }) {
    console.log('LOGIN')
  },
  [UserActionTypes.LOGOUT] ({ commit }) {
    commit(UserMutationTypes.SET_USER, { } as UserState)
  },
}
