//
export const state = () => ({
  result: []
})

export const mutations = () => ({
  setResult (state, result) {
    state.result = result
  }
})

export const getters = () => ({
  getResult(state){
    return state.result
  }
})

export const actions = () => ({
  async find ({dispatch, commit}, { params = null }) {
    try {
      const result = await dispatch('api/get', { url: '/result', params: params }, { root: true })
      commit('setResult', result)
      return result
    } catch (e) {
      throw e
    }
  }
})
