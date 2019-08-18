<script>
export default {
  name: "timeTable",
  data() {
    return {
      goback: false,
      loading: false,
      dialogVisible: false,
      dialogVal: "",
      tableData: [
        {
          trainNum: "661",
          start: "16:43",
          end: "17:23",
          delay: "25分",
          alltime: "0:40"
        },
        {
          trainNum: "663",
          start: "17:10",
          end: "17:46",
          delay: "47分",
          alltime: "0:36"
        },
        {
          trainNum: "845",
          start: "17:34",
          end: "18:15",
          delay: "12分",
          alltime: "0:41"
        },
        {
          trainNum: "661",
          start: "16:43",
          end: "17:23",

          alltime: "0:40"
        }
      ]
    };
  },
  watch: {
    dialogVisible(val) {
      if (val) {
        this.$nextTick(function() {
          document.querySelector(".el-dialog__header").style.padding = 0;
          document.querySelector(".el-dialog__body").style.padding = 0;
        });
      }
    }
  },
  mounted() {
    document.querySelector(".el-page-header__left").style.marginLeft = "25px";
  },
  methods: {
    gobackHandler() {
      this.goback = true;
      setTimeout(() => {
        this.$router.go(-1);
      }, 500);
    },
    alertDelay(trainNum) {
      this.dialogVisible = true;
      this.dialogVal = trainNum + "車次將延誤　是否訂購此車票";
    }
  }
};
</script>

<template src="./template.html"></template>
<style lang="css" src="./style.css" scoped></style>
