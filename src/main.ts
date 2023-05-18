/*
 * @Author: ZhouKaiBai
 * @Date: 2023-04-06 15:22:36
 * @LastEditTime: 2023-05-18 16:05:48
 * @LastEditors: ZhouKaiBai
 * @Description: 
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')