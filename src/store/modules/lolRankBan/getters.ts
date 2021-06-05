import { GetterTree } from 'vuex'
import { LolRankBanState } from './state'
import { RootState } from '@/store'

export type LolRanKBanGetters<S = LolRankBanState> = {
}

export const lolRankBanGetters: GetterTree<LolRankBanState, RootState> & LolRanKBanGetters = {
}
