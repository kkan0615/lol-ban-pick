<template>
  <div
    class="h-full"
  >
    <div
      class="h-full flex justify-center items-center gap-4"
    >
      <div
        id="lol-rank-ban-card"
        class="h-1/5 flex justify-center items-center ring p-4 bg-white cursor-pointer hover:shadow-lg"
        @click="onClickLolRankBanCard"
      >
        <div
          class="text-center"
        >
          League Of Legend Rank ban
        </div>
      </div>
      <div
        id="lol-competition-ban-card"
        class="h-1/5 flex justify-center items-center ring p-4 bg-white cursor-pointer hover:shadow-lg"
        @click="onClickLolCompetitionBanCard"
      >
        <div
          class="text-center"
        >
          League Of Legend Competition ban
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { RouterNameKeyEnum } from '@/types/router/name'

export default defineComponent({
  name: 'Home',
  setup () {
    const router = useRouter()

    const onClickLolRankBanCard = async () => {
      await router.push({ name: RouterNameKeyEnum.RANK_BAN_PICK_LOL })
    }

    const onClickLolCompetitionBanCard = async () => {
      await router.push({ name: RouterNameKeyEnum.COMPETITION_RANK_PICK_LOL })
    }

    return {
      onClickLolRankBanCard,
      onClickLolCompetitionBanCard,
    }
  }
})
</script>
