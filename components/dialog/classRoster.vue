<template lang="pug">
el-dialog(title='クラス名簿', :visible='outerVisible', @close="closeClassRosterModal")
  el-table(:data='tableData')
    el-table-column(type="index", width='80%')
    el-table-column(label='名前')
      template(slot-scope="scope")
        span {{ scope.row.student.name }}
    el-table-column
      template(slot-scope="scope")
        el-button.absence-button(size='mini', type='primary', @click='atendanceClasses(scope.row.student.id)') 出席
  .dialog-footer(slot='footer')
    el-button(@click="closeClassRosterModal") 閉じる
</template>
<script>
export default {
  props: {
    tableData: { type: Array, required: true },
    outerVisible: { type: Boolean, required: true },
    closeClassRosterModal: { type: Function, required: true },
    atendanceClasses: { type: Function, required: true }
  },
  data: () => ({
  }),
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
