import { LolChampion } from '@/types/models/lols/champion'
import { LolSummonSpell } from '@/types/models/lols/summonSpell'

export enum LolCompetitiveStep {
  'BLUE_BAN_1',
  'RED_BAN_1',
  'BLUE_BAN_2',
  'RED_BAN_2',
  'BLUE_BAN_3',
  'RED_BAN_3',
  'BLUE_PICK_1',
  'RED_PICK_1',
  'RED_PICK_2',
  'BLUE_PICK_2',
  'BLUE_PICK_3',
  'RED_PICK_3',
  'RED_BAN_4',
  'BLUE_BAN_4',
  'RED_BAN_5',
  'BLUE_BAN_5',
  'RED_PICK_4',
  'BLUE_PICK_4',
  'BLUE_PICK_5',
  'RED_PICK_5',
  'END'
}

export interface LolCompetitiveTeam {
  logo?: File
  name: string
  win?: number
  color?: string
}

export type LolCompetitiveTeamUpdateForm = Partial<LolCompetitiveTeam>

export interface LolCompetitivePick {
  champion: LolChampion
  spellList: [LolSummonSpell | undefined, LolSummonSpell | undefined],
}

export interface LolCompetitiveSetting {
  displaySummonSpell: boolean
}
