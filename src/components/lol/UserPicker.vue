<template>
  <div
    class="rounded-t border-2 h-full"
  >
    <div
      class="flex items-center px-2 py-1 border-transparent relative h-full"
    >
      <!--      <div-->
      <!--        class="rounded-full w-12 h-12 ring"-->
      <!--      >-->
      <img
        class="rounded-full w-16 h-16 ring"
        src="http://ddragon.leagueoflegends.com/cdn/11.11.1/img/champion/Ahri.png"
        alt="ahri"
      >
      <!--      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserPicker',
  props: {
    selectTurn: {
      type: Boolean,
      required: false,
      default: false,
    },
    ringColor: {
      type: String,
      required: false,
      default: 'primary-500',
    }
  },
  setup () {
    return
  }
})
</script>
