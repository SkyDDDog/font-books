<template>
  <div class="warp-box">
    <div class="warp-content">
      <div class="warp-books-info" v-for="item in booksListInfo" :key="item._id">
        <div class="warp-books-img">
          <img :src="item.photo">
        </div>
        <div>
          <div>{{item.name}}</div>
          <div class="mt10">{{item.author}} | {{item.kind}}</div>
          <div class="mt5 desc-info">{{item.info}}</div>
          <div class="mt10"><span class="text-color">{{item.rank}}</span>  人气 </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {GetRmale, GetBooksInfo, recommendBooks} from '../../api/api'// 第二步 引入接口

export default {
  name: "Recommend",
  data() {
    return {
      booksListInfo: []
    }
  },
  mounted() {
    // 第五步，调用getrecommendBooks方法
    this.getrecommendBooks()
  },
  methods: {
    //第三步  写入方法
    getrecommendBooks() {
      // 第四步 ，调用接口请求
      recommendBooks().then(res => {
        this.booksListInfo = res.data
      })
    }
  }
}
</script>

<style scoped lang="scss">
.mt50 {
  margin-top: 50px !important;
}

.warp-box {
  cursor: pointer;
  margin: 30px;
  width: 85%;
  margin: auto;

  & .man-word {
    background-color: #cab389;
    color: #fff;
    font-weight: 500;
    border-radius: 3px;
    height: 40px;
    line-height: 39px;
    font-size: 22px;
    padding: 0 15px;
  }

  .category {
    height: 30px;
    margin-top: 20px;
    display: flex;
    align-items: center;

    & .line {
      display: inline-block;
      height: 100%;
      width: 4px;
      background: #cab389;
      margin-right: 15px;
      position: relative;
      top: -20px;
    }

    & .text-category {
      display: inline-block;
      height: 100%;
      line-height: 29px;
    }

    & .warp-radio {
      margin-right: 10px;
      margin-top: 10px;
    }

    & .category-list {
      width: 90%;
      margin-left: 20px;
    }
  }

  & .line {
    margin-top: 40px;
    width: 100%;
    height: 2px;
    background: #eee;
  }

  & .warp-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    & .warp-books-info {
      margin-top: 20px;
      margin-left: 10px;
      margin-right: 10px;
      width: 48%;
      height: 122px;
      display: flex;
      & .warp-books-img img {
        margin-right: 15px;
        width: 92px;
        height: 127px;
      }
      & .desc-info {
        height: 51px;
        overflow: hidden;
      }
      & .text-color {
        color: red;
      }
    }
  }
}
.mt10{
  margin-top: 10px;
}
.mt5 {
  margin-top: 5px;
}
</style>