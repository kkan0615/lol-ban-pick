<template>
  <div
    class="w-full flex"
  >
    <div
      class="ml-auto flex gap-x-2"
    >
      <lol-language-picker />
      <version-picker />
      <t-button
        :disabled="currentTurn === 'BAN1'"
        class="h-8 w-16"
        @click="onClickResetButton"
      >
        reset
      </t-button>
      <t-button
        :disabled="currentTurn === 'BAN1'"
        class="h-8 w-16"
        @click="onClickPrevButton"
      >
        prev
      </t-button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import TButton from '@/components/tailwind/Button/index.vue'
import useStore from '@/store'
import { LolRanKBanActionTypes } from '@/store/modules/lolRankBan/actions'
import VersionPicker from '@/components/pickers/Version/index.vue'
import LolLanguagePicker from '@/components/pickers/Language/index.vue'

export default defineComponent({
  name: 'HeaderRankBankPickLol',
  components: { LolLanguagePicker, VersionPicker, TButton },
  setup () {
    const store = useStore()

    const currentTurn = computed(() => store.state.lolRankBan.currentPickOrder)

    const onClickResetButton = async () => {
      if (confirm('Would like to reset data?'))
        await store.dispatch(LolRanKBanActionTypes.RESET_STATE)
    }

    const onClickPrevButton = async () => {
      await store.dispatch(LolRanKBanActionTypes.HANDLE_PREV_BUTTON)
    }

    return {
      currentTurn,
      onClickPrevButton,
      onClickResetButton,
    }
  }
})
</script>
