import { LolCompetitivePick } from '@/types/models/lols/competitive'

export interface LolStreamPlayer {
  name: string
}

export interface LolStreamSettingTeam {
  logo: string
  name: string
  win: number
  color: string
}

export type LolStreamSettingTeamForm = Partial<LolStreamSettingTeam>


export interface LolStreamSetting {
  blueTeam: LolStreamSettingTeam
  redTeam: LolStreamSettingTeam
}

export type LolStreamPick = LolCompetitivePick

export enum LolStreamChannelKey {
  'START_GAME' = 'startGame',
  'PAUSE_GAME' = 'pauseGame',
  'CONTINUE_GAME' = 'continueGame',
  'RESET_GAME' = 'resetGame',
  'RESET_ALL' = 'resetAll',
  'PREV_STEP' = 'prevStep',
  'NEXT_STEP' = 'nextStep',
}
