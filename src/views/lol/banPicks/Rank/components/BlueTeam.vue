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
      class="flex-auto flex flex-col gap-y-3"
    >
      <user-picker
        :select-turn="currentTurn === 'PICK1'"
        :champion="picks[0]"
        color="blue"
        class="h-1/10"
      />
      <user-picker
        :select-turn="currentTurn === 'PICK2'"
        :champion="picks[1]"
        color="blue"
        class="h-1/10"
      />
      <user-picker
        :select-turn="currentTurn === 'PICK3'"
        :champion="picks[2]"
        color="blue"
        class="h-1/10"
      />
      <user-picker
        :select-turn="currentTurn === 'PICK4'"
        :champion="picks[3]"
        color="blue"
        class="h-1/10"
      />
      <user-picker
        :select-turn="currentTurn === 'PICK5'"
        :champion="picks[4]"
        color="blue"
        class="h-1/10"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import UserPicker from '@/components/lol/UserPicker/index.vue'
import LolTeamBans from '@/components/lol/TeamBans/index.vue'
import useStore from '@/store'

export default defineComponent({
  name: 'BlueTeamRankBankPickLol',
  components: { LolTeamBans, UserPicker },
  setup () {
    const store = useStore()

    const bans = computed(() => store.state.lolRankBan.blueTeamBans)
    const picks = computed(() => store.state.lolRankBan.blueTeamPicks)
    const currentTurn = computed(() => store.state.lolRankBan.currentPickOrder)

    return {
      bans,
      currentTurn,
      picks
    }
  }
})
</script>
