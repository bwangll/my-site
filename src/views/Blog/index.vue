<template>
  <Layout>
    <BlogList/>
    <template #right>
      <blog-category></blog-category>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "@/views/Blog/components/BlogList";
import BlogCategory from "@/views/Blog/components/BlogCategory";

export default {
  components: {
    Layout,
    BlogList,
    BlogCategory
  },
  created() {
    // console.log(this.$route);
  }
}
</script>

<style scoped>

</style>
