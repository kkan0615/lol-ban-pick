<template>
  <button
    class="use-dark-btn"
    @click="onClickToggleDarkBtn"
  >
    <!-- Dark mode -->
    <span
      v-if="isDark"
      class="material-symbols-outlined"
    >
      dark_mode
    </span>
    <!-- Light mode -->
    <span
      v-else
      class="material-symbols-outlined"
    >
      light_mode
    </span>
  </button>
</template>
<script lang="ts">
export default {
  name: 'UseDarkBtn',
}
</script>
<script setup lang="ts">
import { useDarkOption } from '@/types/system'

const isDark = useDark(useDarkOption)
const toggleDark = useToggle(isDark)

const onClickToggleDarkBtn = () => {
  toggleDark()
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
