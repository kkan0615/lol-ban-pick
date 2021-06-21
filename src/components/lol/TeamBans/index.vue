<template>
  <div
    class="w-full flex gap-x-4"
  >
    <div
      v-for="(ban, index) in bansProp"
      :key="index"
    >
      <lol-team-bans-ban
        :ring-color="ringColor"
        :ban="ban"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LolChampionWithKey } from '@/interfaces/model/lol'
import LolTeamBansBan from '@/components/lol/TeamBans/components/Ban.vue'

export default defineComponent({
  name: 'LolTeamBans',
  components: { LolTeamBansBan },
  props: {
    bans: {
      type: Object,
      required: false,
      default: () => {},
    },
    ringColor: {
      type: String,
      required: true,
      default: '',
    }
  },
  setup (props) {
    const bansProp = props.bans as Array<LolChampionWithKey>

    return {
      bansProp,
    }
  }
})
</script>
