/**
 * WeChat API 模块
 * @type {Object}
 * 用于将微信官方`API`封装为`Promise`方式
 * > 小程序支持以`CommonJS`规范组织代码结构
 */
const wechat = require('./utils/wechat.js')

/**
 * Douban API 模块
 * @type {Object}
 */
const api = require('./utils/api.js')

App({
  /**
   * Global shared
   * 可以定义任何成员，用于在整个应用中共享
   */
  data: {
    name: '王者荣耀 17173',
    version: '1.0.0'
  },
  globalData: {
    officeImgRoot: 'https://game.gtimg.cn/images/yxzj/ingame/index_heros/', // 官方图片根路径,
    userInfo: null
  },
  /**
   * WeChat API
   */
  wechat: wechat,

  /**
   * API
   */
  api: api,

  /**
   * 生命周期函数--监听小程序初始化
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch () {
    console.log(' ========== Application is launched ========== ')
    this.fetchHeros()
  },
  /**
   * 生命周期函数--监听小程序显示
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow () {
    console.log(' ========== Application is showed ========== ')
  },
  /**
   * 生命周期函数--监听小程序隐藏
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide () {
    console.log(' ========== Application is hide ========== ')
  },
  fetchHeros () {
    let that = this
    api.fetchHeros().then(res => {
      console.log('fetchHeros===', res.data)
      let heros = res.data
      for (let i = 0, len = heros.length; i < len; i++) {
        heros[i].show = true
        heros[i].src = that.globalData.officeImgRoot + heros[i]['ename'] + '.jpg'
        heros[i].offId = heros[i]['ename']
      }
      that.globalData.officeHeros = heros
    })
  },

  getUserInfo: function(cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == 'function' && cb(this.globalData.userInfo)
    } else {
      wx.getUserInfo({
        withCredentials: false,
        success: function (res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  }
})
