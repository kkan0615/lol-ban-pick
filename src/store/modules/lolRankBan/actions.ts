import { ActionContext, ActionTree } from 'vuex'
import { LolRanKBanMutations, LolRanKBanMutationTypes } from './mutations'
import { LolRankBanState } from './state'
import { RootState } from '@/store'
import { LolChampionWithKey } from '@/types/model/lol'
import { VuedraggableChangeEvent } from '@/types/lib/vuedraggable'

export enum LolRanKBanActionTypes {
  RESET_STATE = 'LOL_RANK_BAN_RESET_STATE',
  SET_BLUE_TEAM_BANS = 'LOL_RANK_BAN_SET_BLUE_TEAM_BANS',
  SET_RED_TEAM_BANS = 'LOL_RANK_BAN_SET_RED_TEAM_BANS',
  HANDLE_CHAMPION_CLICK = 'LOL_RANK_BAN_HANDLE_CHAMPION_CLICK',
  HANDLE_PREV_BUTTON = 'LOL_RANK_BAN_HANDLE_PREV_BUTTON',
  SWAP_BLUE_TEAM_PICKS = 'LOL_RANK_BAN_SWAP_BLUE_TEAM_PICKS',
  SWAP_RED_TEAM_PICKS = 'LOL_RANK_BAN_SWAP_RED_TEAM_PICKS',
}

export type AugmentedActionContext = {
  commit<K extends keyof LolRanKBanMutations>(
    key: K,
    payload?: Parameters<LolRanKBanMutations[K]>[1]
  ): ReturnType<LolRanKBanMutations[K]>
} & Omit<ActionContext<LolRankBanState, RootState>, 'commit'>

export interface LolRanKBanActions {
  [LolRanKBanActionTypes.RESET_STATE] (
    { commit }: AugmentedActionContext,
  ): void
  [LolRanKBanActionTypes.SET_BLUE_TEAM_BANS] (
    { commit }: AugmentedActionContext,
    payload: Array<LolChampionWithKey>,
  ): void
  [LolRanKBanActionTypes.SET_RED_TEAM_BANS] (
    { commit }: AugmentedActionContext,
    payload: Array<LolChampionWithKey>,
  ): void
  [LolRanKBanActionTypes.HANDLE_CHAMPION_CLICK] (
    { commit, state }: AugmentedActionContext,
    payload: LolChampionWithKey,
  ): void
  [LolRanKBanActionTypes.HANDLE_PREV_BUTTON] (
    { commit, state }: AugmentedActionContext,
  ): void
  [LolRanKBanActionTypes.SWAP_BLUE_TEAM_PICKS] (
    { commit, state }: AugmentedActionContext,
    payload: VuedraggableChangeEvent<LolChampionWithKey>
  ): void
  [LolRanKBanActionTypes.SWAP_RED_TEAM_PICKS] (
    { commit, state }: AugmentedActionContext,
    payload: VuedraggableChangeEvent<LolChampionWithKey>
  ): void
}

