<template>
  <div id="app">
    <!-- <router-view name="header" class="site-header"/> -->
    <router-view name="main"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

/* .site-header {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 30%
} */
</style>
