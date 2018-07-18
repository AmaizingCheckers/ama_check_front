<template lang="pug">

div.container
  el-button(type="primary" @click='goClassSelect').buttonHome 授業選択

  el-button(type="primary" disabled).buttonHome 学生一覧
</template>


<script>

export default {
  data: () => ({

  }),
  methods:{
    goClassSelect(){
      this.$router.push({ path: "/classes/select"});
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
