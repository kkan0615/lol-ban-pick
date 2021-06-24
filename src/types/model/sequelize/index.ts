import { CustomDate } from '@/types/system/date'

export interface SequelizeAttributes {
  id: number
  createdAt: CustomDate
  updatedAt?: CustomDate
  deletedAt?: CustomDate
}
