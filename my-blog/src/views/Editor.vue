<template>
  <div class="content">
    <!-- <div v-html="strHtml"></div> -->
    <TinymceEditor
      @input="getInfo"
      v-model="msg"
      :disabled="disabled"
      @onClick="onClick"
      ref="editor"
      class="tinymce-editor"
    ></TinymceEditor>
    <el-button @click="submit">提交</el-button>
    <el-button @click="clear">清空</el-button>
    <el-button @click="disabled=true">禁用</el-button>
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
      username: "",
      strHtml: "",
      msg: "",
      disabled: false
    };
  },

  mounted() {
    this.username = this.$route.query.username;
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
        username: this.username,
        msg: this.strHtml
      };
      this.$api.submitMsg(data).then(data => {
        if (data.result === "success") {
          this.$message({
            message: "提交成功！",
            type: "success"
          });
          this.$router.push({ path: "/index", query: {username: this.username}});
        }
      });
    }
  }
};
</script>

<style>
</style>