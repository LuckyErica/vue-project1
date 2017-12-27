<template>
  <div v-wechat-title="$route.meta.title" class="videoD">
      <div class="topCon">
          <div class="videoBox">
            <video class="videoBlock" src="http://www.w3school.com.cn/i/movie.ogg" width="100%" @click="pauseVideo()" @ended="end">
            your browser does not support the video tag
            </video>
            <div class="cover" v-if="cover" @click="playVideo()"><i class="video"></i></div>
          </div>
          
            <span class="title">是的撒更好地方</span>
            
            <div class="con">
                <p>积分活动计划书的设计开发还是地方还是开发建设点击发送卡复活时间快点发货时间的发货时间都符合双方付款胜多负少东方会计师对方就是的地方还是大嫁风尚</p>
                <p>积分活动计划书的设计开发还是地都符合双方付款胜多负少东方会计师对方就是的地方还是大嫁风尚</p>
                <p>积分活动计划书的设计开发还是地方还是开发建设点击发送卡复活时间快点发货时间的发货时间都符合双方付款胜多负少东方会计师对方就是的地方还是大嫁风尚</p>
                <p>积分活动计划书的设计开发还是地都符合双方付款胜多负少东方会计师对方就是的地方还是大嫁风尚</p>
                <p>积分活动计划书的设计开发还是地方还是开发建设点击发送卡复活时间快点发货时间的发货时间都符合双方付款胜多负少东方会计师对方就是的地方还是大嫁风尚</p>
                <p>积分活动计划书的设计开发还是地都符合双方付款胜多负少东方会计师对方就是的地方还是大嫁风尚</p>
                <p>积分活动计划书的设计开发还是地方还是开发建设点击发送卡复活时间快点发货时间的发货时间都符合双方付款胜多负少东方会计师对方就是的地方还是大嫁风尚</p>
                <p>积分活动计划书的设计开发还是地都符合双方付款胜多负少东方会计师对方就是的地方还是大嫁风尚</p>
                <p>积分活动计划书的设计开发还是地方还是开发建设点击发送卡复活时间快点发货时间的发货时间都符合双方付款胜多负少东方会计师对方就是的地方还是大嫁风尚</p>
                <p>积分活动计划书的设计开发还是地都符合双方付款胜多负少东方会计师对方就是的地方还是大嫁风尚</p>
                <div class="half" v-if="arrow"></div>
                <div class="arrow-top arrow-box" v-if="!arrow" @click="hideCon()">
                    <b class="top"><i class="top-arrow1"></i><i class="top-arrow2"></i></b>
                </div>
                <div class="arrow-bottom arrow-box" v-if="arrow" @click="showCon()">
                    <b class="bottom"><i class="bottom-arrow1"></i><i class="bottom-arrow2"></i></b>
                </div>
                
            </div>
      </div> 
      <div class="bottomCon">
           <div class="scoreLine between">
          <span>相关视频</span>
          <div class="arrow">
              <em>查看</em>
              <img src="../../assets/img/right-arrow.png"  alt="">
          </div>
      </div>
          <div class="tujian">
                <ul class="videoList start">
                    <router-link to="videodetail" append tag="li" v-for="item in list" :key="item.id">
                        <div class="cover">
                            <i class="video"></i>
                                <p class="twoh">{{item.title}}</p>
                        </div>
                        <img :src="item.imgUrl" alt="">
                    </router-link>
                </ul>
          </div>
         
    </div>   
  </div>
