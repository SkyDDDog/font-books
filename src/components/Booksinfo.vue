<template>
<div class="warp-box-info">
  <div class="line"></div>
  <div class="boosinfo">
    <div>
      <img :src="'http://statics.zhuishushenqi.com' + booksInfo.cover">
    </div>
    <div class="div-margint">
      <div>书名: {{booksInfo.title}}</div>
      <div>作者: {{booksInfo.author}}</div>
      <div>分类: {{booksInfo.minorCate}}</div>
      <div>来源： {{boosfrom }}</div>
      <div>小说简介: {{booksInfo.shortIntro}}</div>
    </div>
    <div style="display: flex; height: 44px;">
      <el-button type="primary">加入书架</el-button>
      <el-button type="primary" @click="getAddCollection()">添加收藏</el-button>
    </div>
  </div>
</div>
</template>

<script>
import { AddNovelConnection } from "../api/api"
export default {
 name: "Booksinfo",
  data () {
   return {
     booksInfo: [],
     boosfrom: '优质小说',
   }
  },
  created() {
    this.booksInfo = this.$route.query
    console.log(this.booksInfo)
  },
  methods: {
    getAddCollection(){
      let paramData = {
          novelname: this.booksInfo.title, //書名
          username: "root" // 用戶名
      }
  //     "novelname": "string", // 書名
  // "username": "string"
      AddNovelConnection(paramData).then(res => {
        console.log(res)
        if ( res.status === 200 ){
          this.$message({
            message: '恭喜你，收藏成功',
            type: 'success'
          });
        }
      })
    }
  }

}
</script>

<style scoped lang="scss">
.warp-box-info {
  width: 80%;
  margin: auto;
  & .line {
    height: 2px;
    width: 100%;
    margin: auto;
    margin-top: 40px;
    background: #cab389;
  }
  & .boosinfo {
    margin-top: 30px;
    display: flex;
    & img {
      width: 165px;
    }
    & .div-margint div {
      margin-left: 20px;
      margin-top: 20px;
    }
  }
}
</style>