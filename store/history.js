export const state = () => ({
  history: [],
  histories: []
})

export const getters = {
  getHistory (state) {
    return state.history
  },

  getHistories (state) {
    return state.histories
  }
}

export const mutations = {
  setHistory (state, history) {
    state.history = history
  },

  setHistories (state, histories) {
    state.histories = histories
  }
}

export const actions = {
  async findHistory ({dispatch, commit}, {historyId}) {
    const result = await dispatch('api/get', {url: `/histories/${historyId}`, params: []}, {root: true}).catch((e) => {
      return 'error'
    })
    commit('setHistory', result)
  },

  async findHistoryRefineByTeacher ({dispatch, commit}) {
    const result = await dispatch('api/get', {url: '/histories/refine_by_teacher', params: []}, {root: true}).catch((e) => {
      return 'error'
    })
    commit('setHistories', result)
  }
}
