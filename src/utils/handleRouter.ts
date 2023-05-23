import { whiteList } from '@/router/routes'
import router from '@/router'
import type { RouteLocationNormalized, NavigationGuardNext, Router, RouteRecordRaw } from 'vue-router'
// 路由配置接口
interface RouteConfig {
  path: string;
  children?: RouteConfig[];
}
/**
 * @description: 判断是否在白名单内
 * @param {string} path
 * @return {boolean}
 * @author: ZhouKaiBai
 */
export function isWhiteList(path: string): boolean {
  return whiteList.includes(path)
}
/**
 * @description: 判断跳转的路由路径是否存在
 * @param {string} path
 * @param {T} routes
 * @return {boolean}
 * @author: ZhouKaiBai
 */
export function isPathExists<T extends RouteConfig>(path: string, routes: T[]): boolean {
  for (const route of routes) {
    if (route.path === path) {
      return true; // 找到匹配的路径，返回 true
    }
    if (route.children && route.children.length > 0) {
      const existsInChildren = isPathExists(path, route.children);
      if (existsInChildren) {
        return true; // 找到匹配的子路由路径，返回 true
      }
    }
  }
  return false; // 没有找到匹配的路径，返回 false
}
// 动态添加路由
export function handleAddRoute(permissionsList: RouteRecordRaw[]) {
  // 获取 home 路由的对象
  const homeRoute = router.getRoutes().find(r => r.name === 'Home');
  if (homeRoute) {
    // 添加路由到 home 路由的 children 中
    permissionsList.forEach(route => {
      homeRoute.children?.push(route)
      // router.addRoute(homeRoute, route)
    })
  }
  console.log(router.getRoutes());
}