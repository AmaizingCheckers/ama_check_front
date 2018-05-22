<template lang="pug">
div
  el-low
    el-button(type="primary" @click='goClassSelect')#button 授業選択

    el-button(type="primary")#button 学生一覧

</template>


<script>

export default {
  data: () => ({

  }),
  methods:{
    goClassSelect(){
      this.$router.push({ path: "/classes/class-select"});
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>
