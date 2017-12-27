<template>
    <div v-wechat-title="$route.meta.title" class="academic">
        <div v-if="this.$route.meta.isacademic">
        <search :name="palcehoder"></search>
        <ul class="list">
            <router-link v-for="(item,index) in academicList" :key="index" :to="{ path: 'school', query: { id: 1}}" tag="li" append class="between"> 
                <p class="start"><span>{{item.number}}</span>{{item.school}}</p>
                <div class="arrow col center"><img src="../../assets/img/right-arrow.png" style="width:0.4rem;" alt=""></div>
            </router-link>
        </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import Search from "../../components/Search";
import { mapGetters, mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: "academic",
  components: {
    Search
  },
  data() {
    return {
        palcehoder:'请输入关键字'
    };
  },
  computed: {
    ...mapState({
      academicList: state => state.academicStore.academicList
    })
  },
  mounted () {
    this.getAcademic();
  },
  methods: {
    ...mapActions(['getAcademic'])
  }
};
</script>
<style lang="scss" scoped>
ul {
  margin-top:0.9rem;
  padding: 0 0.2rem;
  li {
      text-align: left;
    padding: 0.2rem 0;
    border-bottom: 0.02rem solid #ececec;
    font-size: 0.32rem;
    line-height: 0.5rem;
    span{ display: inline-block; width:25%}
    p {width:90%;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}
    .arrow { text-align: center}
  }
}
</style>


