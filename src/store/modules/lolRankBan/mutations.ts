import { MutationTree } from 'vuex'
import { LolRankBanState } from './state'
import { LolChampionWithKey } from '@/interfaces/model/lol'
import { LolRankBanOrderType } from '@/interfaces/model/lol/Ban'

export enum LolRanKBanMutationTypes {
  SET_BLUE_TEAM_BANS = 'LOL_RANK_BAN_SET_BLUE_TEAM_BANS',
  REPLACE_BLUE_TEAM_BAN_BY_INDEX = 'LOL_RANK_BAN_REPLACE_BLUE_TEAM_BAN_BY_INDEX',
  SET_RED_TEAM_BANS = 'LOL_RANK_BAN_SET_RED_TEAM_BANS',
  REPLACE_RED_TEAM_BY_INDEX = 'LOL_RANK_BAN_REPLACE_RED_TEAM_BAN_BY_INDEX',
  SET_CURRENT_PICK_ORDER = 'LOL_RANK_BAN_SET_CURRENT_PICK_ORDER',
}

export type LolRanKBanMutations<S = LolRankBanState> = {
  [LolRanKBanMutationTypes.SET_BLUE_TEAM_BANS](state: S, payload: Array<LolChampionWithKey>): void
  [LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX](state: S, payload: { index: number; champion: LolChampionWithKey }): void
  [LolRanKBanMutationTypes.SET_RED_TEAM_BANS](state: S, payload: Array<LolChampionWithKey>): void
  [LolRanKBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX](state: S, payload: { index: number; champion: LolChampionWithKey }): void
  [LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER](state: S, payload: LolRankBanOrderType): void
}

export const lolRanKBanMutations: MutationTree<LolRankBanState> & LolRanKBanMutations = {
  [LolRanKBanMutationTypes.SET_BLUE_TEAM_BANS] (state, payload) {
    state.blueTeamBans = payload
  },
  [LolRanKBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX] (state, payload) {
    state.blueTeamBans[payload.index] = payload.champion
  },
  [LolRanKBanMutationTypes.SET_RED_TEAM_BANS] (state, payload) {
    state.redTeamBans = payload
  },
  [LolRanKBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX] (state, payload) {
    state.redTeamBans[payload.index] = payload.champion
  },
  [LolRanKBanMutationTypes.SET_CURRENT_PICK_ORDER] (state, payload) {
    state.currentPickOrder = payload
  },
}
