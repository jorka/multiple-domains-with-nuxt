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
    commit('setConfig', $config._app.router.routerBase)
    commit('setAvailableLocales', $config._app.router.locales)
  },
}
