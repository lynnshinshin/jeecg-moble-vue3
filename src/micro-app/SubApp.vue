<!-- my-page.vue -->
<template>
  <div>
    <!-- <h1>子应用</h1> -->
    <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
     -->
    <el-skeleton v-if="loading" :rows="25" animated />
    <micro-app class="sub_micro-bar" @mounted="handleMounted" name="JEECG" url="http://localhost:3000/admin/" baseroute="home/sub"></micro-app>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
let loading = ref<boolean>(true)
function handleMounted () {
  loading.value = false
}
</script>

<style scoped lang="scss">

</style>