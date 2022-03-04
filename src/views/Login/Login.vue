<template>
  <div class="warp-box">
    <h3>请登陆您的账号</h3>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="validateUser">
        <el-input
          type="text"
          v-model="ruleForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPassword" class="mt20">
        <el-input
          type="text"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item class="mt20">
        <el-button
          class="login-btn"
          type="primary"
          @click="submitForm('ruleForm')"
          >登陆</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Login } from "../../api/api";
export default {
  name: "Login",
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      }
    };
    var checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      }
    };
    return {
      ruleForm: {
        username: "lyd",
        password: "123456",
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      let paramsData = {
        name: this.ruleForm.username,
        pwd: this.ruleForm.password,
      };
      console.log(paramsData);
      Login(paramsData).then((res) => {
        if (res.data.message === '登录成功') {
          this.$message({
            message: '恭喜你，登陆成功',
            type: 'success'
          });
          this.$router.push({
            name: "Controller",
          });
        } else {
          this.$message({
            message: '登陆失败，请检查用户名或密码',
            type: 'error'
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped lang="scss">
.warp-box {
  width: 400px;
  height: 300px;
  margin: auto;
  margin-top: 100px;
  & h3 {
    margin-bottom: 40px;
    text-align: center;
    font-size: 36px;
    margin-left: 90px;
  }
  & .login-btn {
    width: 100%;
  }
}
.mt20 {
  margin-top: 20px;
}
</style>
