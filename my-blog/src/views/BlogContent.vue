<template>
  <div class="content">
    <div class="blog-content">
      <h1>{{title}}</h1>
      <div class="realContent" v-html="msg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogContent",
  data() {
    return {
      title: "",
      msg: ""
    };
  },

  mounted() {
    this.msg = this.$route.query.msg;
    this.title = this.$route.query.title;
  }
};
</script>

<style>
.content {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  background-image: url(../assets/img/main/main-content-bkg.jpg);
  -moz-background-size: 100% 100%;
  background-size: 100% 100%;
}

.blog-content {
  position: absolute;
  left: 100px;
  right: 100px;
  top: 80px;
  bottom: 20px;
  overflow: auto;
}
</style>