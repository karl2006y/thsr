<script>
export default {
  name: "myticket",
  data() {
    return {
      goback: false,
      loading: false,
      typeRadio: "一般查詢列印",
      tabActiveName: "未使用車票",
      tickets: [
        {
          status: "延誤",
          pic:
            "https://lh6.googleusercontent.com/P-FQ4ueU_Tp9hzZFMENFCrVnaqyAJM_W507N-MvagBwfZ2T1dPtoTStjsXszM3IGpsR-bWzKMYldCQM7B2cHs-A6TMKpR810DpfOo_KG76VoMNIMlD74gR0_M1qE=w552"
        },
        {
          status: "已取票",
          pic:
            "https://lh5.googleusercontent.com/Y334YbwE1BzsbMHVKdGPlTY2bnsRGlrg-h4w5_0S11VLBinxc9CaSrVRXbZwwIcXE_rCyk0ItkMemjUzVr6gMJc6DPMgzeUvTk31iAXjF2c8gSM94ssrLaQ5MEuh=w353"
        },
        {
          status: "未取票",
          pic:
            "https://lh6.googleusercontent.com/PSBXpZ68969Tdr7YGf2_9Xrt8HZRpEdqdEUMFsOP9Mh55iMc4iicbgu9V9ESO_pZ5f6ioV3PH6WWwlABoA8tYnsNeOAk0Vbm9LQ_YV8DSklOWOY1PXNwUrN4J913=w354"
        },
        {
          status: "已取票",
          pic:
            "https://lh4.googleusercontent.com/0PYjCgXhoCjknjI-_xXzQCS1wRouct_XntzaTSjbK2EeGgl4G7oSZnKE38oDlpDTY0IJoZsM12kwS1cOjwFB0TPZLA9uF_UjwzE6quq1rMe-h09D_ILtcBDClVOi=w353"
        }
      ]
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
  },
  beforeRouteLeave(to, from, next) {
    if (to.name != "主頁") {
      this.$router.push({ name: "主頁" });
    } else {
      next();
    }
  }
};
</script>

<template src="./template.html"></template>
<style lang="css" src="./style.css" scoped></style>
