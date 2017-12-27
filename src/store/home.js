import axios from 'axios'
export default {
    state: {
        // 首页幻灯片
        slide: [],
        // 首页公告
        notice: [],
        // 学校描述
        schoolInfo: {},
        // 导航图标
        iconArr: [],
        home:''
    },
    mutations: {
        tocolor(state) { //颜色转换
            var sColor = state.schoolInfo.themeColor.toLowerCase();
            var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            if (sColor && reg.test(sColor)) {
                if (sColor.length === 4) {
                    var sColorNew = "#";
                    for (var i = 1; i < 4; i += 1) {
                        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                    }
                    sColor = sColorNew;
                }

                var sColorChange = [];
                for (var i = 1; i < 7; i += 2) {
                    sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
                }
                
                sColor = "RGB(" + sColorChange.join(",") + ")";
                sColor = sColor.slice(4);
                state.schoolInfo.themeColor = sColor.substring(0, sColor.length - 1);
            }
        },
    },
    actions: {
        /**
     * @desc axios异步请求函数 类似jquery的ajax方法
     */
        getSlideImg({ commit, state }) {
            axios({
                method: "get",
                url: '../../static/home.json',
            })
                .then(function (res) {
                    console.log(res.data);
                    var data = res.data;
                    state.slide = data.slide;
                    state.notice = data.notice;
                    state.schoolInfo = data.schoolInfo;
                    state.iconArr = data.iconArr;
                    state.home = data.home;
                    commit('tocolor')
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

}