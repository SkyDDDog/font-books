<template>
  <div>
    <div class="header">
      <div style="width: 70%"></div>
      <div class="df">
        <div class="username">用户名：lyd</div>
        <div class="logout" style="margin-left: 200px">
          <el-popconfirm title="确认退出吗" @confirm="logout">
            <el-button slot="reference">退出</el-button>
          </el-popconfirm>
        </div>
      </div>
    </div>
    <div style="margin-top: 50px">
      <el-tabs tab-position="left">
        <el-tab-pane label="收藏列表">
          <div class="table-styleTwo">
            <div class="searchinput">
              <el-input
                v-model="searchShou"
                placeholder="请输入用户名查询收藏"
              ></el-input>
            </div>
            <div>
              <el-button size="small" type="warning" @click="getShoucang"
              >查询</el-button
              >
            </div>
          </div>
          <div class="mt-30">
            <el-table :data="shoucang" stripe style="width: 100%">
              <el-table-column prop="name" label="书名" width="180">
              </el-table-column>
              <el-table-column prop="author" label="作者" width="180">
              </el-table-column>
              <el-table-column prop="kind" label="类型"> </el-table-column>
              <el-table-column prop="info" label="介绍"> </el-table-column>
            </el-table>
            <div class="pagination-style">
              <el-pagination
                background
                :current-page="paginationToShouTable.currentPage"
                :page-size="paginationToShouTable.pageSize"
                :page-sizes="paginationToShouTable.pageSizes"
                :total="paginationToShouTable.totalCount"
                @size-change="encapsulationShouSizeChange"
                @current-change="encapsulationShouCurrentChange"
                layout="total, sizes, prev, pager, next, jumper">
              </el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="审核列表">
          <div class="table-styleTwo">
            <div class="searchinput">
              <el-input
                v-model="inputName"
                placeholder="请输入小说名"
              ></el-input>
            </div>
            <div class="searchinput">
              <el-input
                v-model="inputStutas"
                placeholder="是否通过审核(1为通过，0为不通过)"
              ></el-input>
            </div>
            <div>
              <el-button size="small" type="warning" @click="shenheStutas"
              >审核</el-button
              >
            </div>
          </div>
          <div class="mt-30">
            <el-table :data="nopassdata" stripe style="width: 100%">
              <el-table-column prop="name" label="书名" width="180">
              </el-table-column>
              <el-table-column prop="author" label="作者" width="180">
              </el-table-column>
              <el-table-column prop="kind" label="类型"> </el-table-column>
              <el-table-column prop="info" label="介绍"> </el-table-column>
            </el-table>
            <div class="pagination-style">
              <el-pagination
                background
                :current-page="paginationToTable.currentPage"
                :page-size="paginationToTable.pageSize"
                :page-sizes="paginationToTable.pageSizes"
                :total="paginationToTable.totalCount"
                @size-change="encapsulationSizeChange"
                @current-change="encapsulationCurrentChange"
                layout="total, sizes, prev, pager, next, jumper">
              </el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="文件上传">
          <div class="table-upload">
            <el-upload
              class="upload-demo"
              action="http://lyd.vipgz4.91tunnel.com/file/upload"
              multiple
              :limit="3"
            >
              <el-button size="small" type="primary">选择文件</el-button>
            </el-upload>
            <el-button size="small" type="warning" @click="fileUpdate"
              >确认上传</el-button
            >
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { Logout } from "../../api/api";
import { shenhe, noshenhe, shoucang } from "../../api/category";
export default {
  data() {
    return {
      searchShou: '',
      shoucang: [],
      inputName: "",
      inputStutas: "",
      nopassdata: [],
      paginationToTable: {
        currentPage: 1,
        pageSize: 10,
        pageSizes: [10,20,30,40],
        totalCount:10
      },
      paginationToShouTable: {
        currentPage: 1,
        pageSize: 10,
        pageSizes: [10,20,30,40],
        totalCount:10
      },
      files:
        "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",

          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  created() {
    this.getNopass()
  },
  methods: {
    encapsulationShouSizeChange (val) {
      // 修改分页组件中的pageSizes后将currentPage置换为1
      this.paginationToShouTable.currentPage = 1
      // 将获取到pageSizes中的val 赋值给pageSize
      this.paginationToShouTable.pageSize = val
      this.getShoucang(val, 1)
    },
    encapsulationShouCurrentChange (val) {
      // 修改分页组件的currentPage页
      this.paginationToShouTable.currentPage = val
      this.getShoucang(val, this.paginationToShouTable.pageSizes)
    },
    encapsulationSizeChange (val) {
      // 修改分页组件中的pageSizes后将currentPage置换为1
      this.paginationToTable.currentPage = 1
      // 将获取到pageSizes中的val 赋值给pageSize
      this.paginationToTable.pageSize = val
      this.getNopass(val, 1)
    },
    encapsulationCurrentChange (val) {
      // 修改分页组件的currentPage页
      this.paginationToTable.currentPage = val
      this.getNopass(val, this.paginationToTable.pageSizes)
    },
    logout() {
      // Logout().then((res) => {
      //   this.$router.push({
      //     name: 'Login'
      //   })
      // });
      this.$router.push({
        name: 'Login'
      })
    },
    shenheStutas() {
      let dataParams = {};
      shenhe(dataParams).then((res) => {
        console.log(res);
      });
    },
    getNopass() {
      noshenhe().then(res => {
        this.nopassdata = res.data
        this.paginationToTable.totalCount = res.data.length
      })
    },
    getShoucang() {
      let dataParams = {
        username: this.searchShou
      }
      shoucang(dataParams).then(res => {
        this.shoucang = res.data
        this.paginationToShouTable.totalCount = res.data.length
      })
    },
    fileUpdate() {
      this.$message({
        message: "上传成功",
        type: "success",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  display: flex;
  align-items: center;
  background: #2c3e50;
}
.df {
  display: flex;
  align-content: space-between;
  margin-right: 40px;
  align-items: center;
}
.logout {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  border-radius: 40px;
  background: skyblue;
}
.username {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}
.table-styleTwo {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  & .searchinput {
    width: 30%;
  }
}
.pagination-style {
  flex: 1;
  text-align: right;
  margin-top: 30px;
}
.table-upload {
  & .el-form-item {
    margin-top: 10px;
  }
}
.table-upload {
  width: 60%;
  margin: auto;
}
.mt-30 {
  margin-top: 30px;
}
</style>
