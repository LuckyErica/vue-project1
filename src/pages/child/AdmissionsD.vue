<template>
  <div v-wechat-title="$route.meta.title" class="admissionsDetal">
      <div class="top">
            <h3>苏州大学2018年硕士研究生招生专
            业目录</h3>
            <div class="info end">
                <span><img src="../../assets/img/read.png" alt=""> 1190</span>
                <span>2017年06月10日</span>
            </div>
            <div class="con">
                <p>第一：招生学校的简介，用于向学生传递学
        校的大概情况；第二：招生项目介绍，用于
        向学生传递招生项目的具体内容；第三：招
        生对象及报考要求，对招生范围作出明确划
        分和界定；第四：报名时间，圈定招生时间
        范围；第五：录取原则，表明校方的选择标
        准；第六：收费标准，对招生情况的资金概
        述；第七：联系方式，公布校方招生的联系
        方式，方便学生的咨询和查问；第八：咨询
        热线。</p>
            </div>
      </div>
      <div class="bottom">
          <span>相关阅读</span>
          <ul>
              <li>苏州大学2018年硕士研究生专业目录</li>
              <li>苏州大学2018年硕士研究生专业目录</li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: "admissionsDetal",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.admissionsDetal {
  background: #f7f6f6;
  .top {
    background: #fff;
    padding: 0.2rem;
    h3 {
      line-height: 0.6rem;
      font-size: 0.44rem;
      text-align: left;
    }
    .info {
        padding: 0.2rem 0; line-height: 0.4rem;
        span {
          color: #999;
          margin-right: 0.2rem;
          img{display: inline-block; vertical-align: middle; height:0.4rem; margin-right:0.05rem; margin-top:-0.02rem;}
        }
 
      
    }
    .con {
      border-top: 0.02rem solid #ececec;
      padding: 0.2rem 0;
      font-size: 0.36rem;
      line-height: 0.6rem;
      text-align: left;
    }
  }
  .bottom {
      background: #fff; padding: 0.2rem; text-align: left; margin-top:0.2rem; font-size:0.32rem;
      span{ color:#999; margin-top:0.2rem; display: block}
      li{ margin:0.2rem 0; width:100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #63acff}

  }
}
</style>


