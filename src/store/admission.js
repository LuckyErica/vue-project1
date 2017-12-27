import axios from 'axios'
export default {
    state: {
        // 首页幻灯片
        admissionList:[]
    },
    mutations: {
      
    },
    actions: {
        /**
     * @desc axios异步请求函数 类似jquery的ajax方法
     */
        getAdmission({ commit, state }) {
            axios({
                method: "get",
                url: '../../static/admission.json',
            })
                .then(function (res) {
                    console.log(res.data);
                    var data = res.data;
                    state.admissionList = data.admission;
                    
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

}