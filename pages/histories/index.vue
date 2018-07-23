<template lang="pug">
div.result-container
  h1.result-list 出席履歴一覧
  el-table(:data='getHistories')
    el-table-column(type="index", width='80%')
    el-table-column(label='履歴')
      template(slot-scope='scope')
        span {{ formatDate(scope.row.date) }} {{ scope.row.subject.name }}
    el-table-column
      template(slot-scope="scope")
        el-button.absence-button(size='mini', type='primary', @click='goHistory(scope.row.id)') 詳細
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({

  }),

  async created () {
    await this.findHistoryRefineByTeacher()
  },

  computed: {
    ...mapGetters('history', ['getHistories'])
  },

  methods: {
    ...mapActions('history', ['findHistoryRefineByTeacher']),
    goHistory (historyId) {
      this.$router.push(`/histories/${historyId}`)
    },
    formatDate (date) {
      var formattedDate = ''
      date = new Date(date)
      formattedDate = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
      return formattedDate
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
