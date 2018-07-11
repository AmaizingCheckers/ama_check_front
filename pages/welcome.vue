<template lang="pug">

.mw-600.pLR20.pTB30.alignC
  img(src="~/assets/images/title.png")
  .mb20
    el-button.w-200(type="primary" @click="goSignUp") ユーザー登録
  div
    el-button.w-200(type="primary" @click="goSignIn") ログイン
</template>

<script>
export default {
  data: () => ({

  }),
  methods:{
    goSignUp (){
      this.$router.push('/common/sign-up')
    },
    goSignIn () {
      this.$router.push('/common/sign-in')
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 200px;
  margin-bottom: 30px;
}
button {
  padding: 18px 0;
  font-size: 18px;
}
</style>
