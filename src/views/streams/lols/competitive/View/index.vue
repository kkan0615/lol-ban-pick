<template>
  <div
    class="page-container"
  >
    <!-- Header -->
    <StreamLolCompetitiveViewHeader />
    <!-- content -->
    <div
      class="view-content"
    >
      <div
        class="view-content-team"
      >
        <div>
          {{ blueTeamPickList.map((champion) => champion.champion.name) }}
        </div>
      </div>
      <div
        class="view-content-team"
      >
        center
      </div>
      <div
        class="view-content-team"
      >
        <div>
          {{ redTeamPickList.map((champion) => champion.champion.name) }}
        </div>
      </div>
    </div>
    <!-- Bottom -->
    <div
      class="view-bottom"
    >
      <div
        class="view-bottom-team"
      >
        <LolBanList
          :ban-list="blueTeamBanList"
          :version="version"
        />
      </div>
      <div
        class="view-bottom-team"
      >
        center
      </div>
      <div
        class="view-bottom-team"
      >
        <LolBanList
          :ban-list="redTeamBanList"
          :version="version"
          :is-red="true"
        />
      </div>
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
import { LolStreamChannelKey, LolStreamSettingTeam } from '@/types/models/lols/stream'
import { LolChampionBanPick } from '@/types/models/lols/champion'
import { storeToRefs } from 'pinia'
import LolBanList from '@/components/lols/BanList/index.vue'
import useLolStore from '@/store/modules/lol'

const route = useRoute()
const streamStore = useLolCompetitiveStreamStore()
const lolStore = useLolStore()

const { version } = storeToRefs(lolStore)
const { blueTeamPickList, redTeamPickList, blueTeamBanList, redTeamBanList } = storeToRefs(streamStore)
const broadcastChannel = ref<BroadcastChannel | null>(null)

const _openChannel = () => {
  const { channel } = route.query
  if (channel) {
    broadcastChannel.value = new BroadcastChannel(channel as string)
    broadcastChannel.value.addEventListener('message', (event) => {
      const { key, data } = event.data as { key: LolStreamChannelKey, data: any }
      switch (key) {
        case LolStreamChannelKey.START_GAME: {
          const parsedData = JSON.parse(data) as { blueTeam: LolStreamSettingTeam, redTeam: LolStreamSettingTeam }
          streamStore.setBlueTeam(parsedData.blueTeam)
          streamStore.setRedTeam(parsedData.redTeam)
          streamStore.startGame()
          break
        }
        case LolStreamChannelKey.PAUSE_GAME:
          streamStore.pauseGame()
          break
        case LolStreamChannelKey.CONTINUE_GAME:
          streamStore.continueGame()
          break
        case LolStreamChannelKey.RESET_GAME:
          streamStore.resetGame()
          break
        case LolStreamChannelKey.PREV_STEP:
          streamStore.prevStep()
          break
        case LolStreamChannelKey.NEXT_STEP:
          streamStore.nextStep((JSON.parse(data) as LolChampionBanPick).champion)
          break
      }
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
