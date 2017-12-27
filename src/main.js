// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource' 
import router from './router/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import store from './store'
import _ from 'underscore'


import './style/base.css'
import './style/style.css'
import './style/iconfont.css'
import './assets/js/common.js'
import 'vue2-animate/dist/vue2-animate.min.css';


// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.prototype.$axios = axios;
Vue.prototype._ = _;
Vue.use(VueResource);
Vue.use(require('vue-wechat-title'))

// Vue.prototype.$ = $;

Vue.config.productionTip = false
// window.onload=function () {
//   document.addEventListener('touchstart',function (event) {
//     console.log(1111)
//       if(event.touches.length>1){
//           event.preventDefault();
//       }
//   })
//   var lastTouchEnd=0;
//   document.addEventListener('touchend',function (event) {
//       var now=(new Date()).getTime();
//       if(now-lastTouchEnd<=300){
//           event.preventDefault();
//       }
//       lastTouchEnd=now;
//   },false)
// }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
