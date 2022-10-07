<template>
  <nav class="menu-container">
    <router-link
        :exact="item.exact"
        :to="{name : item.name}"
        active-class="selected"
        exact-active-class=""
        v-for="item in items"
        :key="item.name">
      <div class="icon">
        <icon :type="item.icon"></icon>
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {Icon},
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false, // 只要当前路径以link开头，当前菜单就是选中的
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true
        },
      ],
    };
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.menu-container {
  color: @gray;
  margin: 24px 0;

  a {

    &.selected {
      background: darken(@words, 3%);
    }

    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;

    .icon {
      width: 24px;
    }

    &:hover {
      color: #ffffff;
    }
  }
}
</style>
