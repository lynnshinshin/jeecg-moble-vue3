<!--
 * @Author: ZhouKaiBai
 * @Date: 2023-05-23 18:31:44
 * @LastEditTime: 2023-05-24 16:06:46
 * @LastEditors: ZhouKaiBai
 * @Description: 菜单栏组件
-->
<template>
  <el-menu>
    <template v-for="menu in permissionsList" :key="menu.path">
      <!-- 第一层 -->
      <el-sub-menu v-if="menu.children" :index="menu.path">
        <template #title>{{ menu.meta?.title }}</template>
        <!-- 第二层 -->
        <template v-for="menu2 in menu.children" :key="menu2.path">
          <el-sub-menu v-if="menu2.children" :index="menu2.path">
            <template #title>{{ menu2.meta?.title }}</template>
            <!-- 第三层 -->
            <el-menu-item @click="handleMenuClick(menu3)" v-for="menu3 in menu2.children" :key="menu3.path" :index="menu3.path">
              <span>{{ menu3.meta?.title }}</span>
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item @click="handleMenuClick(menu2)" v-else :index="menu2.path">
            <span>{{ menu2.meta?.title }}</span>
          </el-menu-item>
        </template>
      </el-sub-menu>
      <el-menu-item @click="handleMenuClick(menu)" v-else :index="menu.path">
        <span>{{ menu.meta?.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/stores';
import { computed } from 'vue';
const systemStore = useSystemStore()
const emit = defineEmits(['select-menu'])
const permissionsList = computed(() => {
  return systemStore.permissionsList
})
function handleMenuClick(menu: any) {
  systemStore.setCurrentMent(menu)
  emit('select-menu')
}
</script>

<style scoped lang="scss">
.el-menu {
  border: none;
  background-color: var(--bg-color);
}
</style>