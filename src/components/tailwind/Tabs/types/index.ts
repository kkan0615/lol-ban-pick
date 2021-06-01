import { InjectionKey, ComputedRef } from 'vue'

export interface TTabsProvideData {
  currentTab:  ComputedRef<number | null>
  register: (uid: number) => void
  unregister: (uid: number) => void
  changeCurrentTabToUid: (uid: number) => void
}

export const TTabsProvideKey: InjectionKey<TTabsProvideData> = Symbol('t-tab')
