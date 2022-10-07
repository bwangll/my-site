<template>

  <!-- 只有总页数大于1时才显示 -->
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="handleClick(1)" :class="{disabled : current === 1}">|&lt;&lt;</a>
    <a @click="handleClick(current - 1)" :class="{disabled : current === 1}">&lt;&lt;</a>
    <a @click="handleClick(n)" v-for="(n, i) in numbers" :key="i" :class="{active: n === current}">{{ n }}</a>
    <a @click="handleClick(current + 1)" :class="{disabled : current === pageNumber}">&gt;&gt;</a>
    <a @click="handleClick(pageNumber)" :class="{disabled : current === pageNumber}">&gt;&gt;|</a>
  </div>
</template>
<style lang="less" scoped>
@import "~@/styles/var.less";

.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;

  a {
    color: @primary;
    cursor: pointer;
    margin: 0 6px;

    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }

    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>
<script>
export default {
  name: "Pager",
  props: {
    //当前页
    current: {
      type: Number,
      default: 1
    },
    //数据总数
    total: {
      type: Number,
      default: 0
    },
    //每页显示多少个
    limit: {
      type: Number,
      default: 10
    },
    //分页插件显示多少个页码
    visibleNumber: {
      type: Number,
      default: 10
    }
  },
  computed: {
    //总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    numbers() {
      let numbers = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        numbers.push(i);
      }
      return numbers;
    },
    // 页面显示最小的数字
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    }
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }

      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }

      if (newPage === this.current) {
        return;
      }
      this.$emit('pageChange', newPage);
    }
  }
}
</script>
