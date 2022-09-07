<template>
  <div
    class="example-layout"
  >
    <div
      class="page-content tw-text-center tw-mb-4"
    >
      <RouterLink :to="{ name: 'HomeIndex' }">
        <div
          class="example-layout-link"
        >
          <span class="material-symbols-outlined">
            home
          </span>
          <div>
            Home
          </div>
        </div>
      </RouterLink>
    </div>
    <RouterView />
  </div>
</template>
<script lang="ts">
export default {
  name: 'ExampleLayout',
}
</script>
<script setup lang="ts">
</script>
<style
  lang="scss"
  scoped
>
@import "./index.scss";
</style>
