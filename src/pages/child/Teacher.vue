<template>
  <div v-wechat-title="$route.meta.title" class="teacher">
      <search :name="placeholder" @getVal="getInputVal"></search>
      <div class="select center">
          <div class="item" @click="showSelect()">
              <span>选学院</span><em></em>
          </div>
          <div class="item" @click="showSelect()">
              <span>选专业</span><em></em>
          </div>
      </div>
      
      <div class="bg" v-if="isSelect" @click="hideSelect()"></div>
      <div class="selectBox">
        <ul class="selectUl" v-bind:key="1">
        <li v-for="(item, i) in items" class="list-group-item" v-bind:key="i">{{ item }}</li>
        </ul>     
              
        </div >
      
      <ul class="list">
          <li v-for="(item,index) in teacherList" :key="index" class="start">
            <div class="headImg">
                <img :src="item.headImg" alt="">
            </div>
            <div class="info">
                <p class="name"><span>{{item.name}}</span> <span>{{item.job}}</span></p>
                <div class="brief">
                    <p>{{item.school}}</p>
                    <p class="school">{{item.brief}}</p>
                </div>
                
                <p><span>{{item.question}}个问题</span><em>|</em><span>{{item.follow}}人关注</span> </p>
            </div>
            <div class="ask">
                <span>提问</span>
            </div>
          </li>
          <loading :load="loadMore"></loading>
      </ul>
  </div>
</template>
<script>
import Search from "@/components/Search";
import loading from "@/components/Loading";
import {
  getScrollTop,
  getScrollHeight,
  getWindowHeight
} from "@/config/config";
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "teacher",
  components: {
    Search,
    loading
  },
  data() {
    return {
      placeholder: "请输入导师姓名",
      isSelect: false,
      items: [
        "abc",
        "deh",
        "sfs",
        "fhsdjfhds",
        "abc",
        "deh"
      ],
      inputVal:'',
      loadMore: false
    };
  },
  computed: {
    ...mapState({
      teacherList: state => state.teacherStore.teacherList
    })
  },
  mounted() {
    this.getTeacher(this.loadMore);
    let that = this;
    window.onscroll = function() {
      if (getScrollTop() + getWindowHeight() == getScrollHeight()) {
        that.loadMore = true;
        that.getTeacher(this.loadMore);
        // console.log(that.page)
        // that.page += 1;
        // that.get();
      }
    };
  },
  methods: {
    ...mapActions(["getTeacher"]),
    showSelect() {
      var selectBox = document.getElementsByClassName("selectBox")[0]
      if(!this.isSelect){
        this.isSelect = true;
        var h = document.getElementsByClassName("selectUl")[0].offsetHeight
        if(h == 4*50){
          selectBox.style.height = '4rem';
        }else{
          selectBox.style.height = h +'px';
        }
      }else{
        this.isSelect = false;
        selectBox.style.height = 0;
      }
    },
    hideSelect() {
      this.isSelect = false;
      document.getElementsByClassName("selectBox")[0].style.height = 0;
    },
    getInputVal(data) {
      console.log(data);
      this.inputVal = data
    }
  }
};
</script>
<style lang="scss" scoped>
.teacher {
  .select {
    position: fixed;
    left: 0;
    top: 0.9rem;
    height: 0.8rem;
    line-height: 0.8rem;
    width: 100%;
    background: #f2f1f1;
    .item {
      margin: 0 0.6rem;
      em {
        width: 0;
        height: 0;
        display: inline-block;
        border-top: 0.12rem solid #666;
        border-left: 0.08rem solid transparent;
        border-right: 0.08rem solid transparent;
        margin-left: 0.2rem;
      }
    }
  }
  .bg {
    position: fixed;
    left: 0;
    top: 1.7rem;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
  }
  .selectBox {
    position: fixed;
      left: 0;
      top: 1.7rem;
      width: 100%;
    height:0;
    overflow: hidden;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    ul {
      background: #fff;
      padding: 0 0.4rem;
      max-height: 4rem;
      overflow-y: scroll;
    }
    li {
      line-height: 0.8rem;
      text-align: left;
      font-size: 0.3rem;
    }
  }
  ul.list {
    margin-top: 1.7rem;
    padding: 0 0.2rem;

    li {
      border-bottom: 0.02rem solid #ececec;
      padding: 0.2rem 0;
      color: #999;
      text-align: left;
      .headImg {
        width: 1.2rem;
        img {
          display: block;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
        }
      }
      .info {
        width: calc(100% - 2.2rem);
        p.name {
          color: #000;
          span {
            margin-right: 0.2rem;
          }
        }
        .school {
          width: 95%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        em {
          margin: 0 0.2rem;
          color: #eee;
        }
        .brief {
          margin: 0.1rem 0;
          line-height: 0.4rem;
        }
      }
      .ask {
        text-align: right;
        span {
          display: inline-block;
          width: 1rem;
          height: 0.46rem;
          line-height: 0.46rem;
          text-align: center;
          color: #ff8331;
          border: 0.02rem solid #ff8331;
          margin-top: 0.2rem;
        }
      }
    }
  }
}
</style>


