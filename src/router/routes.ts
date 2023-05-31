/*
 * @Author: ZhouKaiBai
 * @Date: 2023-05-16 14:27:05
 * @LastEditTime: 2023-05-31 19:17:56
 * @LastEditors: ZhouKaiBai
 * @Description: 
 */
import type { RouteRecordRaw } from 'vue-router'

export const whiteList: string[] = ['/login', '/study', '/sub/*']
export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login', },
  // { path: '/sub/:page*', component: () => import('@/micro-app/SubApp.vue'), name: 'Sub' },
  { path: '/login', component: () => import('@/views/login/Login.vue'), name: 'Login' },
  { path: '/home', redirect: '/home/sub', component: () => import('@/views/home/home.vue'), name: 'Home',
    children: [{ path: 'sub', component: () => import('@/micro-app/SubApp.vue'), name: 'Sub' }]
  },
  { path: '/study', component: () => import('@/views/study/WebComp.vue'), name: 'Study' },
]