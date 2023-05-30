/*
 * @Author: ZhouKaiBai
 * @Date: 2023-04-06 15:22:35
 * @LastEditTime: 2023-05-30 15:22:58
 * @LastEditors: ZhouKaiBai
 * @Description: 
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 配置vite自动引入，减少打包大小(此处主要针对ElementPlus) zhou
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver(), VantResolver({
        importStyle: false // 解决toast样式无效问题，改为动态全局引入
      })],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.ts', '.vue'] // 为了引入时不用写.vue后缀 zhou
  },
})
