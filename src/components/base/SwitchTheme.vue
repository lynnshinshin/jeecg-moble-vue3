<!--
 * @Author: ZhouKaiBai
 * @Date: 2023-05-19 10:31:50
 * @LastEditTime: 2023-05-26 17:33:40
 * @LastEditors: ZhouKaiBai
 * @Description: 
-->
<template>
  <el-switch inline-prompt :active-icon="MoonNight" :inactive-icon="Sunny" v-model="isDark"/>
</template>

<script setup lang="ts">
import { Sunny, MoonNight } from '@element-plus/icons-vue'
import { ref, watchEffect } from 'vue'
import {useSystemStore} from '@/stores'
import { Theme } from '@/types/system'
const useSystem = useSystemStore()
let isDark = ref(useSystem.theme === Theme.dark)
console.log(isDark.value);

watchEffect(() => {
  const theme = isDark.value ? Theme.dark : Theme.light
  useSystem.setTheme(theme) // 保存到vuex和本地
})
// document.documentElement.setAttribute('data-theme', 'dark')
// document.documentElement.classList.toggle('dark')
// el.style.setProperty('--el-color-primary', 'red')
</script>

<style scoped>

</style>