import path from 'path'
//  node  里面的

/**
 *
 * 所有的子集路由
 */

const getChildrenRoutes = (routes) => {
  const result = []
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })

  return result
}

/**
 * 处理路由
 * 脱离层级路由
 */
export const fiterRoutes = (routes) => {
  //  获取到所有的子集路由  查重
  const childrenRoutes = getChildrenRoutes(routes)

  // 根据子集路由查重
  return routes.filter((route) => {
    // 根据route  在 childrenRoutes 中  把重复的路由表删除
    return !childrenRoutes.find((childrenRoute) => {
      return childrenRoute.path === route.path
    })
  })
}

/**
 * 返回符合规则的路由
 */
export const genarateMenu = (routes, basePath = '') => {
  const result = []
  routes.forEach((item) => {
    //  不存在 children  &&  meat
    if (isNull(item.children) && isNull(item.meta)) return
    if (isNull(item.meta) && !isNull(item.children)) {
      //  递归
      result.push(...genarateMenu(item.children))
      return
    }
    //  不存在 children  存在meta  ||  children && meat
    //  最终menu  需要跳转  所以要合并path
    const routePath = path.resolve(basePath, item.path)

    // 路由分离后存在 同名 路由
    let route = result.find((item) => item.path === routePath)
    //  当前路由未处理  未加入到result
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      //  icon  title  都存在
      if (route.meta.icon && route.meta.title) {
        result.push(route)
      }
    }
    //  存在child  &&  meta

    if (!isNull(item.children)) {
      route.children.push(...genarateMenu(item.children, route.path))
    }
  })
  return result
}

/**
 * 判断是否为空
 */

const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
}
