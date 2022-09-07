<template>
  <div>
    <RouterView />
    <div
      class="footer page-content"
    >
      <UseDarkBtn />
      <TranslateBtn />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'HomeLayout',
}
</script>
<script setup lang="ts">
import UseDarkBtn from '@/components/buttons/UseDark/index.vue'
import TranslateBtn from '@/components/buttons/Translation/index.vue'
</script>
<style
  scoped
  lang="scss"
>
@import "./index";
</style>
