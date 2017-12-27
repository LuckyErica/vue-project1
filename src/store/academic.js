import axios from 'axios'
export default {
    state: {
        // 院校简介
        academicList:[]
    },
    mutations: {
      
    },
    actions: {
        /**
     * @desc axios异步请求函数 类似jquery的ajax方法
     */
        getAcademic({ commit, state }) {
            axios({
                method: "get",
                url: '../../static/academic.json',
            })
                .then(function (res) {
                    console.log(res.data);
                    var data = res.data;
                    state.academicList = data.academic;
                    
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

}