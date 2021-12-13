<template>
  <div class="row-comp">
    <div class="item1 item">
      <div class="row1">
        <div class="r-item">
          <div class="title">今日取号量</div>
          <div class="num-box">
            <div class="num">1</div>
            <div class="num">4</div>
            <div class="num">2</div>
            <div class="num">3</div>
            <div class="text">个</div>
          </div>
        </div>
        <div class="r-item">
          <div class="title">今日板件量</div>
          <div class="num-box">
            <div class="num">1</div>
            <div class="num">4</div>
            <div class="num">2</div>
            <div class="num">3</div>
            <div class="text">件</div>
          </div>
        </div>
      </div>
      <div class="row2">
        <div>
          <span>本月取号量</span>
          <span>12312312</span>
        </div>
        <div>
          <span>本年取号量</span>
          <span>12312312</span>
        </div>
        <div>
          <span>本月办件量</span>
          <span>12312312</span>
        </div>
        <div>
          <span>本月办件量</span>
          <span>3222</span>
        </div>
        <div>
          <span>日均办件量</span>
          <span>123</span>
        </div>
        <div>
          <span>正在办件量</span>
          <span>2</span>
        </div>
        <div>
          <span>当前等待量</span>
          <span>12</span>
        </div>
      </div>
    </div>
    <div class="item2 item"></div>
  </div>
</template>

<script>
export default {
  name: "row1Comp",
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
    .r-item {
      .title {
        font-style: italic;
        color: #cff8ff;
        font-size: 20px;
        margin-bottom: 10px;
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
      width: 90px;
      height: 60px;
      padding: 10px;
      span:first-child {
        font-size: 12px;
        color: #90b7ff;
        display: block;
      }
      span:last-child {
        font-size: 16px;
        color: #fff;
        text-align: center;
        display: block;
      }
    }
  }
}
</style>
