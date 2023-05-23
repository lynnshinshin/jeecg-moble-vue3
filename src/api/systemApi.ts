/*
 * @Author: ZhouKaiBai
 * @Date: 2023-05-21 17:57:07
 * @LastEditTime: 2023-05-23 16:34:49
 * @LastEditors: ZhouKaiBai
 * @Description: 系统接口
 */
import { getRequest, postRequest } from '@/utils/request'
import type { TypeParams } from '@/utils/request'
// 获取验证码
let VerificationTimestamp: number
function apiGetVerificationCode():any {
  VerificationTimestamp = new Date().getTime()  
  return getRequest(`sys/randomImage/${VerificationTimestamp}`)
}
// 登录
function apiLogin(data: TypeParams) {
  return postRequest('sys/login', {...data, checkKey: VerificationTimestamp})
}
// 获取用户权限列表
function apiGetUserPermission() {
  return getRequest('sys/permission/getUserPermissionByToken')
}
export {
  apiGetVerificationCode,
  apiLogin,
  apiGetUserPermission
}