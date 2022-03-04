<template>
  <div class="warp-box">
    <div class="man-word">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">男生榜</div>
        </el-col>
      </el-row>
    </div>
    <div class="category">
      <span class="line"></span><span class="text-category">作品类型</span>
      <div class="category-list">
        <el-radio-group v-for="(item, index) in rankList" :key="index" v-model="rankListDefault" size="mini">
          <el-radio class="warp-radio" :label="index" border>{{ item.name }}</el-radio>
        </el-radio-group>
      </div>
    </div>
    <!-- <div class="category mt50">
      <span class="line"></span><span class="text-category">更多筛选</span>
      <div class="category-list">
        <el-radio-group v-for="(item, index) in screenList" :key="index" v-model="screenDefault" size="mini">
          <el-radio class="warp-radio" :label="index" border>{{ item.name }}</el-radio>
        </el-radio-group>
      </div>
    </div> -->
    <div class="line"></div>
     <div class="warp-content">
      <div class="warp-books-info" v-for="item in rankList" :key="item._id" @click="jumpBooksInfo(item)">
        <div class="warp-books-img">
          <img :src="item.photo">
        </div>
        <div>
          <div>{{item.name}}</div>
          <div class="mt10">{{item.author}} | {{item.kind}}</div>
          <div class="mt5 desc-info">{{item.info}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {GetRmale, GetBooksInfo} from '../../api/api'

export default {
  name: "Rmale",
  data() {
    return {
      rankList: [],
      rankListDefault: '',
      screenList: [],
      screenDefault: '',
      booksListInfo: []
    }
  },
  mounted() {
    this.getRmaleList()
    // this.getBooksListInfo()
  },
  methods: {
    getRmaleList() {
      GetRmale().then(res => {
        this.rankList = res.data
        console.log(this.rankList, '1122')
        // this.rankListDefault = this.rankList[0].name
        // this.screenList = res.data
        // this.screenDefault = this.screenList[0].name
      })
    },
    getBooksListInfo() {
      GetBooksInfo().then(res => {
        this.booksListInfo = res.data.ranking.books.slice(0,14)
        console.log(this.booksListInfo)
      })
    },
    jumpBooksInfo(item) {
      this.$router.push({
        name: 'Booksinfo',
        query: item
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
      position: relative;
      top: -20px;
      margin-right: 15px;
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