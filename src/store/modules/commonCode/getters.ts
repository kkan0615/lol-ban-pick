import { GetterTree } from 'vuex'
import { CommonCodeState } from './state'
import { RootState } from '@/store'

export type CommonCodeGetters<S = CommonCodeState> = {
}

export const commonCodeGetters: GetterTree<CommonCodeState, RootState> & CommonCodeGetters = {
}
