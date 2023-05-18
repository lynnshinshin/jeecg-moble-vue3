<!--
 * @Author: ZhouKaiBai
 * @Date: 2023-05-16 15:37:26
 * @LastEditTime: 2023-05-16 16:16:12
 * @LastEditors: ZhouKaiBai
 * @Description: 
-->
<template>
    <header>
    <img
      @click="handleClick"
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="wrapper">
      <!-- <HelloWorld msg="移动端适配" /> -->
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> -->
  </main>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
function handleClick() {
  router.push("/about");
}
</script>

<style scoped>
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