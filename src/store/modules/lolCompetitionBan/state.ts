import { LolChampionWithKey } from '@/types/model/lol'
import { LolRankBanOrderType } from '@/types/model/lol/Ban'
import { LolChampion } from '@/types/model/lol/Champion'

export interface LolCompetitionBanState {
  currentPickOrder: LolRankBanOrderType
  blueTeamBans: Array<LolChampion>
  redTeamBans: Array<LolChampion>
  blueTeamPicks: Array<LolChampion>
  redTeamPicks: Array<LolChampion>
}

export const lolCompetitionBanState: LolCompetitionBanState = {
  currentPickOrder: 'BAN1',
  blueTeamBans: new Array(5).fill({} as LolChampion),
  redTeamBans: new Array(5).fill({} as LolChampion),
  blueTeamPicks: new Array(5).fill({} as LolChampion),
  redTeamPicks: new Array(5).fill({} as LolChampion),
}
