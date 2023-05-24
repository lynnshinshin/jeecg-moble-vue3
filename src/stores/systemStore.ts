/*
 * @Author: ZhouKaiBai
 * @Date: 2023-04-06 15:22:35
 * @LastEditTime: 2023-05-24 16:01:08
 * @LastEditors: ZhouKaiBai
 * @Description: 系统仓库
 */
import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import { handleAddRoute } from '@/utils/handleRouter'
interface SystemStoreState {
  permissionsList: RouteRecordRaw[];
  currentMenu: Menu,
  [name: string]: any
}
interface Menu {
  id: string,
  path: string,
  meta: any,
  [name: string]: any
}
const getLocalPermissionsList = localStorage.getItem('permissionsList')
const localPermissionsList = getLocalPermissionsList ? JSON.parse(getLocalPermissionsList) : []
const getLocalCurrentMenu = localStorage.getItem('currentMenu')
const localCurrentMenu = getLocalCurrentMenu ? JSON.parse(getLocalCurrentMenu) : {}
export const useSystemStore  = defineStore('systemStore ', {
  state: ():SystemStoreState => {
    return {
      permissionsList: localPermissionsList as RouteRecordRaw[],
      currentMenu: localCurrentMenu
    }
  },
  actions: {
    setPermissionsList(value: RouteRecordRaw[]): void {
      this.permissionsList = value
      handleAddRoute(value)
      localStorage.setItem('permissionsList', JSON.stringify(value))
    },
    setCurrentMent(value: Menu) {
      this.currentMenu = value
      localStorage.setItem('currentMenu', JSON.stringify(value))
    }
  }
})
