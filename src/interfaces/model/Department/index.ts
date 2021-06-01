import { SequelizeAttributes } from '@/interfaces/model/sequelize'

export interface Department extends SequelizeAttributes {
  name: string
  parentDepartmentId?: number
}
