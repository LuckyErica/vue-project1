import axios from 'axios'
export default {
    state: {
        // 首页幻灯片
        teacherList:[]
    },
    mutations: {
      
    },
    actions: {
        /**
     * @desc axios异步请求函数 类似jquery的ajax方法
     */
        getTeacher({ commit, state },loadmore) {
            axios({
                method: "get",
                url: '../../static/teacher.json',
            })
                .then(function (res) {
                    console.log(res.data);
                    var data = res.data;
                    setTimeout(()=>{
                        state.teacherList = state.teacherList.concat(data.teacherList);
                        loadmore = false;
                    },1000)
                    
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

}