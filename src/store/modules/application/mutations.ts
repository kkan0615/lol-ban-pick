import { MutationTree } from 'vuex'
import { ApplicationState } from './state'
import { SnackbarOption } from '@/types/system/snackbar'
import { LolLanguagesEnum } from '@/types/model/lol'
import { store } from '@/store'
import { LocalStorageKeyEnum } from '@/types/system/localStorage'

export enum ApplicationMutationTypes {
  SET_LOL_VERSION = 'APPLICATION_SET_LOL_VERSION',
  SET_LOL_LANGUAGE = 'APPLICATION_SET_LOL_LANGUAGE',
  CHANGE_NAVIGATOR = 'APPLICATION_CHANGE_NAVIGATOR',
  SET_NAVIGATOR = 'APPLICATION_SET_NAVIGATOR',
  CHANGE_SUB_NAVIGATOR = 'APPLICATION_CHANGE_SUB_NAVIGATOR',
  SET_SUB_NAVIGATOR = 'APPLICATION_SET_SUB_NAVIGATOR',
  CHANGE_USER_NAVIGATOR = 'APPLICATION_CHANGE_USER_NAVIGATOR',
  SET_USER_NAVIGATOR = 'APPLICATION_SET_USER_NAVIGATOR',
  SET_SNACKBAR = 'APPLICATION_SET_SNACKBAR',
}

export type ApplicationMutations<S = ApplicationState> = {
  [ApplicationMutationTypes.SET_LOL_VERSION](state: S, payload: string): void
  [ApplicationMutationTypes.SET_LOL_LANGUAGE](state: S, payload: LolLanguagesEnum): void
  [ApplicationMutationTypes.CHANGE_NAVIGATOR](state: S): void
  [ApplicationMutationTypes.SET_NAVIGATOR](state: S, payload: boolean): void
  [ApplicationMutationTypes.CHANGE_SUB_NAVIGATOR](state: S): void
  [ApplicationMutationTypes.SET_SUB_NAVIGATOR](state: S, payload: boolean): void
  [ApplicationMutationTypes.CHANGE_USER_NAVIGATOR](state: S): void
  [ApplicationMutationTypes.SET_USER_NAVIGATOR](state: S, payload: boolean): void
  [ApplicationMutationTypes.SET_SNACKBAR](state: S, payload: SnackbarOption): void
}

export const applicationMutations: MutationTree<ApplicationState> & ApplicationMutations = {
  [ApplicationMutationTypes.SET_LOL_VERSION] (state, payload) {
    /* Set to localStorage */
    localStorage.setItem(LocalStorageKeyEnum.LOL_VERSION, payload)
    state.lolVersion = payload
  },
  [ApplicationMutationTypes.SET_LOL_LANGUAGE] (state, payload) {
    /* Set to localStorage */
    localStorage.setItem(LocalStorageKeyEnum.LOL_LANGUAGE, payload)
    state.lolLanguage = payload
  },
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
