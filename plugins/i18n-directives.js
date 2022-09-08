import Vue from 'vue'

export default function ({ app, store, _ }) {
  Vue.prototype.sitePath = (path) => {
    const routerBase = store.state.routerBase
    return app.localePath(path === '/' ? `/` : `${routerBase}-${path}`)
  }

  Vue.prototype.siteAsset = (path, locale) => {
    const routerBase = store.state.routerBase
    const themeLocale = app.i18n.locale
    return locale
      ? `/${routerBase}/${themeLocale}/${path}`
      : `/${routerBase}/${path}`
  }
}
