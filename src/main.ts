/*
 * @Author: ZhouKaiBai
 * @Date: 2023-04-06 15:22:36
 * @LastEditTime: 2023-05-23 10:40:34
 * @LastEditors: ZhouKaiBai
 * @Description: 
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'
import './assets/css/main.css'
import { restoreTheme, isMobileDevice, $message, loadCSSOnMobile } from '@/utils/system'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
restoreTheme() // 重设主题
loadCSSOnMobile() // 动态加载移动端css
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) { // 注册图标
  app.component(key, component)
}
app.config.globalProperties.isMobile = isMobileDevice()
app.config.globalProperties.$message = $message
app.use(createPinia())
app.use(router)
app.mount('#app')