export const lolRanKBanActions: ActionTree<LolRankBanState, RootState> & LolRanKBanActions = {
  [LolRanKBanActionTypes.RESET_STATE] ({ commit }) {
    commit(LolRanKBanMutationTypes.SET_BLUE_TEAM_BANS, new Array(5).fill({} as LolChampionWithKey))
    commit(LolRanKBanMutationTypes.SET_RED_TEAM_BANS, new Array(5).fill({} as LolChampionWithKey))
    commit(LolRanKBanMutationTypes.SET_BLUE_TEAM_PICKS, new Array(5).fill({} as LolChampionWithKey))
    commit(LolRanKBanMutationTypes.SET_RED_TEAM_PICKS, new Array(5).fill({} as LolChampionWithKey))
    commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN1')
  },
  [LolRanKBanActionTypes.SET_BLUE_TEAM_BANS] ({ commit }, payload) {
    commit(LolRanKBanMutationTypes.SET_BLUE_TEAM_BANS, payload)
  },
  [LolRanKBanActionTypes.SET_RED_TEAM_BANS] ({ commit }, payload) {
    commit(LolRanKBanMutationTypes.SET_RED_TEAM_BANS, payload)
  },
  [LolRanKBanActionTypes.HANDLE_CHAMPION_CLICK] ({ commit, state }, payload) {
    if (state.blueTeamBans.length < 5)
      commit(LolRanKBanMutationTypes.SET_BLUE_TEAM_BANS, new Array(5).fill({}))
    if (state.redTeamBans.length < 5)
      commit(LolRanKBanMutationTypes.SET_RED_TEAM_BANS, new Array(5).fill({}))

    switch (state.currentPickOrder) {
      case 'BAN1':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 0, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN2')
        break
      case 'BAN2':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 1, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN3')
        break
      case 'BAN3':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 2, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN4')
        break
      case 'BAN4':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 3, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN5')
        break
      case 'BAN5':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 4, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN6')
        break
      case 'BAN6':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 0, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN7')
        break
      case 'BAN7':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 1, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN8')
        break
      case 'BAN8':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 2, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN9')
        break
      case 'BAN9':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 3, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN10')
        break
      case 'BAN10':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 4, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK1')
        break
      case 'PICK1':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 0, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK6')
        break
      case 'PICK2':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 1, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK3')
        break
      case 'PICK3':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 2, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK8')
        break
      case 'PICK4':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 3, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK5')
        break
      case 'PICK5':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 4, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK10')
        break
      case 'PICK6':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 0, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK7')
        break
      case 'PICK7':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 1, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK2')
        break
      case 'PICK8':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 2, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK9')
        break
      case 'PICK9':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 3, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK4')
        break
      case 'PICK10':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 4, champion: payload })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'DONE')
        break
    }
  },
  [LolRanKBanActionTypes.HANDLE_PREV_BUTTON] ({ commit, state }) {
    switch (state.currentPickOrder) {
      case 'BAN2':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 0, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN1')
        break
      case 'BAN3':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 1, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN2')
        break
      case 'BAN4':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 2, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN3')
        break
      case 'BAN5':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 3, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN4')
        break
      case 'BAN6':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX, { index: 4, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN5')
        break
      case 'BAN7':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 0, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN6')
        break
      case 'BAN8':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 1, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN7')
        break
      case 'BAN9':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 2, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN8')
        break
      case 'BAN10':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 3, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN9')
        break
      case 'PICK1':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX, { index: 4, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'BAN10')
        break
      case 'PICK2':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 1, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK7')
        break
      case 'PICK3':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 1, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK2')
        break
      case 'PICK4':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 3, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK9')
        break
      case 'PICK5':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 3, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK4')
        break
      case 'PICK6':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 0, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK1')
        break
      case 'PICK7':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 0, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK6')
        break
      case 'PICK8':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 2, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK3')
        break
      case 'PICK9':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 2, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK8')
        break
      case 'PICK10':
        commit(LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX, { index: 4, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK5')
        break
      case 'DONE':
        commit(LolRanKBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX, { index: 4, champion: {} as LolChampionWithKey })
        commit(LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER, 'PICK10')
        break
    }
  },
  [LolRanKBanActionTypes.SWAP_BLUE_TEAM_PICKS] ({ commit }, payload) {
    commit(LolRanKBanMutationTypes.SWAP_BLUE_TEAM_PICKS, { oldIndex: payload.moved.oldIndex, newIndex: payload.moved.newIndex })
  },
  [LolRanKBanActionTypes.SWAP_RED_TEAM_PICKS] ({ commit }, payload) {
    commit(LolRanKBanMutationTypes.SWAP_RED_TEAM_PICKS, { oldIndex: payload.moved.oldIndex, newIndex: payload.moved.newIndex })
  },
}
