import { GetterTree } from 'vuex'
import { UserState } from './state'
import { RootState } from '@/store'

export type UserGetters<S = UserState> = {
  isLoggedIn(state: S): boolean
}

export const userGetters: GetterTree<UserState, RootState> & UserGetters = {
  isLoggedIn: (state) => {
    return state.id > 0
  },
}
