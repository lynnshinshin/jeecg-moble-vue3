<!--
 * @Author: ZhouKaiBai
 * @Date: 2023-05-16 15:37:26
 * @LastEditTime: 2023-05-31 17:11:07
 * @LastEditors: ZhouKaiBai
 * @Description: 
-->
<template>
  <!-- 头部 -->
  <header class="home_header-bar">
    <div class="home_header-left">
      <img class="home_header-logo" src="@/assets/img/login/logo.png" alt="logo" />
      <span class="home_header-name">Jeecg home</span>
    </div>
    <div class="home_header-right">
      <SwitchTheme></SwitchTheme>
      <el-dropdown trigger="click">
        <el-icon class="home_header-menu">
          <Operation />
        </el-icon>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleLogout">
              <el-icon>
                <close-bold />
              </el-icon>
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
  <!-- 菜单 -->
  <menu class="home_menu-bar">
    <div class="home_menu-left">
      <el-icon @click="menuDrawer = true">
        <Expand />
      </el-icon>
      <span class="home_menu-title">{{ MenuTitle }}</span>
    </div>
    <div @click="handleBackToTop" :class="{ 'home_menu-top': true, 'home_menu-top-show': showBackToTop }">Back to top
    </div>
  </menu>
  <!-- 内容 -->
  <main class="home_main-bar">
    <router-view></router-view>
    <!-- <LineChart></LineChart> -->
  </main>
  <!-- 侧边栏 -->
  <el-drawer v-model="menuDrawer" :show-close="false" direction="ltr" size="60%" :open-delay="0" :close-delay="0">
    <SideMenu @select-menu="menuDrawer = false"></SideMenu>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, onUnmounted, computed } from 'vue';
import SwitchTheme from '@/components/base/SwitchTheme.vue'
import SideMenu from '@/components/menu/SideMenu.vue';
// import LineChart from '@/components/echarts/Linechart.vue'
import { useSystemStore, useUserStore } from '@/stores/index'
import useGlob from '@/hooks/useGlobal'
const systemStore = useSystemStore()
const GLOB = useGlob()
const userStore = useUserStore()
let menuDrawer = ref<boolean>(false)
let showBackToTop = ref<boolean>(false)
const MenuTitle = computed(() => {
  return systemStore.currentMenu.meta?.title
})
function controlBackToTop() {
  if (window.scrollY > 100) { // 当滚动超过50px时显示按钮
    showBackToTop.value = true
  } else {
    showBackToTop.value = false
  }
}
function handleBackToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function handleLogout() {
  userStore.clearToken()
  GLOB.$router?.push({
    path: '/login'
  })
}
window.addEventListener('scroll', controlBackToTop)
onUnmounted(() => {
  window.removeEventListener('scroll', controlBackToTop);
})
</script>

<style scoped lang="scss">
.home_header-bar {
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 24px;

  .home_header-left {
    display: flex;
    align-items: center;
  }

  .home_header-right {
    display: flex;
    align-items: center;
  }

  .home_header-logo {
    vertical-align: bottom;
    height: 1.07rem;
    width: 1.07rem;
  }

  .home_header-name {
    vertical-align: bottom;
  }

  .home_header-menu {
    margin-left: 15px;
    font-size: 24px;
  }
}

:root[data-theme="dark"] .home_menu-bar {
  backdrop-filter: saturate(50%) blur(8px) opacity(1);
}

.home_menu-bar {
  position: sticky;
  z-index: 1;
  top: 0;
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
  padding: 0 0.21rem;
  font-size: 0.8rem;
  backdrop-filter: saturate(50%) blur(4px) opacity(99%);
  .home_menu-left {
    display: flex;
    align-items: center;
  }
  .home_menu-title {
    font-size: 16px;
    margin-left: 10px;
  }
}

.home_main-bar {
  padding: 0 10px;
}

.home_menu-top {
  font-size: 16px;
}

.home_menu-top {
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.1s;
}

.home_menu-top-show {
  transform: translateY(0);
  opacity: 1;
  transition: all 0.1s;
}
</style>