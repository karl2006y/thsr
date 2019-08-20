<script>
export default {
  name: "buyTicket",
  data() {
    return {
      goback: false,
      loading: false,
      dialogVisible: false,
      timeVal: new Date(),
      people: [
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        },
        {
          value: "3",
          label: "3"
        }
      ],
      options: [
        {
          value: "南港",
          label: "南港"
        },
        {
          value: "台北",
          label: "台北"
        },
        {
          value: "板橋",
          label: "板橋"
        },
        {
          value: "桃園",
          label: "桃園"
        },
        {
          value: "新竹",
          label: "新竹"
        },
        {
          value: "苗栗",
          label: "苗栗"
        },
        {
          value: "台中",
          label: "台中"
        },
        {
          value: "彰化",
          label: "彰化"
        },
        {
          value: "雲林",
          label: "雲林"
        },
        {
          value: "嘉義",
          label: "嘉義"
        },
        {
          value: "台南",
          label: "台南"
        },
        {
          value: "左營",
          label: "左營"
        }
      ],
      value: "",
      value2: "",
      goBackRadio: "單程票",
      trainRadio: "標準",
      seatRadio: "無",
      people1: "",
      people2: "",
      people3: "",
      people4: "",
      people5: ""
    };
  },
  computed: {
    canSent() {
      let people = false;
      if (
        this.people1 == "" &&
        this.people2 == "" &&
        this.people3 == "" &&
        this.people4 == "" &&
        this.people5 == ""
      ) {
        if (this.trainRadio == "自由座") {
          people = true;
        } else {
          people = false;
        }
      } else {
        people = true;
      }
      return (
        this.timeVal != "" && this.value != "" && this.value2 != "" && people
      );
    }
  },
  watch: {
    dialogVisible(val) {
      if (val) {
        setTimeout(() => {
          this.$router.push({ name: "時刻車次" });
        }, 2000);
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
    }
  }
};
</script>

<template src="./template.html"></template>
<style scoped lang="css" src="./style.css" scoped></style>
