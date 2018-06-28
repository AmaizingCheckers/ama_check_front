export const state = () => ({
  result: []
})

export const mutations = {
  setResult (state, result) {
    state.result = result
  },
  deleteResult (state, result) {
    var tableData = result[0]
    var deleteIndex = result[1]
    tableData.splice(deleteIndex,1)
    state.result = tableData
  }
}

export const getters = {
  getResult(state){
    return state.result
  }
}

export const actions = {
  async findResult ({dispatch, commit}, {historyId}) {
    try {
      const result = await dispatch('api/get', {url: `/history_students/attendance_result?history_id=${historyId}`, params: []}, {root: true})
      var students = []
      for(var i = 0; i < result.length; i++){
          students[i] = result[i].students[0].name
      }
      commit('setResult', students)
      return students
    } catch (e) {
       throw e
    }
  }
}
