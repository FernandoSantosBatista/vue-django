import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from "axios";

axios.defaults.baseURL = "django-rest-knox.up.railway.app";


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
