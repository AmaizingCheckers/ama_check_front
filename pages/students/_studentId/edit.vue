<template lang="pug">
.mw-800.pLR20
  h1.result-list 学生編集
  el-form(ref="form" :model="form" label-width="90px")
    el-row
      el-col(:span="24")
        el-form-item(label="名前")
          el-input(v-model="form.name")
    el-row
      el-col(:xs="24", :sm="12")
        el-form-item(label="性別")
          el-select(v-model="form.sex" placeholder="性別" style="width: 100%;")
            el-option(label="男" value="男")
            el-option(label="女" value="女")
      el-col(:xs="24", :sm="12")
        el-form-item(label="学年")
          el-select(v-model.number="form.grade" placeholder="学年" style="width: 100%;")
            el-option(label="1" value="1")
            el-option(label="2" value="2")
            el-option(label="3" value="3")
            el-option(label="4" value="4")
    el-row
      el-col(:span="24")
        el-form-item(style="text-align: right;")
          el-button(@click="goPhotoUpload") 写真アップロード
          el-button(type="primary" @click="update") 更新

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    studentId: null,
    form: {
      name: '',
      sex: null,
      grade: null
    }
  }),

  async created () {
    this.studentId = this.$route.params.studentId
    await this.findStudent({studentId: this.studentId})
    this.setStudent()
  },

  computed: {
    ...mapGetters('student', ['getStudent'])
  },

  methods: {
    ...mapActions('student', ['findStudent', 'updateStudent']),
    async update () {
      var params = {
        name: this.form.name,
        sex: this.form.sex === '男' ? 0 : 1,
        grade: this.form.grade
      }
      await this.updateStudent({studentId: this.studentId, params: params})
      this.$router.push('/students')
    },
    setStudent () {
      var student = this.getStudent
      this.form.name = student.name
      this.form.sex = student.sex
      this.form.grade = student.grade
    },
    goPhotoUpload () {
      this.$router.push(`/students/${this.studentId}/upload`)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
