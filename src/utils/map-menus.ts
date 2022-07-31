import { RouteRecordRaw } from 'vue-router'

//映射函数
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  //先加载所有的在按需添加
  const allRoutes: RouteRecordRaw[] = []
  //webpack里的方法获取文件
  const routeFile = require.context('../router/main', true, /\.ts/)
  routeFile.keys().forEach((key) => {
    //拿到文件导出的Module对象
    const route = require('../router/main' + key.split('.')[1]).default
    allRoutes.push(route)
  })

  //递归获取路由数据
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => {
          return route.path === menu.url
        })
        if (route) {
          routes.push(route)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)
  return routes
}
