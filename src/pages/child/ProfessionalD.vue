<template>
  <div v-wechat-title="$route.meta.title" class="professionalDetal">
      <h3>010108科学与技术哲学</h3>
      <span class="tag">专业性</span>
      <div class="title">2018年招生人数: <em>12</em> </div>
      <div class="table">
          <table border="1" cellpadding="0" cellspacing="0" borderColor="#dadada">
              <tbody>
                  <tr>
                      <td width="30%">专业方向</td>
                      <td width="70%">
                          <div>
                              <p>01（全日制）金融学</p>
                              <p>02（全日制）区域经济学</p>
                              <p>01（全日制）金融学</p>
                              <p>01（全日制）金融学</p>
                              <p>01（全日制）金融学</p>
                          </div>
                      </td>
                  </tr>
                  <tr>
                      <td>233</td>
                      <td>
                          <div>
                              <p>101 思想政治理论</p>
                              <p>101 思想政治理论</p>
                              <p>101 思想政治理论</p>
                          </div>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div class="scoreLine between">
          <span>历年分数线</span>
          <div class="arrow">
              <em>查看</em>
              <img src="../../assets/img/right-arrow.png" style="height:0.4rem; vertical-align:middle" alt="">
          </div>
      </div>
  </div>
</template>
<script>
import Search from "../../components/Search";
export default {
  name: "professionalDetal",
  components: {
    Search
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>

.professionalDetal {
  text-align: left;
  padding: 0.2rem;
  h3 {
    font-size: 0.4rem;
    font-weight: 100;
  }
  span.tag {
    font-size: 0.32rem;
    color: #999;
  }
  .title {
    margin-top: 0.3rem;
    font-size: 0.32rem;
    em {
      color: #000;
    }
  }
  .scoreLine {
    border-bottom: 0.02rem solid #ececec;
    height: 0.88rem;
    line-height: 0.88rem;
    .arrow {
      color: #999;
    }
  }
  .table {
    padding: 0.2rem 0;
    table {
      width: 100%;
      td {
        padding: 0.2rem 0.1rem;
        text-align: center;
        font-size: 0.32rem;
        line-height: 0.5rem;
        div {
          text-align: left;
          padding: 0 0.2rem;
        }
      }
      tbody {
        tr:nth-child(odd) {
          background: #f6f6f6;
        }
      }
    }
  }
}
</style>


