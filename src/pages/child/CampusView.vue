<template>
  <div v-wechat-title="$route.meta.title" class="campusview">
    <vue-waterfall-easy :imgsArr="campusImgList" @scrollLoadImg="fetchImgsData" @preview="showBig">
    
    </vue-waterfall-easy>
    <transition-group  name="zoom" tag="div">
    <div class="box" v-if="showBox" v-bind:key="1">
      <div class="close" @click="closeBox()"><img src="../../assets/img/close.png" alt=""></div>
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item in campusImgList" :key="item.id">
            <img :src="item.src"/>
            
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <p class="col end">{{campusImgList[index].info}}</p>
    </div>
    </transition-group >
  </div>
  
</template>
<script>
import VueWaterfallEasy from '../../components/VueWaterfallEasy'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapGetters, mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: "campusview",
  components: {
    VueWaterfallEasy,
    swiper,
    swiperSlide
  },
  data() {
    return {
      showBox: false,       //存放所有已加载图片的数组（即当前页面会加载的所有图片）
      
       swiperOption: {
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          debugger: true,
        },
        index:0
    };
  },
  computed: {
    ...mapState({
      campusImgList: state => state.campusStore.campusImgList
    }),
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    this.getImg();
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    const that = this;
    this.swiperOption.on =  {
      slideChange() { 
        that.index = this.activeIndex; 
      } 
    }
  },
  methods: {
    ...mapMutations(['fetchImgsData']),
    ...mapActions(['getImg']),
　　　
      showBig(data) {
        console.log(data);
        this.index = data
        this.swiperOption.initialSlide = data
        // this.$refs.mySwiper.slideTo(data, 1000, false)
        this.showBox = true;
      },
      closeBox() {
        this.showBox = false;
      },
      
  }
};
</script>

<style lang="scss" scoped>
.campusview {
  position: fixed;
  left:0; top:0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding:0.1rem;
  .box{ position:fixed; left:0; top:0; bottom:0; right:0; background:#000; color:#fff; padding-top:3rem;
    p{ position:absolute; left:0; bottom:1rem;; right:0; height:3.8rem; line-height:0.5rem; padding:0.4rem; text-align: left; font-size: 0.32rem; }
  }
  .swiper-pagination { position:fixed; bottom:auto; width:auto; left:0.4rem; top:0.4rem;}
  .close { position:absolute; right:0.4rem; top:0.4rem; width:0.6rem; height:0.6rem; }
  img{ display:inline-block; max-width:100%;}
}
</style>

