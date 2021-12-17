<template>
  <div class="row-comp">
    <div class="item1">
      <div class="title">满意度统计</div>
      <div class="content">
        <div class="c-item1">
          <div class="chart2" ref="chart2" />
        </div>
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
          <img src="../assets/img/img21.png" alt="" />
          <span>办件汇总统计</span>
        </div>
        <div class="chart1" ref="chart1" />
      </div>
      <div class="r-wrapper">
        <div class="i-title">
          <img src="../assets/img/img21.png" alt="" />
          <span>当日办件汇总统计</span>
        </div>
        <div class="row-box">
          <div
            class="row"
            v-for="(item, index) in DayServiceStatsList"
            :key="index"
            v-if="index < 8"
          >
            <i></i>
            <div>{{ item.DepartmentName }}</div>
            <span>{{ item.Amount }}</span>
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
        <tr v-for="(item, index) in analysisList" :key="index" v-if="index < 7">
          <td>{{ item.DepartmentName }}</td>
          <td>{{ item.AvgWorkingTime }}分钟</td>
          <td>{{ item.AvgWaitingTime }}分钟</td>
          <td>{{ item.WaitingAmount }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {
  apiGetDepartmentServiceAnalysisList,
  apiGetDepartmentServiceStats,
} from "@/api/api";

export default {
  name: "row2Comp",
  props: {},
  components: {},
  data() {
    return {
      analysisList: [],
      DayServiceStatsList: [],
      TotalServiceStatsList: [],
    };
  },
  computed: {},
  methods: {
    showChart(data) {
      let chart1 = echarts.init(this.$refs.chart1);
      let option = {
        color: [
          "#157EFB",
          "#E63C60",
          "#80FFA5",
          "#00DDFF",
          "#37A2FF",
          "#FF0087",
          "#FFBF00",
        ],
        title: {
          show: false,
        },
        series: [
          {
            name: "办件汇总统计",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: data,
            roseType: "radius",
            label: {
              color: "#fff",
            },
            labelLine: {
              lineStyle: {
                color: "#fff",
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
          },
        ],
      };
      chart1.setOption(option);
    },
    showChart2() {
      let chart2 = echarts.init(this.$refs.chart2);
      let option = {
        title: {
          text: "本月办件满意度",
          show: true,
          bottom: 0,
          left: "center",
          textStyle: {
            color: "#B6D0FF",
            fontSize: 16,
            fontWeight: 400,
          },
        },
        series: [
          {
            type: "gauge",
            progress: {
              show: true,
              width: 8,
              roundCap: true,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#FF2E90" },
                  { offset: 0.5, color: "#FFF442" },
                  { offset: 1, color: "#16FF7E" },
                ]),
              },
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 8,
                color: [[1, "rgba(21, 126, 251, .4)"]],
              },
            },
            pointer: {
              icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
              length: "65%",
              width: 6,
              offsetCenter: [0, 0],
              itemStyle: {
                color: "#1ACAD9",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            anchor: {
              show: false,
            },
            radius: "90%",
            detail: {
              borderRadius: 8,
              valueAnimation: true,
              fontSize: 16,
              color: "#1ACAD9",
              offsetCenter: [0, "50%"],
              formatter: function (value) {
                return value + "%";
              },
            },
            data: [
              {
                value: 40,
                textStyle: {
                  color: "#1ACAD9",
                },
              },
            ],
          },
        ],
      };

      chart2.setOption(option);
    },
    getDepartmentServiceStats() {
      apiGetDepartmentServiceStats().then((res) => {
        this.DayServiceStatsList = res.data.DayServiceStatsList;
        this.TotalServiceStatsList = res.data.TotalServiceStatsList;
        let data = res.data.TotalServiceStatsList.map((item) => {
          return {
            name: item.DepartmentName,
            value: item.Amount,
          };
        });
        this.showChart(data);
      });
    },
    getDepartmentServiceAnalysisList() {
      apiGetDepartmentServiceAnalysisList().then((res) => {
        this.analysisList = res.data;
      });
    },
  },
  watch: {},
  created() {},
  mounted() {
    this.showChart2();
    this.getDepartmentServiceAnalysisList();
    this.getDepartmentServiceStats();
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
  height: 300px;
  justify-content: space-between;
  padding: 0 28px;
  margin-bottom: 30px;
}

.item1 {
  width: 370px;
  background: url("../assets/img/img24.png") no-repeat center;
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
        width: 6px;
        height: 6px;
        background: #444dc7;
        position: absolute;
        bottom: -2px;
        right: 0;
        border-radius: 50%;
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

  .chart1 {
    width: 250px;
    height: 180px;
  }
}

.item3 {
  width: 720px;
  background: url("../assets/img/img25.png") no-repeat center;
  background-size: 100% 100%;
  padding: 25px 40px 30px 30px;
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
    font-size: 17px;

    td,
    th {
      border: 1px solid #181f7c;
      border-top: 0;
      border-left: 0;
      padding: 3px 10px;
      text-align: center;
    }

    th {
      background: #080a30;
      color: #35e2ff;
      font-size: 20px;
    }
  }
}

.chart2 {
  width: 120px;
  height: 150px;
}
</style>
