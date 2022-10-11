<template>
<div class="image-loader-container">
  <img v-if="!everyThingDone" class="placeholder" :src="placeholder" alt="image">
  <img
      @load="handleLoad"
      :src="src"
      :style="{opacity : originOpacity, transition: `${duration}ms`}"
      alt="image">
</div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 10000
    }
  },
  data() {
    return {
      originLoaded: false, //原图是否加载完成
      everyThingDone: false
    }
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    }
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      setTimeout(() => {
        this.everyThingDone = true;
        this.$emit('load');
      }, this.duration);
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .origin {
    filter: blur(2vw);
  }
}
</style>
