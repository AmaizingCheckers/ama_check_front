<template lang="pug">
div.result-container
  h1.result-list 出席者一覧
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
          el-button(size='mini', type='danger', @click='handleDelete(scope.row), centerDialogVisible = true') 欠席

  el-dialog(:visible.sync='centerDialogVisible', width='45%')
    div.dialog-comment
      span この学生を欠席してもよろしいですか？
    div.dialog-button
      el-button.dialog-delete(type='danger', @click='handleDelete(scope.row), centerDialogVisible = false') 欠席
      el-button.dialog-back(type='primary', @click='centerDialogVisible = false') 戻る
</template>

<script>
import { mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  data() {
    return {
      centerDialogVisible: false,
      historyId: null,
      tableData: ['川田大秀','松永拓也','橋口巧','佐竹直人']
    }
  },
  created () {
  },

  computed: {
    ...mapActions('result', ['find']),
    ...mapGetters('resut', ['getResult','getHistory'] )

  },

  methods: {


    handleDelete(row) {
      alert(row);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
