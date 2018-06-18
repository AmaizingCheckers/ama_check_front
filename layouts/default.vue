<template lang="pug">
el-container
  el-header
    TheHeader
  el-main
    nuxt
</template>


<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  height: 80px !important;
  background-color: #70BDFF;
}
.el-main{
    padding: 100px;
  }
</style>
