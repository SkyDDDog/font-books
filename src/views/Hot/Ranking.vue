<template>
  <div class="warp-box">
    <div class="man-word">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">男生热门榜</div>
        </el-col>
      </el-row>
    </div>
    <div class="category">
      <span class="line"></span><span class="text-category">作品类型</span>
      <div class="category-list">
        <el-radio-group v-for="(item, index) in rankList"  :key="index" v-model="rankListDefault" size="mini">
          <el-radio class="warp-radio" :label="index" border>{{ item.title }}</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div class="category mt50">
      <span class="line"></span><span class="text-category">更多筛选</span>
      <div class="category-list">
        <el-radio-group v-for="(item, index) in screenList" :key="index" v-model="screenDefault" size="mini">
          <el-radio class="warp-radio" :label="index" border>{{ item.title }}</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div class="line"></div>
    <div class="warp-content">
      <div class="warp-books-info" v-for="item in booksListInfo" :key="item._id">
        <div class="warp-books-img">
          <img :src="'http://statics.zhuishushenqi.com' + item.cover">
        </div>
        <div>
          <div>{{item.title}}</div>
          <div class="mt10">{{item.author}} | {{item.minorCate}}</div>
          <div class="mt5 desc-info">{{item.shortIntro}}</div>
          <div class="mt10"><span class="text-color">{{item.latelyFollower}}</span>  人气 ｜ <span class="text-color">{{item.retentionRatio}} </span>  读者存留</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {GetRmale, GetBooksInfo} from '../../api/api'

export default {
  name: "Ranking",
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
    this.getBooksListInfo()
  },
  methods: {
    getRmaleList() {
      GetRmale().then(res => {
        console.log(res.data)
        this.rankList = res.data.male.slice(3, 14)
        this.rankListDefault = this.rankList[0].title
        this.screenList = res.data.picture
        this.screenDefault = this.screenList[0].title
      })
    },
    getBooksListInfo() {
      GetBooksInfo().then(res => {
        this.booksListInfo = res.data.ranking.books.slice(14,30)
        console.log(this.booksListInfo)
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