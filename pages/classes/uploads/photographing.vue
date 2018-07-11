<template lang="pug">
div.upload-container
  div.upload-block(v-if='!image')
    i.el-icon-plus
  div(v-else)
    img.upload-image(:src='image')
  div.camera-block
    label.camera-btn(for='file_photo')
      img.camera-icon(src='/camera.png', alt='button')
    input.input#file_photo(type="file" @change="onFileChange")
  div.btn-block
    el-button.upload-btn(type="primary", @click="submitImage") アップロード
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  data: () => ({
    image: null,
    uploadImage: null,
    subjectId: null,
  }),

  created(){
    this.subjectId = this.$route.query.subjectId
    this.setSubject(this.subjectId)
  },

  watch: {
    uploadImage(val, oldVal){
      this.uploadImage = val
      this.setImage(this.uploadImage)

    }
  },

  methods: {
    ...mapMutations('upload', ['setImage','setSubject']),
    ...mapActions('upload', ['postImage']),

    //画像ファイル保存
    onFileChange: function(e){
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      if (!files[0].type.match('image.*')) {
        return
      }
      this.createImage(files[0])
      this.uploadImage = files[0]
    },

    //画像ファイル表示
    createImage(file) {
      var image = new Image()
      var reader = new FileReader()
      var vm = this
      reader.onload = function(e) {
          vm.image = e.target.result
      }
      reader.readAsDataURL(file)
    },

    //結果画面へ遷移
    submitImage () {
      this.postImage()
      this.$router.push({ path: "/classes/uploads/results/result"});
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
