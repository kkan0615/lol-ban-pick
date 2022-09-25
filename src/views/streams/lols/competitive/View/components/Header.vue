<template>
  <header
    class="controller-header"
  >
    <div
      class="tw-w-2/5 tw-flex"
    >
      <div>
        {{ blueTeam.win || 0 }}
      </div>
      <div>
        {{ blueTeam.name }}
      </div>
    </div>
    <div
      class="tw-w-1/5 tw-flex"
    >
      {{ seconds }}
    </div>
    <div
      class="tw-w-2/5 tw-flex"
    >
      <div>
        {{ redTeam.name }}
      </div>
      <div>
        {{ redTeam.win || 0 }}
      </div>
    </div>
  </header>
</template>
<script lang="ts">
export default {
  name: 'StreamLolCompetitiveViewHeader',
}
</script>
<script setup lang="ts">
import useLolCompetitiveStreamStore from '@/store/modules/lolCompetitiveStream'
import { storeToRefs } from 'pinia'

const streamStore = useLolCompetitiveStreamStore()

const { seconds, blueTeam, redTeam } = storeToRefs(streamStore)
</script>

