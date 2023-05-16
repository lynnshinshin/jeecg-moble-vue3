<template>
  <div class="bar">
    <div class="rem10">我的宽度是10rem</div>
    <div class="rem1">1rem</div>
    <div>
      <div style="width: 37.5px" class="px1"></div>
      真实的37.5px
    </div>
    <div>
      <div class="px1"></div>
      转换后的37.5px
    </div>
    <div class="px10">我的宽度是375px</div>
        <h3>
      amfe-flexible将rem设为1/10屏幕宽度，vite内置了postcss插件,通过postcss-pxtorem这个postcss插件将px转换为rem。
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a> +
      <a href="https://github.com/amfe/lib-flexible" target="_blank" rel="noopener">amfe-flexible</a>+
      <a href="https://www.npmjs.com/package/postcss-pxtorem" target="_blank" rel="noopener">postcss-pxtorem</a>.
    </h3>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bar {
  font-size: 0.5rem;
}
.rem10 {
  width: 10rem;
  background-color: #ff0;
  font-size: 0.5rem;
  text-align: center;
}
.rem1 {
  width: 1rem;
  background-color: #ff0;
  font-size: 0.5rem;
  text-align: center;
}
.px1 {
  vertical-align: top;
  display: inline-block;
  height: 0.8rem;
  line-height: 0.8rem;
  width: 37.5px;
  background-color: #0f0;
  font-size: 0.5rem;
  text-align: center;
}
.px10 {
  width: 375px;
  background-color: #0f0;
  font-size: 0.5rem;
  text-align: center;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>