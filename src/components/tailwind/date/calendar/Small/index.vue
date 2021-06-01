<template>
  <div
    class="w-72 ring-1 rounded-md"
  >
    <!--  title line -->
    <div
      class="flex items-center bg-gray-400 p-2 text-textPrimary-500"
    >
      <!--   month and year   -->
      <div
        class="mr-2"
      >
        {{ currentDate.get('year') }} - {{ monthNames[currentDate.get('month')] }}
      </div>
      <div
        class="ml-auto flex"
      >
        <t-button
          @click="onClickPrevMonth"
        >
          <t-material-icon>
            west
          </t-material-icon>
        </t-button>
        <t-button
          @click="onClickNextMonth"
        >
          <t-material-icon>
            east
          </t-material-icon>
        </t-button>
      </div>
    </div>  <!--  title line ends -->
    <div class="flex flex-wrap w-full">
      <div
        v-for="dayName in daysStartWithSun"
        :key="dayName"
        style="width: 14.26%"
        class="text-center"
      >
        {{ dayName }}
      </div>
    </div>
    <div class="flex flex-wrap w-full">
      <div
        v-for="blank in currentDate.date(1).day()"
        :key="blank"
        style="width: 14.26%"
      />
      <div
        v-for="day in monthOfCurrentDate"
        :key="day"
        style="width: 14.26%"
        class="cursor-pointer text-center"
        @click="onClickDate(day)"
      >
        <div
          v-if="currentDate.get('date') === day"
          class="bg-primary-400 rounded-full text-textPrimary-500"
        >
          {{ day }}
        </div>
        <div
          v-else
        >
          {{ day }}
        </div>
      </div>
    </div>
    <!--  footer  -->
    <div>
      <t-button
        @click="onClickTodayButton"
      >
        today
      </t-button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, useContext, watch } from 'vue'
import { monthNames, daysStartWithSun } from '@/components/tailwind/date/calendar/Small/data'
import dayjs from 'dayjs'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import TButton from '@/components/tailwind/Button/index.vue'

export default defineComponent({
  name: 'TSmallCalendarDate',
  components: { TButton, TMaterialIcon },
  props: {
    modelValue: {
      type: [Date, String],
      required: false,
      default: ''
    }
  },
  setup (props) {
    const { emit } = useContext()

    /* default - today */
    const currentDate = ref(props.modelValue ? dayjs(props.modelValue) : dayjs())
    const monthOfCurrentDate = computed(() => currentDate.value.daysInMonth())

    watch(() => props.modelValue, (newDate, oldDate) => {
      if (newDate === oldDate)
        return

      currentDate.value = dayjs(newDate)
    })

    const onClickDate = (date: number) => {
      emit('click:date', date)
      currentDate.value = currentDate.value.set('date', date)
      emit('update:modelValue', currentDate.value.format('YYYY-MM-DD'))
    }

    const onClickPrevMonth = () => {
      currentDate.value = currentDate.value.subtract(1, 'month')
    }

    const onClickNextMonth = () => {
      currentDate.value = currentDate.value.add(1, 'month')
    }

    const onClickTodayButton = () => {
      currentDate.value = dayjs()
      emit('update:modelValue', currentDate.value.format('YYYY-MM-DD'))
    }

    return {
      currentDate,
      monthNames,
      monthOfCurrentDate,
      daysStartWithSun,
      onClickDate,
      onClickPrevMonth,
      onClickNextMonth,
      onClickTodayButton,
    }
  }
})
</script>
