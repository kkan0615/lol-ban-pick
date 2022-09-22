<template>
  <div>
    <div>
      {{ version }}
    </div>
    <div>
      {{ language }}
    </div>
    <div>
      {{ Object.values(championList).map(champion => champion.name) }}
    </div>
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
import useLolStore from '@/store/modules/lol'
import { storeToRefs } from 'pinia'

const route = useRoute()
const lolStore = useLolStore()
const { version, language, championList } = storeToRefs(lolStore)

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

/* Created */
_openChannel()

onBeforeUnmount(() => {
  _destroyChannel()
})
</script>
