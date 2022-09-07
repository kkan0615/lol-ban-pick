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
      <div
        class="home-container-button-container"
      >
        <a
          id="github-link"
          target="_blank"
          href="https://github.com/kkan0615/vue3-lightweight-boilerplate"
        >
          <button
            class="github-btn"
          >
            <github-icon
              class="tw-w-4"
            />
            <span>
              github
            </span>
          </button>
        </a>
      </div>
      <!-- Electron version link -->
      <a
        target="_blank"
        href="https://github.com/kkan0615/vue3-typescript-electron-boilerplate"
        class="electron-link tw-mt-3"
      >
        <span>
          Electron version
        </span>
        <span class="material-symbols-outlined">
          arrow_forward
        </span>
      </a>
    </div>

    <!-- Feature -->
    <div
      class="page-content"
    >
      <h6
        class="dark:tw-text-gray-400 tw-text-gray-600 tw-mb-2 tw-capitalize"
      >
        {{ i18n.t('Types.Models.Views.Features.title') }}
      </h6>
      <div
        class="tw-grid tw-grid-cols-2 tw-gap-8"
      >
        <FeatureCard
          v-for="feature in featureList"
          :key="feature.id"
        >
          <FeatureCardIcon>
            {{ feature.icon }}
          </FeatureCardIcon>
          <FeatureCardItem>
            <FeatureCardHeader>
              {{ feature.title }}
            </FeatureCardHeader>
            <FeatureCardBody>
              {{ feature.content }}
            </FeatureCardBody>
          </FeatureCardItem>
        </FeatureCard>
      </div>
    </div>
    <!-- Example links -->
    <div
      class="page-content tw-mt-8"
    >
      <h6
        class="dark:tw-text-gray-400 tw-text-gray-600 tw-mb-2 tw-capitalize"
      >
        {{ i18n.t('Types.Models.Views.Examples.title') }}
      </h6>
      <div
        class="tw-flex tw-space-x-4"
      >
        <!-- Pinia example link -->
        <div
          class="example-link"
        >
          <RouterLink :to="{ name: 'ExamplePinia' }">
            {{ i18n.t('Types.Models.Views.Examples.Links.pinia') }}
          </RouterLink>
        </div>
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

