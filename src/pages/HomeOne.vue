<template>
  <div v-wechat-title="$route.meta.title" class="homeOne" >
    <div class="homeBox" v-if='this.$route.meta.ishome'>
      <div class="con">
        <img class="head" :src="schoolInfo.headImg" alt="">
        <span>{{schoolInfo.schoolName}}</span>
        <div class="brief" :style="'background:rgba('+schoolInfo.themeColor+',0.6)'">
          <p v-for="item in schoolInfo.schoolBrief">{{item}}</p>
        </div>
      </div>
    <div class="slider">
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="item in slideImg" :key="item.id" v-if="slideImg.length">
              <img :src="item.src" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination" v-if="slideImg.length"></div>
          </swiper>
        </div>
      <div class="noticeBlock start">
        <div class="icon col center"><img src="../assets/img/notice.png" alt=""></div>
        <swiper class="noticeSlide" :options="swiperNotice" ref="noticeSwiper">
          <swiper-slide v-for="item in notice" :key="item.id">
            <p>{{item.title}}</p>
          </swiper-slide>
        </swiper>
        <img class="arrow" src="../assets/img/right-arrow.png" alt="">
      </div>
      <ul class="nav start">
        <li v-for="item in iconArr" :key="item.id">
          <div class="iconbox"><i :class="['icon','iconfont',item.css]" :style="{color:item.color}"></i> </div>
          <p>{{item.name}}</p> 
        </li>
      </ul>
    </div>
  <router-view></router-view>
  <div class="botNav start" v-if="this.$route.meta.navShow">
    <div class="item"  @click="to('')"  :style="navActive == '' ? 'color:rgb('+schoolInfo.themeColor+')' :''" >
      <i class="icon iconfont icon-mulu"></i>
      <p>首页</p>
    </div>
    <div class="item" @click="to('admissions')"  :style="navActive == 'admissions' ? 'color:rgb('+schoolInfo.themeColor+')' :''">
      <i class="icon iconfont icon-mulu"></i>
      <p>招生快讯</p>
    </div>
    <div  class="item"  @click="to('professional')"  :style="navActive == 'professional' ? 'color:rgb('+schoolInfo.themeColor+')' :''">
      <i class="icon iconfont icon-mulu"></i>
      <p>专业目录</p>
    </div>
    <div  class="item"  @click="to('academic')"  :style="navActive == 'academic' ? 'color:rgb('+schoolInfo.themeColor+')' :''">
      <i class="icon iconfont icon-mulu"></i>
      <p>院校简介</p>
    </div>
  </div>
  </div>
</template>
<script>
import $ from "jquery";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "home",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      navActive: "",
      swiperOption: {
        //幻灯片
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        runCallbacksOnInit: true,
        onlyExternal: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperNotice: {
        //公告
        autoplayDisableOnInteraction: false,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        direction: "vertical",
        loop: true
      }
    };
  },
  watch: {
    $route(to, from) {
      this.navActive = to.path.split("/")[1];
    }
  },
  computed: {
    ...mapState({
      slideImg: state => state.homeStore.slide,
      notice: state => state.homeStore.notice,
      schoolInfo: state => state.homeStore.schoolInfo,
      iconArr: state => state.homeStore.iconArr
    }),
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  beforeCreate(){
  
  },
  created() {
    this.navActive = this.$route.path.split("/")[1];
    this.getSlideImg(); //获取首页的信息
    var that = this;
    this.swiperOption.on = {
      slideChange() {
        that.button();
      }
    };
  },
  mounted() {
     $(".swiper-pagination-bullet-active").css("background","rgb(" + this.schoolInfo.themeColor + ")")
  },
  methods: {
    ...mapActions(["getSlideImg"]),
    to(data) {
      this.$router.push("/" + data); //导航跳转
    },
    button() {
      //幻灯片索引的颜色
      $(".swiper-pagination-bullet").css("background", "#fff");
      $(".swiper-pagination-bullet-active").css("background","rgb(" + this.schoolInfo.themeColor + ")");
    }
  }
};
</script>



<style lang="scss">
@import "../style/mixin";
.homeBox {
  .swiper-pagination-bullet {
    width: 0.4rem;
    height: 0.1rem;
    display: inline-block;
    border-radius: 0;
    background: #fff;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
  }
  .con {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 9999;
    span {
      font-size: 0.5rem;
      text-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.6);
    }
    color: #fff;
    img.head {
      background: #fff;
      box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);
      display: block;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      margin: 0.4rem auto;
    }
    .brief {
      font-size: 0.32rem;
      margin-top: 0.2rem;
      background: rgba(134, 32, 126, 0.6);
      padding: 0.1rem 0.2rem;
      p {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .slider {
    img {
      width: 100%;
      display: block;
    }
  }
  .noticeBlock {
    width: 100%;
    height: 0.8rem;
    padding: 0.2rem 0;
    overflow: hidden;
    background: $color1;

    .noticeSlide {
      width: calc(100% - 1rem);
      text-align: left;
      p {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .icon {
      width: 0.8rem;
      img {
        display: inline-block;
        width: 0.4rem;
        margin-left: 0.2rem;
      }
    }
    .arrow {
      width: 0.4rem;
      img {
        height: 0.4rem;
      }
    }
  }
  ul.nav {
    flex-wrap: wrap;
    li {
      width: 25%;
      .iconbox {
        margin: 0.2rem auto;
        i {
          font-size: 0.8rem;
        }
      }
      p {
        color: #000;
      }
    }
  }
}
.botNav {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 0.98rem;
  width: 100%;
  background: $color2;
  padding-top: 0.1rem;
  box-shadow: -8px 0 15px rgba(0, 0, 0, 0.2);
  .item {
    width: 25%;

    i {
      font-size: 0.4rem;
    }
  }
  p {
    font-size: 0.24rem;
    margin-top: 0.1rem;
  }
}
</style>


