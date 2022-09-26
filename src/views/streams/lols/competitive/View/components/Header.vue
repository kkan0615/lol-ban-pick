<template>
  <header
    class="view-header"
  >
    <div
      class="view-header-team"
    >
      <div
        class="tw-w-1/3 tw-text-center"
      >
        {{ blueTeam.win || 0 }}
      </div>
      <div
        class="tw-w-1/3 tw-text-center"
      >
        {{ blueTeam.name || 'name' }}
      </div>
      <div
        class="tw-w-1/3 tw-text-center"
      >
        logo
      </div>
    </div>
    <div
      class="view-header-counter"
    >
      <h3>
        {{ seconds }}
      </h3>
    </div>
    <div
      class="view-header-team"
    >
      <div
        class="tw-w-1/3 tw-text-center"
      >
        logo
      </div>
      <div
        class="tw-w-1/3 tw-text-center"
      >
        {{ redTeam.name || 'name' }}
      </div>
      <div
        class="tw-w-1/3 tw-text-center"
      >
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

