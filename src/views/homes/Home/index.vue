<template>
  <div
    class="home-container"
  >
    <div
      class="home-container-content page-content"
    >
      <!-- Logo -->
      <div
        class="home-container-content__logo"
      >
        <img
          src="@/assets/logo.png"
          alt="logo"
        >
      </div>
      <h6>
        {{ i18n.t('Views.Home.projectName') }} {{ i18n.t('hello') }}
      </h6>
    </div>
    <div>
      <div>
        <RouterLink :to="{ name: 'LolCompetitive' }">
          league of legends competitive
        </RouterLink>
      </div>
      <div>
        <RouterLink :to="{ name: 'StreamLolCompetitiveLayout', query: { channel: 'test-channel' } }">
          Stream - league of legends competitive
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'HomeIndex',
}
</script>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import { featureList } from '@/types/models/views/feature'
import GithubIcon from '@/components/icons/Github.vue'
import FeatureCard from '@/views/homes/Home/components/FeatureCard.vue'
import FeatureCardIcon from '@/views/homes/Home/components/FeatureCardIcon.vue'
import FeatureCardItem from '@/views/homes/Home/components/FeatureCardItem.vue'
import FeatureCardHeader from '@/views/homes/Home/components/FeatureCardHeader.vue'
import FeatureCardBody from '@/views/homes/Home/components/FeatureCardBody.vue'

const i18n = useI18n()

/* Change head */
useHead({
  // Can be static or computed
  title: 'Vite app - Home',
  meta: [
    {
      name: 'description',
      content: 'Home page at Vite app',
    },
  ],
})

</script>
<style
  lang="scss"
>
@import "./index.scss";
</style>

