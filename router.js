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
    config._app.theme = ssrContext?.req?.theme
  }

  const options =
    routerOptions || createDefaultRouter(ssrContext, config).options

  return new Router({
    ...options,
    routes: fixRoutes(
      options.routes,
      ssrContext?.req?.theme || config._app.theme
    ),
  })
}

function fixRoutes(defaultRoutes, theme) {
  return defaultRoutes
    .filter((route) => route.path.includes(theme))
    .map((route) => {
      const isIndex = route.path === `/${theme}`
      const isIndexTranslated = route.path.split(`/${theme}`)[1] === ''
      return {
        ...route,
        path: isIndex
          ? '/'
          : isIndexTranslated
          ? route.path.split(`/${theme}`)[0]
          : route.path.replace(`/${theme}`, ''),
      }
    })
}
