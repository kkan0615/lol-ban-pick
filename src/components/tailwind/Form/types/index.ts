import TBaseInput from '@/components/tailwind/input/Base/index.vue'
import { InjectionKey } from 'vue'

export interface TFormProvideData {
  register: (component: InstanceType<typeof TBaseInput>) => void
  unregister: (uid: number) => void
}

export const TFormProvideKey: InjectionKey<TFormProvideData> = Symbol('t-form')
