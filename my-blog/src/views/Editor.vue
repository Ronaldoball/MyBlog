<template>
  <div class="content">
    <!-- <div v-html="strHtml"></div> -->
    <el-row>
      <el-col :span="3">请输入标题</el-col>
      <el-col :span="15">
        <el-input v-model="titleInput" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="3">
        <el-button @click="submit">提交</el-button>
      </el-col>
      <el-col :span="3">
        <el-button @click="clear">清空</el-button>
      </el-col>
    </el-row>
    
    <TinymceEditor
      @input="getInfo"
      v-model="msg"
      :disabled="disabled"
      @onClick="onClick"
      ref="editor"
      class="tinymce-editor"
    ></TinymceEditor>
    
    <!-- <el-button @click="disabled=true">禁用</el-button> -->
  </div>
</template>

<script>
import TinymceEditor from "@/components/TinymceEditor";
export default {
  name: "Editor",
  components: {
    TinymceEditor
  },
  data() {
    return {
      titleInput: "",
      blogId: "",
      //type: "",
      username: "",
      strHtml: "",
      msg: "",
      disabled: false
    };
  },

  mounted() {
    this.username = this.$route.query.username;
    //this.type = this.$route.query.type;
    this.blogId = this.$route.query.blogId;
    this.userId = this.$route.query.userId;
  },

  methods: {
    getInfo(data) {
      let content = data;
      this.strHtml = data;
      console.log(content);
    },

    onClick(e, editor) {
      //   console.log("Element clicked");
      //   console.log(e);
      //   console.log(editor);
    },

    clear() {
      this.$refs.editor.clear();
    },

    submit() {
      let data = {
        title: this.titleInput,
        username: this.username,
        msg: this.strHtml,
        blogId: this.blogId,
        userId: this.userId
      };
      this.$api.submitMsg(data).then(data => {
        if (data.result === "success") {
          this.$message({
            message: "提交成功！",
            type: "success"
          });
          this.$router.push({
            path: "/index",
            query: { username: this.username }
          });
        }
      });
    }
  }
};
</script>

<style>
</style>