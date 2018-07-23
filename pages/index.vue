<template lang="pug">

div.container
  el-button(type="primary" @click='goClassSelect').buttonHome 授業選択
  el-button(type="primary" @click="goAttendanceHistory").buttonHome 出席履歴
  el-button(type="primary" @click="goStudents").buttonHome 学生一覧
</template>


<script>

export default {
  data: () => ({

  }),
  methods:{
    goClassSelect () {
      this.$router.push('class-select')
    },

    goAttendanceHistory () {
      this.$router.push('/histories')
    },

    goStudents () {
      this.$router.push('/students')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
