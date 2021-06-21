<template>
  <div
    class="w-full h-full p-2"
  >
    <div
      class="h-full flex flex-col"
    >
      <header-rank-bank-pick-lol
        class="flex-shrink flex-grow-0 p-2"
      />
      <div
        class="flex-auto flex gap-x-4"
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RedTeamRankBankPickLol from '@/views/lol/banPicks/Rank/components/RedTeam.vue'
import BlueTeamRankBankPickLol from '@/views/lol/banPicks/Rank/components/BlueTeam.vue'
import ChampionsRankBankPickLol from '@/views/lol/banPicks/Rank/components/Champions.vue'
import HeaderRankBankPickLol from '@/views/lol/banPicks/Rank/components/Header.vue'

export default defineComponent({
  name: 'RankBankPickLol',
  components: { HeaderRankBankPickLol, ChampionsRankBankPickLol, BlueTeamRankBankPickLol, RedTeamRankBankPickLol },
  setup () {
    return
  }
})
</script>
