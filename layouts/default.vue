<template lang="pug">
el-container
  el-header
    TheHeader
  el-main
    nuxt
</template>


<script>
import TheHeader from '~/components/TheHeader.vue'
import { getAccessToken, getClient, getUid, getUserName } from '~/utils/auth'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    TheHeader
  },
  created () {
    if (process.server) return
    const accessToken = getAccessToken()
    if (typeof accessToken !== 'undefined') {
      this.setAccessToken(accessToken)
    }
    const client = getClient()
    if (typeof client !== 'undefined') {
      this.setClient(client)
    }
    const uid = getUid()
    if (typeof uid !== 'undefined') {
      this.setUid(uid)
    }
    const userName = getUserName()
    if (typeof userName !== 'undefined') {
      this.setUserName(userName)
    }
    if (!this.loginState) {
      this.$router.replace('/welcome')
    }
  },
  computed: {
    ...mapGetters('app', ['loginState'])
  },
  methods: {
    ...mapMutations('app', ['setAccessToken', 'setClient', 'setUid', 'setUserName'])
  }
}
</script>

<style lang="scss" scoped>

</style>
