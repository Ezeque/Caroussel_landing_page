import { createApp } from 'vue'
import App from './App.vue'

/* Splide */
import VueSplide from '@splidejs/vue-splide';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App).use(VueSplide).use(vuetify).mount('#app')
