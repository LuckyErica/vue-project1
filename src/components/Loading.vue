<template>
  <div  class="loading">
      <div v-if="load">加载中...</div>
      <div v-if="!load">已全部加载完毕</div>
  </div>
</template>
<script>
export default {
  name: "search",
  props:{
      load: {
        type: Boolean,
        default: false
    },
  },
  data() {
    return {}
  }
};
</script>

<style lang="scss" scoped>
.loading {
    width:100%; height:0.8rem; line-height:0.8rem; text-align:center; color:#999
}
</style>


