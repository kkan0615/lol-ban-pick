<template>
  <div>
    <div
      class="tw-flex tw-space-x-2 tw-p-2"
    >
      <div
        class="tw-ml-auto"
      />
      <v-btn
        :disabled="LolCompetitiveStep.BLUE_BAN_1 === step"
        color="warning"
      >
        Prev step
      </v-btn>
      <v-btn
        color="error"
      >
        Reset
      </v-btn>
    </div>
    <div>
      lol competitive
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LolCompetitive',
}
</script>
<script setup lang="ts">
import useLolCompetitiveStore from '@/store/modules/lolCompetivie'
import { storeToRefs } from 'pinia'
import { LolCompetitiveStep } from '@/types/models/lols/competitive'

const competitiveStore = useLolCompetitiveStore()
const { step } = storeToRefs(competitiveStore)
</script>


