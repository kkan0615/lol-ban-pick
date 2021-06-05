<template>
  <div
    class="h-full"
  >
    <div
      class="h-full flex justify-center items-center"
    >
      <div
        class="h-1/5 flex justify-center items-center ring p-4 bg-white cursor-pointer hover:shadow-lg"
        @click="onClickLolRankBanCard"
      >
        <div
          class="text-center"
        >
          League Of Legend Rank ban
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  setup () {
    const router = useRouter()

    const onClickLolRankBanCard = () => {
      router.push({ name: 'RankBankPickLol' })
    }

    return {
      onClickLolRankBanCard,
    }
  }
})
</script>
