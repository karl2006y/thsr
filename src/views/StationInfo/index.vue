<script>
export default {
  name: "stationInfo",
  data() {
    return {
      goback: false,
      loading: false,
      mapTypeRadio: "服務設施",
      picUrl:
        "https://lh6.googleusercontent.com/bkc9h8NKZF8o-qOaOF-2kXrrCQndH29VGXkn-4qHF-k959mHcbavfw9YwVlTcdMiL3ztK5yB-khDIOZ4nRZnd9gJ7K6gkmYbhRJtMH43iDGsSum21pupE-YuR1lJ=w843",
      options: [
        {
          name: "寄物櫃",
          icon:
            "https://lh6.googleusercontent.com/nJ_UbiNaR8Jwl_TnLrFg58kPieEJQk0yMGePvhoOB_A319BCcFGGd6Hw-J2kHd0BjJQItfFvaxsQcRTyvjxzVzZ_r5OItBSP26IJtIwARh-hDP4qgzNU7_vFeo6a=w76",
          picUrl:
            "https://lh6.googleusercontent.com/pp6BqV7xzT-qMvrCnErLZJMK6zPZ3OS_TvhkdNjHVS_cBLZMVitksD71cvuwLRH4hy3gUgplLJPH9ZTDUGLHdfiC7Z94F8HXohDhUH07Cl1fWaprA-vbuzYWfFqm=w1309",
          show: false
        },
        {
          name: "飲水機",
          icon:
            "https://lh6.googleusercontent.com/HIwrK-CatrGZGsTi0xNee5z0qx6kAtYXczJDWagRFG6UxXYiHqDSJTpB3aEVTkk9Xbl1_74X6lrJitpV0VG0RXvNWDQPdWZA8P4OmKKjo_3G0wuuQu8HB_ffQJ6H=w76",
          picUrl:
            "https://lh5.googleusercontent.com/YAUv5uk-yRPcpTVdtEdk3wDLFF-MjcMCmBRkj367QuT_SKAEclzhIRAz43Pga-i_mHRsEPKS9x3yf05Kevv5H2PIRIftQ_8dKclJ8zF2D_xK-QaRDZYTHDOKLvKJ=w1307",
          show: false
        },
        {
          name: "廁所",
          icon:
            "https://lh4.googleusercontent.com/Lteqo3HJnIfwtmuN3w-huIvnchqANKyC3X9NXxtFvGN7EGlSrpTJu78b9UHlypy5z6vSude01BulYpwx6zyHhXSti5eMkQhOTD5_MZ1vCbSbrHSy8JXib0FAsX-x=w75",
          picUrl:
            "https://lh6.googleusercontent.com/WuXnNpYz-nBvPo_i611VHwzxFSzIwV0U7WUbq1Ltf8DG0eQAc8BjJ8Q38veWahRrnu1r0rEFb55aGjuiHt-PdHT_Nq5ZWJ1PgdOqCsO0bOOxLPyHzDZiKrK7tQMN=w1309",
          show: false
        },
        {
          name: "驗票閘門",
          icon:
            "https://lh6.googleusercontent.com/FABrcOkNHibb-D7I57IiMc9HPg5bCNL_gQPf_yK6_hKIjRWewt64atPBoKHXAelCMdyPKc444mfXys0NDlVZyJWuPnz2jKDdfJlrpjqCl75Zi7epgON2uDRhklia=w76",
          picUrl:
            "https://lh6.googleusercontent.com/4OqyQ9dO8-6ZmmQCW261FnCWglEKtrRP6jUau21WfpRAUy5X57Kj2ViZU0jh772-PJqr8g-Dn7STdqXdxMQmOdl3v_Z-hALCBPNnz1xyGjm4J8BAJeOXOvismQFn=w1318",
          show: false
        },
        {
          name: "售票處",
          icon:
            "https://lh6.googleusercontent.com/vVevTDZhh_tKMJUDcfTxqJDxbLoyYux7R3CMNtkQrpK0koKdBQ5Y0p-wbaHF9z1b1-gU-cjo8-Cz-LFL3FLnpJJV4l_-NXNTyfNq3spsQ5Tz36JJAYD6bwIh04sf=w76",
          picUrl:
            "https://lh5.googleusercontent.com/Y-x5Jp2xjqVZt_0G8UIBr-TdNNH3JTfuHvgIEupbpzU8vv1kXT8WzOs9-ME9vMPqwEylpRyrSv2UBO-Q7rrqLptDpX4NK5qIXQo_B_7uOLbYP-y1NjRSgf-yVF6Z=w1318",
          show: false
        },
        {
          name: "無障礙廁所",
          icon:
            "https://lh6.googleusercontent.com/Ea0hLB3DWAlDKS5-ldnW421MqhWaWVc81PdJBquEIMLxMKVIQemDOKMl9up7GhfJ-mVHBCPw-_o6TPZE6QpkA92vXkcnXWbrku7ZpkGQxosqv2XEx8tsAc0-q2AN=w76",
          picUrl:
            "https://lh5.googleusercontent.com/s2_fcUPVM19bohzvmbQgg-ENTtSgItf3fuOp1XTRxrG-8M85y4yC2_dk0C13v8jIBTlZh9MJ2O_ruOOEykvBHTImq7wGtiEzpzra8v0zcXmmp0xCccGVseiCFuCn=w1317",
          show: false
        },
        {
          name: "電梯",
          icon:
            "https://lh5.googleusercontent.com/iXGcpXvHUdNxN0lBorbA7FR1PVSOKSRHo2EoH9pxDuu5wKMWrhwEY8tzfHrUM00vf0ROdiClqi0y2ymhEeMDnDpi62tqqVEu3_PxXoF-BsBLBLwl0VkNWR8pg4n6=w76",
          picUrl:
            "https://lh5.googleusercontent.com/TA7AN9KsnLkFHK-HMibtKDbuOAuDFh8cWcSjCIbbuWgDMoX9SAxsxGiTAK4zfTTtbT_1RCNCkDDc_ox7ZLIGBDDkAnhWanovOD7MkGi1uIKDC9D2KZayQUyjiPKV=w1318",
          show: false
        },
        {
          name: "旅遊服務台",
          icon:
            "https://lh3.googleusercontent.com/ijVo80-wKAb698Li8lUqNdrqzl1JHIqTtFR677hcUixuamNUsOaDhwxXP1w_63cLD9jP8cV1dC5MEfkWLQIMVqVUY6Hf91yDBFFLrn8wgQ6KneOzN-TuMr8NnqKQ=w75",
          picUrl:
            "https://lh5.googleusercontent.com/umAlH6FVtzV7kDVE_BsZ2z3wniLcuFWdeSn4NYNDjxlqOlT8BtvA_nw-d0ySWn9JkMU6WX9VXpD6Z0udFfl2gL_cP4W4KaSmmC87g-2GTFwYFGKoW00fPI59W62N=w1318",
          show: false
        },
        {
          name: "嬰兒換",
          name2: "尿布台",
          icon:
            "https://lh5.googleusercontent.com/dB6rxzLskxuAuFYyCcLMtYEhoubevFnjFbv2bgvrbkaG3Plck-yf81uaPMZUPae4gWOxAooEOblYQp4DTxdz30NUe92_IqyTF66yHVZb4bJOmEfvvFkZGHwHdMIz=w75",
          picUrl:
            "https://lh3.googleusercontent.com/UsYXPa_lqA9l6RZTbnt2OjNPKAr11Jg7jjtDslTtB2QzD0TKOxLPw-HsxTZQ6P8MQ8A1JmU4RxdlW1HVozwUOWcLk2oJZXaXJIehoCvMrcskUqXhwMvhXPzsVZzG=w1318",
          show: false
        },
        {
          name: "穆斯林",
          name2: "祈禱室",
          icon:
            "https://lh4.googleusercontent.com/H1Y8UyTFpamLYIFpL31Z469h0my92E7k0Mle23mZ5HgwDzQPsPELdmASmveTqh9GJVbYlw9a4hR3J96PCbsSEhmv8spNTHi_XUiis-odbwg7PZBevDQfIN3EBC1t=w75",
          picUrl:
            "https://lh3.googleusercontent.com/_V-9yuON1r7yN6It2seNav9Bj9I-CHMHw5olCqA0TR2_ltYMkzJ-_5nm_gSNCJIsI0Zlk2DyT0-MJhZhDJhnBPgwLQkKS32a9xQqMHSa35fVm6lxLEeVsVP7b6yg=w1318",
          show: false
        },
        {
          name: "上網充",
          name2: "電服務",
          icon:
            "https://lh6.googleusercontent.com/CCCh-_Xhc12SSJfMZ5VIW0PRcYeGFvl-neFA1tM-sIFe4fGnnX1IHaOsUTtUDfPteAgUB-JmGetnSzaceSzJUd-MrN5mT_25d9I8FJPu7vZj1OpW99CiX2EPD3Z-=w76",
          picUrl:
            "https://lh4.googleusercontent.com/N0WCLGWDLB_-Q4kHGSK4G74mFlLu_rv5SUevaV7zMIPW1xIM1k1j_nDrGBaBEWOZDyyC3DiItFFIixe8T4xrYPVaRcx9t-PKeTwSHGTbKQXXMMB0f0sDfyCFBqDu=w1372",
          show: false
        },
        {
          name: "多功能",
          name2: "會議室",
          icon:
            "https://lh3.googleusercontent.com/i6toY3FX5EESxVmT4kcSIEracAsiB8eG4SwiJue_jsABO-v5ik5-AxMJ3x0JpRGH8hugybGlIPOXmqBRh1NlJV2yu3LwWCPu4KkHJVGLe-MBADGWRug_j7Kg7YG8=w75",
          picUrl:
            "https://lh3.googleusercontent.com/CCUmb3IlVBY7uGg5TDwCYXso97hcYkCy5eo_U7Yskt2vh3Ry10V3osteKqpg4QbR6QITY2r0PDGrnUosdHcWC0WJ0M_peiEUjKQHkmlbxuxy0uvBB4q9qEDX-u3c=w1318",
          show: false
        },
        {
          name: "公共電話",
          icon:
            "https://lh6.googleusercontent.com/yANmqoPk1CdSJq_cYjadLTbTXASCHMxNkHy77PW8PevaORD_DFzydafdkp7871jvUWr9CHI4rYPJp_Oq2AmmLZY4EKfzGR5akYU8sFiXmtEIJW-qDds2sIXx-xuh=w76",
          picUrl:
            "https://lh6.googleusercontent.com/oOxPA6crOMOtAALE_apfOWBp8U_6a23BOnTzzhNHmgpYrI7fZyyWt5__OmAkGEbnncxFyWepGr_UwGmyVJLq33Lc45FFxyWrzl-sLTLuC8cy-IeqQlC861aI1gZN=w1318",
          show: false
        }
      ],
      options2: [
        {
          name: "星巴克",
          icon:
            "https://lh4.googleusercontent.com/HXY1srVLcEZvdObZF2Dg5vsVUugWyIgEEoZO75VRd0Xfg1JAMnnrczduu2WUtvf90oSEASsokzPWTXBGx-uGXSg9M99GHFMG5xY_9iNbUDGFOLHgLSm-mIbNZW72=w278",
          picUrl:
            "https://lh3.googleusercontent.com/Bi2c5oxW3Ejj6q5P6e-UuAPFXCBflF0KIZ4q51_xTcSNKOpkPhfeyo13l8lMQ0yqSP9uXhbFFZx3AbTuNe_ou0K5Yn1ZXcjr-x-ATkoInbFc6CbxnijxtyVbbeJ_=w1318",
          show: false
        },
        {
          name: "麥當勞",
          icon:
            "https://www.thsrc.com.tw/UploadFiles/FoodCourt/38a93ce7-1a6b-438c-86e9-e65a906e3ba2.gif",
          picUrl:
            "https://lh4.googleusercontent.com/uItdzR6Axdr5h8spbQmihGlWCIXRiYzJsHk_udI7CNw8QYP3TPK9fjBqcfLFWVxeNvRLJRTfvZHk6Y8MW978UCDCCbLd4aU1u9S4-LneW8_I34-1_ZGwVe8WrLZ4=w1318",
          show: false
        },
        {
          name: "高鐵便當",
          icon:
            "https://www.thsrc.com.tw/UploadFiles/FoodCourt/a2b0ff95-5385-4cc4-8ecb-3ff58abe9279.gif",
          picUrl:
            "https://lh5.googleusercontent.com/_Yk3CC3HXR7ewZi8F0tLdU8mKuxY516_BwCx612reUrbhOQhytBbWGlsnW81vXgOXnOHrAIUILBVSvi8-QRPBmKHFctQEHhWFWrBfl19x5mnY_ENrVGyLjQXlAZp=w1318",
          show: false
        },
        {
          name: "全家",
          icon:
            "https://www.thsrc.com.tw/UploadFiles/FoodCourt/f0223377-b53b-4f7e-abb2-ce2a5cc87c86.jpg",
          picUrl:
            "https://lh6.googleusercontent.com/WVDi_vHjacFytCLzLuPq0PX70paGkzzG04OG_ad32b7ibZ0KTP-zF-ThHEV3eLT5lIqWojH90w7YQboSG08V-BThb7D-OZ63DHU9G5WYhjM9dpce3f4jpxTelzMU=w1318",
          show: false
        },
        {
          name: "7-11",
          icon:
            "https://www.thsrc.com.tw/UploadFiles/FoodCourt/74c4ac28-308b-453e-8587-fb12e388e30b.gif",
          picUrl:
            "https://lh5.googleusercontent.com/8ObFFLPRvDmrVN3DuYj8ef9fLAD5jHP9_6h_5mNO2iGDO7CIAwT1tUXFraKDlinu3B9iugW_siBx09ruQm2Km4ezrmw0rOOtzhiP11FopXkbVUpj-QA4PvLO-1ng=w1318",
          show: false
        },
        {
          name: "Subway",
          icon:
            "https://www.thsrc.com.tw/UploadFiles/FoodCourt/e0ac2ed0-4dfe-4d2e-aba7-f88b2e4a925d.jpg",
          picUrl:
            "https://lh6.googleusercontent.com/NtriwCAs4hXJZsWI-s3QiSnainwnjtK1zYGJYU-WKwKhSgYrfBDK-PGuAyHQUSv0JQPN8SyuCgG_AeQqE8pzhZrdvdQO6e-FGNGgj5kMzvFrpTp3c8pOm7FNYNqe=w1408",
          show: false
        },
        {
          name: "多拿滋",
          icon:
            "https://www.thsrc.com.tw/UploadFiles/FoodCourt/8cb73384-e0ff-4144-922e-c017d2123234.jpg",
          picUrl:
            "https://lh3.googleusercontent.com/XnYs_KE1L61l5ysz30pAynGfdksXmfqvcWpfl95RQ1W9-k9IseViDCzQ-Dtxsf51Eyi0lxHi4oGCL6ncAORRDa-h4PmLHmDPuumPMLmuJFDBr1SkgZPlB-PN7jSA=w1318",
          show: false
        },
        {
          name: "玉珍齋",
          icon:
            "https://www.thsrc.com.tw/UploadFiles/FoodCourt/4d1721a9-d5e5-4229-a62b-ffd7ba0120bb.jpg",
          picUrl:
            "https://lh5.googleusercontent.com/u6odXrmbGgXM7796pzBlgCJih5AxG5pWOvkDbBxwfybOcx95OnXHq_eFKWNSKPqzOwIdbu1TQbOEAPJEhiO3FdwHUBDLi7rLA5WWA7itoHQe28441NGU_uc4PnEm=w1318",
          show: false
        },
        {
          name: "摩斯漢堡",
          icon:
            "https://www.thsrc.com.tw/UploadFiles/FoodCourt/b15187ca-ab50-4f6f-b2fd-3f1b76426a66.gif",
          picUrl:
            "https://lh3.googleusercontent.com/B4HC3A9GJOS6IfhAOBrqj-goSLYIUPaqOMepyB1d_7NbpN38r-7chRSk78KnbVGrsFtPUx5x5y7g5XLUWtbL70wX8eGl6rK1vRby6b7SLtLvAUbBCpB56ODN0EOT=w1318",
          show: false
        },
        {
          name: "翰林茶棧",
          icon:
            "https://www.thsrc.com.tw/UploadFiles/FoodCourt/22d253ee-daaa-4b9f-b181-6a3ee85fecc1.jpg",
          picUrl:
            "https://lh5.googleusercontent.com/vSE4skV0rtJWD-yD32WhWD4ZnqU77JmiLCK0oLoE_pN6xZCS9d1eei3beUfLBxMJYyXO1UJ9HifimsKpCIZ6_6cKwjt58Iypjy_H7d1pVAOv0z8mYM920RFmk_4t=w1428",
          show: false
        },
        {
          name: "丸龜製麵",
          icon:
            "https://www.thsrc.com.tw/UploadFiles/FoodCourt/bb9b0aab-af01-463e-beb0-fe5d6ce17099.jpg",
          picUrl:
            "https://lh3.googleusercontent.com/RflrhxiIyYSYY3oQFHhYkUYDQk1x3WvSrNzq4kFfgVX6VyxgTs4h-py_Qdx0y5CrNS2jA8BOh7sZ7XklnmV-Iiw8MnZ3q9F-YRoGn1fZcUS-jPsG0cs5IzUgXn8i=w1377",
          show: false
        },
        {
          name: "貢茶",
          icon:
            "https://www.thsrc.com.tw/UploadFiles/FoodCourt/ff704917-fd58-40ac-af29-ddef2a1dbd7b.jpg",
          picUrl:
            "https://lh4.googleusercontent.com/CGFNk3XlPmB8af5-0XcrRuWKeGHxYfHdoPGhRXXC2nimq8jZhsWFuTVJm7HfaPMT0urDaoGlOn43SPzj1-wBfvgnl4pbW-zvWTLjaLeZSZlCvRlRhG5LI8tgvsNn=w1318",
          show: false
        },
        {
          name: "台鐵便",
          name2: "當本舖",
          icon:
            "https://www.thsrc.com.tw/UploadFiles/FoodCourt/973101db-49b1-444d-aee9-e37144a22546.gif",
          picUrl:
            "https://lh6.googleusercontent.com/XLtwqvNHjyQ4rPkYZ2Jue9_Rmr6YKqmwWRzNdZJUfklkNkFCur1smJk-gxIfSI4RfYo36OspWE7IR3sSGE-aYCSwdQdwBe8KGro2zQ01Ho-qJoHnm5ulkfHY_XS4=w1318",
          show: false
        },
        {
          name: "爭鮮迴",
          name2: "轉壽司",
          icon:
            "https://www.thsrc.com.tw/UploadFiles/FoodCourt/886e39b1-9466-4348-b7a0-907c4c74709c.jpg",
          picUrl:
            "https://lh6.googleusercontent.com/gCbb4mqagpifvv27oBu7Gu12TE0cXBA2X_-YD5g0tS1mItL8rvWUsz9WA9iET8Q_RIm0rC3uOEanwl7zoYIUr8hp5JVOv17EVnOC9coPnmytUTjQcdWe-NKopivB=w1361",
          show: false
        },
        {
          name: "吳寶春",
          name2: "麥方店",
          icon:
            "https://www.thsrc.com.tw/UploadFiles/FoodCourt/5e99f8cf-431d-4e85-9b3d-e3e3917d6379.jpg",
          picUrl:
            "https://lh3.googleusercontent.com/sEiQle0WClmeREmQrPhV745B2G_a-UAr5nKjjlBBTGx-q1m0fMjwaDL-zaguKpOQtNjzF3paCkliF-VqUVPJt_jy8SdhEEFu1JzomWuZxx2Q_4MZR_xVIqQqh8_n=w1318",
          show: false
        }
      ]
    };
  },
  mounted() {
    document.querySelector(".el-page-header__left").style.marginLeft = "25px";
  },
  watch: {
    mapTypeRadio() {
      this.loading = true;
      this.picUrl =
        "https://lh6.googleusercontent.com/bkc9h8NKZF8o-qOaOF-2kXrrCQndH29VGXkn-4qHF-k959mHcbavfw9YwVlTcdMiL3ztK5yB-khDIOZ4nRZnd9gJ7K6gkmYbhRJtMH43iDGsSum21pupE-YuR1lJ=w843";
      this.options.forEach(element => {
        element.show = false;
      });
      this.options2.forEach(element => {
        element.show = false;
      });
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  },
  methods: {
    clickOption(item) {
      this.loading = true;
      if (item.show) {
        this.picUrl =
          "https://lh6.googleusercontent.com/bkc9h8NKZF8o-qOaOF-2kXrrCQndH29VGXkn-4qHF-k959mHcbavfw9YwVlTcdMiL3ztK5yB-khDIOZ4nRZnd9gJ7K6gkmYbhRJtMH43iDGsSum21pupE-YuR1lJ=w843";
        item.show = false;
      } else {
        this.options.forEach(element => {
          element.show = item.show;
        });
        this.options2.forEach(element => {
          element.show = item.show;
        });
        item.show = !item.show;
        this.picUrl = item.picUrl;
      }
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
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
