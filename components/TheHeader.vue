<template lang="pug">
div#Header
  span(@click='goHome')#Header-Title アメチェク！
  span#Header-Logout ログアウト

</template>

<script>
export default {
  data: () => ({

  }),
  /*methods:{
    goHome(){
      this.$router.push({ path: ""});
    }
  }*/
}
</script>

<style lang="scss" scoped>
  #Header{
  margin: 20px;
  }

  #Header-Title{
  color: #fff;
  font-size: 27px;
  margin-left: 20px;
  }

  #Header-Logout{
  color: #fff;
  float: right;
  font-size: 27px;
  margin-right: 20px;
  }

</style>
