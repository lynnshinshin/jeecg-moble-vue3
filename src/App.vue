<!--
 * @Author: ZhouKaiBai
 * @Date: 2023-04-06 15:22:36
 * @LastEditTime: 2023-04-11 14:23:01
 * @LastEditors: ZhouKaiBai
 * @Description: 
-->
<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <div class="bar">
    <div class="rem10">我的宽度是10rem</div>
    <div class="rem1">1rem</div>
    <div>
      <div style="width:37.5px;" class="px1"></div>真实的37.5px
    </div>
    <div>
      <div class="px1"></div>转换后的37.5px
    </div>
    <div class="px10">我的宽度是375px</div>
  </div>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="wrapper">
      <HelloWorld msg="移动端适配" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
