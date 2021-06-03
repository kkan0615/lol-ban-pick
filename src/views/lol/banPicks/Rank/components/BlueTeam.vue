<template>
  <div
    class="h-full flex flex-col gap-y-2"
  >
    <div
      class="text-blue-500 font-bold"
    >
      Blue team
    </div>
    <lol-team-bans />
    <user-picker
      v-for="userPicker in 5"
      :key="userPicker"
      class="h-1/5"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserPicker from '@/components/lol/UserPicker.vue'
import LolTeamBans from '@/components/lol/TeamBans/index.vue'

export default defineComponent({
  name: 'BlueTeamRankBankPickLol',
  components: { LolTeamBans, UserPicker },
  setup () {
    return
  }
})
</script>
