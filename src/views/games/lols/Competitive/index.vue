<template>
  <div
    class="lol-competitive-container page-content"
  >
    <LolCompetitiveView />
    <LolCompetitiveController />
  </div>
</template>
<script lang="ts">
export default {
  name: 'LolCompetitive',
}
</script>
<script setup lang="ts">
import LolCompetitiveView from '@/views/games/lols/Competitive/components/View.vue'
import LolCompetitiveController from '@/views/games/lols/Competitive/components/Controller.vue'

</script>
<style
  lang="scss"
>
@import "./index";
</style>
