<template>
  <button
    @click="onClickOpen"
  >
    <span class="material-symbols-outlined">
      translate
    </span>
  </button>
  <Teleport to="body">
    <TranslateBtnDialog
      v-if="isOpen"
      @close="handleClose"
    />
  </Teleport>
</template>
<script lang="ts">
export default {
  name: 'TranslateBtn',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import TranslateBtnDialog from '@/components/buttons/Translation/components/Dialog.vue'

const isOpen = ref(false)

const onClickOpen = () => {
  isOpen.value = true
}

const handleClose = () => {
  isOpen.value = false
}

</script>
<style
    lang="scss"
    scoped
>

</style>
