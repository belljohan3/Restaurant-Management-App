import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// Import your components for routing
import HomeView from '@/pages/HomeView.vue'
import LoginView from '@/pages/LoginView.vue'
import SignupView from '@/pages/SignupView.vue'
import AddRestauView from '@/pages/AddRestauView.vue'
import EditRestauView from '@/pages/EditRestauView.vue'

// Define your routes
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LoginView,
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignupView,
  },
  {
    path: '/add-restaurant',
    name: 'AddRestaurant',
    component: AddRestauView,
  },
  {
    path: '/edit-restaurant/:id',
    name: 'EditRestaurant',
    component: EditRestauView,
  },
]

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
