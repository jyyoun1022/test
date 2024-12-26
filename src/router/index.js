import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/HomeView.vue";
const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, /* posts 경로 추가 : start */
    {
      path: '/posts',
      name: 'posts',
      component: () => import('@/components/PostsView.vue')
    }, /* posts 경로 추가 : end */
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  export default router