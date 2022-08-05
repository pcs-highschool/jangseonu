import { createApp } from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: App },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = Vue.createApp({})
app.use(router)

createApp(App).mount('#app')
