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
import axios from 'axios';
import { mapAction,mapGetters } from 'vuex'
export default {
  data: () => ({
    image: '',
    uploadFile: null,
    subject_id: null
  }),
  asyncData(context) {
    return {
      // queryデータ取得
      subject_id: context.query['subjectId']
    }
  },
  methods: {
    //画像ファイル保存
    onFileChange: function(e){
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      if (!files[0].type.match('image.*')) {
        return;
      }
      this.createImage(files[0]);
      this.uploadFile = files[0];
    },
    //画像ファイル表示
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = function(e) {
          vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    //画像ファイル送信
    submitImage: function(e) {
      let  formData = new FormData();
      formData.append('subject_id', this.subject_id);
      formData.append('image', this.uploadFile);
      console.log(formData.get('subject_id'));
      console.log(formData.get('image'));
      let config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      };
      axios
       .post('/api/v1/histories/attendance_image_upload', formData, config)
       .then(function(response) {
          console.log(response);
          this.$router.push({ path: "/results/result"});
           // response 処理
       })
       .catch(function(error) {
           // error 処理
       })
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-container{
  margin-top: 40px;
  margin-left: 33%;
  margin-right: 33%;

}

.upload-block{
  padding: 30%;
  text-align: center;
  border-style: dashed;
  border-color: #70BDFF;
}

.el-icon-plus{
  font-size: 35px;
  color: #70BDFF;
}

.upload-image{
  width: 100%;
}

.input{
  display: none;
}

.camera-block{
  margin-top: 30px;
  font-size: 5px;
  text-align: center;
}

.camera-btn{
  background: #409EFF;
  padding: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-block;
}

.camera-icon{
  width: 80%;
  padding: 2.5px;
}

.btn-block{
  margin-top: 30px;
  text-align: center;
}

.upload-btn{
  border-radius: 25px;
  font-size: 16px;
  padding: 25px;
}

//スマホ対応css
@media (max-width: 599px) {
  .upload-container{
    margin-top: 30px;
    margin-left: 28%;
    margin-right: 28%;
  }

  .upload-image{
    width: 100%;
  }

  .camera-btn{
    background: #409EFF;
    padding: 5px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: inline-block;
  }

  .camera-icon{
    width: 70%;
    padding: 3px;
    margin-top: 3.5px;
  }

  .upload-btn{
    border-radius: 15px;
    font-size: 14px;
    padding: 16px;
  }

}
</style>
