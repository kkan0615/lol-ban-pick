/** Get versions of lol */
import { LolChampion } from '@/types/model/lol/Champion'

export const LOL_VERSIONS_URL = 'https://ddragon.leagueoflegends.com/api/versions.json'
export const LOL_LANGUAGES_URL = 'https://ddragon.leagueoflegends.com/cdn/languages.json'
export const LOL_LOADING_SCREEN_CHAMPION_URL = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'
export const DEFAULT_LOL_VERSION = '11.13.1'

/**
 * en_US -
 * cs_CZ -
 * de_DE -
 * el_GR -
 * en_AU -
 * en_GB -
 * en_PH -
 * en_SG -
 * es_AR -
 * es_ES -
 * es_MX -
 * fr_FR -
 * hu_HU -
 * id_ID -
 * it_IT -
 * ja_JP -
 * ko_KR -
 * pl_PL -
 * pt_BR -
 * ro_RO -
 * ru_RU -
 * th_TH -
 * tr_TR -
 * vn_VN -
 * zh_CN -
 * zh_MY -
 * zh_TW -
 */
export enum LolLanguagesEnum {
  en_US = 'en_US',
  cs_CZ = 'cs_CZ',
  de_DE = 'de_DE',
  el_GR = 'el_GR',
  en_AU = 'en_AU',
  en_GB = 'en_GB',
  en_PH = 'en_PH',
  en_SG = 'en_SG',
  es_AR = 'es_AR',
  es_ES = 'es_ES',
  es_MX = 'es_MX',
  fr_FR = 'fr_FR',
  hu_HU = 'hu_HU',
  id_ID = 'id_ID',
  it_IT = 'it_IT',
  ja_JP = 'ja_JP',
  ko_KR = 'ko_KR',
  pl_PL = 'pl_PL',
  pt_BR = 'pt_BR',
  ro_RO = 'ro_RO',
  ru_RU = 'ru_RU',
  th_TH = 'th_TH',
  tr_TR = 'tr_TR',
  vn_VN = 'vn_VN',
  zh_CN = 'zh_CN',
  zh_MY = 'zh_MY',
  zh_TW = 'zh_TW',
}

export type LolChampionWithKey = Record<string, LolChampion>

export interface LolChampionReturn {
  data: LolChampionWithKey
  format: string
  type: 'champion'
  version: string
}
