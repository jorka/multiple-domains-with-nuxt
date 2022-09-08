import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export function createRouter(
  ssrContext,
  createDefaultRouter,
  routerOptions,
  config
) {
  if (process.server) {
    const { req } = ssrContext

    // check server-middleware/router.js
    // save for client side (where router is built)
    config._app.router = req.router
  }

  const options =
    routerOptions || createDefaultRouter(ssrContext, config).options

  return new Router({
    ...options,
    routes: fixRoutes(options.routes, config._app.router),
  })
}

// Responsible for creating the routes
function fixRoutes(defaultRoutes, configRouter) {
  const { routerBase, locales, defaultLocale } = configRouter

  return (
    defaultRoutes

      // we filter the routes that are not inside the routerBase folder and by language
      .filter((route) => {
        const root = route.name.split(`___`)[0].split(`-`)[0]
        const isRouterBase = root === routerBase
        const isIncludedInLocales = locales.includes(route.name.split(`___`)[1])
        return isRouterBase && isIncludedInLocales
      })
      // we create the routes for each language
      .map((route) => {
        const locale = route.name.split(`___`)[1]
        const routePathBeginDefaultLocale = `/${defaultLocale}/${routerBase}`
        const isIndex = route.path === routePathBeginDefaultLocale
        const isDefaultLocale = locale === defaultLocale

        return {
          ...route,
          path: isIndex
            ? '/'
            : isDefaultLocale
            ? route.path.split(`/${routerBase}`)[1]
            : route.path.replace(`/${routerBase}`, ''),
        }
      })
  )
}
