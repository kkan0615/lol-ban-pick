<template>
  <div
    class="flex flex-col gap-y-2 h-full"
  >
    <div
      class="text-blue-500 font-bold flex-shrink flex-grow-0"
    >
      Blue team
    </div>
    <lol-team-bans
      class="flex-shrink"
      ring-color="blue"
      :bans="bans"
    />
    <div
      class="flex-auto flex flex-col"
    >
      <vuedraggable
        v-model="picks"
        class="h-full flex flex-col gap-y-3"
        tag="div"
        item-key="key"
        :options="{disabled: currentTurn !== 'DONE'}"
        @change="onChangeVuedraggable"
      >
        <template
          #item="{element, index}"
        >
          <user-picker
            :select-turn="currentTurn === `PICK${index + 1}`"
            :champion="element"
            color="blue"
            class="h-1/10"
          />
        </template>
      </vuedraggable>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import UserPicker from '@/components/lol/UserPicker/index.vue'
import LolTeamBans from '@/components/lol/TeamBans/index.vue'
import vuedraggable from 'vuedraggable'
import useStore from '@/store'
import { LolChampionWithKey } from '@/types/model/lol'
import { VuedraggableChangeEvent } from '@/types/lib/vuedraggable'
import { LolRanKBanActionTypes } from '@/store/modules/lolRankBan/actions'

export default defineComponent({
  name: 'BlueTeamRankBankPickLol',
  components: { LolTeamBans, UserPicker, vuedraggable },
  setup () {
    const store = useStore()

    const bans = computed(() => store.state.lolRankBan.blueTeamBans)
    const picks = computed(() => store.state.lolRankBan.blueTeamPicks)
    const currentTurn = computed(() => store.state.lolRankBan.currentPickOrder)

    const onChangeVuedraggable = async (event: VuedraggableChangeEvent<LolChampionWithKey>) => {
      if (currentTurn.value === 'DONE' && event.moved) {
        await store.dispatch(LolRanKBanActionTypes.SWAP_BLUE_TEAM_PICKS, event)
      }
    }

    return {
      bans,
      currentTurn,
      picks,
      onChangeVuedraggable,
    }
  }
})
</script>
