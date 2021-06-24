<template>
  <div
    class="flex flex-col gap-y-2 h-full"
  >
    <div
      class="text-red-500 font-bold flex-shrink flex-grow-0"
    >
      Red team
    </div>
    <lol-team-bans
      class="flex-shrink"
      ring-color="red"
      :bans="bans"
    />
    <div
      class="flex-auto flex flex-col gap-y-3"
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
            :select-turn="currentTurn === `PICK${index + 6}`"
            :champion="element"
            color="red"
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
import { VuedraggableChangeEvent } from '@/types/lib/vuedraggable'
import { LolChampionWithKey } from '@/types/model/lol'
import { LolRanKBanActionTypes } from '@/store/modules/lolRankBan/actions'
import { LolCompetitionBanActionTypes } from '@/store/modules/lolCompetitionBan/actions'

export default defineComponent({
  name: 'RedTeamCompetitionBankPickLol',
  components: { LolTeamBans, UserPicker, vuedraggable },
  setup () {
    const store = useStore()

    const bans = computed(() => store.state.lolCompetitionBan.redTeamBans)
    const picks = computed(() => store.state.lolCompetitionBan.redTeamPicks)
    const currentTurn = computed(() => store.state.lolCompetitionBan.currentPickOrder)

    const onChangeVuedraggable = async (event: VuedraggableChangeEvent<LolChampionWithKey>) => {
      if (currentTurn.value === 'DONE' && event.moved) {
        await store.dispatch(LolCompetitionBanActionTypes.SWAP_RED_TEAM_PICKS, event)
      }
    }

    return {
      bans,
      picks,
      currentTurn,
      onChangeVuedraggable,
    }
  }
})
</script>
