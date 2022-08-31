export const state = () => ({
  theme: null,
})

export const mutations = {
  setConfig(state, theme) {
    state.theme = theme
  },
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    // this is already in the req - see server-middleware
    commit('setConfig', req.theme)
  },
}
