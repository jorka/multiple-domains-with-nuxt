export const state = () => ({
  routerBase: null,
  availableLocales: null,
})

export const mutations = {
  setConfig(state, routerBase) {
    state.routerBase = routerBase
  },
  setAvailableLocales(state, availableLocales) {
    state.availableLocales = availableLocales
  },
}

export const actions = {
  nuxtServerInit({ commit }, { $config }) {
    const { locales, routerBase } = $config._app.router
    commit('setConfig', routerBase)
    commit('setAvailableLocales', locales)
  },
}
