<template lang="pug">
div

  div.teacher 〇〇先生

  div.divselect
    el-select(v-model='classValue', placeholder='クラスを選択してください')
      el-option(v-for='item in classrooms', :key='item.id', :label='item.name', :value='item.id')

  div.divselect
    el-select(v-model='subjectValue', placeholder='授業科目を選択してください')
      el-option(v-if='classroom.subjects' v-for='item in classroom.subjects', :key='item.id', :label='item.name', :value='item.id')

  el-low
    el-button(type="primary" @click='goPhoto').buttonClass 出席確認

</template>


<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  data: () => ({
    classValue: null,
    subjectValue: null
  }),

  created () {
    this.indexClassrooms()
  },

  computed: {
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