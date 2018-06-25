export const state = () => ({
  uploadImage: null,
  subjectId: null,
  historyId:null
})

export const mutations = {
  setImage (state, uploadImage) {
    state.uploadImage = uploadImage
  },

  setSubject (state, subjectId) {
    state.subjectId = subjectId
  },
  setHistory (state, historyId) {
    state.historyId = historyId
  }
}

export const actions = {
  async postImage ({dispatch, state, commit}) {
    try {
      let params = new FormData()
      params.append('image', state.uploadImage)
      params.append('subject_id', state.subjectId)
      console.log(params.get('image'))
      console.log(params.get('subject_id'))
      const result = await dispatch('api/post', {url: '/histories/attendance_image_upload', params: params}, {root: true})
      console.log(result.id)
      commit('setHistory', result.id)
    } catch (e) {
       throw e
    }
  }
}
