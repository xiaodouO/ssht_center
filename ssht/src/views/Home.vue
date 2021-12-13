<template>
  <div class="home">
    <header-comp />
    <row1-comp />
  </div>
</template>

<script>
import HeaderComp from "@/components/header-comp";
import Row1Comp from "@/components/row1-comp";
export default {
  name: "Home",
  components: {
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
