<template>
  <div class="content">
    <div class="content-sign">
      <el-form :model="signForm" :rules="signRules" :ref="signForm" class="cls-signForm">
        <el-form-item label="账户" prop="name">
          <el-input placeholder="请输入账户名" v-model="signForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" v-model="signForm.password"></el-input>
        </el-form-item>
        <el-form-item
          label="邮箱"
          prop="email"
          :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
        >
          <el-input placeholder="请输入邮箱" v-model="signForm.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button @click="toLogin">登录</el-button>
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
      signForm: {
        name: "",
        password: "",
        email: ""
      },

      signRules: {
        name: [
          { required: true, message: "请输入账号名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],

        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]

        // email: [
        //   { required: true, message: "请输入邮箱地址", trigger: "blur" },
        //   {
        //     type: "email",
        //     message: "请输入正确的邮箱地址",
        //     trigger: "blur,change"
        //   }
        // ]
      }
    };
  },

  methods: {
    submit() {
      if (
        this.signForm.name !== "" &&
        this.signForm.password !== "" &&
        this.signForm.email !== ""
      ) {
        let data = {
          username: this.signForm.name,
          password: this.signForm.password,
          email: this.signForm.email
        };
        this.$api.submitInfo(data).then(data => {
          if (data.result === "success") {
            this.$message({
              message: "注册成功！",
              type: "success"
            });
            this.$router.push({ path: "/login" });
          } else if (data.result === "isExist") {
            this.$message({
              message: "用户已存在，请重新输入！",
              type: "warning"
            });
          } else if (data.result === "failed") {
            this.$message({
              message: "注册失败！",
              type: "warning"
            });
          }
        });
      } else {
        this.$message({
          message: "用户信息不能为空！",
          type: "warning"
        });
      }
    },
    toLogin() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style scoped>
.content-sign {
  position: absolute;
  left: 30%;
  right: 30%;
  top: 25%;
  bottom: 25%;
  /* background-color:chocolate; */
}
</style>