<template>
  <div>
    <router-view></router-view>
    <!-- 最上面的navbar -->
    <div
      class="text-center text-white p-1"
      style=" background-color: #444444"
    >
      <small>
        <div @click="buttoncli()">
          台灣高速鐵路股份有限公司 版權所有 © Taiwan High Speed Rail Corporation.
          All Rights Reserved.
        </div>
      </small>
    </div>
  </div>

</template>

<script>
import screenfull from "screenfull";
export default {
  name: "app",
  methods: {
    buttoncli() {
      if (!screenfull.enabled) {
        this.$message({
          message: "不支援全螢幕顯示",
          type: "warning"
        });
        return false;
      }
      screenfull.toggle();
      this.$message({
        message: "全螢幕顯示",
        type: "success"
      });
    }
  }
};
</script>

<style>
.dialogClass {
  border-radius: 15% !important;
  background-color: #fbe5d6 !important;
  border: 0px #fbe5d6 solid !important;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
