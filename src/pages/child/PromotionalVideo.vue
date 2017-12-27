<template>
    <div v-wechat-title="$route.meta.title" class="videoCon">
       <ul v-if="this.$route.meta.isvideo">
           <router-link to="videodetail" append tag="li" >
               <div class="cover">
                   <i class="video"></i>
                    <p class="twoh">积分活动经费和圣诞节粉红色的肺结核适得府君书 </p>
               </div>
               <img src="http://www.placehold.it/350x150/" alt="">
           </router-link>
           <router-link to="videodetail" append tag="li" >
               <div class="cover">
                   <i class="video"></i>
                    <p class="twoh">积分活动经费和圣诞节粉红色的肺结核适得府君书 </p>
               </div>
               <img src="http://www.placehold.it/350x150/" alt="">
           </router-link>
           <router-link to="videodetail" append tag="li" >
               <div class="cover">
                   <i class="video"></i>
                    <p class="twoh">积分活动经费和圣诞节粉红色的肺结核适得府君书 </p>
               </div>
               <img src="http://www.placehold.it/350x150/" alt="">
           </router-link>
           <router-link to="videodetail" append tag="li" >
               <div class="cover">
                   <i class="video"></i>
                    <p class="twoh">积分活动经费和圣诞节粉红色的肺结核适得府君书 </p>
               </div>
               <img src="http://www.placehold.it/350x150/" alt="">
           </router-link>
           <router-link to="videodetail" append tag="li" >
               <div class="cover">
                   <i class="video"></i>
                    <p class="twoh">积分活动经费和圣诞节粉红色的肺结核适得府君书 </p>
               </div>
               <img src="http://www.placehold.it/350x150/" alt="">
           </router-link>
       </ul>
        <router-view></router-view>
    </div> 
</template>
<script>
export default {
  name: "video",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "./../../style/mixin.scss";
.twoh {
  @include twoh;
}
.videoCon {
  height: 100%;
  overflow-y: auto;
}
ul {
  margin-top: -0.2rem;
}
li {
  position: relative;
  margin-top: 0.2rem;
  width: 100%;
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
</style>


