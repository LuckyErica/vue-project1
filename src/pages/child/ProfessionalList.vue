<template>
  <div v-wechat-title="$route.meta.title" class="professional">
      <div v-if="this.$route.meta.professional">
        <search :name="placeholder"></search>
        <div class="con">
            <div class="options">
                <a class="on">学术性</a>
                <a>专业性</a>
            </div>
            <ul>
                <router-link :to="{ path: 'detail', query: { id: 1}}" tag="li" append class="between"> 
                    <div class="info">
                        <div class="title start">
                            <h3>010108科学与技术哲学</h3><span>专</span>
                        </div>
                        <div class="brief start">
                            <div class="left">方向：</div>
                            <div class="right">
                                <p>01（全日制）科技政策与科技管理</p>
                                <p>02（全日制）科技经济与社会</p>
                            </div>
                        </div>
                    </div>
                    <div class="arrow col center">
                        <img src="../../assets/img/right-arrow.png" style="width:0.4rem;" alt="">
                    </div> 
                </router-link>
                <router-link :to="{ path: 'detail', query: { id: 2}}" tag="li" append class="between">
                    <div class="info">
                        <div class="title start">
                            <h3>010108科学与技术哲学</h3><span class="on">专</span>
                        </div>
                        <div class="brief start">
                            <div class="left">方向：</div>
                            <div class="right">
                                <p>01（全日制）科技政策与科技管理</p>
                                <p>02（全日制）科技经济与社会</p>
                            </div>
                        </div>
                    </div>
                    <div class="arrow col center">
                        <img src="../../assets/img/right-arrow.png" style="width:0.4rem;" alt="">
                    </div> 
                </router-link>
            </ul>
        </div>
      </div>
      <router-view></router-view>
  </div>
</template>
<script>
import Search from "../../components/Search";
export default {
  name: "professional",
  components: {
    Search
  },
  data() {
    return {
      placeholder: "请输入导师姓名"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../style/mixin";
.professional {
  padding-bottom: 0.98rem;
  .con {
    margin-top: 0.9rem;
    padding: 0 0.2rem;
    text-align: left;
    .options {
      padding: 0.4rem 0;
      border-bottom: 0.02rem solid $color5;
      text-align: left;
      a {
        display: inline-block;
        padding: 0.1rem 0.2rem;
        background: $color3;
        margin-right: 0.2rem;
        color: #999;
        border: 0.02rem solid #fff;
        &.on {
          color: $color4;
          border-color: $color4;
        }
      }
    }
    li {
      padding: 0.2rem 0;
      border-bottom: 0.02rem solid $color5;
      .info {
        width: 90%;
        .title {
          padding: 0.1rem 0;
          line-height: 0.5rem;
          h3 {
            max-width: 90%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          span {
            display: inline-block;
            vertical-align: middle;
            margin-top: 0.04rem;
            border: 0.02rem solid $color4;
            color: $color4;
            width: 0.4rem;
            height: 0.4rem;
            line-height: 0.4rem;
            text-align: center;
            margin-left: 0.2rem;
            &.on {
              color: #4fe097;
              border: 0.02rem solid #4fe097;
            }
          }
        }
        .brief {
          line-height: 0.6rem;
          font-size: 0.32rem;
          color: #999;
          p {
            max-width: 90%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .arrow {
        text-align: center;
      }
    }
  }
}
</style>

