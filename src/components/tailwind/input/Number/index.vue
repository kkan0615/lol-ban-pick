<template>
  <t-input
    :label="label"
    :height="height"
    :model-value="modelValue"
    :clearable="clearable"
    @click:clearableButton="onClickClearableButton"
  >
    <input
      id="name"
      ref="inputRef"
      name="name"
      type="number"
      :placeholder="placeholder"
      :value="modelValue"
      class="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none h-full px-2"
      @input="onInputValue"
    >
  </t-input>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from 'vue'
import TInput from '@/components/tailwind/input/Base/index.vue'
import { inputBoxProps } from '@/components/tailwind/input/Base/types/props'
import { inputNumberProps } from '@/components/tailwind/input/Number/type'

export default defineComponent({
  name: 'TNumberInput',
  components: { TInput },
  props: {
    ...inputNumberProps,
    ...inputBoxProps,
  },
  setup () {
    const { emit } = useContext()

    const inputRef = ref<HTMLInputElement>(null)

    const onInputValue = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      emit('update:modelValue', Number(target.value))
    }

    const onClickClearableButton = () => {
      if (inputRef.value) {
        inputRef.value.focus()
      }
      emit('update:modelValue', 0)
    }

    return {
      inputRef,
      onInputValue,
      onClickClearableButton,
    }
  }
})
</script>
