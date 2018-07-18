export const state = () => ({
  uploadImage: null,
  subjectId: null,
  historyId: null
})

export const mutations = {
  setImage (state, uploadImage) {
    state.uploadImage = uploadImage
  },

  setSubject (state, subjectId) {
    state.subjectId = subjectId
  },
  setHistoryId (state, historyId) {
    state.historyId = historyId
  }
}

export const getters = {
  getHistoryId (state){
    return state.historyId
  }
}

export const actions = {
  async postImage ({dispatch, state, commit}) {
    try {
      let params = new FormData()
      params.append('image', state.uploadImage)
      params.append('subject_id', state.subjectId)
      const result = await dispatch('api/post', {url: '/histories/attendance_image_upload', params: params}, {root: true})
      commit('setHistoryId', result.id)
    } catch (e) {
      throw e
    }
  }
}
