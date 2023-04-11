<!--
 * @Author: ZhouKaiBai
 * @Date: 2023-04-06 15:22:36
 * @LastEditTime: 2023-04-11 14:14:31
 * @LastEditors: ZhouKaiBai
 * @Description: 
-->
<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      amfe-flexible将rem设为1/10屏幕宽度，vite内置了postcss插件,通过postcss-pxtorem这个postcss插件将px转换为rem。
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a> +
      <a href="https://github.com/amfe/lib-flexible" target="_blank" rel="noopener">amfe-flexible</a>+
      <a href="https://www.npmjs.com/package/postcss-pxtorem" target="_blank" rel="noopener">postcss-pxtorem</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 1rem;
  top: -10px;
}

h3 {
  font-size: 0.5rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
