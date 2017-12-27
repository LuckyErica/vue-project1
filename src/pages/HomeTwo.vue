<template>
  <div v-wechat-title="$route.meta.title" class="homeTwo">
      <div class="cover"></div>
      <div class="con">
        <img class="navImg" src="../assets/img/nav.png" @click="navShow()" alt="">
        <img class="head" :src="schoolInfo.headImg" alt="">
        <span>{{schoolInfo.schoolName}}</span>
        <div class="brief">
          <p v-for="item in schoolInfo.schoolBrief">{{item}}</p>
        </div>
      </div>
      <div class="bg" @click="navHide()"  v-if="isNav"></div>
      <transition name="router-slide">
        <div class="sideNav" v-if="isNav">
            <div class="logo start">
              <img :src="schoolInfo.headImg" alt="">
              <span>{{schoolInfo.schoolName}}</span>
            </div>
            <ul>
              <li v-for="item in iconArr" :key="item.id"><i :class="['icon','iconfont',item.css]" :style="{color:item.color}"></i> {{item.name}}</li>
            </ul>
        </div>
      </transition> 
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: "hometwo",
  data() {
    return {
      isNav: false
    };
  },
   computed: {
    ...mapState({
      slideImg: state => state.homeStore.slide,
      notice: state => state.homeStore.notice,
      schoolInfo: state => state.homeStore.schoolInfo,
      iconArr: state => state.homeStore.iconArr,
    })
  },
  methods: {
    ...mapActions(['getSlideImg']),
    navShow() {
      this.isNav = true;
    },
    navHide() {
      this.isNav = false;
    }
  }
};
</script>
<style lang="scss" scoped>
  @import "../style/mixin";
.homeTwo {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url("../assets/img/home.png");
  background-size: cover;
  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  .con {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding: 0 0.4rem;
    span {
      font-size: 0.5rem;
    }
    color: #fff;
    .navImg {
      position: absolute;
      left: 0.2rem;
      top: 0.2rem;
    }
    img.head {
      display: block;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      margin: 0.4rem auto;
    }
    .brief{
      font-size: 0.32rem;
      margin-top: 0.2rem;
      p{
        width:100%; overflow:hidden;text-overflow: ellipsis; white-space: nowrap;
      }
    }
  }
  .sideNav {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    overflow-y: auto;
    .logo {
      background: rgba(134, 32, 126, 0.8);
      padding: 0.6rem 0.4rem;
      img {
        display: block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
      }
      span {
        margin-left: 0.2rem;
        color: #fff;
        font-size: 0.44rem;
        line-height: 1rem;
      }
    }
    ul {
      width: 100%;
      height: calc(100% - 2.2rem);
      background: #fff;
      text-align: left;
      padding: 0.2rem 0.4rem;
      overflow-y: scroll;
      li {
        margin: 0.4rem 0;
        font-size: 0.32rem;
        color: #000;
        i {
          font-size: 0.4rem;
          margin-right: 0.2rem;
        }
      }
    }
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
}
</style>
