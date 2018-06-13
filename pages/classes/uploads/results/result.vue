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
import { mapActions,mapGetters } from 'vuex'
export default {
   data() {
     return {
       centerDialogVisible: false,
       tableData: ['川田大秀','松永拓也','橋口巧','佐竹直人']
    }
   },
  methods: {
    handleDelete(row) {
        alert(row);
    }

//- ...mapActions('result', ['find']),
//- ...mapGetters('getters', ['getResult'])
//-
  }
}
</script>

<style lang="scss" scoped>
.result-container{
  padding-left: 60px;
  padding-right: 60px;
  margin-left: 80px;
  margin-right: 80px;
}

.result-list{
  margin-top: 30px;
  margin-bottom: 30px;
}

.el-table{
  font-size: 17px;
}

.button-container{
  text-align: right;
}

.el-button{
  width: 70px;
  font-size: 16px;
}

.dialog-comment{
  font-size: 18px;
  text-align: center;
  padding: 10px;
  margin-bottom: 50px;
}

.dialog-button{
  text-align: center;
  margin-bottom: 30px;
}

.dialog-back{
  margin-left: 60px;
  width: 80px;
  font-size: 16px;
}

.dialog-delete{
  margin-right: 60px;
  width: 80px;
  font-size: 16px;
}
//スマホ対応css
@media (max-width: 599px) {
  .result-container{
    padding-left: 4px;
    padding-right: 4px;
    margin-left: 5px;
    margin-right: 5px;
  }

  .result-list{
    margin-top: 5px;
    margin-bottom: 20px;
  }

  .el-table{
    font-size: 13px;
  }

  .el-button{
    margin-left: 27px;
    width: 53px;
    font-size: 11px;
  }

  .dialog-comment{
    font-size: 10px;
    text-align: center;
    padding: 16px;
    margin-bottom: 50px;
  }

  .dialog-back{
    width: 50px;
    font-size: 12px;
  }

  .dialog-delete{
    width: 50px;
    font-size: 12px;
  }
}
</style>
