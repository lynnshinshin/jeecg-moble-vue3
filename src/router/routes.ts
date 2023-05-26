/*
 * @Author: ZhouKaiBai
 * @Date: 2023-05-16 14:27:05
 * @LastEditTime: 2023-05-26 10:54:59
 * @LastEditors: ZhouKaiBai
 * @Description: 
 */
import type { RouteRecordRaw } from 'vue-router'

export const whiteList: string[] = ['/login', '/study']
export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login', },
  { path: '/login', component: () => import('@/views/login/Login.vue'), name: 'Login' },
  { path: '/home', component: () => import('@/views/home/home.vue'), name: 'Home' },
  { path: '/study', component: () => import('@/views/study/charts.vue'), name: 'Study' },
]