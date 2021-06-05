import { LolChampionWithKey } from '@/interfaces/model/lol'
import { LolRankBanOrderType } from '@/interfaces/model/lol/Ban'

export interface LolRankBanState {
  currentPickOrder: LolRankBanOrderType
  blueTeamBans: Array<LolChampionWithKey>
  redTeamBans: Array<LolChampionWithKey>
  blueTeamPicks: Array<LolChampionWithKey>
  redTeamPicks: Array<LolChampionWithKey>
}

export const lolRankBanState: LolRankBanState = {
  currentPickOrder: 'BAN1',
  blueTeamBans: new Array(5).fill({} as LolChampionWithKey),
  redTeamBans: new Array(5).fill({} as LolChampionWithKey),
  blueTeamPicks: new Array(5).fill({} as LolChampionWithKey),
  redTeamPicks: new Array(5).fill({} as LolChampionWithKey),
}
