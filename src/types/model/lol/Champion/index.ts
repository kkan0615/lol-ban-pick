import { LolChampionInfo } from '@/types/model/lol/Champion/info'
import { LolChampionImage } from '@/types/model/lol/Champion/image'
import { LolChampionStats } from '@/types/model/lol/Champion/stats'

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
