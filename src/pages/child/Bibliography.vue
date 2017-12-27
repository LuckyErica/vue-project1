<template>
  <div v-wechat-title="$route.meta.title" class="bibliography">
      <search :name="placeholder"></search>
      <div class="table">
          <table border="1" cellpadding="0" cellspacing="0" borderColor="#dadada">
              <thead>
                  <tr>
                      <th width="20%">科目代码</th>
                      <th width="30%">科目名称</th>
                      <th width="50%">参考书目</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>233</td>
                      <td>无机化学</td>
                      <td class="text">覅UR个热加工个较高的国家的关键地方 </td>
                  </tr>
                  <tr>
                      <td>233</td>
                      <td>无机化学</td>
                      <td class="text">覅UR个热加工个较高的国家的关键地方 </td>
                  </tr>
                  <tr>
                      <td>233</td>
                      <td>无机化学</td>
                      <td class="text">覅UR个热加工个较高的国家的关键地方 </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>
<script>
import Search from "../../components/Search";
export default {
  name: "bibliography",
  components: {
    Search
  },
  data() {
    return {
        placeholder:'请输入科目名称'
    };
  }
};
</script>
<style lang="scss" scoped>
.bibliography {
  .table {
    padding: 0.4rem;
    table {
        margin-top:0.9rem;
      width: 100%;
      th{ background: #dadada;padding:0.2rem 0; color:#000}
      td { padding:0.2rem 0.1rem; color: #999;
      &.text { text-align: left}}
      tbody {
         tr:nth-child(odd){ background: #f6f6f6}
      }
    }
  }
}
</style>


