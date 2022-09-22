import { LolChampion } from '@/types/models/lols/champion'
import { LolSummonSpell } from '@/types/models/lols/summonSpell'

export interface LolStreamPlayer {
  name: string
}

export interface LolStreamPick {
  champion: LolChampion
  spellOne?: LolSummonSpell
  spellTwo?: LolSummonSpell
}
