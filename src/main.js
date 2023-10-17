import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faXmark, faCheck, faArrowRotateRight, faGear, faBackwardStep, faForwardStep, faPlay, faPause} from '@fortawesome/free-solid-svg-icons'

library.add(faXmark, faCheck, faArrowRotateRight, faGear, faBackwardStep, faForwardStep, faPlay, faPause)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

const pinia = createPinia()

app.use(pinia);

app.mount('#app')
