<template>
  <div
    class="w-full h-full"
  >
    RankBankPickLol
    <user-champion />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserChampion from '@/components/lol/UserChampion.vue'

export default defineComponent({
  name: 'RankBankPickLol',
  components: { UserChampion },
  setup () {
    return
  }
})
</script>
