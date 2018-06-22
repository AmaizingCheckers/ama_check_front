export const state = () => ({
  uploadImage: null,
  subjectId: null,
})

export const mutations = {
  setImage (state, uploadImage) {
    state.uploadImage = uploadImage
  },

  setSubject (state, subjectId) {
    state.subjectId = subjectId
  },
}

export const actions = {
  async postImage ({dispatch, state}) {
    try {
      let params = new FormData()
      params.append('image', state.uploadImage)
      params.append('subject_id', state.subjectId)
      console.log(params.get('image'))
      console.log(params.get('subject_id'))

      const result = await dispatch('api/post', {url: '/histories/attendance_image_upload', params: params}, {root: true})
    } catch (e) {
       throw e
    }
  }
}
