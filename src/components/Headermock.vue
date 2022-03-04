<template>
<div>
  <div class="warp-header">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          宇的书展
        </div>
      </el-col>
      <el-col :span="16">
      <div style="display:flex">
        <div class="grid-content bg-purple">
          <el-menu  class="el-menu-demo" mode="horizontal"
                    router
                  background-color="#2c3e50" text-color="#fff" active-text-color="#666666">
            <el-menu-item index="1" :route="{name: 'Home'}">首页</el-menu-item>
            <el-menu-item index="2" :route="{name: 'Rmale'}">排行榜</el-menu-item>
            <el-menu-item index="3" :route="{name: 'Recommend'}">推荐</el-menu-item>
<!--            <el-menu-item index="4" :route="{name: 'Ranking'}">热门</el-menu-item>-->
            <el-menu-item index="5" :route="{name: 'CationBooks'}">分类</el-menu-item>
          </el-menu>
        </div>
        <div><el-input v-model="searchInput"
        @change="getBook"
        placeholder="请输入内容"></el-input></div>
        </div>
      </el-col>
      <el-col :span="4"><div class="grid-content bg-purple">
       <div class="warp-login">
         <div @click="login">登陆</div>
         <div @click="register">注册</div>
       </div>
      </div></el-col>
    </el-row>
  </div>
</div>
</template>
<script>

import { Search} from "../api/api"
export default {
  name: 'headermock',
  data() {
    return {
      searchInput: ''

    }
  },
    mounted() {
  },
  methods: {
    login() {
      this.$router.push({name: "Login"})
    },
    register() {
      this.$router.push({name: "Register"})
    },
  getBook(){
           let paramData = {
          name: this.searchInput,
      }
      Search(paramData).then(res=>{
        this.BookInfo = res.data
      })
    }
  
  }
}
</script>

<style scoped lang="scss">
.warp-header {
  padding: 0 24px;
  cursor: pointer;
  height: 60px;
  background: #2c3e50;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 59px;
}
.warp-login {
  width: 60%;
  display: flex;
  justify-content: space-between;
}
</style>