import axios from 'axios'
export default {
    state: {
        // 院校简介
        campusImgList: [],
        fetchImgsArr: [
            {id:14, src: `http://www.placehold.it/350x250/`, info: 'qq一些图片描述文字' },
            {id:15, src: `http://www.placehold.it/380x250/`, info: 'aa一些图片描述文字' },
            {id:16, src: `http://www.placehold.it/350x250/`, info: 'ss一些图片描述文字' },
            {id:17, src: `http://www.placehold.it/550x150/`, info: 'dd一些图片描述文字' },
            {id:18, src: `http://www.placehold.it/350x450/`, info: 'ff一些图片描述文字' },
            {id:19, src: `http://www.placehold.it/310x250/`, info: 'gg一些图片描述文字' }
          ],     //存放每次滚动时下一批要加载的图片的数组
    },
    mutations: {
        fetchImgsData(state) {    //获取新的图片数据的方法，用于页面滚动满足条件时调用
            state.campusImgList = state.campusImgList.concat(state.fetchImgsArr)   //数组拼接，把下一批要加载的图片放入所有图片的数组中
        },
    },
    actions: {
        /**
     * @desc axios异步请求函数 类似jquery的ajax方法
     */
        getImg({ commit, state }) {
            axios({
                method: "get",
                url: '../../static/campus.json',
            })
                .then(function (res) {
                    console.log(res.data);
                    var data = res.data;
                    state.campusImgList = data.imgsArr;

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

}