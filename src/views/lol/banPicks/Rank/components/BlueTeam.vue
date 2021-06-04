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
