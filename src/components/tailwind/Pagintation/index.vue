<template>
  <ul class="flex pl-0 list-none rounded my-2">
    <t-pagination-page
      class="rounded-l"
      @click="onClickPrev"
    >
      Previous
    </t-pagination-page>
    <t-pagination-page
      v-if="startIndex !== 1"
      @click="onClickPage(1)"
    >
      1...
    </t-pagination-page>
    <t-pagination-page
      v-for="i in pages"
      :key="i"
      :class="{
        [`bg-${color}-500`]: i === modelValue,
        [`text-${textColor}-500`]: i === modelValue,
      }"
      @click="onClickPage(i)"
    >
      {{ i }}
    </t-pagination-page>
    <t-pagination-page
      v-if="endIndex !== maxCount"
      @click="onClickPage(maxCount)"
    >
      ...{{ maxCount }}
    </t-pagination-page>
    <t-pagination-page
      class="rounded-r border-r"
      @click="onClickNext"
    >
      Next
    </t-pagination-page>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from 'vue'
import TPaginationPage from '@/components/tailwind/Pagintation/components/Page.vue'

export default defineComponent({
  name: 'TPagination',
  components: { TPaginationPage },
  props: {
    modelValue: {
      type: Number,
      required: false,
      default: 1,
    },
    maxCount: {
      type: Number,
      required: false,
      default: 5,
    },
    visibleCount: {
      type: Number,
      required: false,
      default: 5,
    },
    color: {
      type: String,
      required: false,
      default: 'primary',
    },
    textColor: {
      type: String,
      required: false,
      default: 'textPrimary',
    }
  },
  setup (props) {
    const { emit } = useContext()

    const pages = computed(() => {
      const result: Array<number> = []
      for (let i = startIndex.value; i <= endIndex.value; i ++) {
        result.push(i)
      }

      return result
    })

    const startIndex = computed(() => props.modelValue - props.visibleCount >= 0
      ? props.maxCount - props.modelValue > props.visibleCount
        ? props.modelValue - parseInt(((props.visibleCount / 2)).toString())
        : props.maxCount - props.visibleCount
      : 1)
    const endIndex = computed(() => props.modelValue + props.visibleCount < props.maxCount
      ? props.modelValue - props.visibleCount >= 0
        ? props.modelValue + parseInt(((props.visibleCount / 2)).toString())
        : props.visibleCount
      : props.maxCount)

    const onClickPage = (pageNum: number) => {
      emit('click:page', pageNum)
    }

    const onClickPrev = () => {
      if (props.modelValue - 1 <= 0)
        emit('click:previous', 1)
      else
        emit('click:previous', props.modelValue - 1)
    }

    const onClickNext = () => {
      if (props.modelValue + 1 >= props.maxCount)
        emit('click:next', props.maxCount)
      else
        emit('click:next', props.modelValue + 1)
    }

    return {
      pages,
      startIndex,
      endIndex,
      onClickPage,
      onClickPrev,
      onClickNext,
    }
  }
})
</script>
