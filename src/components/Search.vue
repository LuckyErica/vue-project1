<template>
  <div class="search start">
          <div class="input start">
              <img src="../assets/img/search.png" alt="" ><input type="text" v-model="inputVal" :placeholder="name">
          </div>
          <span>搜索</span>
      </div>
</template>

<script>
export default {
  name: "search",
  props: {
    name
  },
  data() {
    return {
      inputVal: ""
    };
  },
  watch: {
    inputVal(newV, oldV) {
      this.$emit("getVal", newV);
    }
  },
  methods: {
    //   getVal (e) {
    //       this.$emit("getVal",e.path[0].value)
    //   }
  }
};
</script>


<style lang="scss" scoped>
@import "../style/mixin";
.search {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.9rem;
  background: $color3;
  padding: 0.15rem 0.3rem;
  .input {
    width: 86%;
    height: 0.6rem;
    background: #fff;
    border-radius: 0.3rem;
    padding: 0 0.2rem;
    border: 0.02rem solid $color5;
    line-height: 0.6rem;
    input {
      border: none;
    }
    img {
      height: 0.36rem;
      margin-right: 0.1rem;
      margin-top: 0.1rem;
      margin-right: 0.05rem;
    }
  }
  span {
    font-size: 0.3rem;
    color: $color4;
    display: inline-block;
    width: 15%;
    text-align: center;
    line-height: 0.6rem;
  }
}
</style>
