// 获取全局应用程序实例对象
const app = getApp()
const Promise = require('../../utils/bluebird')
let util = require('../../utils/util')
let heros = require('../../utils/config/heros')
let heroType = require('../../utils/config/heroType')
let heroFeature = require('../../utils/config/heroFeature')
var WxParse = require('../wxParse/wxParse.js')
// 创建页面实例对象
Page({
  data: {
    pageTab: [
      {
        name: '英雄介绍',
        open: true
      },
      {
        name: '新手入门',
        open: false
      },
      {
        name: '进阶解说',
        open: false
      },
      {
        name: '圈娱乐',
        open: false
      }
    ],
    hero: {},
    videos: [
      {
        id: 1,
        title: '瓶子解说',
        subTitle: '鲜血枭雄曹操霸道之刃纵横全场',
        poster: 'http://i.17173cdn.com/2fhnvk/YWxqaGBf/cms3/KxESIcbluFolwpx.jpg',
        url: 'http://122.228.56.23/vhot2.qqvideo.tc.qq.com/AZ4zVMBEPcz29hd8VJz_RFtYKFhGEWsZNRSwDlc7xvlA/e03891lk8qz.p712.1.mp4?sdtfrom=v1010&guid=f6f79bad86c2f2dcd9876243a00a811d&vkey=0C6F08ED2D08FA5E80D5DA2CF57C01C9495E1BFD07AF5458310E6DC2876A7F43A447B26EBE5628247FB5343F50D89B6F5C530B5784E7357E4816B0FAE4966A59025873180858ABF663C03513C5A11D0B155725A4F385DA24F4C59ABFFE06C7A25C384D4BE61B1719D19001EFD5B62343D4CD6BAFB8352784&platform=2'
      },
      {
        id: 2,
        title: '德古拉解说',
        subTitle: '马可波罗偶遇双传送组合遭遇战',
        poster: 'http://i.17173cdn.com/2fhnvk/YWxqaGBf/cms3/oKdzJWblrtBFrFm.jpg',
        url: 'http://122.228.56.23/vhot2.qqvideo.tc.qq.com/AZ4zVMBEPcz29hd8VJz_RFtYKFhGEWsZNRSwDlc7xvlA/e03891lk8qz.p712.1.mp4?sdtfrom=v1010&guid=f6f79bad86c2f2dcd9876243a00a811d&vkey=0C6F08ED2D08FA5E80D5DA2CF57C01C9495E1BFD07AF5458310E6DC2876A7F43A447B26EBE5628247FB5343F50D89B6F5C530B5784E7357E4816B0FAE4966A59025873180858ABF663C03513C5A11D0B155725A4F385DA24F4C59ABFFE06C7A25C384D4BE61B1719D19001EFD5B62343D4CD6BAFB8352784&platform=2'
      },
      {
        id: 3,
        title: '极秀时刻',
        subTitle: ' 精彩镜头锦集我们玩得不是一个荆轲',
        poster: 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/IfJPgabljnrjkjr.png',
        url: 'http://122.228.56.23/vhot2.qqvideo.tc.qq.com/AZ4zVMBEPcz29hd8VJz_RFtYKFhGEWsZNRSwDlc7xvlA/e03891lk8qz.p712.1.mp4?sdtfrom=v1010&guid=f6f79bad86c2f2dcd9876243a00a811d&vkey=0C6F08ED2D08FA5E80D5DA2CF57C01C9495E1BFD07AF5458310E6DC2876A7F43A447B26EBE5628247FB5343F50D89B6F5C530B5784E7357E4816B0FAE4966A59025873180858ABF663C03513C5A11D0B155725A4F385DA24F4C59ABFFE06C7A25C384D4BE61B1719D19001EFD5B62343D4CD6BAFB8352784&platform=2'
      },
      {
        id: 4,
        title: '精彩对局回放',
        subTitle: '李白秀风骚走位丝血反杀生存',
        poster: 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/eUIrPgbljcCpuBc.jpg',
        url: 'http://122.228.56.23/vhot2.qqvideo.tc.qq.com/AZ4zVMBEPcz29hd8VJz_RFtYKFhGEWsZNRSwDlc7xvlA/e03891lk8qz.p712.1.mp4?sdtfrom=v1010&guid=f6f79bad86c2f2dcd9876243a00a811d&vkey=0C6F08ED2D08FA5E80D5DA2CF57C01C9495E1BFD07AF5458310E6DC2876A7F43A447B26EBE5628247FB5343F50D89B6F5C530B5784E7357E4816B0FAE4966A59025873180858ABF663C03513C5A11D0B155725A4F385DA24F4C59ABFFE06C7A25C384D4BE61B1719D19001EFD5B62343D4CD6BAFB8352784&platform=2'
      }
    ],
    news: [
      {
        id: 1,
        type: '攻略',
        title: '射手黄忠玩法全攻略 宝刀未老恐怖的团战杀手',
        time: '02-07'
      },
      {
        id: 2,
        type: '公告',
        title: '射手黄忠玩法全攻略 宝刀未老恐怖的团战杀手',
        time: '02-08'
      },
      {
        id: 3,
        type: '公告',
        title: '射手黄忠玩法全攻略 宝刀未老恐怖的团战杀手',
        time: '02-08'
      }
    ]
  },
  check(url) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        success: resolve,
        fail: reject
      })
    })
  },
  formatData () {
    let that = this
    let officeDetail = this.data.officeDetail
    // 技能介绍
    let skill = []
    for (let i = 0; i < 5; i++) {
      let idx = i + 1
      if (officeDetail.hasOwnProperty(`skillname${idx}`) && officeDetail['skillname' + idx]) {
        skill[i] = {}
        skill[i]['open'] = i === 0
        skill[i]['skillname'] = officeDetail['skillname' + idx]
        skill[i]['skillid'] = officeDetail['skillid' + idx]
        skill[i]['skillpic'] = that.skillImg(skill[i]['skillid'])
        skill[i]['skilldesc'] = officeDetail['skilldesc' + idx]
        skill[i]['skillcool'] = officeDetail['skillcool' + idx]
        skill[i]['skillspend'] = officeDetail['skillspend' + idx]
        skill[i]['skilltips'] = officeDetail['skilltips' + idx]
      }
    }

    //技能加点
    let leveladdskills = [];
    for (let j = 0; j < 15; j++) {
      let idx = j + 1
      if (officeDetail.hasOwnProperty(`leveladdskill${idx}`) && officeDetail['leveladdskill' + idx]) {
        leveladdskills[j] = {};
        leveladdskills[j]['skillid'] = officeDetail['leveladdskill' + idx]
        leveladdskills[j]['skillpic'] = that.skillImg(leveladdskills[j]['skillid'])
        leveladdskills[j]['level'] = idx;
      }
    }

    // 最佳搭档
    let partnerheros = []
    // 被谁克制
    let passiveheros = []
    // 出装建议
    let armStep = ['前期装备', '中期装备', '后期装备']
    let armLabel = ['outarm', 'midarm', 'latearm']
    let armsCis = []
    let armsInverse = []
    for (let i = 0; i < 4; i++) {
      let idx = i + 1
      if (officeDetail.hasOwnProperty(`partnerhero${idx}`)) {
        let heroId = officeDetail[`partnerhero${idx}`]
        console.log('partnerhero heroId=', heroId)
        partnerheros.push({
          heroOffId: heroId,
          heroName: that.heroName(heroId),
          heroPic: that.heroImg(heroId),
          herodesc: officeDetail[`partnerherodesc${idx}`]
        })
      }
      if (officeDetail.hasOwnProperty(`passivehero${idx}`)) {
        let heroId = officeDetail[`passivehero${idx}`]
        console.log('passivehero heroId=', heroId)
        passiveheros.push({
          heroOffId: heroId,
          heroName: that.heroName(heroId),
          heroPic: that.heroImg(heroId),
          herodesc: officeDetail[`passiveherodesc${idx}`]
        })
      }
      if (officeDetail.hasOwnProperty(`arm${idx}`)) {
        for (let j = 0, jLen = armStep.length; j < jLen; j++) {
          let item = {
            label: armStep[j],
            datas: (function () {
              let imgIds = officeDetail[`${armLabel[j]}${idx}`].split('|')
              let imgs = []
              for (let d = 0, dLen = imgIds.length; d < dLen; d++) {
                let attr = that.armAttr(imgIds[d]) || []
                imgs.push({
                  id: imgIds[d],
                  src: that.armImg(imgIds[d]),
                  title: attr['item_name'],
                  attr: attr
                })
              }
              return imgs
            }())
          }
          if (i === 0) {
            armsCis.push(item)
          }
          if (i === 1) {
            armsInverse.push(item)
          }
        }
      }
    }
    this.setData({
      hero: {
        heroType: that.heroTypeVal(officeDetail.locate1),
        heroFeature: that.heroFeatureVal(officeDetail.locate2),
        heroHeaderBg: that.heroHeaderBgImg(officeDetail.heroid),
        heroFace: that.heroImg(officeDetail.heroid),
        skill: skill,
        leveladdskills: leveladdskills,
        partnerheros: partnerheros,
        passiveheros: passiveheros,
        armsCis: armsCis,
        armsInverse: armsInverse
      }
    })
  },
  fetchMing () {
    let that = this
    return app.api.fetchMing().then(function (res) {
      app.globalData.officeMing = res.data
      that.setData({
        officeMing: res.data
      })
    })
  },
  fetchArm () {
    let that = this
    return app.api.fetchArm().then(function (res) {
      app.globalData.officeArm = res.data
      that.setData({
        officeArm: res.data
      })
    })
  },
  fetchSummoner () {
    let that = this
    return app.api.fetchSummoner().then(function (res) {
      app.globalData.officeSummoner = res.data
      that.setData({
        officeSummoner: res.data
      })
    })
  },
  fetchHeroInfo (options) {
    let that = this
    return app.api.fetchHeroInfo(options).then(function (res) {
      // console.log('fetchHeroInfo==', res)
      that.setData({
        officeDetail: res.data.data
      })
    })
  },
  // 把返回的字符串处理一下
  trimJSON (str) {
    var e = /\s*(?:var)?.+?({.+});\s*/
    var result = e.exec(str)
    console.log('result=', result)
    if (result && result[1]) {
      return result[1]
    } else {
      return str
    }
  },
  onLoad (options) {
    let that = this
    Promise.all([that.fetchMing(), that.fetchArm(), that.fetchSummoner(), that.fetchHeroInfo(options)]).then(function () {
      that.formatData()
      WxParse.wxParse('hero.useskill', 'html', that.data.officeDetail.useskill, that, 5)
      WxParse.wxParse('hero.confrontskill', 'html', that.data.officeDetail.confrontskill, that, 5)
      console.log('formatDataAfter=', that.data)
    }).then(function () {
      let introducevideo = that.data.officeDetail.introducevideo
      app.api.fetchVids(introducevideo).then(function (res) {
        var data = JSON.parse(that.trimJSON(res.data))
        let hero = that.data.hero
        that.setData(Object.assign(hero, {
          sVID: data.msg.sVID
        }))
        return data.msg.sVID
      }).then(function (sVID) {
        app.api.fetchVideoInfo(sVID).then(function (res) {
          var data = JSON.parse(that.trimJSON(res.data))
          console.log('fetchVideoInfo=', data)
          let { ip, vl: { vi }, preview } = data
          let fvkey = vi[0].fvkey
          let fn = vi[0].fn
          let ul = vi[0].ul
          let url = ul.ui[0]['url']
          console.log(ip, vi)
          let hero = that.data.hero
          
          hero.video = {
            url: `${url}${fn}?vkey=${fvkey}`,
            preview: preview
          }
          that.setData({
            hero: hero
          })
        })
      })
      console.log('formatDataAfter2=', that.data)
    })
  },
  onShow () {
  },
  onReady: function() {
    this.videoContext = wx.createVideoContext('gameIntro')
    // var that = this
    // var leveladdskills = this.data.hero.leveladdskills
    // for (let k = 0; k < 5; k++) {
    //   let index = 1;
    //   that.check(leveladdskills[k]['skillpic']).then(function (res) {
    //     console.log(k);
    //     if (res.statusCode != 200) {
    //       leveladdskills[k]['skillpic'] = 'https://game.gtimg.cn/images/yxzj/ingame/ingame_5/ji.png'
    //     }
    //     that.check(leveladdskills[k + index * 5]['skillpic']).then(function (res) {
    //       console.log(k + index * 5);
    //       if (res.statusCode != 200) {
    //         leveladdskills[k + index * 5]['skillpic'] = 'https://game.gtimg.cn/images/yxzj/ingame/ingame_5/ji.png'
    //       }
    //       index++
    //       that.check(leveladdskills[k + index * 5]['skillpic']).then(function (res) {
    //         console.log(k + index * 5);
    //         if (res.statusCode != 200) {
    //           leveladdskills[k + index * 5]['skillpic'] = 'https://game.gtimg.cn/images/yxzj/ingame/ingame_5/ji.png'
    //         }
    //       })
    //     })
    //   })
    // }
  },
  toggleVideo () {
    let hero = this.data.hero
    hero.showVideo = !hero.showVideo
    this.setData({
      hero: hero
    })
    if (hero.showVideo) {
      this.playVideo()
    } else {
      this.pauseVideo();
    }
  },
  playVideo () {
    this.videoContext.play()
  },
  pauseVideo () {
    this.videoContext.pause()
  },
  heroTypeVal (value) {
    return heroType[value]
  },
  heroFeatureVal (value) {
    return heroFeature[value]
  },
  heroName (value) {
    return heros[value]
  },
  skillImg (value) {
    return value ? `https://ossweb-img.qq.com/images/yxzj/ingame/res/skill/${value}.png` : 'https://game.gtimg.cn/images/yxzj/ingame/ingame_5/ji.png'
  },
  heroImg (value) {
    return value ? `https://game.gtimg.cn/images/yxzj/ingame/index_heros/${value}.jpg` : 'https://game.gtimg.cn/images/yxzj/ingame/ingame_5/tou.png'
  },
  heroHeaderBgImg (value) {
    return value ? `https://game.gtimg.cn/images/yxzj/ingame/index_heros/bg/${value}_bg.jpg` : ''
  },
  mingImg (value) {
    return value ? `https://game.gtimg.cn/images/yxzj/img201606/mingwen/${value}.png` : 'https://game.gtimg.cn/images/yxzj/ingame/ingame_5/ji.png'
  },
  summonerImg (value) {
    return value ? `https://game.gtimg.cn/images/yxzj/img201606/summoner/${value}.jpg` : 'https://game.gtimg.cn/images/yxzj/ingame/ingame_5/ji.png'
  },
  armImg (value) {
    // https://ossweb-img.qq.com/images/yxzj/ingame/res/equip/${value}.png
    return value ? `https://game.gtimg.cn/images/yxzj/img201606/itemimg/${value}.jpg` : 'https://game.gtimg.cn/images/yxzj/ingame/ingame_5/ji.png'
  },
  armAttr (value) {
    let officeArm = this.data.officeArm
    let arms = officeArm.filter(item => {
      return parseInt(item['item_id'], 10) === parseInt(value, 10)
    })
    let arm = arms.length ? arms[0] : {}
    return arm
  },
  clickTab: function (e) {
    util.clickTab(e, this)
  }
})
