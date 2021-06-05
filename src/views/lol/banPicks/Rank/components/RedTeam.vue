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
      <user-picker
        :select-turn="currentTurn === 'PICK6'"
        :champion="picks[0]"
        color="red"
        class="h-1/10"
      />
      <user-picker
        :select-turn="currentTurn === 'PICK7'"
        :champion="picks[1]"
        color="red"
        class="h-1/10"
      />
      <user-picker
        :select-turn="currentTurn === 'PICK8'"
        :champion="picks[2]"
        color="red"
        class="h-1/10"
      />
      <user-picker
        :select-turn="currentTurn === 'PICK9'"
        :champion="picks[3]"
        color="red"
        class="h-1/10"
      />
      <user-picker
        :select-turn="currentTurn === 'PICK10'"
        :champion="picks[4]"
        color="red"
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
  name: 'RedTeamRankBankPickLol',
  components: { LolTeamBans, UserPicker },
  setup () {
    const store = useStore()

    const bans = computed(() => store.state.lolRankBan.redTeamBans)
    const picks = computed(() => store.state.lolRankBan.redTeamPicks)
    const currentTurn = computed(() => store.state.lolRankBan.currentPickOrder)

    return {
      bans,
      picks,
      currentTurn,
    }
  }
})
</script>
