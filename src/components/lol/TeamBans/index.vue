<template>
  <div
    class="w-full flex gap-x-2"
  >
    <img
      v-for="i in 5"
      :key="i"
      class="w-6 h-6 ring"
      src="http://ddragon.leagueoflegends.com/cdn/11.11.1/img/champion/Nidalee.png"
      alt="Nidalee"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LolTeamBans',
  setup () {
    return
  }
})
</script>
