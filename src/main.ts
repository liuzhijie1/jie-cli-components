import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Lego from './index'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Lego)

app.mount('#app')
