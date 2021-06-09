<template>
  <t-input
    ref="baseInputRef"
    v-click-outside="closeIsSelectListOpen"
    :label="label"
    :type="type"
    :height="height"
    :model-value="modelValue"
    :clearable="clearable"
    :error-message="errorMessage"
    :rules="rules"
    @click:clearableButton="onClickClearableButton"
  >
    <template
      #label
    >
      <slot
        name="label"
      />
    </template>
    <!--   pre-append   -->
    <template
      #preAppend
    >
      <slot
        name="preAppend"
      />
    </template>
    <div
      class="relative w-full"
      @focusin="isSelectListOpen = true"
    >
      <div
        class="flex items-center h-full w-full flex-wrap px-1"
      >
        <t-chip
          v-for="(chip, index) in modelValue"
          :key="itemValue ? chip[itemValue] : index"
          class="flex-shrink"
          :closable="closable"
          @click:close="onClickCloseChipButton(chip)"
        >
          {{ itemText ? chip[itemText] : chip }}
        </t-chip>
        <!--    Search input    -->
        <div class="flex-grow">
          <input
            placeholder=""
            :value="innerSearch"
            class="bg-transparent px-2 appearance-none outline-none h-full w-full text-gray-800"
            @input="onInputSearchInput"
            @keydown.enter="onKeyDownEnterSearchInput"
          >
        </div>
      </div>
      <!--   Select list   -->
      <div
        v-if="isSelectListOpen"
        class="absolute shadow top-10 bg-white z-40 w-full rounded max-h-select overflow-y-auto max-h-32"
      >
        <div class="flex flex-col w-full">
          <slot
            name="items"
          >
            <div
              v-for="item in filteredItems"
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
    <!--   append   -->
    <template
      #append
    >
      <slot
        name="append"
      />
    </template>
  </t-input>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, useContext, computed } from 'vue'
import TInput from '@/components/tailwind/input/Base/index.vue'
import { inputBoxProps } from '@/components/tailwind/input/Base/types/props'
import useInputMixin from '@/components/tailwind/input/Base/mixins/input'
import { inputTagProps } from '@/components/tailwind/input/Tag/types'
import TChip from '@/components/tailwind/Chip/index.vue'

export default defineComponent({
  name: 'TTagInput',
  components: { TChip, TInput },
  props: {
    ...inputTagProps,
    ...inputBoxProps,
  },
  setup (props) {
    const { emit } = useContext()
    const { inputRef, baseInputRef, checkValidate } = useInputMixin()

    const isSelectListOpen = ref(false)
    const innerSearch = ref('')

    const filteredItems = computed(() => {
      const itmes = props.items as Array<any>
      const itemText = props.itemText as string
      if (!itmes)
        return []

      if (!innerSearch.value) {
        return itmes
      }

      return itmes.filter((item: any) => itemText && typeof item === 'object' ? item[itemText].includes(innerSearch.value) : item.includes(innerSearch.value))
    })

    const onInputValue = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      emit('update:modelValue', target.value)
      nextTick(() => {
        checkValidate()
      })
    }

    const onInputSearchInput = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      innerSearch.value = target.value
    }

    const onClickItem = (item: any) => {
      if (Array.isArray(props.modelValue)) {
        const modelValue = props.modelValue
        const itemValue = props.itemValue as string

        const index = props.modelValue.findIndex((element: any) => element[itemValue] === item[itemValue])
        if (index >= 0) {
          modelValue.splice(index, 1)
          emit('update:modelValue', modelValue)
        } else {
          modelValue.push(item)
          emit('update:modelValue', modelValue)
        }
      } else {
        emit('update:modelValue', item)
      }

      if (!props.remainSearchAfterClick) {
        innerSearch.value = ''
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

    const onClickCloseChipButton = (item: any) => {
      if (Array.isArray(props.modelValue)) {
        const modelValue = props.modelValue
        const itemValue = props.itemValue as string

        const index = props.modelValue.findIndex((element: any) => element[itemValue] === item[itemValue])
        if (index >= 0) {
          modelValue.splice(modelValue.indexOf(item), 1)
          emit('update:modelValue', modelValue)
        }
      }
    }

    const onKeyDownEnterSearchInput = () => {
      const items = props.items as Array<any>
      if (!innerSearch.value || !items)
        return

      const itemText = props.itemText as string
      const found = items.find((item: any) => itemText ? item[itemText] === innerSearch.value : item === innerSearch.value)
      if (!found) {

        const newTag = {
          [itemText]: innerSearch.value
        }
        items.push(newTag)
        const modelValue = props.modelValue as Array<any>
        if (modelValue && itemText)
          modelValue.push({
            [itemText]: innerSearch.value
          })

        emit('update:modelValue', modelValue)
        innerSearch.value = ''
      }
    }

    const closeIsSelectListOpen = () => {
      isSelectListOpen.value = false
    }

    return {
      inputRef,
      baseInputRef,
      isSelectListOpen,
      innerSearch,
      filteredItems,
      onInputValue,
      onInputSearchInput,
      onKeyDownEnterSearchInput,
      onClickClearableButton,
      onClickCloseChipButton,
      checkValidate,
      onClickItem,
      closeIsSelectListOpen,
    }
  }
})
</script>
