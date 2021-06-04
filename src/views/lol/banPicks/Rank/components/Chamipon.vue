<template>
  <img
    class="cursor-pointer"
    :class="{
      'ring-4': selected,
    }"
    :src="imageSrc"
    :alt="championProp.name"
  >
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { LolChampion } from '@/interfaces/model/lol/Champion'

export default defineComponent({
  name: 'ChampionRankBankPickLol',
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
    }
  },
  setup (props) {
    const championProp = props.champion as LolChampion


    const imageSrc = computed(() => `http://ddragon.leagueoflegends.com/cdn/${championProp.version}/img/champion/${championProp.image.full}`)

    return {
      championProp,
      imageSrc,
    }
  }
})
</script>
