<template>
  <div>
      <el-button @click="getMsg">获取MSG</el-button>
      <div>{{Msg}}</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      Msg: ""
    };
  },

  methods: {
    getMsg() {
      this.$api.getJSON().then((data) => {
        console.log(data);
        console.log(data.id);
        console.log(data.name);
        this.Msg = data.name;
      });
    }
  },  
};
</script>

<style scoped>
</style>