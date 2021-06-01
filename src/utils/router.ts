import { RouteRecordRaw } from 'vue-router'
import { routes } from '@/router'

export const setPermissionToRoutes = (routes: Array<RouteRecordRaw>) => {
  return routes.map(route => {
    return route
  })
}

export const getParentRoute = (targetRouteName: string, array: Array<RouteRecordRaw> = routes): RouteRecordRaw | undefined  => {
  if (!array)
    return undefined

  for (let i = 0; i < array.length; i++) {
    const route = array[i]
    if (!route || !route.children)
      continue

    const result = getParentRoute(targetRouteName, route.children)
    if (result)
      return result

    const index = route.children.findIndex(child => {
      return child.name === targetRouteName
    })

    if (index >= 0)
      return route
  }

  return undefined
}

export const getRouteInfo = (targetRouteName: string, array: Array<RouteRecordRaw> = routes): RouteRecordRaw | undefined  => {
  if (!array)
    return undefined

  for (let i = 0; i < array.length; i++) {
    const route = array[i]

    if (route.children) {
      const result = getRouteInfo(targetRouteName, route.children)
      if (result)
        return result
    }

    if (route.name === targetRouteName)
      return route
  }

  return undefined
}
