/*
 * @Author: ZhouKaiBai
 * @Date: 2023-05-22 10:39:36
 * @LastEditTime: 2023-05-22 10:58:19
 * @LastEditors: ZhouKaiBai
 * @Description: 读取全局变量
 */
import { getCurrentInstance } from 'vue'

export default function useGlob() {
	const globalProperties = getCurrentInstance()?.appContext?.app?.config?.globalProperties
	return {...globalProperties}
}