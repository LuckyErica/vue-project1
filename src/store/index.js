import Vue from 'vue'
import Vuex from 'vuex'
import homeStore from './home'
import teacherStore from './teacher'
import admissionStore from './admission'
import academicStore from './academic'
import campusStore from './campus'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        home: 4
    },
    actions: {

    },
    mutations: {  //要改变state的数值的方法，必须写在mutations里
        setHome(state, obj) {
            state.home = obj.home
        },

    },
    getters: {
        home(state) {
            return state.home
        },

    },
    modules: {
        homeStore,
        teacherStore,
        admissionStore,
        academicStore,
        campusStore
      }
})
export default store