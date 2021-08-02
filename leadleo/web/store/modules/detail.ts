const detailStore = {
  namespaced: true,
  state: {
    data: {},
    article: null,
    table: null
  },
  mutations: {
    setData(state, payload) {
      state.data = payload
    },
    setArticleDetails(state, article) {
      state.article = article
    },
    setSizeproDetails(state, sizepro) {
      state.sizepro = sizepro
    },
    setTableDetails(state, table) {
      state.table = table
    }
  },
  actions: {
    getArticleDetails({ commit }, article) {
      commit('setArticleDetails', article)
    },
    getSizeproDetails({ commit }, sizepro) {
      commit('setSizeproDetails', sizepro)
    },
    getTableDetails({ commit }, table) {
      commit('setTableDetails', table)
    },
    initialData({ commit }, { payload }) {
      commit('setData', payload)
    }
  }
}

export { detailStore }
