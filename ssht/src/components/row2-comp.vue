<template>
  <div class="row-comp">
    <div class="item1">
      <div class="title">满意度统计</div>
      <div class="content">
        <div class="c-item1"></div>
        <div class="c-item2">
          <div class="row color1">
            <img src="../assets/img/img4.png" alt="" />
            <span>非常满意</span>
            <em>100%</em>
          </div>
          <div class="row color1">
            <img src="../assets/img/img4.png" alt="" />
            <span>满意</span>
            <em>100%</em>
          </div>
          <div class="row color2">
            <img src="../assets/img/img5.png" alt="" />
            <span>基本满意</span>
            <em>100%</em>
          </div>
          <div class="row color3">
            <img src="../assets/img/img6.png" alt="" />
            <span>不满意</span>
            <em>100%</em>
          </div>
          <div class="row color3">
            <img src="../assets/img/img6.png" alt="" />
            <span>非常不满意</span>
            <em>100%</em>
          </div>
        </div>
      </div>
      <div class="text"><i></i> 本月评价条数<span>123</span>条</div>
    </div>
    <div class="item2">
      <div class="title">版块业务量</div>
      <div class="l-wrapper">
        <div class="i-title">
          <img src="../assets/img/img4.png" alt="" />
          <span>办件汇总统计</span>
        </div>
      </div>
      <div class="r-wrapper">
        <div class="i-title">
          <img src="../assets/img/img4.png" alt="" />
          <span>当日办件汇总统计</span>
        </div>
        <div class="row-box">
          <div class="row" v-for="item in 8" :key="item">
            <i></i>
            <div>市场准入科</div>
            <span>8</span>
          </div>
        </div>
      </div>
    </div>
    <div class="item3">
      <table>
        <tr>
          <th>业务部门</th>
          <th>平均办理时间</th>
          <th>平均等待时间</th>
          <th>等待人数</th>
        </tr>
        <tr v-for="item in 7" :key="item">
          <td>项目XX科</td>
          <td>10分钟</td>
          <td>10分钟</td>
          <td>9</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "row2Comp",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
};
</script>

<style scoped lang="less">
.row-comp {
  display: flex;
  align-items: stretch;
  height: 300px;
  justify-content: space-between;
  padding: 0 28px;
  margin-bottom: 30px;
}
.item1 {
  width: 370px;
  background: url("../assets/img/img11.png") no-repeat center;
  background-size: 100% 100%;
  padding: 30px 40px 30px 30px;
  position: relative;
  .title {
    color: #fff;
    font-size: 20px;
    width: 200px;
    height: 34px;
    background: url("../assets/img/img16.png") no-repeat center;
    background-size: 100% 100%;
    position: absolute;
    top: 11px;
    left: 9px;
    line-height: 34px;
    padding-left: 10px;
  }
  .content {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    height: 160px;
    margin-top: 40px;
    .c-item1 {
      width: 150px;
    }
    .c-item2 {
      width: 150px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .row {
        display: flex;
        align-items: center;
        &.color1 {
          color: #69ff65;
          span {
            border: 1px solid #69ff65;
          }
        }
        &.color2 {
          color: #cd9400;
          span {
            border: 1px solid #cd9400;
          }
        }
        &.color3 {
          color: #e63c60;
          span {
            border: 1px solid #e63c60;
          }
        }
        img {
          width: 20px;
          height: 20px;
        }
        span {
          width: 100px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          border-radius: 20px;
          margin: 0 5px;
        }
        em {
          font-style: normal;
        }
      }
    }
  }
  .text {
    font-size: 18px;
    color: #cd9400;
    margin-top: 20px;
    i {
      display: inline-block;
      width: 7px;
      height: 7px;
      background: #cd9400;
      margin-right: 10px;
    }
    span {
      color: #e7ff1c;
      margin: 0 4px;
    }
  }
}
.item2 {
  width: 720px;
  background: url("../assets/img/img11.png") no-repeat center;
  background-size: 100% 100%;
  padding: 60px 40px 30px 30px;
  position: relative;
  display: flex;
  justify-content: space-between;
  .title {
    position: absolute;
    top: 10px;
    left: 9px;
    color: #cff8ff;
    font-size: 20px;
    background: #000;
    height: 40px;
    padding: 0 20px;
    line-height: 40px;
  }
  .i-title {
    color: #62e8ff;
    font-size: 17px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    img {
      width: 22px;
      height: auto;
      margin-right: 10px;
    }
    span {
      position: relative;
      line-height: 30px;
      &:after {
        content: "";
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, #165bc5, #4de0ff);
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
  .row-box {
    width: 320px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .row {
      width: 150px;
      height: 36px;
      display: flex;
      align-items: center;
      position: relative;
      font-size: 17px;
      margin-bottom: 10px;
      &:before {
        content: "";
        width: 100%;
        height: 1px;
        background: #181f7c;
        position: absolute;
        bottom: 0;
        left: 0;
      }
      &:after {
        content: "";
        width: 5px;
        height: 5px;
        background: #444dc7;
        position: absolute;
        bottom: -2px;
        right: 0;
        border-radius: 5px;
      }
      i {
        width: 6px;
        height: 6px;
        background: #1e69f1;
        display: block;
        margin-right: 10px;
      }
      div {
        width: 105px;
      }
      span {
        color: #62e8ff;
      }
    }
  }
}
.item3 {
  width: 720px;
  background: url("../assets/img/img11.png") no-repeat center;
  background-size: 100% 100%;
  padding: 30px 40px 30px 30px;
  position: relative;
  .title {
    position: absolute;
    top: 10px;
    left: 9px;
    color: #cff8ff;
    font-size: 20px;
    background: #000;
    height: 40px;
    padding: 0 20px;
    line-height: 40px;
  }
  table {
    border: 1px solid #181f7c;
    border-bottom: 0;
    border-right: 0;
    width: 100%;
    border-spacing: 0;
    td,
    th {
      border: 1px solid #181f7c;
      border-top: 0;
      border-left: 0;
      padding: 3px 10px;
      text-align: center;
    }
    th {
      background: #000;
    }
  }
}
</style>
