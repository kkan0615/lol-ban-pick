import { MutationTree } from 'vuex'
import { UserState } from './state'

export enum UserMutationTypes {
  SET_USER = 'SET_USER',
}
export type UserMutations<S = UserState> = {
  [UserMutationTypes.SET_USER](state: S, payload: UserState): void
}

export const userMutations: MutationTree<UserState> & UserMutations = {
  [UserMutationTypes.SET_USER] (state, payload) {
    //@TODO: 합칠수 있는법 생각하기
    state.id = payload.id
    state.name = payload.name
  },
}
