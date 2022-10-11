<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <right-list :list="list" @select="handleSelect"></right-list>
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList";
import fetchData from "@/mixins/fetchData";
import {getBlogCategories} from "@/api/blog";

export default {
  mixins: [fetchData([])],
  components: {
    RightList
  },
  computed: {
    categoryId() {
      return Number(this.$route.params.categoryId) || -1;
    },
    list() {
      const totalArticleCount = this.data.reduce((a, b) => a + b.articleCount, 0);
      const result = [{name: '全部', id: -1, articleCount: totalArticleCount}, ...this.data];
      return result.map(item => ({
        ...item,
        isSelect: item.id === this.categoryId,
        aside: `${item.articleCount}篇`
      }));
    },
    limit() {
      return Number(this.$route.query.limit) || 10;
    },
  },
  methods: {
    fetchData() {
      return getBlogCategories();
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      }
      if (item.id === -1) {
        this.$router.push({
          name: 'Blog',
          query
        })
      } else {
        this.$router.push({
          name: 'CategoryBlog',
          query,
          params: {
            categoryId: item.id
          }
        })
      }
    },
  },
}
</script>

<style scoped lang="less">

.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}

</style>
