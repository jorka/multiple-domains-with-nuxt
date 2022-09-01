import Vue from 'vue'

export default function ({ app, store, _ }) {
  Vue.prototype.themePath = (path) => {
    const theme = store.state.theme
    return app.localePath(path === '/' ? `/` : `${theme}-${path}`)
  }
  Vue.prototype.themeAsset = (path, locale) => {
    const theme = store.state.theme
    const themeLocale = app.i18n.locale
    return locale ? `/${theme}/${themeLocale}/${path}` : `/${theme}/${path}`
  }
}
