import { createApp } from 'vue'
import App from './App.vue'
/* Pinia */
import pinia from '@/store'
/* Router */
import router from '@/router'
/* Add Global styles */
import '@/styles/index.scss'
/* I18n */
import i18n from '@/locales'
/* Head */
import { createHead } from '@vueuse/head'
const head = createHead()
/* quasar */
import { Quasar } from 'quasar'
// Material icon
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

const app = createApp(App)
app.use(i18n)
app.use(pinia)
app.use(router)
app.use(head)
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
app.mount('#app')
