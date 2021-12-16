<template>
  <div class="row-comp">
    <div class="item1">
      <div class="title">热门服务事项</div>
      <div class="content">
        <div class="row row1">
          <div>市场准入科</div>
          <span>9</span>
        </div>
        <div class="row row2">
          <div>市场准入科</div>
          <span>9</span>
        </div>
        <div class="row row3">
          <div>市场准入科</div>
          <span>9</span>
        </div>
        <div class="row row4">
          <div>市场准入科</div>
          <span>9</span>
        </div>
        <div class="row row5">
          <div>市场准入科</div>
          <span>9</span>
        </div>
      </div>
    </div>
    <div class="item2">
      <div class="title">月办件量走势</div>
      <div class="chart1" ref="chart1"></div>
    </div>
    <div class="item3">
      <div class="title">审批事项</div>
      <div class="c-item" v-for="item in 2" :key="item">
        <div class="i-title">城管综治办</div>
        <div class="text">
          1、这里是文字内容，审批事项的内容是文字内容，审批事项！<br />
          2、这里是内容文字内容，审批事项的内容是文字内容。<br />
          3、这里是文字内容，审批事项的内容是文字内容，审批事项！<br />
          4、这里是内容文字内容，审批事项的内容是文字内容。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "row3Comp",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    showChart() {
      let chart1 = echarts.init(this.$refs.chart1);
      let option = {
        yAxis: {
          type: "value",
          axisTick: { show: false },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#202568",
            },
          },
          axisLabel: {
            color: "#202568",
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#202568",
            },
          },
        },
        xAxis: {
          type: "category",
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
          axisTick: { show: false },
          axisLabel: {
            color: "#202568",
            fontSize: 14,
            lineHeight: 20,
            align: "center",
            interval: 0,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#202568",
            },
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#202568",
            },
          },
        },
        legendHoverLink: false,
        labelLine: {
          show: true,
          lineStyle: {
            width: 4,
          },
        },
        legend: {
          type: "plain",
          top: 0,
          right: 50,
          itemWidth: 20,
          itemHeight: 8,
          data: [
            {
              name: "今年",
              itemStyle: {
                color: "#1ACAD9",
              },
              textStyle: {
                color: "#fff",
              },
            },
            {
              name: "去年",
              itemStyle: {
                color: "#157EFB",
              },
              textStyle: {
                color: "#fff",
              },
            },
          ],
        },
        grid: {
          top: "15%",
          left: 0,
          right: 0,
          bottom: 0,
          containLabel: true,
          show: true,
          borderWidth: 1,
          borderColor: "#1F3057",
        },
        series: [
          {
            name: "今年",
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            barWidth: 10,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#1ACAD9" },
                { offset: 0.7, color: "rgba(26, 202, 217, .8)" },
                { offset: 1, color: "transparent" },
              ]),
            },
          },
          {
            name: "去年",
            data: [80, 150, 200, 50, 100, 110, 130],
            type: "bar",
            barWidth: 10,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#157EFB" },
                { offset: 0.7, color: "rgba(21, 126, 251, .9)" },
                { offset: 1, color: "transparent" },
              ]),
            },
          },
        ],
      };
      chart1.setOption(option);
    },
  },
  watch: {},
  created() {},
  mounted() {
    this.showChart();
  },
  updated() {},
  beforeDestroy() {},
  destroyed() {},
};
</script>

<style scoped lang="less">
.row-comp {
  display: flex;
  align-items: stretch;
  height: 320px;
  justify-content: space-between;
  padding: 0 28px;
}
.item1 {
  width: 370px;
  background: url("../assets/img/img24.png") no-repeat center;
  background-size: 100% 100%;
  padding: 30px 40px 30px 30px;
  position: relative;
  .title {
    position: absolute;
    top: 7px;
    left: 7px;
    color: #cff8ff;
    font-size: 20px;
    background: url("../assets/img/img23.png") no-repeat center;
    background-size: 100% 100%;
    height: 40px;
    width: 180px;
    padding: 0 20px;
    line-height: 40px;
  }
  .content {
    margin-top: 40px;
    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 34px;
      & + .row {
        margin-top: 8px;
      }
      &.row1 {
        color: #1e69f1;
        div {
          border-left: 2px solid #1e69f1;
          background: linear-gradient(90deg, fade(#1e69f1, 30), transparent);
        }
      }
      &.row2 {
        color: #f129e5;
        div {
          border-left: 2px solid #f129e5;
          background: linear-gradient(90deg, fade(#f129e5, 30), transparent);
        }
      }
      &.row3 {
        color: #d9fd15;
        div {
          border-left: 2px solid #d9fd15;
          background: linear-gradient(90deg, fade(#d9fd15, 30), transparent);
        }
      }
      &.row4 {
        color: #78ff00;
        div {
          border-left: 2px solid #78ff00;
          background: linear-gradient(90deg, fade(#78ff00, 30), transparent);
        }
      }
      &.row5 {
        color: #ff6508;
        div {
          border-left: 2px solid #ff6508;
          background: linear-gradient(90deg, fade(#ff6508, 30), transparent);
        }
      }
      div {
        height: 24px;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        padding-left: 10px;
        width: 190px;
      }
      span {
        font-weight: bold;
        font-size: 32px;
      }
    }
  }
}
.item2 {
  width: 720px;
  background: url("../assets/img/img26.png") no-repeat center;
  background-size: 100% 100%;
  padding: 60px 40px 30px 30px;
  position: relative;
  display: flex;
  justify-content: space-between;
  .title {
    position: absolute;
    top: 6px;
    left: 7px;
    color: #cff8ff;
    font-size: 20px;
    background: url("../assets/img/img23.png") no-repeat center;
    background-size: 100% 100%;
    height: 40px;
    width: 180px;
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
  background: url("../assets/img/img25.png") no-repeat center;
  background-size: 100% 100%;
  padding: 50px 40px 30px 30px;
  position: relative;
  .title {
    position: absolute;
    top: 5px;
    left: 7px;
    color: #cff8ff;
    font-size: 20px;
    background: url("../assets/img/img23.png") no-repeat center;
    background-size: 100% 100%;
    height: 40px;
    width: 180px;
    padding: 0 20px;
    line-height: 40px;
  }
  .c-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 120px;
    padding: 10px;
    border: 1px dashed #171a46;
    & + .c-item {
      margin-top: 12px;
    }
    .i-title {
      height: 100px;
      width: 40px;
      background: url("../assets/img/img13.png") no-repeat center;
      background-size: 100% 100%;
      writing-mode: vertical-lr;
      writing-mode: tb-lr;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1acad9;
      font-size: 17px;
    }
    .text {
      width: calc(100% - 60px);
      font-size: 14px;
      color: #fff;
    }
  }
}
.chart1 {
  width: 100%;
  height: 230px;
}
</style>
