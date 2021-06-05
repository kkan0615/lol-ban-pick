<template>
  <div
    class="rounded-t border-2"
  >
    <div
      class="flex items-center border-transparent h-full"
    >
      <div
        class="w-2 h-full mr-2"
        :class="{
          [`bg-${color}-500`]: selectTurn,
        }"
      />
      <!--      <div-->
      <!--        class="rounded-full w-12 h-12 ring"-->
      <!--      >-->
      <div
        class="py-1 px-2"
      >
        <img
          class="rounded-full w-16 h-16 ring"
          src="http://ddragon.leagueoflegends.com/cdn/11.11.1/img/champion/Ahri.png"
          alt="ahri"
        >
      </div>
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
    color: {
      type: String,
      required: false,
      default: 'primary-500',
    },
  },
  setup () {
    return
  }
})
</script>
