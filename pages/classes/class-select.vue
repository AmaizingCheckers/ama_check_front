<template lang="pug">
div

  div.teacher 〇〇先生

  div.divselect
    el-select(v-model='subjectvalue', placeholder='授業科目を選択してください')
      el-option(v-for='item in subjects', :key='item.subjectvalue', :label='item.subjectlabel', :value='item.subjectvalue')

  div.divselect
    el-select(v-model='classvalue', placeholder='クラスを選択してください')
      el-option(v-for='item in classes', :key='item.classvalue', :label='item.classlabel', :value='item.classvalue')

  el-low
    el-button(type="primary").buttonClass 出席確認

</template>


<script>

export default {
  data: () => ({
    subjects: [{
      subjectvalue: 'Option1',
      subjectlabel: 'Option1'
    }, {
      subjectvalue: 'Option2',
      subjectlabel: 'Option2'
    }, {
      subjectvalue: 'Option3',
      subjectlabel: 'Option3'
    }, {
      subjectvalue: 'Option4',
      subjectlabel: 'Option4'
    }, {
      subjectvalue: 'Option5',
      subjectlabel: 'Option5'
    }],
    subjectvalue: '',

    classes: [{
      classvalue: 'Option1',
      classlabel: 'Option1'
    }, {
      classvalue: 'Option2',
      classlabel: 'Option2'
    }, {
      classvalue: 'Option3',
      classlabel: 'Option3'
    }, {
      classvalue: 'Option4',
      classlabel: 'Option4'
    }, {
      classvalue: 'Option5',
      classlabel: 'Option5'
    }],
    classvalue: ''
  }),

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
