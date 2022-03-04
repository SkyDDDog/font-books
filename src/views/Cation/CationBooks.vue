<template>
  <div class="box">
    <div class="navlist">
      <el-tabs
        tab-position="left"
        style="height: 100vh; width: 90vw"
        @tab-click="handleClick"
      >
        <el-tab-pane label="都市">
          <div class="warp-content">
            <div
              class="warp-books-info"
              v-for="item in dushiList"
              :key="item._id"
              @click="jumpBooksInfo(item)"
            >
              <div class="warp-books-img">
                <img :src="'http://statics.zhuishushenqi.com' + item.photo" />
              </div>
              <div>
                <div class="mb-15">{{ item.name }}</div>
                <div class="mt10 mb-15">
                  {{ item.author }} | {{ item.kind }}
                </div>
                <div class="mt5 mb-15 desc-info">{{ item.info }}</div>
                <div class="mb-15">
                  <span style="color: red">人气: </span>{{ item.rank }}
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="古典">
          <div class="warp-content">
            <div
              class="warp-books-info"
              v-for="item in gudian"
              :key="item._id"
              @click="jumpBooksInfo(item)"
            >
              <div class="warp-books-img">
                <img :src="'http://statics.zhuishushenqi.com' + item.photo" />
              </div>
              <div>
                <div class="mb-15">{{ item.name }}</div>
                <div class="mt10 mb-15">
                  {{ item.author }} | {{ item.kind }}
                </div>
                <div class="mt5 mb-15 desc-info">{{ item.info }}</div>
                <div class="mb-15">
                  <span style="color: red">人气: </span>{{ item.rank }}
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="玄幻">
          <div class="warp-content">
            <div
              class="warp-books-info"
              v-for="item in xuanhuan"
              :key="item._id"
              @click="jumpBooksInfo(item)"
            >
              <div class="warp-books-img">
                <img :src="'http://statics.zhuishushenqi.com' + item.photo" />
              </div>
              <div>
                <div class="mb-15">{{ item.name }}</div>
                <div class="mt10 mb-15">
                  {{ item.author }} | {{ item.kind }}
                </div>
                <div class="mt5 mb-15 desc-info">{{ item.info }}</div>
                <div class="mb-15">
                  <span style="color: red">人气: </span>{{ item.rank }}
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="悬疑">
          <div class="warp-content">
            <div
              class="warp-books-info"
              v-for="item in xuanyi"
              :key="item._id"
              @click="jumpBooksInfo(item)"
            >
              <div class="warp-books-img">
                <img :src="'http://statics.zhuishushenqi.com' + item.photo" />
              </div>
              <div>
                <div class="mb-15">{{ item.name }}</div>
                <div class="mt10 mb-15">
                  {{ item.author }} | {{ item.kind }}
                </div>
                <div class="mt5 mb-15 desc-info">{{ item.info }}</div>
                <div class="mb-15">
                  <span style="color: red">人气: </span>{{ item.rank }}
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="修真">
          <div class="warp-content">
            <div
              class="warp-books-info"
              v-for="item in xiuzhen"
              :key="item._id"
              @click="jumpBooksInfo(item)"
            >
              <div class="warp-books-img">
                <img :src="'http://statics.zhuishushenqi.com' + item.photo" />
              </div>
              <div>
                <div class="mb-15">{{ item.name }}</div>
                <div class="mt10 mb-15">
                  {{ item.author }} | {{ item.kind }}
                </div>
                <div class="mt5 mb-15 desc-info">{{ item.info }}</div>
                <div class="mb-15">
                  <span style="color: red">人气: </span>{{ item.rank }}
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="游戏">
          <div class="warp-content">
            <div
              class="warp-books-info"
              v-for="item in youxi"
              :key="item._id"
              @click="jumpBooksInfo(item)"
            >
              <div class="warp-books-img">
                <img :src="'http://statics.zhuishushenqi.com' + item.photo" />
              </div>
              <div>
                <div class="mb-15">{{ item.name }}</div>
                <div class="mt10 mb-15">
                  {{ item.author }} | {{ item.kind }}
                </div>
                <div class="mt5 mb-15 desc-info">{{ item.info }}</div>
                <div class="mb-15">
                  <span style="color: red">人气: </span>{{ item.rank }}
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { dushi, gudian, xuanhuan,xuanyi, xiuzhen,youxi  } from "../../api/category";
export default {
  data() {
    return {
      dushiList: [], // 都市
      gudian: [],
      xuanhuan: [],
      xuanyi: [],
      xiuzhen: [],
      youxi: []
    };
  },
  mounted() {
    this.getDushi();
  },
  methods: {
    getDushi() {
      dushi().then((res) => {
        this.dushiList = res.data;
        console.log(this.dushiList);
      });
    },
    getGudian() {
      gudian().then((res) => {
        this.gudian = res.data;
      });
    },
    getxuanhuan() {
      xuanhuan().then((res) => {
        this.xuanhuan = res.data;
      });
    },
    getxiuzhen() {
      xiuzhen().then(res => {
        console.log(res)
        this.xiuzhen = res.data;
      })
    },
    getxuanyi() {
      xuanyi().then(res => {
        this.xuanyi = res.data;
      })
    },
    getyouxi() {
      youxi().then(res => {
        this.youxi = res.data;
      })
    },
    handleClick(tab) {
      let name = tab.label;
      switch (name) {
        case "都市" : this.getDushi();break;
        case "古典" : this.getGudian();break;
        case "玄幻" : this.getxuanhuan();break;
        case "悬疑" : this.getxuanyi(); break;
        case "修真" : this.getxiuzhen();break;
        case "游戏" : this.getyouxi(); break;
        default: return;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.box {
  position: absolute;
  left: 0;
  & .navlist {
    width: 94%;
    margin: auto;
    margin-top: 40px;
    height: 100vh;
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
          height: 44px;
          overflow: hidden;
        }
        & .text-color {
          color: red;
        }
      }
    }
  }
}
.mb-15 {
  padding-bottom: 10px;
}
</style>
