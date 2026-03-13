import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/Index/Index.vue'
import Identification from '../pages/Identification/Identification.vue'
import Map from '../pages/Map/Map.vue'
import Health from '../pages/Health/Health.vue'
import Interaction from '../pages/Interaction/Interaction.vue'

const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/identification', name: 'Identification', component: Identification },
  { path: '/map', name: 'Map', component: Map },
  { path: '/health', name: 'Health', component: Health },
  { path: '/interaction', name: 'Interaction', component: Interaction }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router