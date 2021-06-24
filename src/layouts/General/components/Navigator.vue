<template>
  <div
    v-if="navigatorStatus"
    class="flex absolute h-screen w-screen left-0 top-0 z-10"
  >
    <div
      class="w-64 bg-white shadow-lg"
      @focusout="onFocusOut"
    >
      <div
        class="m-2 p-2 cursor-pointer rounded-md"
        :class="{
          'bg-gray-300': route.name === 'RankBankPickLol'
        }"
        @click="onClickLolRankBanPick"
      >
        <div
          class="flex items-center"
        >
          <img
            class="w-8 h-8"
            src="@/assets/lol-icon.png"
            alt="lol"
          >
          <div
            class="ml-2"
          >
            Rank Ban
          </div>
        </div>
      </div>
      <div
        class="m-2 p-2 cursor-pointer rounded-md"
        :class="{
          'bg-gray-300': route.name === 'CompetitionBankPickLol'
        }"
        @click="onClickLolCompetitionBanPick"
      >
        <div
          class="flex items-center"
        >
          <img
            class="w-8 h-8"
            src="@/assets/lol-icon.png"
            alt="lol"
          >
          <div
            class="ml-2"
          >
            Competition Ban
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex-auto w-full"
      @click="onFocusOut"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import useStore from '@/store'
import { useRoute, useRouter } from 'vue-router'
import { ApplicationActionTypes } from '@/store/modules/application/actions'
import { RouterNameKeyEnum } from '@/types/router/name'

export default defineComponent({
  name: 'NavigatorGeneralLayout',
  setup () {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const navigatorStatus = computed(() => store.state.application.navigator)

    /**
     * Click outside of navigator div
     */
    const onFocusOut = async () => {
      await store.dispatch(ApplicationActionTypes.CHANGE_NAVIGATOR)
    }

    const onClickLolRankBanPick = async () => {
      await router.push({ name: RouterNameKeyEnum.RANK_BAN_PICK_LOL })
    }

    const onClickLolCompetitionBanPick = async () => {
      await router.push({ name: RouterNameKeyEnum.COMPETITION_RANK_PICK_LOL })
    }

    return {
      route,
      navigatorStatus,
      onFocusOut,
      onClickLolRankBanPick,
      onClickLolCompetitionBanPick,
    }
  }
})
</script>
