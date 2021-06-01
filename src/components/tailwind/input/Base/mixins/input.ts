import { ref } from 'vue'
import TInput from '@/components/tailwind/input/Base/index.vue'

export const useInputMixin = () => {
  const inputRef = ref<HTMLInputElement | null>(null)
  const baseInputRef = ref<InstanceType< typeof TInput> | null>(null)

  const checkValidate = () => {
    if (baseInputRef.value)
      baseInputRef.value.checkValidation()
  }

  return {
    inputRef,
    baseInputRef,
    checkValidate,
  }
}

export default useInputMixin
