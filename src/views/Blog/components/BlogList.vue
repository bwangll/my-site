<template>
  <div ref="container" class="blog-list-container" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb">
          <router-link :to="{
            name: 'BlogDetail',
            params: {
              id: item.id
            }
          }">
            <img
                :src="item.thumb"
                :alt="item.title"
                :title="item.title"
            />
          </router-link>
        </div>
        <div class="main">
          <router-link :to="{
            name: 'BlogDetail',
            params: {
              id: item.id
            }
          }">
            <h2>{{ item.title }}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{ format(new Date(Number(item.createDate)), 'yyyy-MM-dd HH:mm:ss') }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论: {{ item.commontNumber }}</span>
            <router-link :to="{
              name: 'CategoryBlog',
              params: {
                id: item.category.id,
              }
            }" class="">{{ item.category.name }}</router-link>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <pager
        :current="routeInfo.page"
        :limit="routeInfo.limit"
        :total="data.total"
        @pageChange="handlePageChange"/>
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData";
import {getBlogs} from "@/api/blog";
import {format} from 'date-fns';

export default {
  name: 'BlogList',
  mixins: [fetchData({})],
  components: {
    Pager
  },
  computed: {
    routeInfo() {
      const categoryId = Number(this.$route.params.categoryId) || -1;
      const page = Number(this.$route.query.page) || 1;
      const limit = Number(this.$route.query.limit) || 10;
      return {
        categoryId,
        page,
        limit
      };
    }
  },
  methods: {
    async fetchData() {
      return await getBlogs(this.routeInfo.categoryId, this.routeInfo.page, this.routeInfo.limit);
    },
    format,
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      }
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({
          name: 'Blog', query
        })
      } else {
        this.$router.push({
          name: 'Blog', query,
          params: {
            categoryId: this.routeInfo.categoryId
          }
        })
      }
    },
  },
  watch: {
    async $route() {
      this.isLoading = true;
      //滚动高度设置为0
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;

  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;

    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }

  .main {
    flex: 1 1 auto;

    h2 {
      margin: 0;
    }
  }

  .aside {
    font-size: 12px;
    color: @gray;

    span {
      margin-right: 15px;
    }
  }

  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
