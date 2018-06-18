export const state = () => ({
  classroom: [],
  classrooms: []
  //classselect:[]
})

export const getters = {
  classroom (state) {
    return state.classroom
  },

  classrooms (state) {
    return state.classrooms
  }/*,

  classselect (state) {
    return state.classselect
  }*/
}

export const mutations = {
  setClassroom (state, classroom) {
    state.classroom = classroom
  },

  setClassrooms (state, classrooms) {
    state.classrooms = classrooms
  }/*,

  setClassSelect (state, classselect) {
    state.classselect = classselect
  }*/
}

export const actions = {
  async index ({dispatch, commit}) {
    const result = await dispatch('api/get', {url: '/classrooms', params: []}, {root: true})
    commit('setClassrooms', result)
  },

  async find ({dispatch, commit}, {classroomId}) {
    const result = await dispatch('api/get', {url: `/classrooms/${classroomId}`, params: []}, {root: true})
    commit('setClassroom', result)
  }
}