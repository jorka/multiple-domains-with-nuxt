import Vue from 'vue'

export default function ({ app, store, _ }) {
  Vue.prototype.themePath = (path) => {
    const theme = store.state.theme
    return app.localePath(path === '/' ? `/` : `${theme}-${path}`)
  }
  Vue.prototype.themeLayout = (path) => {
    const theme = store.state.theme
    return `${theme}-${path}`
  }
}
