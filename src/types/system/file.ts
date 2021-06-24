import { SequelizeAttributes } from '@/types/model/sequelize/index.ts'

export type CustomFileType = 'image' | 'video' | 'file'

export interface CustomFile extends File, Blob, SequelizeAttributes {
  fileType: CustomFileType
  fileName: string
  href?: string
}
