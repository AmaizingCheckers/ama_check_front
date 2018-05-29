export const state = () => ({
  results: []
})

export const mutations = () => ({
  setResult (state, result) {
    state.results = result
  }
})

export const getters = () => ({

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
