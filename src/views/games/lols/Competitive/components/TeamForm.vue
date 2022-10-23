<template>
  <q-btn
    color="primary"
    @click="onClickOpenBtn"
  >
    {{ btnText }}
  </q-btn>
  <q-dialog
    v-model="dialog"
  >
    <q-card>
      <q-card-section
        class="tw-flex tw-items-center"
      >
        <div
          class="tw-text-2xl"
        >
          {{ btnText }}
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
          class="tw-flex tw-flex-col tw-space-y-4"
          @submit="onSubmit"
        >
          <div
            class="tw-mb-4 tw-flex tw-justify-center"
          >
            <img
              v-if="previewImageSrc"
              class="tw-w-20 tw-aspect-square"
              :src="previewImageSrc"
            >
          </div>
          <q-file
            outlined
            accept="image/*"
            label="File input"
            @update:modelValue="onUpdateFile"
          />
          <q-input
            v-model="name"
            label="name"
            outlined
            dense
          />
          <q-color
            v-model="color"
            mode="hex"
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
  name: 'LolCompetitiveTeamForm',
}
</script>
<script setup lang="ts">
import { defineProps } from 'vue'
import useLolCompetitiveStore from '@/store/modules/lolCompetivie'
import { storeToRefs } from 'pinia'

const competitiveStore = useLolCompetitiveStore()

interface Props {
  red?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  red: false
})

const { blueTeam, redTeam } = storeToRefs(competitiveStore)
const dialog = ref(false)
const name = ref('')
const logo = ref<File | undefined>(undefined)
const win = ref<number | undefined>(undefined)
const color = ref('')

const btnText = computed(() => `change ${props.red ? 'red' : 'blue'} team`)
const previewImageSrc = computed(() => logo.value ? URL.createObjectURL(logo.value) : null)

const onClickOpenBtn = () => {
  // Initialize data
  if (props.red) {
    name.value = redTeam.value.name
    win.value = redTeam.value.win
    color.value = redTeam.value.color || ''
    logo.value = redTeam.value.logo
  } else {
    name.value = blueTeam.value.name
    win.value = blueTeam.value.win
    color.value = blueTeam.value.color || ''
    logo.value = blueTeam.value.logo
  }
  // Open dialog
  dialog.value = true
}

const onUpdateFile = (fileList: File[]) => {
  logo.value = fileList[0]
}

const onSubmit = () => {
  if (props.red) {
    competitiveStore.setRedTeam({
      logo: logo.value,
      color: color.value,
      win: win.value,
      name: name.value,
    })
  } else {
    competitiveStore.setBlueTeam({
      logo: logo.value,
      color: color.value,
      win: win.value,
      name: name.value,
    })
  }

  dialog.value = false
}
</script>
