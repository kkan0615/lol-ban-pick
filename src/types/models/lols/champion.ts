/**
 * League of legends champion
 */
export interface LolChampion {
  version: string
  id: string
  key: number
  name:	string
  title: string
  blurb: string
  tags: Array<string>
  info: LolChampionInfo
  image: LolChampionImage
  stats: LolChampionStats
}

/**
 * League of legends champion information
 */
export interface LolChampionInfo {
  attack: number
  defense: number
  magic: number
  difficulty: number
}

/**
 * League of legends champion image
 */
export interface LolChampionImage {
  full:	string
  sprite: string
  group: string
  x: number
  y: number
  w: number
  h: number
}

/**
 * League of legends champion stats
 */
export interface LolChampionStats {
  hp: number
  hpperlevel: number
  mp: number
  mpperlevel: number
  movespeed: number
  armor: number
  armorperlevel: number
  spellblock: number
  spellblockperlevel: number
  attackrange: number
  hpregen: number
  hpregenperlevel: number
  mpregen: number
  mpregenperlevel: number
  crit: number
  critperlevel: number
  attackdamage: number
  attackdamageperlevel: number
  attackspeedperlevel: number
  attackspeed: number
}

export interface LolChampionBanPick {
  champion: LolChampion
  picked: boolean
  banded: boolean
}
