export const state = () => ({
  attendanceResult: []
})

export const mutations = {
  setAttendanceResult (state, attendanceResult) {
    state.attendanceResult = attendanceResult
  },
  deleteAttendanceResult (state, attendanceResult) {
    var tableData = attendanceResult[0]
    var deleteIndex = attendanceResult[1]
    tableData.splice(deleteIndex,1)
    state.attendanceResult = tableData
  }
}

export const getters = {
  getAttendanceResult(state){
    return state.attendanceResult
  }
}

export const actions = {
  async findAttendanceResult ({dispatch, commit}, {historyId}) {
    try {
      const attendanceResult = await dispatch('api/get', {url: `/history_students/attendance_result?history_id=${historyId}`, params: []}, {root: true})
      var students = []
      for(var i = 0; i < attendanceResult.length; i++){
          students[i] = attendanceResult[i].students[0].name
      }
      commit('setAttendanceResult', students)
      return students
    } catch (e) {
      throw e
    }
  }
}
