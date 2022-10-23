<template>
  <button
    class="use-dark-btn"
    @click="onClickToggleDarkBtn"
  >
    <!-- Dark mode -->
    <q-icon
      v-if="isDark"
      name="dark_mode"
    />
    <!-- Light mode -->
    <q-icon
      v-else
      name="light_mode"
    />
  </button>
</template>
<script lang="ts">
export default {
  name: 'UseDarkBtn',
}
</script>
<script setup lang="ts">
import { useDarkOption } from '@/types/system'
import { useQuasar } from 'quasar'

const q = useQuasar()
const mode = useColorMode({
  modes: {
    dark: 'tw-dark',
    light: 'tw-light',
  }
})

const onClickToggleDarkBtn = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
  q.dark.toggle()
}
</script>
<style
  scoped
  lang="scss"
>
.use-dark-btn {
  @apply tw-inline-flex;

  span {
    transition: background 0.3s linear;
    @apply dark:tw-text-background-text-dark hover:tw-text-gray-500;
  }
}
</style>
