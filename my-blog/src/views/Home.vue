<template>
  <div class="site-content">
    <div class="head">
      <div class="logo"></div>
      <div class="select-tabs">
        <MenuList :ListData="TabList" @retClick="retClick"></MenuList>
      </div>
      <div class="personal-data">
        <el-avatar :size="60" :src="imgSrc" class="avatar"></el-avatar>
        <div class="info">
          <i class="el-icon-user-solid"></i>&nbsp&nbsp Ronaldoball
        </div>
        <div class="info">
          <i class="el-icon-phone"></i>&nbsp&nbsp 13151580871
        </div>
        <div class="info">
          <i class="el-icon-user-solid"></i>
        </div>
      </div>
    </div>
    <!-- <el-button @click="getMsg">获取MSG</el-button>
    <div>{{Msg}}</div>-->
    <div class="mian-content">
      <div class="content-msg">{{Msg}}</div>
    </div>
  </div>
</template>

<script>
import MenuList from "@/components/MenuList";
export default {
  name: "Home",
  components: {
    MenuList
  },
  data() {
    return {
      Msg: "",
      TabList: ["首页", "关于", "Blog", "联系"],
      // imgSrc: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      imgSrc:
        "http://www.onegreen.net/QQ/UploadFiles/201301/2013010610372053.jpg"
    };
  },

  methods: {
    retClick(data) {
      //console.log(data);
      if (data === 0) {
        let dataMsg = {
          username: "dxd",
          password: "123456",
          email: "xdduana@163.com"
        };
        this.$api.getMsg(dataMsg).then(data => {
          this.Msg = data.email;
        });
      } else if (data === 1) {
        this.Msg = "";
      } else if (data === 2) {
        this.$api.getJSON().then(data => {
          this.Msg = data.Msg;
        });
      } else if (data === 3) {
        this.Msg = "";
      }
    }
  }
};
</script>

<style scoped>
.info {
  padding-bottom: 5px;
  padding-top: 5px;
}

.avatar {
  margin-left: 20%;
}

.site-content {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
}

.head {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 25%;
  /* background-color:#D7D7D7; */
}

.logo {
  position: absolute;
  left: 20px;
  top: 20px;
  right: 100px;
  height: 68px;
  background-image: url(../assets/img/main/logo.png);
  -moz-background-size: 100% 100%;
  background-size: 100% 100%;
}

.select-tabs {
  position: absolute;
  left: 20px;
  top: 120px;
  height: 44%;
  right: 20px;
}

.personal-data {
  position: absolute;
  left: 20px;
  bottom: 20px;
  right: 20px;
  height: 34%;
}

.mian-content {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 75%;
  background-image: url(../assets/img/main/main-content-bkg.jpg);
  -moz-background-size: 100% 100%;
  background-size: 100% 100%;
}

.content-msg {
  position: absolute;
  left: 100px;
  right: 100px;
  top: 100px;
  bottom: 100px;
  overflow: auto;
}
</style>