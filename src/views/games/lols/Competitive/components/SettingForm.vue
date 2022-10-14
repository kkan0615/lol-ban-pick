<template>
  <v-dialog
    v-model="dialog"
    class="tw-max-w-md"
    @update:modelValue="onUpdateDialog"
  >
    <template #activator="{ props }">
      <v-btn
        color="primary"
        v-bind="props"
      >
        change setting
      </v-btn>
    </template>

    <v-card>
      <v-card-title
        class="tw-flex tw-items-center"
      >
        <div
          class="tw-text-2xl"
        >
          Game Setting
        </div>
        <div
          class="tw-ml-auto"
        >
          <v-btn
            icon
            color="danger"
            @click="dialog = false"
          >
            <v-icon>close</v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-form
          @submit="onSubmit"
        >
          <v-checkbox
            v-model="displaySummonSpell"
            color="primary"
            label="Use Summon spell"
          />
        </v-form>
        <div
          class="tw-mt-4 tw-flex"
        >
          <v-btn
            type="submit"
            class="tw-ml-auto"
            color="primary"
            @click="onSubmit"
          >
            submit
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
export default {
  name: 'LolCompetitiveSettingForm',
}
</script>
<script setup lang="ts">
import useLolCompetitiveStore from '@/store/modules/lolCompetivie'
import { storeToRefs } from 'pinia'

const competitiveStore = useLolCompetitiveStore()

const { setting } = storeToRefs(competitiveStore)
const dialog = ref(false)
const displaySummonSpell = ref(false)

const onUpdateDialog = (bool: boolean) => {
  if (bool) {
    displaySummonSpell.value = setting.value.displaySummonSpell
  }
}

const onSubmit = () => {
  competitiveStore.setSetting({
    displaySummonSpell: displaySummonSpell.value
  })

  dialog.value = false
}
</script>
