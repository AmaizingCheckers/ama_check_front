<template lang="pug">
.mw-600.pLR20
  el-form(@submit.prevent)
    el-form-item(label="Eメール")
      el-input(placeholder="Eメール" v-model="email")
    el-form-item(label="パスワード")
      el-input(type="password" placeholder="パスワード" v-model="password")
    el-form-item
      el-button(type="primary" @click="signIn") ログイン
      el-button(@click="goSignUp") アカウントを登録する
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    email: '',
    password: '',
    isAuthenticationError: false
  }),
  created () {

  },
  computed: {
    ...mapGetters('app', ['loginState'])
  },
  methods: {
    ...mapActions('app', ['login']),
    async signIn () {
      var data = {
        'email': this.email,
        'password': this.password
      }
      await this.login({data: data}).catch(e => {
        if (e.response.status !== 200) {
          this.isAuthenticationError = true
        }
      })
      if (!this.isAuthenticationError) {
        this.$router.replace('/')
      }
    },
    goSignUp () {
      this.$router.push('/common/sign-up')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
