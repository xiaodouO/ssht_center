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
    </div>
    <div class="item3">
      <div class="title">审批事项</div>
      <div class="c-item" v-for="item in 2" :key="2">
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
export default {
  name: "row3Comp",
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
}
.item1 {
  width: 370px;
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
  padding: 60px 40px 30px 30px;
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
  .c-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
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
</style>
