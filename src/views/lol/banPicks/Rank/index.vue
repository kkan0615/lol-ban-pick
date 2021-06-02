<template>
  <div
    class="w-full h-full"
  >
    <!--    RankBankPickLol-->
    <!--    <user-champion />-->
    <div
      class="h-full flex"
    >
      <blue-team-rank-bank-pick-lol
        class="w-1/5"
      />
      <champions-rank-bank-pick-lol
        class="w-3/5"
      />
      <red-team-rank-bank-pick-lol
        class="w-1/5"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserChampion from '@/components/lol/UserChampion.vue'
import RedTeamRankBankPickLol from '@/views/lol/banPicks/Rank/components/RedTeam.vue'
import BlueTeamRankBankPickLol from '@/views/lol/banPicks/Rank/components/BlueTeam.vue'
import ChampionsRankBankPickLol from '@/views/lol/banPicks/Rank/components/Champions.vue'

export default defineComponent({
  name: 'RankBankPickLol',
  components: { ChampionsRankBankPickLol, BlueTeamRankBankPickLol, RedTeamRankBankPickLol, UserChampion },
  setup () {
    return
  }
})
</script>
