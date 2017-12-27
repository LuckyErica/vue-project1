  <template>
    <div v-wechat-title="$route.meta.title" class="homethree">
      <div class="top">
        <div class="info">
          <img src="../assets/img/slide.png" alt="">
          <span> 南京师范大学</span>
          <div>
            <a href="">955</a>
            <a href="">211</a>
            <a href="">c9</a>
          </div>
          <div class="brief">
            <p>是教育部直属、中央直管副部级建制的全国重点大学，国家</p>
            <p>是教育部直属、中央直管副部级建制的全国重点大学，国家</p>
          </div>
        </div>
      </div>
      <div class="bottom">
        <ul class="nav start">
      <li>
        <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
        <p>学院概况</p> </li>
        <li>
        <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
        <p>学院概况</p> </li>
        <li>
        <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
        <p>学院概况</p> </li>
        <li>
        <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
        <p>学院概况</p> </li>
        <li>
        <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
        <p>学院概况</p> </li>
        <li>
        <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
        <p>学院概况</p> </li>
        <li>
        <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
        <p>学院概况</p> </li>
        <li>
        <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
        <p>学院概况</p> </li>
        <li>
        <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
        <p>学院概况</p> </li>
        <li>
        <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
        <p>学院概况</p> </li>
        <li>
        <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
        <p>学院概况</p> </li>
        <li>
        <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
        <p>学院概况</p> </li>
        <li>
        <div class="iconbox"><i class="icon iconfont icon-mulu"></i> </div>
        <p>学院概况</p> </li>
    </ul>
      </div>
  </div>
</template>
  <script>
export default {
  name: "homethree"
};
</script>
  <style lang="scss" scoped>
@import "../style/mixin";
.homethree {
  @include fullScreen;
  .top {
    width: 100%;
    height: calc(100% - 2.8rem);
    position: relative;
    background: url("../assets/img/home.png");
    background-size: cover;
    .info {
      width:100%; padding:0.4rem; background: rgba(0,123,87,0.5); color:#fff;
      img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        display: block;
        margin: 0 auto;
      }
      span {font-size: 0.5rem; margin-top:0.2rem; display: block}
      .brief{
      font-size: 0.32rem;
      margin-top: 0.2rem;
      p{
        width:100%; overflow:hidden;text-overflow: ellipsis; white-space: nowrap;
      }
    }
      a{  display: inline-block; width:0.8rem; height:0.4rem; border:0.02rem solid #fff; font-size: 0.28rem; margin:0.2rem 0.1rem; background: rgba(255,255,255,0.1); line-height: 0.4rem; color:#fff}
    }
  }
  .bottom {
    width: 100%;
    height: 2.8rem;
    background: #fff;
    ul.nav {
  flex-wrap: wrap;
  li {
    width:20%; height:1.4rem; border:0.02rem solid #ececec; border-width: 0.02rem 0.02rem 0 0; padding:0.1rem 0; color:#007c57;
    &:nth-child(5n){ border-right:none}
    .iconbox {
      margin: 0.1rem auto;
      i {
        font-size: 0.6rem;
      }
    }
  }
}
  }
}
</style>
