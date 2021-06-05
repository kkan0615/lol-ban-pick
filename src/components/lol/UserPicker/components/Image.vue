<template>
  <img
    v-if="champion.key"
    class="rounded-full w-16 h-16 ring"
    :class="{
      [`ring-${ringColor}-300`]: true,
    }"
    :src="imageSrc"
    :alt="banProp.name"
  >
  <div
    v-else
    class="w-16 h-16 ring bg-gray-500"
    :class="{
      [`ring-${ringColor}-300`]: true,
    }"
  />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { LolChampion } from '@/interfaces/model/lol/Champion'

export default defineComponent({
  name: 'LolUserPickerImage',
  props: {
    champion: {
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

    const imageSrc = computed(() => `http://ddragon.leagueoflegends.com/cdn/${props.champion.version}/img/champion/${props.champion.image.full}`)

    return {
      banProp,
      imageSrc
    }
  }
})
</script>
