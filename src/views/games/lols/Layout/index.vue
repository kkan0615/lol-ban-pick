<template>
  <RouterView />
</template>
<script lang="ts">
export default {
  name: 'LolLayout',
}
</script>
<script setup lang="ts">
import { useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const _openViewAndController = async () => {
  const { channel } = route.query
  // Open view
  const viewRoute = router.resolve({ name: 'StreamLolCompetitiveView', query: { channel } })
  window.open(viewRoute.href, '_blank')
  // Redirect to controller
  await router.replace({ name: 'StreamLolCompetitiveController', query: { channel } })
}

if (route.name === 'StreamLolCompetitiveLayout') {
  _openViewAndController()
}
</script>
