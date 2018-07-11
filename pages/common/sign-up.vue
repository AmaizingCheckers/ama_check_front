<template lang="pug">
.mw-600.pLR20
  el-form(@submit.prevent)
    el-form-item(label="名前")
      el-input(placeholder="名前" v-model="name")
    el-form-item(label="Eメール")
      el-input(placeholder="Eメール" v-model="email")
    el-form-item(label="パスワード")
      el-input(type="password" placeholder="パスワード" v-model="password")
    el-form-item(label="パスワード(再入力)")
      el-input(type="password" placeholder="パスワード(再入力)" v-model="passwordConfirm")
    el-form-item
      el-button(type="primary" @click="signUp") アカウント登録
      el-button(@click="goSignIn") ログインする
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }),
  created () {

  },
  computed: {

  },
  methods: {
    ...mapActions('app', ['registration']),

    async signUp () {
      var data = {
        'name': this.name,
        'email': this.email,
        'password': this.password,
        'password_confirmation': this.passwordConfirm
      }
      if (await this.registration({ data: data }) === 'success') {
        this.$router.replace('/')
      } else {
        this.registrationError = true
      }
    },
    goSignIn () {
      this.$router.push('/common/sign-in')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
