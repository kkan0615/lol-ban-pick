<template>
  <q-btn
    color="primary"
    @click="dialog = true"
  >
    change setting
  </q-btn>
  <q-dialog
    v-model="dialog"
    @update:modelValue="onUpdateDialog"
  >
    <q-card>
      <q-card-section
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
          <q-btn
            v-close-popup
            icon="close"
            flat
            round
            dense
            @click="dialog = false"
          />
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-form
          @submit="onSubmit"
        >
          <q-checkbox
            v-model="displaySummonSpell"
            color="primary"
            label="Use Summon spell"
          />
        </q-form>
        <div
          class="tw-mt-4 tw-flex"
        >
          <q-btn
            type="submit"
            class="tw-ml-auto"
            color="primary"
            @click="onSubmit"
          >
            submit
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
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
