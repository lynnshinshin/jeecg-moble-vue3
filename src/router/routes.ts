/*
 * @Author: ZhouKaiBai
 * @Date: 2023-05-16 14:27:05
 * @LastEditTime: 2023-05-23 18:23:32
 * @LastEditors: ZhouKaiBai
 * @Description: 
 */
import type { RouteRecordRaw } from 'vue-router'

export const whiteList: string[] = ['/login']
export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login', },
  { path: '/login', component: () => import('@/views/login/Login.vue'), name: 'Login' },
  { path: '/home', component: () => import('@/views/home/home.vue'), name: 'Home' },
]