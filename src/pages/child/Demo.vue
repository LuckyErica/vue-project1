<template>
  <div v-wechat-title="$route.meta.title" class="demo">
      <swiper :options="swiperOption" class="swiper-wrap" v-if="imgsArr.length">
      <swiper-slide v-for="(item,index) in imgsArr" :key="index" >
        <span class="title">{{item.link}}</span>
        <img :src="item.src" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" v-if="imgsArr.length>1"></div>
    </swiper>
    <div class="middle"
             @touchstart.prevent="middleTouchStart"
             @touchmove.prevent="middleTouchMove"
             @touchend="middleTouchEnd"
         ref="abc" style="opacity:1">gfdhgdfhfdhd <p>11</p></div>
  </div>
</template>
<script>
import VueAwesomeSwiper from "vue-awesome-swiper";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: { swiper, swiperSlide },
  data() {
    return {
      imgsArr: [
        {
          id: 1,
          src: `http://www.placehold.it/850x250/`,
          link: "",
          info: "1一些图片然后你就可以使用当前上下文内的swiper对象去做你想做的事了描述文字"
        },
        {
          id: 3,
          src: `http://www.placehold.it/380x250/`,
          link: "",
          info: "2一些图片描述文字"
        }
      ], //存放所有已加载图片
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 3000,
        perspective: 15,
        autoplayDisableOnInteraction: false,
        notNextTick: true
      }
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
    console.log(this.$el)
  },
  created() {
    console.log("created");
    console.log(this.$el)
  },
  beforeMount() {
    console.log("beforeMount");
    console.log(this.$el)
  },
  mounted() {
    console.log("mounted");
    console.log(this.$el)
  },
  beforUpdate() {
    console.log("beforUpdate");
    console.log(this.$el)
  },
  updated() {
    console.log("updated");
    console.log(this.$el)
  },
  beforeDestory() {
    console.log("beforeDestory");
    alert(111)
    confirm("确定关闭网站")
  },
  destoryed() {
    console.log("destoryed");
  },
  methods: {
    middleTouchStart(e) {
      const touch = e.touches[0];
      console.log(touch.pageX);
    },
    middleTouchMove(e) {
      console.log(22);
    },
    middleTouchEnd() {
      console.log(33);
    }
  }
};
</script>

<style lang="scss" scoped>
.demo {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 10000;
}
</style>
