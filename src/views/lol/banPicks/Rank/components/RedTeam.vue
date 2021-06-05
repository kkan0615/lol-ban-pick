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
      class="flex-auto"
    >
      <user-picker
        v-for="userPicker in 5"
        :key="userPicker"
        class="h-1/10"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import UserPicker from '@/components/lol/UserPicker.vue'
import LolTeamBans from '@/components/lol/TeamBans/index.vue'
import useStore from '@/store'

export default defineComponent({
  name: 'RedTeamRankBankPickLol',
  components: { LolTeamBans, UserPicker },
  setup () {
    const store = useStore()

    const bans = computed(() => store.state.lolRankBan.redTeamBans)

    return {
      bans,
    }
  }
})
</script>
