export const state = () => ({
  student: [],
  students: [],
  uploadImage: null,
  studentId: null,
  subjectStudents: []
})

export const mutations = {
  setImage (state, uploadImage) {
    state.uploadImage = uploadImage
  },

  setStudentId (state, studentId) {
    state.studentId = studentId
  },

  setStudent (state, student) {
    state.student = student
  },

  setStudents (state, students) {
    state.students = students
  },

  setSubjectStudents (state, subjectStudents) {
    state.subjectStudents = subjectStudents
  }
}

export const getters = {
  getStudent (state) {
    return state.student
  },

  getStudents (state) {
    return state.students
  },

  getSubjectStudents (state) {
    return state.subjectStudents
  }
}

export const actions = {
  async findStudent ({dispatch, commit}, {studentId}) {
    const result = await dispatch('api/get', {url: `/students/${studentId}`, params: []}, {root: true}).catch((e) => {
      throw e
    })
    commit('setStudent', result)
  },

  async findStudents ({dispatch, commit}) {
    const result = await dispatch('api/get', {url: '/students', params: []}, {root: true}).catch((e) => {
      throw e
    })
    commit('setStudents', result)
  },

  async saveStudent ({dispatch}, {params}) {
    const result = await dispatch('api/post', {url: '/students', params: params}, {root: true}).catch((e) => {
      throw e
    })
    return result
  },

  async updateStudent ({dispatch}, {studentId, params}) {
    const result = await dispatch('api/put', {url: `/students/${studentId}`, params: params}, {root: true}).catch((e) => {
      throw e
    })
    return result
  },

  async findStudentsBySubject ({dispatch, commit}, {subjectId}) {
    const result = await dispatch('api/get', {url: '/subject_students/find_by_subject', params: {'subject_id': subjectId}}, {root: true}).catch((e) => {
      throw e
    })
    commit('setSubjectStudents', result)
  },

  async postImage ({dispatch, state, commit}) {
    try {
      let params = new FormData()
      params.append('image', state.uploadImage)
      params.append('student_id', state.studentId)
      const result = await dispatch('api/post', {url: '/student_images', params: params}, {root: true})
      return result
    } catch (e) {
      throw e
    }
  }
}
