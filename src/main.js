import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faXmark, faCheck} from '@fortawesome/free-solid-svg-icons'

library.add(faXmark, faCheck)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

const pinia = createPinia()

app.use(pinia);

app.mount('#app')
