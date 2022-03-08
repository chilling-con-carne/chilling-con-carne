import { createStore } from 'vuex'

export default createStore({
  state: {
    lang: 'FR'
  },
  mutations: {
    changeLang(state, lang) {
      state.lang = lang
    }
  },
  actions: {
  },
  modules: {
  }
})
