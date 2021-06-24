import { MutationTree } from 'vuex'
import { LolCompetitionBanState } from './state'
import { LolChampionWithKey } from '@/types/model/lol'
import { LolRankBanOrderType } from '@/types/model/lol/Ban'
import { LolChampion } from '@/types/model/lol/Champion'

export enum LolCompetitionBanBanMutationTypes {
  SET_BLUE_TEAM_BANS = 'LOL_COMPETITION_BAN_SET_BLUE_TEAM_BANS',
  REPLACE_BLUE_TEAM_BAN_BY_INDEX = 'LOL_COMPETITION_BAN_REPLACE_BLUE_TEAM_BAN_BY_INDEX',
  SET_RED_TEAM_BANS = 'LOL_COMPETITION_BAN_SET_RED_TEAM_BANS',
  REPLACE_RED_TEAM_BY_INDEX = 'LOL_COMPETITION_BAN_REPLACE_RED_TEAM_BAN_BY_INDEX',
  SET_CURRENT_PICK_ORDER = 'LOL_COMPETITION_BAN_SET_CURRENT_PICK_ORDER',
  SET_BLUE_TEAM_PICKS = 'LOL_COMPETITION_BAN_SET_BLUE_TEAM_PICKS',
  REPLACE_BLUE_TEAM_PICKS_BY_INDEX = 'LOL_COMPETITION_BAN_REPLACE_BLUE_TEAM_PICKS_BY_INDEX',
  SET_RED_TEAM_PICKS = 'LOL_COMPETITION_BAN_SET_RED_TEAM_PICKS',
  REPLACE_RED_TEAM_PICKS_BY_INDEX = 'LOL_COMPETITION_BAN_REPLACE_RED_TEAM_PICKS_BY_INDEX',
  SWAP_BLUE_TEAM_PICKS = 'LOL_COMPETITION_BAN_SWAP_BLUE_TEAM_PICKS',
  SWAP_RED_TEAM_PICKS = 'LOL_COMPETITION_BAN_SWAP_RED_TEAM_PICKS',
}

export type LolCompetitionBanMutations<S = LolCompetitionBanState> = {
  [LolCompetitionBanBanMutationTypes.SET_BLUE_TEAM_BANS](state: S, payload: Array<LolChampionWithKey>): void
  [LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX](state: S, payload: { index: number; champion: LolChampion }): void
  [LolCompetitionBanBanMutationTypes.SET_RED_TEAM_BANS](state: S, payload: Array<LolChampionWithKey>): void
  [LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX](state: S, payload: { index: number; champion: LolChampion }): void
  [LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER](state: S, payload: LolRankBanOrderType): void
  [LolCompetitionBanBanMutationTypes.SET_BLUE_TEAM_PICKS](state: S, payload: Array<LolChampionWithKey>): void
  [LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX](state: S, payload: { index: number; champion: LolChampion }): void
  [LolCompetitionBanBanMutationTypes.SET_RED_TEAM_PICKS](state: S, payload: Array<LolChampionWithKey>): void
  [LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX](state: S, payload: { index: number; champion: LolChampion }): void
  [LolCompetitionBanBanMutationTypes.SWAP_BLUE_TEAM_PICKS](state: S, payload: { oldIndex: number; newIndex: number}): void
  [LolCompetitionBanBanMutationTypes.SWAP_RED_TEAM_PICKS](state: S, payload: { oldIndex: number; newIndex: number}): void
}

export const lolCompetitionBanBanMutations: MutationTree<LolCompetitionBanState> & LolCompetitionBanMutations = {
  [LolCompetitionBanBanMutationTypes.SET_BLUE_TEAM_BANS] (state, payload) {
    state.blueTeamBans = Object.assign(state.blueTeamBans, payload)
  },
  [LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_BAN_BY_INDEX] (state, payload) {
    state.blueTeamBans[payload.index] = payload.champion
  },
  [LolCompetitionBanBanMutationTypes.SET_RED_TEAM_BANS] (state, payload) {
    state.redTeamBans = Object.assign(state.redTeamBans, payload)
  },
  [LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_BY_INDEX] (state, payload) {
    state.redTeamBans[payload.index] = payload.champion
  },
  [LolCompetitionBanBanMutationTypes.SET_CURRENT_PICK_ORDER] (state, payload) {
    state.currentPickOrder = payload
  },
  [LolCompetitionBanBanMutationTypes.SET_BLUE_TEAM_PICKS] (state, payload) {
    state.blueTeamPicks = Object.assign(state.blueTeamPicks, payload)
  },
  [LolCompetitionBanBanMutationTypes.REPLACE_BLUE_TEAM_PICKS_BY_INDEX] (state, payload) {
    state.blueTeamPicks[payload.index] = payload.champion
  },
  [LolCompetitionBanBanMutationTypes.SET_RED_TEAM_PICKS] (state, payload) {
    state.redTeamPicks = Object.assign(state.redTeamPicks, payload)
  },
  [LolCompetitionBanBanMutationTypes.REPLACE_RED_TEAM_PICKS_BY_INDEX] (state, payload) {
    state.redTeamPicks[payload.index] = payload.champion
  },
  [LolCompetitionBanBanMutationTypes.SWAP_BLUE_TEAM_PICKS] (state, payload) {
    const temp = state.blueTeamPicks[payload.newIndex]
    state.blueTeamPicks[payload.newIndex] = state.blueTeamPicks[payload.oldIndex]
    state.blueTeamPicks[payload.oldIndex] = temp
  },
  [LolCompetitionBanBanMutationTypes.SWAP_RED_TEAM_PICKS] (state, payload) {
    const temp = state.redTeamPicks[payload.newIndex]
    state.redTeamPicks[payload.newIndex] = state.redTeamPicks[payload.oldIndex]
    state.redTeamPicks[payload.oldIndex] = temp
  },
}
