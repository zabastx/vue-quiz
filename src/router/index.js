import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: to => {
      return {
        path: '/',
        name: 'Home',
        component: Home
      }
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import(/* webpackChunkName: "activity" */ '../views/Activity.vue')
  },
  {
    path: '/goals',
    name: 'Goals',
    component: () => import(/* webpackChunkName: "goals" */ '../views/Goals.vue')
  },
  {
    path: '/metrics',
    name: 'Metrics',
    component: () => import(/* webpackChunkName: "metrics" */ '../views/Metrics.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import(/* webpackChunkName: "info" */ '../views/Info.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/results',
    name: 'Results',
    component: () => import(/* webpackChunkName: 'results' */'../views/Results.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
