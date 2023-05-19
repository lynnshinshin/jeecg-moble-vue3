<!--
 * @Author: ZhouKaiBai
 * @Date: 2023-05-19 10:31:50
 * @LastEditTime: 2023-05-19 18:43:40
 * @LastEditors: ZhouKaiBai
 * @Description: 
-->
<template>
  <el-switch inline-prompt :active-icon="MoonNight" :inactive-icon="Sunny" v-model="isDark"/>
</template>

<script setup lang="ts">
import { Sunny, MoonNight } from '@element-plus/icons-vue'
import { setTheme, THEME } from '@/utils/system'
import { ref, watchEffect } from 'vue'
let isDark = ref(localStorage.getItem('theme') === THEME.dark ? true : false)
watchEffect(() => {
  const theme = isDark.value ? THEME.dark : THEME.light
  setTheme(theme)
})
// document.documentElement.setAttribute('data-theme', 'dark')
// document.documentElement.classList.toggle('dark')
// el.style.setProperty('--el-color-primary', 'red')
</script>

<style scoped>

</style>