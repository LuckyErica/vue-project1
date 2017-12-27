<template>
  <div v-wechat-title="$route.meta.title" class="school">
      <div class="nav">
          <ul class="start navCon">
              <li :class="[select == 'one' ? 'on':'']" @click="navActive('one')">学院介绍</li>
              <li :class="[select == 'two' ? 'on':'']" @click="navActive('two')">学院特色</li>
              <li :class="[select == 'three' ? 'on':'']" @click="navActive('three')">学院专业</li>
              <li :class="[select == 'four' ? 'on':'']" @click="navActive('four')">学院政策</li>
              <li :class="[select == 'five' ? 'on':'']" @click="navActive('five')">学院微校园</li>
          </ul>

      </div>
      <div class="content">
        <school-brief>
            <div slot="brief" v-if="select == 'one'">
                学院介绍
            </div>
            <div slot="features" class="features" v-if="select == 'two'">
                学院特色
            </div>
            <div slot="majors" class="majors" v-if="select == 'three'">
                <ul class="list">
                    <router-link :to="{ path: '/professional/detail', query: { id: 1}}" tag="li" class="between"> 
                        <p ><span>0001210</span>马克思主义学院<img src="../../assets/img/star.png"  alt=""> </p>
                        <div class="arrow col center"><img src="../../assets/img/right-arrow.png" style="width:0.4rem;" alt=""></div>
                    </router-link>
                    <router-link :to="{ path: '/professional/detail', query: { id: 1}}" tag="li" append class="between"> 
                        <p><span>0001210</span>马克思主义学院</p>
                        <div class="arrow col center"><img src="../../assets/img/right-arrow.png" style="width:0.4rem;" alt=""></div>
                    </router-link>
                    <router-link :to="{ path: '/professional/detail', query: { id: 1}}" tag="li" append class="between"> 
                        <p><span>0001210</span>马克思主义学院</p>
                        <div class="arrow col center"><img src="../../assets/img/right-arrow.png" style="width:0.4rem;" alt=""></div>
                    </router-link>
                </ul>
            </div>
            <div slot="policy" v-if="select == 'four'">
                学院政策
            </div>
            <div slot="campus" v-if="select == 'five'">
                学院微校园
            </div>
        </school-brief>
      </div>
  </div>
</template>
<script>
import SchoolBrief from "./../../components/SchoolBrief";
export default {
  name: "",
  components: {
    SchoolBrief
  },
  data() {
    return {
      select: "one"
    };
  },
  mounted() {
    console.log();
    document.getElementsByClassName("navCon")[0].style.width = 2 * 5 + "rem";
  },
  methods: {
    navActive(data) {
      this.select = data;
    }
  }
};
</script>
<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  background: rgb(248, 248, 248);
  overflow-x: scroll;
  li {
    width: 1.6rem;
    margin: 0 0.2rem;
    height: 0.86rem;
    text-align: center;
    font-size: 0.32rem;
    color: #666;
    border-bottom: 0.04rem solid rgb(248, 248, 248);
    &.on {
      color: rgb(255, 141, 49);
      border-bottom: 0.04rem solid rgb(255, 141, 49);
    }
  }
}
.majors {
  ul {
    padding: 0 0.2rem;
    li {
      text-align: left;
      padding: 0.2rem 0;
      border-bottom: 0.02rem solid #ececec;
      font-size: 0.32rem;
      line-height: 0.5rem;
      span {
        display: inline-block;
        width: 25%;
      }
      p {
        width: 90%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        img{ display: inline-block; height:0.4rem; vertical-align: middle; margin:-0.03rem 0 0 0.05rem;}
      }
      .arrow {
        text-align: center;
      }
    }
  }
}
</style>


