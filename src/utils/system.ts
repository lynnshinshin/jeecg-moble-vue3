/*
 * @Author: ZhouKaiBai
 * @Date: 2023-05-19 18:25:59
 * @LastEditTime: 2023-05-23 17:10:48
 * @LastEditors: ZhouKaiBai
 * @Description: 系统工具类
 */
import { showToast, showSuccessToast, showFailToast, setToastDefaultOptions } from 'vant'
import { ElMessage } from 'element-plus'
enum Theme {
  light = 'light',
  dark = 'dark'
}
/**
 * @description: 切换主题
 * @param {Theme} theme
 * @return {*}
 * @author: ZhouKaiBai
 */
function setTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.classList.remove(Theme.dark, Theme.light)
  document.documentElement.classList.add(theme)
  localStorage.setItem('theme', theme)
}
/**
 * @description: 恢复设置的主题或查询到系统主题
 * @return {*}
 * @author: ZhouKaiBai
 */
function restoreTheme(): void {
  let theme: Theme
  // 检测暗黑模式
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  // 判断当前是否匹配暗黑模式
  const mediaTheme = darkModeMediaQuery.matches ? Theme.dark : Theme.light
  theme = localStorage.getItem('theme') as Theme || mediaTheme
  theme && setTheme(theme as Theme)
}

/**
 * @description: 判断是否为移动设备
 * @return {boolean} 
 * @author: ZhouKaiBai
 */
function isMobileDevice(): boolean {
  const userAgent = navigator.userAgent;
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(userAgent);
}

setToastDefaultOptions({
  forbidClick: true,
})
type MESSAGE_TYPE = 'success' | 'warning' | 'info' | 'error'
interface MESSAGE {
  type: MESSAGE_TYPE,
  message: string
}
/**
 * @description: 封装$message，移动端使用vant,pc端使用element
 * @param {MESSAGE} options
 * @return {*}
 * @author: ZhouKaiBai
 */
function $message(options: MESSAGE):void {
  const isMobile = isMobileDevice()
  if(!isMobile) {
    ElMessage(options)
    return
  } else {
    options.type === 'info' && showToast(options.message)
    options.type === 'success' && showSuccessToast(options.message)
    options.type === 'warning' || options.type === 'error' && showFailToast(options.message)
  }
}
/**
 * @description: 动态加载移动端的css
 * @return {*}
 * @author: ZhouKaiBai
 */
function loadCSSOnMobile() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL('../assets/css/mobile.css', import.meta.url).href;
    document.head.appendChild(link);
  }
}

export { Theme, setTheme, restoreTheme, isMobileDevice, $message, loadCSSOnMobile }