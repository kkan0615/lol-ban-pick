import { ComponentObjectPropsOptions } from 'vue'
import { inputDefaultProps, InputPropsTypeWithModelValue } from '@/components/tailwind/input/Base/types/props'

export interface InputDefaultSelectProps {
  items: Array<any>
  itemText: string
  itemValue: string
  multiple: boolean
}

export const inputSelectProps: ComponentObjectPropsOptions<InputPropsTypeWithModelValue<string | number | Array<any>> & InputDefaultSelectProps> = {
  modelValue: {
    type: [Number, String, Array],
    required: false,
    default: '',
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
  ...inputDefaultProps
}
