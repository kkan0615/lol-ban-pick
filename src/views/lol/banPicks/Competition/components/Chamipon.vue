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
import { LolChampion } from '@/types/model/lol/Champion'
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

    const championProp = computed(() => props.champion as LolChampion)

    const imageSrc = computed(() => `http://ddragon.leagueoflegends.com/cdn/${championProp.value.version}/img/champion/${championProp.value.image.full}`)
    const disabled = computed(() =>
      store.state.lolCompetitionBan.blueTeamBans.findIndex(ban => ban.key === championProp.value.key) >= 0
      || store.state.lolCompetitionBan.redTeamBans.findIndex(ban => ban.key === championProp.value.key) >= 0
      || store.state.lolCompetitionBan.blueTeamPicks.findIndex(ban => ban.key === championProp.value.key) >= 0
      || store.state.lolCompetitionBan.redTeamPicks.findIndex(ban => ban.key === championProp.value.key) >= 0
    )

    const onClickChampion = () => {
      if (!disabled.value)
        emit('click:champion', championProp.value)
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
