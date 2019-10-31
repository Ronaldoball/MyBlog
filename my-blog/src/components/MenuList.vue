<template>
  <div class="menu-list">
    <div
      class="list-item"
      v-for="(item, index) in ListData"
      :key="index"
      :class="{'list-item-active': (activeIndex === index)}"
      @click="change(index)"
    >
      <div class="btn-content">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuList",
  props: ['ListData'],
  data() {
    return {
      menuVisible: false,
      activeIndex: -1
    };
  },

  methods: {
    change(key) {
      this.activeIndex = key;
      this.$emit('retClick', key);
    }
  }
};
</script>

<style scoped>
.menu-list {
}

.list-item {
  width: 100%;
  height: 60px;
  border-bottom: 1px dashed #000;
  cursor: pointer;
}

.btn-content {
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.list-item-active {
  font-weight: 800;
  width: 100%;
  height: 60px;
  border-bottom: 1px dashed #000;
  cursor: pointer;
}
</style>