import { ActionContext, ActionTree } from 'vuex'
import { LolCompetitionBanMutations, LolCompetitionBanBanMutationTypes } from './mutations'
import { LolCompetitionBanState } from './state'
import { RootState } from '@/store'
import { LolChampionWithKey } from '@/interfaces/model/lol'
import { VuedraggableChangeEvent } from '@/interfaces/lib/vuedraggable'
import { LolChampion } from '@/interfaces/model/lol/Champion'

export enum LolCompetitionBanActionTypes {
  RESET_STATE = 'LOL_COMPETITION_BAN_RESET_STATE',
  SET_BLUE_TEAM_BANS = 'LOL_COMPETITION_BAN_SET_BLUE_TEAM_BANS',
  SET_RED_TEAM_BANS = 'LOL_COMPETITION_BAN_SET_RED_TEAM_BANS',
  HANDLE_CHAMPION_CLICK = 'LOL_COMPETITION_BAN_HANDLE_CHAMPION_CLICK',
  HANDLE_PREV_BUTTON = 'LOL_COMPETITION_BAN_HANDLE_PREV_BUTTON',
  SWAP_BLUE_TEAM_PICKS = 'LOL_COMPETITION_BAN_SWAP_BLUE_TEAM_PICKS',
  SWAP_RED_TEAM_PICKS = 'LOL_COMPETITION_BAN_SWAP_RED_TEAM_PICKS',
}

export type AugmentedActionContext = {
  commit<K extends keyof LolCompetitionBanMutations>(
    key: K,
    payload?: Parameters<LolCompetitionBanMutations[K]>[1]
  ): ReturnType<LolCompetitionBanMutations[K]>
} & Omit<ActionContext<LolCompetitionBanState, RootState>, 'commit'>

export interface LolCompetitionBanActions {
  [LolCompetitionBanActionTypes.RESET_STATE] (
    { commit }: AugmentedActionContext,
  ): void
  [LolCompetitionBanActionTypes.SET_BLUE_TEAM_BANS] (
    { commit }: AugmentedActionContext,
    payload: Array<LolChampionWithKey>,
  ): void
  [LolCompetitionBanActionTypes.SET_RED_TEAM_BANS] (
    { commit }: AugmentedActionContext,
    payload: Array<LolChampionWithKey>,
  ): void
  [LolCompetitionBanActionTypes.HANDLE_CHAMPION_CLICK] (
    { commit, state }: AugmentedActionContext,
    payload: LolChampion,
  ): void
  [LolCompetitionBanActionTypes.HANDLE_PREV_BUTTON] (
    { commit, state }: AugmentedActionContext,
  ): void
  [LolCompetitionBanActionTypes.SWAP_BLUE_TEAM_PICKS] (
    { commit, state }: AugmentedActionContext,
    payload: VuedraggableChangeEvent<LolChampionWithKey>
  ): void
  [LolCompetitionBanActionTypes.SWAP_RED_TEAM_PICKS] (
    { commit, state }: AugmentedActionContext,
    payload: VuedraggableChangeEvent<LolChampionWithKey>
  ): void
}

