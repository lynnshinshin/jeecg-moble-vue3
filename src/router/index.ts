/*
 * @Author: ZhouKaiBai
 * @Date: 2023-05-16 11:50:48
 * @LastEditTime: 2023-05-31 15:13:46
 * @LastEditors: ZhouKaiBai
 * @Description: 
 */
import { createRouter, createWebHistory  } from 'vue-router'
import { routes } from './routes'
import beforeEachCallback from './permission'
const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach(beforeEachCallback(router))
export default router