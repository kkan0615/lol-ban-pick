import { SequelizeAttributes } from '@/interfaces/model/sequelize'

export interface Role extends SequelizeAttributes {
  name: string
}
