import { LolChampionInfo } from '@/interfaces/model/lol/Champion/info'
import { LolChampionImage } from '@/interfaces/model/lol/Champion/image'
import { LolChampionStats } from '@/interfaces/model/lol/Champion/stats'

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
