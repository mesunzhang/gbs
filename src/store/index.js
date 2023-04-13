import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import { getUserInfo } from '../http/services'
import dayjs from 'dayjs'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: Cookies.get('myToken') || '',
    userId: Cookies.get('myUserId') || '',
    usageType: '',
    vipFreeEndDay: '',
    gjTimes: ''
  }),
  getters: {
    getToken: state => state.token,
    getUserId: state => state.userId,
    getUsageType: state => state.usageType,
    getVipFreeEndDay: state => state.vipFreeEndDay,
    getGjTimes: state => state.gjTimes
  },
  actions: {
    async initUserInfo() {
      if (import.meta.env.VITE_NODE_ENV === 'development') {
        let pathUserId = location.href.match(/-(\S*).html/)
        Cookies.set('myUserId', pathUserId || '97WnxzB8u27')
        Cookies.set('myToken', '30jpul99h65')
        this.userId = Cookies.get('myUserId')
        this.token = Cookies.get('myToken')
      }
      if (this.userId == '' || this.token == '') {
        const redirectUrl = location.href
        let pathUserId = location.href.match(/index-(\S*)/)
        if (pathUserId != null) {
          pathUserId = pathUserId[1]
        }
        window.location.href =
          'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx272f2781de729d42&redirect_uri=' +
          encodeURIComponent(redirectUrl) +
          '&response_type=code&scope=snsapi_base&state=' +
          pathUserId +
          '&connect_redirect=1#wechat_redirect'
      }
      const res = await getUserInfo()
      this.usageType = res.data.usageType
      this.vipFreeEndDay = dayjs(res.data.vipFreeEndDay).format('YYYY-MM-DD')
      this.gjTimes = res.data.gjTimes
    }
  }
})
