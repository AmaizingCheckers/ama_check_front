<template lang="pug">
div#Header
  img.logo(src="~/assets/images/logo.png")
  span#Header-Title(@click='goHome') アメチェク！
  #Header-Logout(v-if="loginState" @click="logout")
    img.exit(src="~/assets/images/exit.png")
    span ログアウト

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({

  }),
  computed: {
    ...mapGetters('app', ['loginState'])
  },
  methods:{
    ...mapActions('app', {'appLogout': 'logout'}),
    goHome () {
      if (this.loginState) {
        this.$router.push('/')
      } else {
        this.$router.replace('/welcome')
      }

    },
    logout () {
      this.appLogout()
      this.$router.replace('/welcome')
    }
  }
}
</script>

<style lang="scss" scoped>
img.logo {
  position: relative;
  width: 25px;
  top: 3px;
  margin-right: 10px;
}
img.exit {
  position: relative;
  width: 25px;
  top: 5px;
}
#Header-Title,
#Header-Logout {
  cursor: pointer;
}
</style>
