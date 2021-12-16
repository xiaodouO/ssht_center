<template>
  <div class="head-container">
    <div class="title">狮山横塘街道为民服务中心实时运行信息</div>
    <div class="r-wrapper">
      <span class="time"
        >{{ dateTime.getHours() }}:{{
          dateTime.getMinutes() >= 10
            ? dateTime.getMinutes()
            : "0" + dateTime.getMinutes()
        }}:{{
          dateTime.getSeconds() >= 10
            ? dateTime.getSeconds()
            : "0" + dateTime.getSeconds()
        }}</span
      >
      <span class="date">
        {{ dateTime.getFullYear() }}/{{
          dateTime.getMonth() >= 9
            ? dateTime.getMonth() + 1
            : "0" + (dateTime.getMonth() + 1)
        }}/{{
          dateTime.getDate() >= 10
            ? dateTime.getDate()
            : "0" + dateTime.getDate()
        }}<br />
        星期{{ weeks[dateTime.getDay()] }}
      </span>
      <span>9°C ~ 14°C</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerComp",
  props: {},
  components: {},
  data() {
    return {
      dateTime: new Date(),
      weeks: ["日", "一", "二", "三", "四", "五", "六"],
      timer: null,
    };
  },
  computed: {},
  methods: {},
  watch: {},
  created() {},
  mounted() {
    this.timer = setInterval(() => {
      this.dateTime = new Date();
    }, 1000);
  },
  updated() {},
  beforeDestroy() {
    clearInterval(this.timer);
  },
  destroyed() {},
};
</script>

<style scoped lang="less">
.head-container {
  width: 100%;
  height: 100px;
  background: url("./../assets/img/img18.png") no-repeat center bottom;
  background-size: 100% auto;
  position: relative;
}

.title {
  font-size: 54px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  letter-spacing: -2px;
}

.r-wrapper {
  width: 430px;
  position: absolute;
  top: 0;
  right: 0;
  height: 100px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 18px;
  padding-bottom: 10px;
  .date {
    margin-right: 20px;
  }
  .time {
    display: block;
    width: 90px;
    text-align: left;
  }
}
</style>
