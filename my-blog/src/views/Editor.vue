<template>
  <div class="content">
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
      msg: "",
      disabled: false
    };
  },

  methods: {
    getInfo(data) {
      console.log(data);
    },

    onClick(e, editor) {
      //   console.log("Element clicked");
      //   console.log(e);
      //   console.log(editor);
    },

    clear() {
      this.$refs.editor.clear();
    },

    submit() {}
  }
};
</script>

<style>
</style>