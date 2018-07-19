export const state = () => ({
    uploadImage: null,
    studentId: null
  })
  
  export const mutations = {
    setImage (state, uploadImage) {
      state.uploadImage = uploadImage
    },
  
    setStudent (state, studentId) {
      state.studentId = studentId
    }
  }
  
  export const actions = {
    async postImage ({dispatch, state, commit}) {
      try {
        let params = new FormData()
        params.append('image', state.uploadImage)
        params.append('student_id', state.studentId)
        const result = await dispatch('api/post', {url: '/student_images/upload', params: params}, {root: true})
        commit('setHistoryId', result.id)
      } catch (e) {
        throw e
      }
    }
  }