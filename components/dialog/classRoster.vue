<template lang="pug">
el-dialog(title='クラス名簿', :visible.sync='outerVisible', :close-on-click-modal= 'false', :show-close='false')
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
          el-button.absence-button(size='mini', type='primary', @click='atendanceClasses(scope.$index, scope.row)') 出席
  .dialog-footer(slot='footer')
    el-button(@click='toggleClassRosterModal') 閉じる
</template>
<script>
export default {
  props: {
    tableData: { type: Array, required: true },
    outerVisible: { type: Boolean, required: true },
    toggleClassRosterModal: { type: Function, required: true },
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
