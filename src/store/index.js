import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import { getUserInfo } from '../http/services'
import dayjs from 'dayjs'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: Cookies.get('myToken') || '',
    userId: Cookies.get('myUserId') || '',
    vipFreeEndDay: ''
  }),
  getters: {
    getToken: state => state.token,
    getUserId: state => state.userId,
    getVipFreeEndDay: state => state.vipFreeEndDay
  },
  actions: {
    async initUserInfo() {
      if (import.meta.env.VITE_NODE_ENV === 'development') {
        Cookies.set('myUserId', '97WnxzB8u27')
        Cookies.set('myToken', '30jpul99h65')
      }
      if (this.userId == '' || this.token == '') {
        const redirectUrl = location.href
        window.location.href =
          'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx272f2781de729d42&redirect_uri=' +
          encodeURIComponent(redirectUrl) +
          '&response_type=code&scope=snsapi_base&state=' +
          route.params.userId +
          '&connect_redirect=1#wechat_redirect'
      }
      const res = await getUserInfo()
      this.vipFreeEndDay = dayjs(res.vipFreeEndDay).format('YYYY-MM-DD')
    }
  }
})
