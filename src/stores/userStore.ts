/*
 * @Author: ZhouKaiBai
 * @Date: 2023-04-06 15:22:35
 * @LastEditTime: 2023-05-23 16:36:26
 * @LastEditors: ZhouKaiBai
 * @Description: 
 */
import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
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
  // 清除用户信息和token
  function clearToken() {
    setToken('')
    setUserInfo({})
  }
  return { getUserInfo, setUserInfo, getToken, setToken, clearToken }
})
