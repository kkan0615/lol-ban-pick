import { ComponentObjectPropsOptions } from 'vue'
import { inputDefaultProps, InputPropsTypeWithModelValue } from '@/components/tailwind/input/Base/types/props'

export interface InputTagProps {
  items: Array<any>
  itemText: string
  itemValue: string
  multiple: boolean
  closable: boolean
  remainSearchAfterClick: boolean
}

export const inputTagProps: ComponentObjectPropsOptions<InputPropsTypeWithModelValue<Array<any>> & InputTagProps> = {
  modelValue: {
    type: Array,
    required: false,
    default: [],
  },
  items: {
    type: Array,
    required: false,
    default: () => [],
  },
  itemText: {
    type: String,
    required: false,
    default: '',
  },
  itemValue: {
    type: String,
    required: false,
    default: '',
  },
  multiple: {
    type: Boolean,
    required: false,
    default: false,
  },
  closable: {
    type: Boolean,
    required: false,
    default: false,
  },
  remainSearchAfterClick: {
    type: Boolean,
    required: false,
    default: false,
  },
  ...inputDefaultProps
}
