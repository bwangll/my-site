<template>
<div class="app-container">
  <layout >
    <template #left>
      <div class="aside">
        <SiteAside/>
      </div>
    </template>
    <template #default>
      <router-view></router-view>
    </template>
  </layout>
</div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";

export default {
  name: 'App',
  components: {
    Layout,
    SiteAside
  }
}
</script>
<style lang="less" scoped>
@import "~@/styles/mixin.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app-container {
  .self-fill(fixed);
  .aside {
    background: green;
    width: 250px;
    height: 100%;
  }
}

.iconfont {
  font-size: 26px;
  color: red;
}
</style>
