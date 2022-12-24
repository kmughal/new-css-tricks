import { createRouter, createWebHistory } from 'vue-router'
import CssLayers from '../views/CssLayers.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CssLayers',
      component: CssLayers
    },
    {
      path: '/snap-scroll',
      name: 'ScrollSnap',
      component: () => import('../views/SnapScroll.vue')
    },
    {
      path: '/stop-parent-scroll',
      name: 'StopParentScroll',
      component: () => import('../views/StopParentScroll.vue')
    }
  ]
})

export default router