</template>
<script>
export default {
  name: "videoD",
  data() {
    return {
      cover: true,
      arrow: true,
      list: [
        {
          id: 1,
          imgUrl: "http://www.placehold.it/350x250/",
          title: "胡椒粉和圣诞节防守打法"
        },
        {
          id: 1,
          imgUrl: "http://www.placehold.it/350x250/",
          title: "胡椒粉和圣诞节防守打法"
        },
        {
          id: 1,
          imgUrl: "http://www.placehold.it/350x250/",
          title: "胡椒粉和圣诞节防守打法"
        },
        {
          id: 1,
          imgUrl: "http://www.placehold.it/350x250/",
          title: "胡椒粉和圣诞节防守打法"
        }
      ]
    };
  },
  mounted() {
    console.log();
    document.getElementsByClassName("videoList")[0].style.width =
      this.list.length * 5.2 + "rem";
  },
  methods: {
    playVideo() {
      var vdo = document.getElementsByClassName("videoBlock")[0];
      vdo.play();
      this.cover = false;
    },
    pauseVideo() {
      var vdo = document.getElementsByClassName("videoBlock")[0];
      vdo.pause();
      this.cover = true;
    },
    showCon() {
      document.getElementsByClassName("con")[0].style.height = "auto";
      this.arrow = false;
    },
    hideCon() {
      document.getElementsByClassName("con")[0].style.height = "5rem";
      this.arrow = true;
    },
    end(){
      this.cover = true;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../../style/mixin.scss";
.twoh {
  @include twoh;
}
.scoreLine {
  padding: 0 0.1rem;
  height: 0.88rem;
  line-height: 0.88rem;
  .arrow {
    color: #999;
  }
}
.videoD {
  text-align: left;
  background: #f2f1f6;
}
.tujian {
  width: 100%;
  overflow-x: scroll;
  li {
    position: relative;
    width: 5rem;
    margin: 0 0.1rem;
    text-align: center;
    img {
      display: block;
      width: 100%;
    }
    .cover {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.4);
      i {
        margin-top: 1rem;
        display: block;
      }
      p {
        color: #fff;
        font-size: 0.36rem;
        margin-top: 1.8rem;
        padding: 0 0.6rem;
        line-height: 0.5rem;
      }
    }
  }
}
.topCon {
  background: #fff;
  padding-bottom: 0.6rem;
  position: relative;
}
.videoBox {
  position: relative;
  .cover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    i {
      margin-top: calc(50% - 0.8rem);
      display: block;
    }
  }
}

.title {
  padding: 0.2rem;
  font-size: 0.4rem;
}
.con {
  padding: 0 0.2rem 0.2rem;
  height: 5rem;
  overflow: hidden;
  p {
    margin: 0.2rem 0;
    line-height: 0.4rem;
    text-indent: 2em;
    color: #666;
  }
}
.bottomCon {
  padding: 0.1rem;
  background: #fff;
  margin-top: 0.2rem;
  .arrow{
    img{ height:0.4rem; vertical-align: middle; margin-top:-0.03rem;}
  }
}
.top,
.bottom,.half {
  width: 0.4rem;
  height: 0.4rem;
  display: block;
  position: absolute;
  left: 50%;
  margin-left: -0.2rem;
  bottom: 0.3rem;
  z-index: 2; /*兼容ie8-*/
}
.half{ left:0; bottom:0.7rem; height:80px; width:100%; background: url('../../assets/img/half.png') repeat;}
.top {
  .top-arrow1,
  .top-arrow2 {
    width: 0;
    height: 0;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5; /*兼容ie8-*/
    border-top: 0.2rem transparent dashed;
    border-left: 0.2rem transparent dashed;
    border-right: 0.2rem transparent dashed;
    border-bottom: 0.2rem white solid;
    overflow: hidden;
  }
  .top-arrow1 {
    border-bottom: 0.2rem #666 solid;
  }
  .top-arrow2 {
    top: 0.02rem; /*重要*/
    border-bottom: 0.2rem white solid;
  }
}
.bottom {
  .bottom-arrow1,
  .bottom-arrow2 {
    width: 0;
    height: 0;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5; /*兼容ie8-*/
    border-bottom: 0.2rem transparent dashed;
    border-left: 0.2rem transparent dashed;
    border-right: 0.2rem transparent dashed;
    border-top: 0.2rem white solid;
    overflow: hidden;
  }
  .bottom-arrow1 {
    top: 0.2rem; /*重要*/
    border-top: 0.2rem #666 solid;
  }
  .bottom-arrow2 {
    top: 0.18rem;
    border-top: 0.2rem white solid;
  }
}
</style>


