<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{active: item.isSelect}" @click="handleClick(item)">{{ item.name }}</span>
      <span
          v-if="item.aside"
          class="aside"
          :class="{active: item.isSelect}"
          @click="handleClick(item)">{{ item.aside }}</span>
      <!-- 显示当前组件 -->
      <right-list :list=" item.children" @select="handleClick"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RightList',
  props: {
    // [ {name: 'xxx', isSelect: true, children: [{name: 'yyy', isSelect: false}]} ]
    list: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit('select', item);
      }
    }
  },
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.right-list-container {
  list-style: none;
  padding: 0;
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    font-size: 14px;
    .aside {
      font-size: 12px;
      margin-left: 1em;
      color: @gray;
    }
    .active {
      color: @warn;
      font-weight: bold;
    }
  }

  .right-list-container {
    margin-left: 1em;
  }

}
</style>
