<template>
  <div
    class="h-full flex flex-col"
  >
    <user-picker
      v-for="userPicker in 5"
      :key="userPicker"
      class="h-1/5"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserPicker from '@/components/lol/UserChampion.vue'

export default defineComponent({
  name: 'BlueTeamRankBankPickLol',
  components: { UserPicker },
  setup () {
    return
  }
})
</script>
