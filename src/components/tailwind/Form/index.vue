<template>
  <form
    @submit="onSubmitForm"
  >
    <slot />
  </form>
</template>

<script lang="ts">
import { defineComponent, provide, ref, useContext } from 'vue'
import TBaseInput from '@/components/tailwind/input/Base/index.vue'
import { TFormProvideKey } from '@/components/tailwind/Form/types'

export default defineComponent({
  name: 'TForm',
  setup () {
    const { emit } = useContext()

    const inputComponents = ref<Array<InstanceType<typeof TBaseInput>>>([])

    const register = (component: InstanceType<typeof TBaseInput>) => {
      inputComponents.value.push(component)
    }

    const unregister = (uid: number) => {
      const index = inputComponents.value.findIndex(c => (c as any).uid === uid)
      if (index > -1) {
        inputComponents.value.splice(index, 1)
      }
    }

    provide(TFormProvideKey, {
      register,
      unregister,
    })

    const onSubmitForm = (event: Event) => {
      emit('submit', event)
    }

    const validate = () => {
      let valid = true
      for (const component of inputComponents.value) {
        const result = component.checkValidation()
        if (!result || typeof result === 'string') {
          valid = false
        }
      }

      return valid
    }

    return {
      validate,
      onSubmitForm,
    }
  }
})
</script>
