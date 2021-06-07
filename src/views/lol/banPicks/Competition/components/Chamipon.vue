<template>
  <img
    :class="{
      'cursor-pointer': !disabled,
      'cursor-not-allowed': disabled,
      'filter-grayscale': disabled,
      'ring-4': selected,
    }"
    :src="imageSrc"
    :alt="championProp.name"
    @click="onClickChampion"
  >
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from 'vue'
import { LolChampion } from '@/interfaces/model/lol/Champion'
import useStore from '@/store'

export default defineComponent({
  name: 'ChampionCompetitionBankPickLol',
  props: {
    champion: {
      type: Object,
      required: false,
      default: () => {
        return {} as LolChampion
      },
    },
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup (props) {
    const store = useStore()
    const { emit } = useContext()

    const championProp = props.champion as LolChampion

    const imageSrc = computed(() => `http://ddragon.leagueoflegends.com/cdn/${championProp.version}/img/champion/${championProp.image.full}`)
    const disabled = computed(() => store.state.lolRankBan.blueTeamBans.findIndex(ban => ban.key === championProp.key) >= 0
        || store.state.lolRankBan.redTeamBans.findIndex(ban => ban.key === championProp.key) >= 0
        || store.state.lolRankBan.blueTeamPicks.findIndex(ban => ban.key === championProp.key) >= 0
        || store.state.lolRankBan.redTeamPicks.findIndex(ban => ban.key === championProp.key) >= 0
    )

    const onClickChampion = () => {
      if (!disabled.value)
        emit('click:champion', championProp)
    }

    return {
      championProp,
      imageSrc,
      disabled,
      onClickChampion,
    }
  }
})
</script>
