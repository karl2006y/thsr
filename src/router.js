import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主頁',
      component: Home
    },
    {
      path: '/stationinfo',
      name: '車站資訊',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/StationInfo/index.vue')
    },
    {
      path: '/myticket',
      name: '我的車票',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Myticket/index.vue')
    },
    {
      path: '/buyticket',
      name: '我要訂票',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/BuyTicket/index.vue')
    },
    {
      path: '/timetable',
      name: '時刻車次',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/TimeTable/index.vue')
    },
    {
      path: '/memberpage',
      name: '會員專區',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/MemberPage/index.vue')
    }
  ]
})
