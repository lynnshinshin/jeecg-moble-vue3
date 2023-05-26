/*
 * @Author: ZhouKaiBai
 * @Date: 2023-05-18 15:04:44
 * @LastEditTime: 2023-05-26 14:41:25
 * @LastEditors: ZhouKaiBai
 * @Description: declare 关键字用于声明全局变量、全局函数和全局类型。
 * 它告诉 TypeScript 编译器这些标识符已经在外部环境中定义过了，不需要进行类型检查和编译。
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}