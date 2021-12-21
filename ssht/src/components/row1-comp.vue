<template>
  <div class="row-comp">
    <div class="item1 item">
      <div class="row1">
        <div class="r-item">
          <div class="title">今日取号量</div>
          <div class="num-box">
            <div class="num" v-for="(item, index) in TodayTicket" :key="index">
              {{ item }}
            </div>
            <div class="text">个</div>
          </div>
        </div>
        <div class="r-item">
          <div class="title">今日办件量</div>
          <div class="num-box">
            <div class="num" v-for="(item, index) in TodayService" :key="index">
              {{ item }}
            </div>
            <div class="text">件</div>
          </div>
        </div>
      </div>
      <div class="row2">
        <div>
          <span>本月取号量</span>
          <span>{{ data1.MonthTicket }}</span>
        </div>
        <div>
          <span>本年取号量</span>
          <span>{{ data1.YearTicket }}</span>
        </div>
        <div>
          <span>本月办件量</span>
          <span>{{ data1.MonthService }}</span>
        </div>
        <div>
          <span>本年办件量</span>
          <span>{{ data1.YearService }}</span>
        </div>
        <div>
          <span>日均办件量</span>
          <span>{{ data1.DayAvgService }}</span>
        </div>
        <div>
          <span>正在办件量</span>
          <span>{{ data1.WorkingService }}</span>
        </div>
        <div>
          <span>当前等待量</span>
          <span>{{ data1.WaitingService }}</span>
        </div>
      </div>
    </div>
    <div class="item2 item">
      <div class="title">大厅运行情况</div>
      <div class="l-wrapper">
        <div class="l-item">
          <img src="./../assets/img/img7.png" alt="" />
          <div>审批服务</div>
          <i class="line"></i>
          <span>{{ data2.ApprovalService }}个</span>
        </div>
        <div class="l-item">
          <img src="../assets/img/img2.png" alt="" />
          <div>开设窗口</div>
          <i class="line"></i>
          <span>{{ data2.Counter }}个</span>
        </div>
        <div class="l-item">
          <img src="../assets/img/img19.png" alt="" />
          <div>办事人数</div>
          <i class="line"></i>
          <span>{{ data2.TotalPeople }}个</span>
        </div>
      </div>
      <div class="r-wrapper">
        <div class="r-item">
          <div class="r-t">
            <img src="../assets/img/img10.png" alt="" />
            窗口平均等待时间
          </div>
          <div class="line"></div>
          <div class="r-num">{{ data2.AvgWaitingTime }}<span>分钟</span></div>
        </div>
        <div class="r-item">
          <div class="r-t">
            <img src="../assets/img/img9.png" alt="" />
            窗口平均等待人数
          </div>
          <div class="line"></div>
          <div class="r-num">{{ data2.AvgWaitingPeople }}<span>人次</span></div>
        </div>
        <div class="r-item">
          <div class="r-t">
            <img src="../assets/img/img8.png" alt="" />
            24小时自助服务
          </div>
          <div class="line"></div>
          <div class="r-num">{{ data2.SelfService }}<span>件</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiGetRealtimeInfo, apiGetTotalTicketAndService } from "@/api/api";

export default {
  name: "row1Comp",
  props: {},
  components: {},
  data() {
    return {
      data1: {},
      TodayService: "",
      TodayTicket: "",
      data2: {},
    };
  },
  computed: {},
  methods: {
    getTotalTicketAndService() {
      apiGetTotalTicketAndService().then((res) => {
        this.data1 = res.data;
        this.TodayService = this.data1.TodayService.toString();
        this.TodayTicket = this.data1.TodayTicket.toString();
      });
    },
    getRealtimeInfo() {
      apiGetRealtimeInfo().then((res) => {
        this.data2 = res.data;
      });
    },
  },
  watch: {},
  created() {
    this.getTotalTicketAndService();
    this.getRealtimeInfo();
    setInterval(() => {
      this.getTotalTicketAndService();
      this.getRealtimeInfo();
    }, 1000 * 60 * 2);
  },
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
  justify-content: space-between;
  padding: 28px;

  .item {
    width: 920px;
    height: 240px;
    background: url("../assets/img/img12.png") no-repeat center;
    background-size: 100%;
    padding: 30px 40px 30px 30px;
  }
}

.item1 {
  .row1 {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .r-item {
      display: flex;
      align-items: center;
      .title {
        font-style: italic;
        color: #cff8ff;
        font-size: 20px;
        margin-bottom: 10px;
        margin-right: 20px;
      }

      .num-box {
        display: flex;
        align-items: center;

        .text {
          font-size: 32px;
          color: #61e8ff;
          padding: 0 12px;
        }

        .num {
          width: 54px;
          height: 54px;
          background: url("../assets/img/img1.png") no-repeat center;
          background-size: 100% 100%;
          font-size: 36px;
          color: #f6b50e;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;

          & + .num {
            margin-left: 18px;
          }
        }
      }
    }
  }

  .row2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    div {
      width: 120px;
      height: 80px;
      padding: 10px;
      background: url("../assets/img/img22.png") no-repeat center;
      background-size: 100% 100%;

      span:first-child {
        font-size: 17px;
        color: #90b7ff;
        display: block;
        margin-bottom: 6px;
        margin-top: 3px;
      }

      span:last-child {
        font-size: 20px;
        color: #fff;
        text-align: center;
        display: block;
      }
    }
  }
}

.item2 {
  position: relative;

  > .title {
    position: absolute;
    top: 8px;
    left: 8px;
    color: #cff8ff;
    font-size: 20px;
    background: url("../assets/img/img23.png") no-repeat center;
    background-size: 100% 100%;
    height: 40px;
    width: 180px;
    padding: 0 20px;
    line-height: 40px;
  }

  .l-wrapper {
    display: flex;
    padding-top: 20px;

    .l-item {
      width: 145px;
      height: 165px;
      display: flex;
      flex-direction: column;
      margin: 0 20px;
      padding-top: 30px;
      align-items: center;
      background: url("../assets/img/img20.png") no-repeat center;
      background-size: 100% 100%;

      img {
        height: 28px;
        width: auto;
        margin-bottom: 10px;
      }

      div {
        color: #fff;
        font-size: 20px;
        margin-bottom: 14px;
      }

      span {
        color: #00daff;
        font-size: 20px;
      }
    }
  }

  .r-wrapper {
    position: absolute;
    top: 0;
    right: 60px;
    height: 100%;
    display: flex;
    padding: 16px 0;
    flex-direction: column;
    justify-content: space-around;

    .r-item {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      width: 188px;
      height: 56px;
      background: linear-gradient(0deg, #080b35, #12378d);
      border: 1px solid #1e69f1;
      padding: 0 12px;

      .r-t {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #cff8ff;
      }

      .line {
        width: 100%;
        height: 1px;
        background: #070820;
        box-shadow: 0px 1px 0px 0px #1b2b67;
        margin: 2px 0;
      }

      .r-num {
        font-size: 20px;
        color: #00daff;
        text-align: center;

        span {
          font-size: 14px;
        }
      }

      img {
        width: 14px;
        height: auto;
        margin-right: 8px;
      }
    }
  }
}
</style>
