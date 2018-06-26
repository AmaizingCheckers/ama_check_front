export const state = () => ({
  result: []
})

export const mutations = () => ({
  setResult (state, result) {
    state.result = result
  }
})

export const getters = {
  getResult(state){
    return state.result
  }
}

export const actions = {
  async findResult ({dispatch, commit}, {historyId}) {
    try {
      console.log(historyId)
      const result = await dispatch('api/get', {url: `/history_students/attendance_result?history_id=${historyId}`, params: []}, {root: true})
      commit('setResult', result)
      return result
    } catch (e) {
       throw e
    }
  }
}
