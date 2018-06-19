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

</style>
