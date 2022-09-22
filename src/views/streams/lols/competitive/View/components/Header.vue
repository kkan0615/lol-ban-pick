<template>
  <header
    class="controller-header"
  >
    <div
      class="tw-w-2/5 tw-flex"
    >
      left
    </div>
    <div
      class="tw-w-1/5 tw-flex"
    >
      {{ seconds }}
    </div>
    <div
      class="tw-w-2/5 tw-flex"
    >
      right
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

const { seconds } = storeToRefs(streamStore)
</script>

