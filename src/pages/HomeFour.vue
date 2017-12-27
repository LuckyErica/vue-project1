  <template>
    <div v-wechat-title="$route.meta.title" class="homefour">
      <div class="top" v-if="this.$route.meta.ishome">
        <div class="bg"></div>
        <div class="info">
          <img :src="schoolInfo.headImg" alt="">
          <span> {{schoolInfo.schoolName}}</span>
          <div>
            <a v-for="(item,index) in schoolInfo.tag">{{item}}</a>
          </div>
          <div class="brief">
            <p v-for="(item,index) in schoolInfo.schoolBrief" :key="index">{{item}}</p>
          </div>
        </div>
        <div class="nav">
          <transition name="fade">
          <ul class="nav start"  v-if="navSmall">
            <li v-for="(item,index) in navPart" :key="index">
              <div class="iconbox"><i :class="['icon', 'iconfont', item.css]"></i> </div>
              <p>{{item.name}}</p> </li>
              <li @click="showNav()">
              <div class="iconbox"><img src="../assets/img/zhankai.png" alt=""> </div>
              <p>展开</p> </li>
          </ul>
          </transition>
        
        <!-- <transition name="router-slide"> -->
        <transition name="router-bottom">
          
            <ul class="nav start" v-if="navSlide">
              <div class="end">
                <div class="close"  @click="showNav()"><img src="../assets/img/close.png" alt=""></div>
                
              </div>
              <router-link to="/teacher" tag="li" >
              
                <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
                <p>导师列表</p> 
              </router-link >
              <router-link  to="/awardPolicy" tag="li" >
                <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
                <p>奖助政策</p> 
              </router-link>
              <router-link  to="/campusview" tag="li" >
                <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
                <p>校园风光</p> 
              </router-link >
              <router-link  to="/bibliography" tag="li" >
                <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
                <p>参考书目</p> 
              </router-link >
              <router-link  to="/video" tag="li" >
                <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
                <p>宣传视频</p> 
              </router-link >
              <router-link  to="/demo" tag="li" >
                <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
                <p>没有链接</p> 
              </router-link >
              <router-link  to="/teacher" tag="li" >
                <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
                <p>没有链接</p> 
              </router-link >
              <router-link  to="/teacher" tag="li" >
                <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
                <p>没有链接</p> 
              </router-link >
              <router-link  to="/teacher" tag="li" >
                <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
                <p>没有链接</p>
              </router-link >
              <router-link  to="/teacher" tag="li" >
                <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
                <p>没有链接</p> 
              </router-link >
              <router-link  to="/teacher" tag="li" >
                <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
                <p>没有链接</p> 
              </router-link >
              <router-link  to="/teacher" tag="li" >
                <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
                <p>没有链接</p> 
              </router-link >
            </ul>
        </transition>
      </div>
        
      </div>
      <router-view></router-view>
        <div class="botNav start" v-if="this.$route.meta.navShow">
        <div :class="['item',navActive == '' ? 'on' :'']"  @click="to('')">
          <i class="icon iconfont icon-mulu"></i>
          <p>首页</p>
        </div>
        <div :class="['item',navActive == 'admissions' ? 'on' :'']" @click="to('admissions')">
          <i class="icon iconfont icon-mulu"></i>
          <p>招生快讯</p>
        </div>
        <div :class="['item',navActive == 'professional' ? 'on' :'']"  @click="to('professional')">
          <i class="icon iconfont icon-mulu"></i>
          <p>专业目录</p>
        </div>
        <div :class="['item',navActive == 'academic' ? 'on' :'']" @click="to('academic')">
          <i class="icon iconfont icon-mulu"></i>
          <p>院校简介</p>
        </div>
      </div>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "homefour",
  data() {
    return {
      // ishome: true,
      navActive: "",
      navSlide: false,
      navSmall: true,
      navPart:[]
    };
  },
  watch: {
    $route(to, from) {
      this.navActive = to.path.split("/")[1];
    }
  },
  created() {
    this.navActive = this.$route.path.split("/")[1];
    this.getSlideImg(); //获取首页的信息
    this.navPart = this._.first(this.iconArr, 3)
  },
  computed: {
    ...mapState({
      slideImg: state => state.homeStore.slide,
      notice: state => state.homeStore.notice,
      schoolInfo: state => state.homeStore.schoolInfo,
      iconArr: state => state.homeStore.iconArr
    })
  },
  methods: {
    ...mapActions(["getSlideImg"]),
    showNav() {
      console.log(process.env.NODE_ENV)
      var that = this;
      if (this.navSmall) {
        this.navSmall = false;
      } else {
        setTimeout(function() {
          that.navSmall = true;
        }, 300);
      }
      this.navSlide = !this.navSlide;
    },
    to(data) {
      this.$router.push("/" + data);
    }
  }
};
</script>
  <style lang="scss" scoped>
@import "../style/mixin";
.homefour {
  .top {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(100% - 0.98rem);
    background: url("../assets/img/home.png");
    background-size: cover;
    .bg {
      position: absolute;
      left: 0;
      top: 4.8rem;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.2);
    }
    .info {
      width: 100%;
      padding: 0.4rem;
      height: 4.8rem;
      background: rgba(134, 32, 126, 0.8);
      color: #fff;
      img {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        display: block;
        margin: 0 auto;
      }
      span {
        font-size: 0.4rem;
        margin-top: 0.2rem;
        display: block;
      }
      .brief {
        font-size: 0.32rem;
        margin-top: 0.2rem;
        p {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      a {
        display: inline-block;
        width: 0.8rem;
        height: 0.36rem;
        border: 0.02rem solid #fff;
        font-size: 0.24rem;
        margin: 0.2rem 0.1rem;
        background: rgba(255, 255, 255, 0.1);
        line-height: 0.36rem;
        color: #fff;
      }
    }
    .nav {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
    ul.nav {
      flex-wrap: wrap;
      color: #fff;
      padding: 0.4rem 0;
      .end {
        width: 100%;
        .close {
          margin-right: 0.2rem;
        }
        i {
          font-size: 0.4rem;
        }
      }
      li {
        width: 25%;
        padding: 0.15rem 0;
        .iconbox {
          margin: 0.2rem auto;
          height: 60px;
          i {
            font-size: 0.6rem;
          }
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
      &.on {
        i,
        p {
          color: #821671;
        }
      }
      i {
        font-size: 0.4rem;
      }
    }
    p {
      font-size: 0.24rem;
      margin-top: 0.1rem;
    }
  }
}
</style>
