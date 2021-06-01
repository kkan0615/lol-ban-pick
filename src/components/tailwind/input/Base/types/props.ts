import { ComponentObjectPropsOptions  } from 'vue'
import { InputRuleType } from '@/interfaces/system/rule'

export interface InputBoxProps {
  modelValue: any
  label: string
  type: string
  height: number
  noRing: boolean
  clearable: boolean
  maxCount: number
  visibleCount: boolean
  errorMessage: string | boolean
  rules: Array<InputRuleType>
}

export const inputBoxProps: ComponentObjectPropsOptions<InputBoxProps> = {
  modelValue: {
    required: false,
    default: '',
  },
  label: {
    type: String,
    required: false,
    default: '',
  },
  type: {
    type: String,
    required: false,
    default: 'text',
  },
  noRing: {
    type: Boolean,
    required: false,
    default: false,
  },
  height: {
    type: Number,
    required: false,
    default: 8,
  },
  clearable: {
    type: Boolean,
    required: false,
    default: false,
  },
  maxCount: {
    type: Number,
    required: false,
    default: 0,
  },
  visibleCount: {
    type: Boolean,
    required: false,
    default: false,
  },
  errorMessage: {
    type: [String, Boolean],
    required: false,
    default: true,
  },
  rules: {
    type: Array,
    required: false,
    default: () => [],
  },
}

/**
 * Modelvalue props
 */
export interface ModelValueProp<T> {
  modelValue: T
}

/**
 * Default props,
 * usually use for without modelvalue
 */
export interface InputDefaultProps {
  placeholder: string
}

/**
 * modelvalueProp + inputDefaultProps type
 */
export type InputPropsTypeWithModelValue<T> = ModelValueProp<T> & InputDefaultProps

export const inputDefaultProps: ComponentObjectPropsOptions<InputDefaultProps> = {
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
}
