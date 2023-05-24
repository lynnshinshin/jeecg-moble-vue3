/*
 * @Author: ZhouKaiBai
 * @Date: 2023-04-06 15:22:35
 * @LastEditTime: 2023-05-23 18:45:41
 * @LastEditors: ZhouKaiBai
 * @Description: 
 */
import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useSystemStore } from './systemStore'

interface USER_TYPE {
  id: string,
  username: string,
  phone: string,
  avatar: string,
  userIdentity: number,
  sex: number
}
const localUserInfo = localStorage.getItem('userInfo')
const localToken = localStorage.getItem('token')
export const useUserStore  = defineStore('userStore ', () => {
  // 用户信息
  let userInfo = localUserInfo ? JSON.parse(localUserInfo) : reactive({})
  const getUserInfo = () => userInfo
  function setUserInfo(value: USER_TYPE | {}) {
    userInfo = value
    localStorage.setItem('userInfo', JSON.stringify(value))
  }
  // token信息
  let token = localToken || ''
  const getToken = () => token
  function setToken(value: string) {
    token = value
    localStorage.setItem('token', value)
  }
  // 清除用户信息、token和权限列表信息
  function clearToken() {
    setToken('')
    setUserInfo({})
    useSystemStore().setPermissionsList([])
  }
  return { getUserInfo, setUserInfo, getToken, setToken, clearToken }
})
