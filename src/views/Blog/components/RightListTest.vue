<template>
  <div>
    <h1>带有层级的列表</h1>
    <right-list :list="list" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList";

export default {
  components: {
    RightList
  },
  data() {
    return {
      list: [
        {name: 'a', isSelect: false},
        {name: 'b', isSelect: false},
        {name: 'c', isSelect: true, children: [
            {name: 'c-1', isSelect: false},
            {name: 'c-2', isSelect: false, children: [
                {name: 'c-2-1', isSelect: false},
                {name: 'c-2-2', isSelect: false},
                {name: 'c-2-3', isSelect: false},
              ]},
            {name: 'c-3', isSelect: false},
            {name: 'c-4', isSelect: false},
          ]},
        {name: 'd', isSelect: false},
      ]
    }
  },

  methods: {
    handleSelect(item) {
      console.log(item);
    }
  },
}
</script>

<style scoped>

</style>
