<template lang="pug">
div#Header
  span(@click='goHome')#Header-Title アメチェク！
  span#Header-Logout ログアウト

</template>

<script>
export default {
  data: () => ({

  }),
  methods:{
    goHome () {
      this.$router.push({ path: '/' });
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>
