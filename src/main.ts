/*
 * @Author: ZhouKaiBai
 * @Date: 2023-04-06 15:22:36
 * @LastEditTime: 2023-05-30 14:06:52
 * @LastEditors: ZhouKaiBai
 * @Description: 
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'
import 'amfe-flexible/index.js'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/assets/css/main.scss'
import '@/utils/installEcharts'
import { restoreTheme, isMobileDevice, $message, loadCSSOnMobile } from '@/utils/system'
import installELIcon from '@/utils/installELIcon'
restoreTheme() // 重设主题
loadCSSOnMobile() // 动态加载移动端css
const app = createApp(App)
app.config.globalProperties.isMobile = isMobileDevice()
app.config.globalProperties.$message = $message
app.use(createPinia())
app.use(router)
app.use(installELIcon)
app.mount('#app')