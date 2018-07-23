<template lang="pug">
div.result-container
  h1.result-list 出席者一覧
    el-button.roster-button(type='primary', icon='el-icon-tickets', circle, @click='outerVisible = true')
  el-table(:data='getAttendanceResult')
    el-table-column(type="index", width='80%')
    el-table-column(label='名前')
      template(slot-scope='scope')
        span {{ scope.row }}
    el-table-column
      template(v-for="(row,index) in getAttendanceResult", slot-scope='scope')
        div.button-container
          el-button.absence-button(size='mini', type='danger', @click='handleDelete(scope.$index, scope.row), centerDialogVisible = true') 欠席
  el-dialog(:visible.sync='centerDialogVisible')
    div.dialog-comment
      span この学生を欠席にしてもよろしいですか？
    div.dialog-button
      el-button.dialog-delete(type='danger', @click='deleteStudent(), centerDialogVisible = false') 欠席
      el-button.dialog-back(type='primary', @click='centerDialogVisible = false') 戻る
  ClassRoster(:tableData="getSubjectStudents" :outerVisible="outerVisible" :closeClassRosterModal="closeClassRosterModal" :atendanceClasses="atendanceClasses")
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import ClassRoster from '~/components/dialog/classRoster.vue'

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.subjectId)
  },
  components: {
    ClassRoster,
  },
  data: () => ({
      centerDialogVisible: false,
      outerVisible: false,
      historyId: null,
      subjectId: null,
      deleteIndex: null,
      deleteTable: []
  }),

  created () {
    this.subjectId = this.$route.params.subjectId
    this.historyId = this.getHistoryId
    this.findAttendanceResult({historyId: this.historyId})
    this.findStudentsBySubject({subjectId: this.subjectId})
  },
  computed: {
    ...mapGetters('upload', ['getHistoryId']),
    ...mapGetters('result', ['getAttendanceResult']),
    ...mapGetters('student', ['getSubjectStudents'])
  },
  methods: {
    ...mapMutations('result', ['deleteAttendanceResult']),
    ...mapActions('result', ['findAttendanceResult']),
    ...mapActions('student', ['findStudentsBySubject']),
    ...mapActions('history-student', ['addStudent']),
    //欠席データ保持
    handleDelete (index, row) {
      this.deleteIndex = index
    },
    //欠席実行
    deleteStudent (){
      this.deleteTable[0] = this.tableData
      this.deleteTable[1] = this.deleteIndex
      this.deleteResult(this.deleteTable)
    },
    //名簿モーダル非表示
    closeClassRosterModal () {
      this.outerVisible = false
    },
    //学生出席
    async atendanceClasses (studentId) {
      var params = {
        'history_id': this.historyId,
        'student_id': studentId
      }
      await this.addStudent({params: params})
    }
  }
}
</script>

<style lang="scss" scoped>
.roster-button {
  position: relative;
  margin-left: 20px;
}
</style>
