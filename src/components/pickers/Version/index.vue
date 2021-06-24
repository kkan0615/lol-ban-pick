<template>
  <select
    id="lol-versions"
    v-model="versionInput"
    name="lol-versions"
    @change="onChangeVersionPicker"
  >
    <option
      v-for="version in versions"
      :key="version"
      :value="version"
    >
      {{ version }}
    </option>
  </select>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import useStore from '@/store'
import { ApplicationActionTypes } from '@/store/modules/application/actions'
import { DEFAULT_LOL_VERSION } from '@/types/model/lol'

export default defineComponent({
  name: 'VersionPicker',
  setup () {
    const store = useStore()

    const currentVersion = computed(() => store.state.application.lolVersion)
    const versions = computed(() => store.state.commonCode.lolVersions)

    const versionInput = ref(currentVersion.value || DEFAULT_LOL_VERSION)

    const onChangeVersionPicker = async () => {
      await store.dispatch(ApplicationActionTypes.SET_LOL_VERSION, versionInput.value)
      /* To reload all images again */
      location.reload()
    }

    return {
      versionInput,
      currentVersion,
      versions,
      onChangeVersionPicker,
    }
  }
})
</script>
