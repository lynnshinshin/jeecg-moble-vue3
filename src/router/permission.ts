import { useUserStore } from '@/stores/index';
import { isWhiteList, isPathExists} from '@/utils/handleRouter'
import type { RouteLocationNormalized, NavigationGuardNext, Router, RouteRecordRaw } from 'vue-router'
// 全局路由守卫
export default function beforeEachCallback(router: Router) {
  return (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    // 判断是否为有效路径
    const routes: RouteRecordRaw[] = router.getRoutes()// 都可以将只读数组转换为可变数组
    if (!isPathExists(to.path, routes)) {
      next('/login')
      return
    }
    // 判断是否有token或在白名单内
    const userStore = useUserStore()
    userStore.getToken() || isWhiteList(to.path) ? next() : next('/login')
  }
}