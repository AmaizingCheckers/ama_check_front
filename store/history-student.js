export const state = () => ({

})

export const getters = {

}

export const mutations = {

}

export const actions = {
  async addStudent ({dispatch}, {params}) {
    const result = await dispatch('api/post', {url: '/history_students', params: params}, {root: true}).catch((e) => {
      return 'error'
    })
    return result
  }
}
