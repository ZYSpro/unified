const indexStore = {
  namespaced: true,
  state: {
    data: {},
    report: {}
  },
  mutations: {
    setData(state, payload) {
      state.data = payload.data
    },
    setReportData(state, payload) {
      state.report = payload.data
    },
    setSection(state, payload) {
      const { outlineId, sections } = payload
      const index = state.report.outlineIndex.findIndex(item => item.id === outlineId)
      state.report.outlineIndex.splice(index + 1, 0, ...sections)
    }
  },
  actions: {
    initialData({ commit }, { payload }) {
      commit('setData', payload)
    },
    initialReport({ commit }, { payload }) {
      commit('setReportData', { data: payload })
    }
  }
}

export { indexStore }
