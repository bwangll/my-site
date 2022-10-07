<template>
  <div class="empty-container">
    <icon type="empty"></icon>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {Icon},
  props: {
    text: {
      type: String,
      default: '无数据'
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/minxin.less";

.empty-container {
  text-align: center;
  .self-center();
  color: @gray;

  .icon-container {
    font-size: 72px;
  }
}
</style>
