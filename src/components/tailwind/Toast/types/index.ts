import { CustomDate } from '@/types/system/date'

export type TToastStatusType = 'success' | 'warning' | 'danger' | 'info'

export interface TToastOption {
  content: string
  status: TToastStatusType
  date: CustomDate
}
