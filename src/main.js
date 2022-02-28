import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import config from './config'

const http = axios.create({
  baseURL: config.server,
  headers: {
    'Content-Type': 'application/json'
  }
})

const app = createApp(App)
app.use(VueAxios, http)
app.mount('#app')