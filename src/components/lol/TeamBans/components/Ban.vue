<template>
  <img
    v-if="ban.key"
    class="w-10 h-10 ring"
    :class="{
      [`ring-${ringColor}-300`]: true,
    }"
    :src="imageSrc"
    :alt="banProp.name"
  >
  <div
    v-else
    class="w-10 h-10 ring bg-gray-500"
    :class="{
      [`ring-${ringColor}-300`]: true,
    }"
  />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { LolChampion } from '@/interfaces/model/lol/Champion'

export default defineComponent({
  name: 'LolTeamBansBan',
  props: {
    ban: {
      type: Object,
      required: false,
      default: () => {},
    },
    ringColor: {
      type: String,
      required: true,
      default: '',
    }
  },
  setup (props) {
    const banProp = ref(props.ban as LolChampion)

    const imageSrc = computed(() => `http://ddragon.leagueoflegends.com/cdn/${props.ban.version}/img/champion/${props.ban.image.full}`)

    return {
      banProp,
      imageSrc
    }
  }
})
</script>
