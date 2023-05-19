/*
 * @Author: ZhouKaiBai
 * @Date: 2023-04-06 15:22:36
 * @LastEditTime: 2023-05-19 19:24:22
 * @LastEditors: ZhouKaiBai
 * @Description: 
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'
import './assets/css/main.css'
import { restoreTheme } from '@/utils/system'
restoreTheme()

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')