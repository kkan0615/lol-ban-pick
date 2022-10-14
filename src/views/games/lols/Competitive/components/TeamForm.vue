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
        {{ btnText }}
      </v-btn>
    </template>

    <v-card>
      <v-card-title
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
          <div
            class="tw-mb-4 tw-flex tw-justify-center"
          >
            <img
              v-if="previewImageSrc"
              class="tw-w-20 tw-aspect-square"
              :src="previewImageSrc"
            >
          </div>
          <v-file-input
            accept="image/*"
            label="File input"
            @update:modelValue="onUpdateFile"
          />
          <v-text-field
            v-model="name"
            label="name"
          />
          <v-color-picker
            v-model="color"
            mode="hex"
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

const onUpdateDialog = (bool: boolean) => {
  if (bool) {
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
  }
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
