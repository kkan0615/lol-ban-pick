import { SequelizeAttributes } from '@/interfaces/model/sequelize'

export interface Position extends SequelizeAttributes {
  name: string
  order: number
}
