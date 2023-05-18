/*
 * @Author: ZhouKaiBai
 * @Date: 2023-05-18 15:04:44
 * @LastEditTime: 2023-05-18 15:27:39
 * @LastEditors: ZhouKaiBai
 * @Description: 
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}