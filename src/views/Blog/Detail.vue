<template>
  <div class="detail-container">
    <div v-html="data.htmlContent"/>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import {getBlog} from "@/api/blog";

export default {
  mixins: [fetchData({})],
  methods: {
    fetchData() {
      return getBlog(this.$route.params.id);
    }
  },
  beforeMount() {
    document.getElementsByClassName('detail-container')
  }
}
</script>

<style scoped lang="less">
.detail-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
</style>
