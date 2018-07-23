<template lang="pug">
div.result-container
  .mb30
    h1.result-list {{ getHistory.subject.name }} 出席者
    p.date 出欠日：{{ formatDate(getHistory.date) }}
  el-table(:data='getAttendanceResult')
    el-table-column(type="index", width='80%')
    el-table-column(label='名前')
      template(slot-scope='scope')
        span {{ scope.row }}
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.historyId)
  },
  data: () => ({
    historyId: null
  }),

  async created () {
    this.historyId = this.$route.params.historyId
    await this.findAttendanceResult({historyId: this.historyId})
    await this.findHistory({historyId: this.historyId})
  },

  computed: {
    ...mapGetters('result', ['getAttendanceResult']),
    ...mapGetters('history', ['getHistory'])
  },
  methods: {
    ...mapActions('result', ['findAttendanceResult']),
    ...mapActions('history', ['findHistory']),
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
.result-list {
  margin-bottom: 5px;
}
.date {
  font-size: 14px;
}
</style>
