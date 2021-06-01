<template>
  <t-input
    :label="label"
    :height="height"
    :clearable="clearable"
    @click:clearableButton="onClickClearableButton"
  >
    <input
      id="name"
      ref="inputRef"
      name="name"
      type="date"
      :placeholder="placeholder"
      :value="modelValue"
      class="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none h-full px-2"
      @input="onInputValue"
      @click="isOpenCalendar = !isOpenCalendar"
    >
  </t-input>
  <t-small-calendar-date
    v-if="false"
    class="mt-2"
    :model-value="modelValue"
    @update:modelValue="onUpdateModelValueInCalendar"
  />
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from 'vue'
import TInput from '@/components/tailwind/input/Base/index.vue'
import { inputBoxProps } from '@/components/tailwind/input/Base/types/props'
import { inputNumberProps } from '@/components/tailwind/input/Number/type'
import TSmallCalendarDate from '@/components/tailwind/date/calendar/Small/index.vue'
import dayjs from 'dayjs'

export default defineComponent({
  name: 'TDatePicker',
  components: { TSmallCalendarDate, TInput },
  props: {
    ...inputNumberProps,
    ...inputBoxProps,
  },
  setup () {
    const { emit } = useContext()

    const inputRef = ref<HTMLInputElement>(null)
    const isOpenCalendar = ref(false)

    const onInputValue = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      emit('update:modelValue', Number(target.value))
    }

    const onClickClearableButton = () => {
      if (inputRef.value) {
        inputRef.value.focus()
      }
      emit('update:modelValue', dayjs())
    }

    const onUpdateModelValueInCalendar = (date: any) => {

      emit('update:modelValue', dayjs(date).format('YYYY-MM-DD'))
      isOpenCalendar.value = false
    }

    return {
      inputRef,
      isOpenCalendar,
      onInputValue,
      onClickClearableButton,
      onUpdateModelValueInCalendar,
    }
  }
})
</script>
<!--<style>-->
<!--input::-webkit-calendar-picker-indicator{-->
<!--  display: none;-->
<!--}-->
<!--</style>-->
