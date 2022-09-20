<template>
  <div>
    StreamLolCompetitive Controller
  </div>
</template>
<script lang="ts">
export default {
  name: 'StreamLolCompetitiveController',
}
</script>
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const broadcastChannel = ref<BroadcastChannel | null>(null)

const _openChannel = () => {
  const { channel } = route.query
  if (channel) {
    broadcastChannel.value = new BroadcastChannel(channel as string)
    setTimeout(() => {
      broadcastChannel.value?.postMessage({ key: 'test', data: 'test' })
    }, 1000)
  }
}

const _destroyChannel = () => {
  if (broadcastChannel.value) {
    broadcastChannel.value.close()
    broadcastChannel.value = null
  }
}

_openChannel()

onBeforeUnmount(() => {
  _destroyChannel()
})

</script>

