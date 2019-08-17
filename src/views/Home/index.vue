<script>
import buttonmain from "../../components/ButtonMain/index";
export default {
  name: "home",
  components: {
    buttonmain
  },
  data() {
    return {
      leftMenuShow: false,
      topInfoPics: [
        {
          pic:
            "http://m.thsrc.com.tw/UploadFiles/MobileBanner/f377638d-dde7-4ecd-ba57-bf4ea21655e9.jpg",
          url: "https://www.thsrc.com.tw/event/2019/0708/index.html"
        },
        {
          pic:
            "http://m.thsrc.com.tw/UploadFiles/MobileBanner/4ec1ba0a-ff98-49ed-b91c-fca74b0610f0.jpg",
          url:
            "http://www.thsrc.com.tw/tw/Article/ArticleContent/8a221107-48b3-4809-a14f-ee5af9f174be"
        },
        {
          pic:
            "http://m.thsrc.com.tw/UploadFiles/MobileBanner/dc72446d-14dc-4b24-874e-595d4f85abb8.jpg",
          url:
            "http://www.thsrc.com.tw/tw/Article/ArticleContent/4b3e93e5-a186-43ad-820b-51de9f90076e"
        },
        {
          pic:
            "http://m.thsrc.com.tw/UploadFiles/MobileBanner/6f821e29-6b2a-47f8-bb14-2bd59a3df141.jpg",
          url:
            "https://tholiday.thsrc.com.tw/agts_thw/list/theme/F122F198-2AD1-4177-846B-49E160F69C11?utm_source=thsrc&utm_medium=banner&utm_campaign=bleisure"
        }
      ],
      topInfoPicHeight: 0
    };
  },
  mounted() {
    this.topInfoPicHeight = (document.body.clientWidth * 3) / 4;
  },
  methods: {
    openLeftMenu() {
      console.log("open");
      this.$nextTick(function() {
        document.querySelector("#el-drawer__title").style.backgroundColor =
          "#545c64";
        document.querySelector("#el-drawer__title").style.marginBottom = 0;
        document.querySelector("#el-drawer__title").style.padding = 0;
        document.querySelector("#el-drawer__title").style.paddingBottom = "2px";
      });
    }
  }
};
</script>

<template src="./template.html"></template>
<style lang="css" src="./style.css" scoped></style>
