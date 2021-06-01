<template>
  <div>
    Home
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  setup () {
    const router = useRouter()

    const onClickTest = () => {
      router.push({ name: 'Playground' })
    }

    return {
      onClickTest,
    }
  }
})
</script>
