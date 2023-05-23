import { createRouter, createWebHistory  } from 'vue-router'
import { routes } from './routes'
import beforeEachCallback from './permission'
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(beforeEachCallback(router))
export default router