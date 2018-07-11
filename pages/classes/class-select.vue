<template lang="pug">
div

  .teacher {{ getUserName }}先生

  .divselect
    el-select(v-model='classValue', placeholder='クラスを選択してください')
      el-option(v-for='item in classrooms', :key='item.id', :label='item.name', :value='item.id')

  .divselect
    el-select(v-model='subjectValue', placeholder='授業科目を選択してください')
      el-option(v-if='classroom.subjects' v-for='item in classroom.subjects', :key='item.id', :label='item.name', :value='item.id')

  .error-msg.mb30(v-if="error")
    span ※クラスと授業科目を選択してください

  .buttonClass
    el-button(type="primary" @click='goPhoto') 出席確認

</template>


<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  data: () => ({
    classValue: null,
    subjectValue: null,
    error: false
  }),

  created () {
    this.indexClassrooms()
  },

  computed: {
    ...mapGetters('app', ['getUserName']),
    ...mapGetters( 'classroom', ['classroom', 'classrooms'] )
  },

  watch: {
    async classValue (val, oldVal) {
      this.subjectValue = null
      await this.findClassroom({classroomId: this.classValue})
    }
  },

  methods: {
    ...mapActions( 'classroom', {'indexClassrooms': 'index', 'findClassroom': 'find'}),

    goPhoto () {
      if (!this.classValue || !this.subjectValue) {
        this.error = true
        return
      }
      this.$router.push({
        path: '/classes/uploads/photographing',
        query: {
          classId: this.classValue,
          subjectId: this.subjectValue
        }
      });
    }

  },
}
</script>

<style lang="scss" scoped>

</style>
