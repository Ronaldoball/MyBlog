<template>
  <div class="content">
    <div class="content-login">
      <el-form :model="loginForm" :rules="loginRules" :ref="loginForm" class="cls-loginForm">
        <el-form-item label="账户" prop="name">
          <el-input placeholder="请输入账户名" v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button @click="toSign">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        name: "",
        password: ""
      },

      loginRules: {
        name: [
          { required: true, message: "请输入账号名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],

        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    login() {
      let data = {
        username: this.loginForm.name,
        password: this.loginForm.password
      };
      console.log(data);

      this.$api.login(data).then(data => {
        console.log(data);
        if (data.result === "success") {
          this.$message({
            message: "登录成功！",
            type: "success"
          });
          this.$router.push({ path: "/index", query: {username: this.loginForm.name}});
        } else if (data.result === "passwordError") {
          this.$message({
            message: "密码输入错误，请重新输入！",
            type: "warning"
          });
        } else if (data.result === "userNotExist") {
          this.$message({
            message: "用户不存在，请重新输入！",
            type: "warning"
          });
        }
      });
      // this.$router.push({path:'/index'});
    },

    toSign() {
      this.$router.push({ path: "/sign"});
    }
  }
};
</script>

<style>
.content-login {
  position: absolute;
  left: 30%;
  right: 30%;
  top: 25%;
  bottom: 25%;
  /* background-color: blue; */
}
</style>