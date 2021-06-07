<template>
  <div
    class="w-full h-full p-2"
  >
    <div
      class="h-full flex flex-col"
    >
      <header-competition-bank-pick-lol
        class="flex-shrink flex-grow-0 p-2"
      />
      <div
        class="flex-auto flex gap-x-4"
      >
        <blue-team-competition-bank-pick-lol
          class="w-1/5"
        />
        <champions-competition-bank-pick-lol
          class="w-3/5"
        />
        <red-team-competition-bank-pick-lol
          class="w-1/5"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderCompetitionBankPickLol from '@/views/lol/banPicks/Competition/components/Header.vue'
import BlueTeamCompetitionBankPickLol from '@/views/lol/banPicks/Competition/components/BlueTeam.vue'
import ChampionsCompetitionBankPickLol from '@/views/lol/banPicks/Competition/components/Champions.vue'
import RedTeamCompetitionBankPickLol from '@/views/lol/banPicks/Competition/components/RedTeam.vue'

export default defineComponent({
  name: 'CompetitionPickLol',
  components: {
    RedTeamCompetitionBankPickLol,
    ChampionsCompetitionBankPickLol,
    BlueTeamCompetitionBankPickLol,
    HeaderCompetitionBankPickLol
  },
  setup () {
    return
  }
})
</script>
