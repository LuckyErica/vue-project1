<template>
    <div v-wechat-title="$route.meta.title" class="admissions">
        <ul v-if="this.$route.meta.admissions">
           <router-link v-for="(item,index) in admissionList" :key="index" :to="{ path: 'detail', query: { id: item.id}}" tag="li" append>
                <h3>{{item.title}}</h3>
                <div class="info end">
                    <span><img src="../../assets/img/read.png" alt="">{{item.read}}</span>
                    <span>{{item.time}}</span>
                </div>
            </router-link>
            
        </ul>
         <router-view></router-view>
    </div>    
</template>
<script>
import { mapGetters, mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: "admissions",
  data(){
      return {
      }
  },
  computed: {
    ...mapState({
      admissionList: state => state.admissionStore.admissionList
    })
  },
  mounted () {
    this.getAdmission();
    console.log(this.admissionList)
  },
  methods:{
      ...mapActions(['getAdmission']),
      goto(data){
          this.$rotue.push('/detail')
      }
  }
};
</script>
<style lang="scss" scoped>
.admissions {
padding-bottom:0.98rem;
  ul {
    padding:0 0.2rem;
    li {
        padding:0.2rem 0;
      border-bottom: 1px solid #ececec;
      h3 {
        text-align: left;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .info {
        padding: 0.2rem 0; line-height: 0.4rem;
        span {
          color: #999;
          margin-right: 0.2rem;
          img{display: inline-block; vertical-align: middle; height:0.4rem; margin-right:0.05rem; margin-top:-0.02rem;}
        }
      }
    }
  }
}
</style>



