<template lang="pug">
div.result-container
  h1.result-list 学生一覧
    el-button.roster-button(type='primary', icon='el-icon-circle-plus', circle, @click='goNewStudent')
  el-table(:data='getStudents')
    el-table-column(type="index", width='80%')
    el-table-column(label="名前")
      template(slot-scope='scope')
        span {{ scope.row.name }}
    el-table-column(label='性別')
      template(slot-scope='scope')
        span {{ scope.row.sex }}
    el-table-column(label='学年')
      template(slot-scope='scope')
        span {{ scope.row.grade }}年
    el-table-column
      template(slot-scope="scope")
        el-button.absence-button(size='mini', type='primary', @click='goEditStudent(scope.row.id)') 詳細
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({

  }),

  async created () {
    await this.findStudents()
  },

  computed: {
    ...mapGetters('student', ['getStudents'])
  },

  methods: {
    ...mapActions('student', ['findStudents']),
    goEditStudent (studentId) {
      this.$router.push(`/students/${studentId}/edit`)
    },
    goNewStudent () {
      this.$router.push('/students/new')
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
