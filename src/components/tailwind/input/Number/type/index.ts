import { ComponentObjectPropsOptions } from 'vue'
import { inputDefaultProps, InputPropsTypeWithModelValue } from '@/components/tailwind/input/Base/types/props'

export const inputNumberProps: ComponentObjectPropsOptions<InputPropsTypeWithModelValue<number>> = {
  modelValue: {
    type: Number,
    required: false,
    default: 0,
  },
  ...inputDefaultProps
}
