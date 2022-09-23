import { LolChampion } from '@/types/models/lols/champion'
import { LolSummonSpell } from '@/types/models/lols/summonSpell'

export interface LolStreamPlayer {
  name: string
}

export interface LolStreamSettingTeam {
  logo: string
  name: string
  win: number
}

export type LolStreamSettingTeamForm = Partial<LolStreamSettingTeam>


export interface LolStreamSetting {
  blueTeam: LolStreamSettingTeam
  redTeam: LolStreamSettingTeam
}

export interface LolStreamPick {
  champion: LolChampion
  spellList: [LolSummonSpell | undefined, LolSummonSpell | undefined],
}

export enum LolStreamChannelKey {
  'PREV_STEP' = 'prevStep',
  'NEXT_STEP' = 'nextStep',
}
