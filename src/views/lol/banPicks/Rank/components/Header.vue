<template>
  <div
    class="w-full flex"
  >
    <div
      class="ml-auto"
    >
      <t-button
        class="h-8 w-16"
        @click="onClickPrevButton"
      >
        prev
      </t-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TButton from '@/components/tailwind/Button/index.vue'

export default defineComponent({
  name: 'HeaderRankBankPickLol',
  components: { TButton },
  setup () {
    const onClickPrevButton = () => {
      alert('onClickPrevButton')
    }
    return {
      onClickPrevButton,
    }
  }
})
</script>
