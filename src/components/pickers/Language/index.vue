<template>
  <select
    id="lol-versions"
    v-model="languageInput"
    name="lol-versions"
    @change="onChangeVersionPicker"
  >
    <option
      v-for="language in languages"
      :key="language"
      :value="language"
    >
      {{ language }}
    </option>
  </select>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import useStore from '@/store'
import { ApplicationActionTypes } from '@/store/modules/application/actions'
import { DEFAULT_LOL_VERSION, LolLanguagesEnum } from '@/interfaces/model/lol'

export default defineComponent({
  name: 'LolLanguagePicker',
  setup () {
    const store = useStore()

    const currentLanguage = computed(() => store.state.application.lolLanguage)
    const languages = computed(() => Object.values(LolLanguagesEnum) as Array<LolLanguagesEnum>)

    const languageInput = ref(currentLanguage.value || DEFAULT_LOL_VERSION)

    const onChangeVersionPicker = async () => {
      await store.dispatch(ApplicationActionTypes.SET_LOL_LANGUAGE, languageInput.value)
      /* To reload all images again */
      location.reload()
    }

    return {
      languageInput,
      currentLanguage,
      languages,
      onChangeVersionPicker,
    }
  }
})
</script>
