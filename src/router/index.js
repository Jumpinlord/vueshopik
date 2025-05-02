import { createRouter, createWebHistory } from 'vue-router'
import home from './routes/home.js'
import cart from './routes/cart.js'
import favorites from './routes/favorites.js'
import product from './routes/product.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...home,
    ...favorites,
    ...cart,
    ...product,
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/notFound/NotFound.vue'),
    },
  ],
})

export default router
