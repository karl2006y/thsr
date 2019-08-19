<script>
export default {
  name: "memberPage",
  data() {
    return {
      goback: false,
      loading: false
    };
  },
  mounted() {
    document.querySelector(".el-page-header__left").style.marginLeft = "25px";
    if (this.$route.params.focusTab != undefined) {
      this.tabActiveName = this.$route.params.focusTab;
    }
  },
  methods: {
    gobackHandler() {
      this.goback = true;
      setTimeout(() => {
        this.$router.go(-1);
      }, 500);
    }
  }
};
</script>

<template src="./template.html"></template>
<style lang="css" src="./style.css" scoped></style>
