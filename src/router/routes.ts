/*
 * @Author: ZhouKaiBai
 * @Date: 2023-05-16 14:27:05
 * @LastEditTime: 2023-05-16 15:24:52
 * @LastEditors: ZhouKaiBai
 * @Description: 路由列表
 */
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('@/views/home/home')},
  { path: '/about', component: () => import('@/views/about/about')},
]

export default routes