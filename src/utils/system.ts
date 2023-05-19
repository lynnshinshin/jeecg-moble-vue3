/*
 * @Author: ZhouKaiBai
 * @Date: 2023-05-19 18:25:59
 * @LastEditTime: 2023-05-19 18:40:28
 * @LastEditors: ZhouKaiBai
 * @Description: 系统工具类
 */
 export enum THEME {
  light = 'light',
  dark = 'dark'
}
/**
 * @description: 切换主题
 * @param {THEME} theme
 * @return {*}
 * @author: ZhouKaiBai
 */
export function setTheme(theme: THEME) {
  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.classList.toggle(theme)
  localStorage.setItem('theme', theme)
  console.log(localStorage.getItem('theme'));
}
/**
 * @description: 恢复设置的主题
 * @return {*}
 * @author: ZhouKaiBai
 */
export function restoreTheme(): void {
  console.log(localStorage.getItem('theme'));
  const theme = localStorage.getItem('theme')
  theme && setTheme(theme as THEME)
}