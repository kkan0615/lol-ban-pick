import { CustomDate } from '@/interfaces/system/date'

export interface SequelizeAttributes {
  id: number
  createdAt: CustomDate
  updatedAt?: CustomDate
  deletedAt?: CustomDate
}
