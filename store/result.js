export const state = () => ({
  result: [],
  historyId: 1
})

export const mutations = () => ({
  setResult (state, result) {
    state.result = result
  },

  setHistory (state, historyId) {
    state.historyId = historyId
  }
})

export const getters = () => ({
  getResult(state){
    return state.result
  },

  getHistory(state){
    return state.historyId
  }
})

export const actions = () => ({
  async find ({dispatch, commit}, { historyId }) {
    try {
      const result = await dispatch('api/get', {url: `/history_students/attendance_result?history_id=${historyId}`, params: []}, {root: true})
      commit('setHistory', result)
      return result
    } catch (e) {
      throw e
    }
  }
})
