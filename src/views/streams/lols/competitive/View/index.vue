<template>
  <div>
    StreamLolCompetitive View
  </div>
</template>
<script lang="ts">
export default {
  name: 'StreamLolCompetitiveView',
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
    broadcastChannel.value.addEventListener('message', (event) => {
      console.log(event.data)
    })
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

