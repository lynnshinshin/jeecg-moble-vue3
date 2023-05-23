/*
 * @Author: ZhouKaiBai
 * @Date: 2023-04-06 15:22:35
 * @LastEditTime: 2023-05-23 17:58:38
 * @LastEditors: ZhouKaiBai
 * @Description: 
 */
import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import { handleAddRoute } from '@/utils/handleRouter'
interface SystemStoreState {
  permissionsList: RouteRecordRaw[];
  [name: string]: any
}
export const useSystemStore  = defineStore('systemStore ', {
  state: ():SystemStoreState => {
    return {
      permissionsList: []
    }
  },
  actions: {
    setPermissionsList(value: RouteRecordRaw[]): void {
      this.permissionsList = value
      handleAddRoute(value)
    }
  }
})
