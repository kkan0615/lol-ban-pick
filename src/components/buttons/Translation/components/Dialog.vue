<template>
  <div
    class="translate-btn-dialog"
  >
    <div
      class="translate-btn-dialog-header"
    >
      <h6>
        header name
      </h6>
      <button
        class="tw-ml-auto"
        @click="closeModal"
      >
        <span
          class="material-symbols-outlined"
        >
          close
        </span>
      </button>
    </div>
    <div
      class="translate-btn-dialog-body"
    >
      <ul
        class="translate-btn-dialog-body-list"
      >
        <li
          v-for="supportedLang in supportedLangList"
          :key="supportedLang"
          class="translate-btn-dialog-body-list-item"
          :class="{
            'translate-btn-dialog-body-list-item--active': lang === supportedLang,
          }"
          @click="changeLocale(supportedLang)"
        >
          {{ supportedLang }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'TranslateBtnDialog',
}
</script>
<script setup lang="ts">
import { SupportedLang, supportedLangList } from '@/types/system'
import useSettingStore from '@/store/modules/setting'
import { storeToRefs } from 'pinia'

const settingStore = useSettingStore()
const { lang } = storeToRefs(settingStore)

const emits = defineEmits(['close'])

const closeModal = () => {
  emits('close')
}

const changeLocale = (lang: SupportedLang | 'preference') => {
  settingStore.setLang(lang)
}

</script>
<style
    lang="scss"
    scoped
>
@import "./dialog.scss";
</style>
