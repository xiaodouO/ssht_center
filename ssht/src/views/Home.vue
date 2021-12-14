<template>
  <div class="home">
    <header-comp />
    <row1-comp />
    <row2-comp />
    <row3-comp />
  </div>
</template>

<script>
import HeaderComp from "@/components/header-comp";
import Row1Comp from "@/components/row1-comp";
import Row2Comp from "@/components/row2-comp";
import Row3Comp from "@/components/row3-comp";
export default {
  name: "Home",
  components: {
    Row3Comp,
    Row2Comp,
    Row1Comp,
    HeaderComp,
  },
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
