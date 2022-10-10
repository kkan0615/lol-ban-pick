export interface LolSummonSpell {
  'id': string
  'name': string
  'description': string
  'tooltip': string
  'maxrank': number
  'cooldown': number[],
  'cooldownBurn': string,
  'cost': number[],
  'costBurn': string,
  'datavalues': any,
  'effect': [any, number[]] ,
  'effectBurn': (string | null)[],
  'vars': any[],
  'key': string,
  'summonerLevel': number,
  'modes': string[],
  'costType': string,
  'maxammo': string
  'range': number[],
  'rangeBurn': string
  'image': LolSummonSpellImage,
  'resource': string
}

export interface LolSummonSpellImage {
  'full': string
  'sprite':string
  'group': string
  'x': number
  'y': number
  'w': number
  'h': number
}
export interface LolSummonSpellReq {
  type: string,
  version: string
  data: Record<string, LolSummonSpell>
}
