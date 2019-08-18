<template>
  <div>

    <router-view></router-view>
    <!-- 最上面的navbar -->
    <div
      class="text-center text-white py-1"
      style=" background-color: #444444"
    >
      <small>
        台灣高速鐵路股份有限公司 版權所有 © Taiwan High Speed Rail Corporation.
        All Rights Reserved.
      </small>
    </div>
  </div>

</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
