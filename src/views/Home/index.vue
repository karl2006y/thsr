<script>
import buttonmain from "../../components/ButtonMain/index";
export default {
  name: "home",
  components: {
    buttonmain
  },
  data() {
    return {
      loading: false,
      setting: {
        lanRadio: "中文",
        fontSize: "適中"
      },
      statusSuccess: true,
      leftMenuShow: false,
      innerDrawer: false,
      topInfoPicHeight: 0,
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
      tableData: [
        {
          date: "2019/08/16",
          note: "台灣高鐵企業網站及部分票務系統2019/08/20~08/22 維護作業說明"
        },
        {
          date: "2019/08/14",
          note: "台灣高鐵2019中秋節假期疏運 加開143班次列車 8/16起開放購票"
        },
        {
          date: "2019/08/13",
          note: "台南豪雨公告"
        },
        {
          date: "2019/08/12",
          note: "台灣高鐵公司針對法人董事當然解任說明"
        },
        {
          date: "2019/08/12",
          note:
            "網路訂票系統及自動語音訂位系統簡訊通知功能2019/08/13 (二) 01:00~05:00AM暫停服務"
        }
      ],
      onlyForUTableData: [
        {
          date: "2019/08/01",
          note: "加購租車任你遊 上網一指搞定 超值優惠6折起"
        }
      ],

      bottomInfoPics: [
        {
          pic:
            "http://tholiday.thsrc.com.tw/agts_thw/THWImg/AABBBD3C-42BE-4929-9394-A9663E5127F3.jpg",
          text: "【搭高鐵送住宿】和逸飯店．高雄中山館2日自由行"
        },
        {
          pic:
            "http://tholiday.thsrc.com.tw/agts_thw/THWImg/BCEF3D0C-8344-4D1E-A06E-3B3835A9956E.jpg",
          text: "高雄義大遊樂世界1日輕鬆遊"
        },
        {
          pic:
            "http://tholiday.thsrc.com.tw/agts_thw/THWImg/D031DF49-95D1-4695-968D-12BCF910A06D.jpg",
          text: "【搭商務送五星】嘉義耐斯王子大飯店2日自由行"
        },
        {
          pic:
            "http://tholiday.thsrc.com.tw/agts_thw/THWImg/589FAD56-561C-4DFB-ADF4-91193D10D40A.jpg",
          text: "【下班玩更省】高雄文賓大飯店 駁二館2日自由行"
        }
      ]
    };
  },

  mounted() {
    // this.dynamicLoadCss("./fontsize1.css");
    this.topInfoPicHeight = (document.body.clientWidth * 3) / 4;
    const fs =
      localStorage.getItem("fontSize") != null
        ? localStorage.getItem("fontSize")
        : "適中";
    this.setting.fontSize = fs;
    if (fs == "大") {
      this.dynamicLoadCss("./fontsize1.css");
    } else if (fs == "極大") {
      this.dynamicLoadCss("./fontsize2.css");
    }
  },
  methods: {
    changefontSize() {
      this.loading = true;
      localStorage.setItem("fontSize", this.setting.fontSize);
      setTimeout(() => {
        location.reload();
      }, 500);
    },
    dynamicLoadCss(url) {
      var head = document.getElementsByTagName("head")[0];
      var mycss = document.createElement("link");
      mycss.type = "text/css";
      mycss.rel = "stylesheet";
      mycss.href = url;
      head.appendChild(mycss);
    },
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
