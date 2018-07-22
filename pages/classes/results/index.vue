<template lang="pug">
div.result-container
  h1.result-list 出席者一覧
    el-button.roster-button(type='primary', icon='el-icon-tickets', circle, @click='outerVisible = true')
  el-table(:data='tableData')
    el-table-column(label='No', width='80%')
      template(v-for="(row,index) in tableData", slot-scope='scope')
        span {{ scope.$index + 1 }}
    el-table-column(label='名前')
      template(v-for="(row,index) in tableData", slot-scope='scope')
        span {{ scope.row }}
    el-table-column
      template(v-for="(row,index) in tableData", slot-scope='scope')
        div.button-container
          el-button.absence-button(size='mini', type='danger', @click='handleDelete(scope.$index, scope.row), centerDialogVisible = true') 欠席
  el-dialog(:visible.sync='centerDialogVisible')
    div.dialog-comment
      span この学生を欠席にしてもよろしいですか？
    div.dialog-button
      el-button.dialog-delete(type='danger', @click='deleteStudent(), centerDialogVisible = false') 欠席
      el-button.dialog-back(type='primary', @click='centerDialogVisible = false') 戻る
  ClassRoster(:tableData="tableData" :outerVisible="outerVisible" :toggleClassRosterModal="toggleClassRosterModal" :atendanceClasses="atendanceClasses")
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import ClassRoster from '~/components/dialog/classRoster.vue'

export default {
  components: {
    ClassRoster,
  },
  data: () => ({
      tableData: ['川田大秀','川田小秀','川田中秀','川田安蛇'],
      centerDialogVisible: false,
      outerVisible: false,
      historyId: null,
      deleteIndex: null,
      deleteTable: [],
  }),

  created () {
    this.historyId = this.getHistoryId
    this.findResult({historyId: this.historyId})
  },
  computed: {
    ...mapGetters('upload', ['getHistoryId']),
    ...mapGetters('result', ['getResult']),
    tableData(){
      return this.getResult
    }
  },
  methods: {
    ...mapMutations('result', ['deleteResult']),
    ...mapActions('result', ['findResult']),
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
    toggleClassRosterModal () {
      this.outerVisible = !this.outerVisible
    },
    //学生出席
    atendanceClasses (){

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
