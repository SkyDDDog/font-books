<template>
  <div class="warp-box">
    <h3>请注册您的账号</h3>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="validateUser">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPassword" class="mt20">
        <el-input type="text" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="checkperms" class="mt20">
        <el-input type="text" v-model="ruleForm.perms" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item class="mt20">
        <el-button class="register-btn" type="primary" @click="submitForm('ruleForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Register } from "../../api/api";
export default {
  name: "Register",
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      }
    };
    var checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'));
      }
    };
    var checkperms = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('昵称不能为空'));
      }
    };
    return {
      ruleForm: {
        username: '',
        password: '',
        perms: ''
      },
      rules: {
        username: [
          { validator: validateUser, trigger: 'blur' }
        ],
        password: [
          { validator: checkPassword, trigger: 'blur' }
        ],
         perms: [
          { validator: checkperms, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      /**
       * {
  "name": "string",
  "perms": "string",
  "pwd": "string"
}
       * */
      let paramData = {
          name: this.ruleForm.username,
          pwd: this.ruleForm.password,
          nname: this.ruleForm.perms
      }
     Register(paramData).then(res => {
      if(res.data.message === "成功注册为普通用户") {
        this.$message({
          message: '恭喜你，注册成功请登陆',
          type: 'success'
        });
        this.$router.push({
          name: "Login"
        })
      }
     })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped lang="scss">
.warp-box {
  width: 400px;
  height: 300px;
  margin: auto;
  margin-top: 100px;
  & h3 {
    margin-left: 90px;
    margin-bottom: 40px;
    text-align: center;
    font-size: 36px;
  }
  & .register-btn {
    width: 100%;
  }
}
.mt20 {
  margin-top: 20px;
}
</style>