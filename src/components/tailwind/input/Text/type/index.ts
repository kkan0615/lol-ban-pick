import { ComponentObjectPropsOptions } from 'vue'
import { inputDefaultProps, InputPropsTypeWithModelValue } from '@/components/tailwind/input/Base/types/props'

export const inputTextProps: ComponentObjectPropsOptions<InputPropsTypeWithModelValue<string>> = {
  modelValue: {
    type: String,
    required: false,
    default: '',
  },
  ...inputDefaultProps
}
