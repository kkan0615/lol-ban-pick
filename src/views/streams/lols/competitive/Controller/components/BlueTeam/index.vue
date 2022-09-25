<template>
  <div>
    <!--    -->
  </div>
</template>
<script lang="ts">
export default {
  name: 'StreamLolCompetitiveControllerBlueTeam',
}
</script>
<script setup lang="ts">
import useLolCompetitiveStreamStore from '@/store/modules/lolCompetitiveStream'
import { storeToRefs } from 'pinia'

const streamStore = useLolCompetitiveStreamStore()
const { blueTeam } = storeToRefs(streamStore)

</script>

