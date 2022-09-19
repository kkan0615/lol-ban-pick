<template>
  <div>
    ExampleIndex
    <div>
      <RouterLink
        :to="{
          name: 'ExamplePinia'
        }"
      >
        Pinia Example page
      </RouterLink>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ExampleIndex',
}
</script>
<script setup lang="ts">
</script>
