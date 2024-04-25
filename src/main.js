import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createMemoryHistory, createRouter } from 'vue-router'

import('./assets/css/style.css')

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import NotFund from './views/NotFund.vue'

const routes = [
  {path: '/', component: HomeView},
  {path: '/about', component: AboutView},
  {path: '/contact', component: ContactView},
  {path: '/*', component: NotFund},
]

const router = createRouter({
  history: createMemoryHistory(), 
  routes,
})

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
