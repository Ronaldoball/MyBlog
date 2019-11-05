<template>
  <div class="content">
    <div class="content-login" v-if="islogin">
      <el-form :model="loginForm" :rules="rules" :ref="loginForm" class="cls-loginForm">
        <el-form-item label="账户" prop="name">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button @click="resign">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="content-sign" v-if="!islogin"></div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      islogin: true,
      loginForm: {
        name: "",
        password: ""
      },

      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],

        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    login() {
      this.$router.push({path:'/index'});
    },

    resign() {}
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

.content-sign {
  position: absolute;
  left: 30%;
  right: 30%;
  top: 25%;
  bottom: 25%;
  /* background-color:chocolate; */
}
</style>