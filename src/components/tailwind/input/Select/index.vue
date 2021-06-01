<template>
  <t-input
    v-click-outside="closeIsSelectListOpen"
    :label="label"
    :height="height"
    :model-value="modelValue"
    :clearable="clearable"
    @click:clearableButton="onClickClearableButton"
  >
    <div
      class="relative w-full"
      role="combobox"
    >
      <div
        class="flex flex-auto flex-wrap"
        @focusin="isSelectListOpen = true"
      >
        <div

          class="ml-2"
        >
          {{ itemText ? modelValue[itemText] : modelValue }}
        </div>
        <div class="flex-1">
          <input
            placeholder=""
            class="px-1 outline-none h-full w-full"
            readonly
          >
        </div>
      </div>
      <div
        v-if="isSelectListOpen"
        class="absolute shadow top-100 bg-white z-40 w-full rounded max-h-select overflow-y-auto h-32"
      >
        <div class="flex flex-col w-full">
          <slot
            name="items"
          >
            <div
              v-for="item in items"
              :key="itemValue ? item[itemValue] : item"
              class="cursor-pointer w-full border-gray-100 rounded-t hover:bg-primary-300 border-primary-500"
              :class="{
                [`border-l-2`]: Array.isArray(modelValue) ? modelValue.indexOf(item) >= 0 : modelValue[itemValue] === item[itemValue]
              }"
              @click="onClickItem(item)"
            >
              <slot
                name="item"
                v-bind="item"
              >
                <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                  <div class="w-full items-center flex">
                    <div class="mx-2 leading-6  ">
                      {{ itemText ? item[itemText] : item }}
                    </div>
                  </div>
                </div>
              </slot>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </t-input>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, useContext } from 'vue'
import { inputBoxProps } from '@/components/tailwind/input/Base/types/props'
import { inputSelectProps } from '@/components/tailwind/input/Select/type'
import TInput from '@/components/tailwind/input/Base/index.vue'
import useInputMixin from '@/components/tailwind/input/Base/mixins/input'

export default defineComponent({
  name: 'TSelectInput',
  components: { TInput },
  props: {
    ...inputSelectProps,
    ...inputBoxProps
  },
  setup (props) {
    const { emit } = useContext()

    const isSelectListOpen = ref(false)
    const { inputRef, checkValidate } = useInputMixin()

    const onInputValue = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      emit('update:modelValue', target.value)
      nextTick(() => {
        checkValidate()
      })
    }

    const onClickItem = (item: any) => {
      if (Array.isArray(props.modelValue)) {
        const modelValue = props.modelValue
        const itemValue = props.itemValue as string

        const index = props.modelValue.findIndex((element: any) => element[itemValue] === item[itemValue])
        if (index >= 0) {
          modelValue.splice(index, 1)
          emitValue(modelValue)
        } else {
          modelValue.push(item)
          emitValue(modelValue)
        }
      } else {
        emitValue(item)
      }
    }

    const onClickClearableButton = () => {
      if (inputRef.value) {
        inputRef.value.focus()
      }

      emit('update:modelValue', [])
      nextTick(() => {
        checkValidate()
      })
    }

    const closeIsSelectListOpen = () => {
      isSelectListOpen.value = false
    }

    const emitValue = (item: Array<any> | any) => {
      emit('update:modelValue', item)
      emit('input', item)
    }

    return {
      isSelectListOpen,
      onInputValue,
      onClickClearableButton,
      onClickItem,
      closeIsSelectListOpen,
    }
  }
})
</script>