export const lolCompetitionBanActions: ActionTree<LolCompetitionBanState, RootState> & LolCompetitionBanActions = {
  [LolCompetitionBanActionTypes.RESET_STATE] ({ commit }) {
    commit(LolCompetitionBanBanMutationTypes.SET_BLUE_TEAM_BANS, new Array(5).fill({} as LolChampionWithKey))
    commit(LolCompetitionBanBanMutationTypes.SET_RED_TEAM_BANS, new Array(5).fill({} as LolChampionWithKey))
    commit(LolCompetitionBanBanMutationTypes.SET_BLUE_TEAM_PICKS, new Array(5).fill({} as LolChampionWithKey))
    commit(LolCompetitionBanBanMutationTypes.SET_RED_TEAM_PICKS, new Array(5).fill({} as LolChampionWithKey))
    commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN1')
  },
  [LolCompetitionBanActionTypes.SET_BLUE_TEAM_BANS] ({ commit }, payload) {
    commit(LolCompetitionBanBanMutationTypes.SET_BLUE_TEAM_BANS, payload)
  },
  [LolCompetitionBanActionTypes.SET_RED_TEAM_BANS] ({ commit }, payload) {
    commit(LolCompetitionBanBanMutationTypes.SET_RED_TEAM_BANS, payload)
  },
  [LolCompetitionBanActionTypes.HANDLE_CHAMPION_CLICK] ({ commit, state }, payload) {
    if (state.blueTeamBans.length < 5)
      commit(LolCompetitionBanBanMutationTypes.SET_BLUE_TEAM_BANS, new Array(5).fill({}))
    if (state.redTeamBans.length < 5)
      commit(LolCompetitionBanBanMutationTypes.SET_RED_TEAM_BANS, new Array(5).fill({}))

    switch (state.currentPickOrder) {
      case 'BAN1':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 0, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN6')
        break
      case 'BAN2':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 1, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN7')
        break
      case 'BAN3':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 2, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN8')
        break
      case 'BAN4':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 3, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN9')
        break
      case 'BAN5':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 4, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN10')
        break
      case 'BAN6':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 0, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN2')
        break
      case 'BAN7':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 1, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN3')
        break
      case 'BAN8':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 2, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK1')
        break
      case 'BAN9':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 3, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN5')
        break
      case 'BAN10':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 4, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK9')
        break
      case 'PICK1':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 0, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK6')
        break
      case 'PICK2':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 1, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK3')
        break
      case 'PICK3':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 2, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK8')
        break
      case 'PICK4':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 3, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK5')
        break
      case 'PICK5':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 4, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK10')
        break
      case 'PICK6':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 0, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK7')
        break
      case 'PICK7':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 1, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK2')
        break
      case 'PICK8':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 2, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN4')
        break
      case 'PICK9':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 3, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK4')
        break
      case 'PICK10':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 4, champion: payload })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'DONE')
        break
    }
  },
  [LolCompetitionBanActionTypes.HANDLE_PREV_BUTTON] ({ commit, state }) {
    switch (state.currentPickOrder) {
      case 'BAN1':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 0, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN1')
        break
      case 'BAN2':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 1, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN6')
        break
      case 'BAN3':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 2, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN7')
        break
      case 'BAN4':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 2, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK8')
        break
      case 'BAN5':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 3, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN9')
        break
      case 'BAN6':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 0, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN1')
        break
      case 'BAN7':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 1, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN2')
        break
      case 'BAN8':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 2, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN3')
        break
      case 'BAN9':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 3, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN4')
        break
      case 'BAN10':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 4, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN5')
        break
      case 'PICK1':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 4, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN8')
        break
      case 'PICK2':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 1, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK7')
        break
      case 'PICK3':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 1, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK2')
        break
      case 'PICK4':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 3, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK9')
        break
      case 'PICK5':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 3, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK4')
        break
      case 'PICK6':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 0, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK1')
        break
      case 'PICK7':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 0, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK6')
        break
      case 'PICK8':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 2, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK3')
        break
      case 'PICK9':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 4, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN10')
        break
      case 'PICK10':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 4, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK5')
        break
      case 'DONE':
        commit(LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 4, champion: {} as LolChampion })
        commit(LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK10')
        break
    }
  },
  [LolCompetitionBanActionTypes.SWAP_BLUE_TEAM_PICKS] ({ commit }, payload) {
    commit(LolCompetitionBanBanMutationTypes.SWAP_BLUE_TEAM_PICKS, { oldIndex: payload.moved.oldIndex, newIndex: payload.moved.newIndex })
  },
  [LolCompetitionBanActionTypes.SWAP_RED_TEAM_PICKS] ({ commit }, payload) {
    commit(LolCompetitionBanBanMutationTypes.SWAP_RED_TEAM_PICKS, { oldIndex: payload.moved.oldIndex, newIndex: payload.moved.newIndex })
  },
}
