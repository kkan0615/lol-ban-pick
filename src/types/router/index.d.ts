import 'vue-router'

declare module 'vue-router' {
  export interface RouteMeta {
    isMobile?: boolean
  }
}
