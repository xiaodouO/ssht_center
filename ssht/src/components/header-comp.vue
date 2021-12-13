<template>
  <div class="head-container">
    <div class="title">狮山横塘街道为民服务中心实时运行信息</div>
    <div class="r-wrapper">
      <span class="time">12:12:12</span>
      <span class="date">
        2020/12/06<br />
        星期三
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
  width: 450px;
  position: absolute;
  top: 0;
  right: 0;
  height: 100px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 18px;
  padding-bottom: 10px;
  span {
    padding-right: 30px;
  }
}
</style>
