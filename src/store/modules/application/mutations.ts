import { MutationTree } from 'vuex'
import { ApplicationState } from './state'
import { SnackbarOption } from '@/interfaces/system/snackbar'

export enum ApplicationMutationTypes {
  CHANGE_NAVIGATOR = 'APPLICATION_CHANGE_NAVIGATOR',
  SET_NAVIGATOR = 'APPLICATION_SET_NAVIGATOR',
  CHANGE_SUB_NAVIGATOR = 'APPLICATION_CHANGE_SUB_NAVIGATOR',
  SET_SUB_NAVIGATOR = 'APPLICATION_SET_SUB_NAVIGATOR',
  CHANGE_USER_NAVIGATOR = 'APPLICATION_CHANGE_USER_NAVIGATOR',
  SET_USER_NAVIGATOR = 'APPLICATION_SET_USER_NAVIGATOR',
  SET_SNACKBAR = 'APPLICATION_SET_SNACKBAR'
}

export type ApplicationMutations<S = ApplicationState> = {
  [ApplicationMutationTypes.CHANGE_NAVIGATOR](state: S): void
  [ApplicationMutationTypes.SET_NAVIGATOR](state: S, payload: boolean): void
  [ApplicationMutationTypes.CHANGE_SUB_NAVIGATOR](state: S): void
  [ApplicationMutationTypes.SET_SUB_NAVIGATOR](state: S, payload: boolean): void
  [ApplicationMutationTypes.CHANGE_USER_NAVIGATOR](state: S): void
  [ApplicationMutationTypes.SET_USER_NAVIGATOR](state: S, payload: boolean): void
  [ApplicationMutationTypes.SET_SNACKBAR](state: S, payload: SnackbarOption): void
}

export const applicationMutations: MutationTree<ApplicationState> & ApplicationMutations = {
  [ApplicationMutationTypes.CHANGE_NAVIGATOR] (state) {
    state.navigator = !state.navigator
  },
  [ApplicationMutationTypes.SET_NAVIGATOR] (state, payload) {
    state.navigator = payload
  },
  [ApplicationMutationTypes.CHANGE_SUB_NAVIGATOR] (state) {
    state.subNavigator = !state.subNavigator
  },
  [ApplicationMutationTypes.SET_SUB_NAVIGATOR] (state, payload) {
    state.subNavigator = payload
  },
  [ApplicationMutationTypes.CHANGE_USER_NAVIGATOR] (state) {
    state.userNavigator = !state.userNavigator
  },
  [ApplicationMutationTypes.SET_USER_NAVIGATOR] (state, payload) {
    state.userNavigator = payload
  },
  [ApplicationMutationTypes.SET_SNACKBAR] (state, payload) {
    state.snackbar = payload
  },
}
