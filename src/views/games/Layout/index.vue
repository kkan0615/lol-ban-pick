<template>
  <Suspense>
    <RouterView />
    <template
      #fallback
    >
      loading...
    </template>
  </Suspense>
</template>
<script lang="ts">
export default {
  name: 'GameLayout',
}
</script>
<script setup lang="ts">
</script>

