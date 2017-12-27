<template>
  <div id="app">
    <doc-loading v-if="!isHome"></doc-loading>
    <keep-alive>
      <router-view v-if="isHome == 'one'"></router-view>
      <router-view v-if="isHome == 'two'" name="a"></router-view>
      <router-view v-if="isHome == 'three'" name="b"></router-view>
      <router-view v-if="isHome == 'four'" name="c"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import HomeOne from './pages/HomeOne'
import HomeTwo from './pages/HomeTwo'
import HomeThree from './pages/HomeThree'
import HomeFour from './pages/HomeFour'
import DocLoading from "./components/DocLoading"
import { mapGetters, mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'app',
  components: {
    HomeOne,
    HomeTwo,
    HomeThree,
    HomeFour,
    DocLoading
  },
  data () {
    return{
      // isHome: 'four',
    }
  },
  computed: {
    ...mapState({
      isHome: state => state.homeStore.home,
    })
  },
  created() {
    this.getSlideImg(); //获取首页的信息
    
  },
  methods: {
    ...mapActions(['getSlideImg'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
