<template>
  <div
    class="page-container"
  >
    <StreamLolCompetitiveViewHeader />
    <div>
      view
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'StreamLolCompetitiveView',
}
</script>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import StreamLolCompetitiveViewHeader from '@/views/streams/lols/competitive/View/components/Header.vue'
import useLolCompetitiveStreamStore from '@/store/modules/lolCompetitiveStream'

const route = useRoute()
const streamStore = useLolCompetitiveStreamStore()

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

/* Created */
_openChannel()
streamStore.resetTimer()

onBeforeUnmount(() => {
  _destroyChannel()
  streamStore.clearTimer()
})
</script>
<style
  lang="scss"
>
@import "./index.scss";
</style>
