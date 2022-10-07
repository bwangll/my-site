<template>
  <div class="site-aside-container">
    <avatar url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c"></avatar>
    <h1 class="title">bwang的博客</h1>
    <Menu/>
    <Contact/>
    <p class="footer"></p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/SiteAside/Menu";
import Contact from "@/components/SiteAside/Contact";

export default {
  components: {Avatar, Menu, Contact}
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;

  .avatar-container {
    margin: 0 auto;
  }
  .footer {
    text-align: center;
    font-size: 12px;
  }
  .title {
    font-size: 1.2em;
    color: #ffffff;
    text-align: center;
  }

}
</style>
