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
    el-button(type="primary" @click='goClass').buttonClass 出席確認

</template>


<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  data: () => ({
    classValue: null,
    subjectValue: null
    //classSellect: null
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

    //...mapMutations( 'classroom', {}),
      
    goClass () {
      this.$router.push({
        path: '/', //'/uploads/photographing',
        query: {
          classId: classValue,
          subjectId: subjectValue
        }
      });
    }
    
  },
}
</script>

<style lang="scss" scoped>
  .divselect{
    padding: 50px;
    padding-left: 100px;
  }
  .teacher{
    font-size: 30px;
    margin: 10px;
  }
  .buttonClass{
    border-radius: 10px;
    width: 180px;
    float: right;
    font-size: 20px;
  }
  .el-select{
    display: block;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
</style>