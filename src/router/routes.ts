/*
 * @Author: ZhouKaiBai
 * @Date: 2023-05-16 14:27:05
 * @LastEditTime: 2023-05-18 16:27:02
 * @LastEditors: ZhouKaiBai
 * @Description: 
 */
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/',
    redirect: '/login',
    children: [
      { path: '/login', component: () => import('@/views/login/Login.vue') },
      { path: '/home', component: () => import('@/views/home/home.vue') },
      { path: '/about', component: () => import('@/views/about/about.vue') },
      { path: '/study', component: () => import('@/views/study/element.vue') },
    ]
  },
]

export default routes