const URI = 'http://pvp.17173.com/ty'
const fetch = require('./fetch')

const kogAPI = 'https://pvp.qq.com/web201605/js'

/**
 * 抓取VR特定类型的API
 * @param  {String} type   类型，例如：'m/store/list'
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */
function fetchApi (type, params) {
  return fetch(URI, type, params)
}

function fetchHeros () {
  // 官方接口来源
  // pay_type:10 周免
  // hero_type:3 英雄类别 1-6
  // new_type:1 新英雄
  // 图片地址格式： https://pvp.qq.com/ingame/all/index.shtml#!/strategy/heroBook/190
  return fetch(kogAPI, 'herolist.json?ieg_ingame_domain=pvp')
}
function fetchHeroInfo (params) {
  // 官方接口来源 获取英雄属性
  // heroid:190 英雄id
  // 接口格式： https://ac.ingame.qq.com/php/ingame/smoba/top_hero_detail.php?heroid=190
  let url = 'https://ac.ingame.qq.com'
  return fetch(url, 'php/ingame/smoba/top_hero_detail.php', params)
}
function fetchMing () {
  // 获取铭文信息列表 // imgSrcEx: https://game.gtimg.cn/images/yxzj/img201606/mingwen/3516.png
  return fetch(kogAPI, 'ming.json')
}
function fetchSummoner () {
  // 获取召唤师技能列表 // imgSrcEx:  https://game.gtimg.cn/images/yxzj/img201606/summoner/80115.jpg
  return fetch(kogAPI, 'summoner.json')
}
function fetchArm () {
  // 获取装备列表 // imgSrcEx: https://game.gtimg.cn/images/yxzj/img201606/itemimg/1233.jpg
  return fetch(kogAPI, 'item.json')
}
// 获取视频信息，其中包含vids
// /?source=client_circle_detail&p0=18&id=25760
function fetchVids (id) {
  if (!id) {
    return
  }
  let url = 'https://apps.game.qq.com/wmp/v2/public'
  let params = {
    source: 'client_circle_detail',
    p0: 18,
    id: id
  }
  return fetch(url, 'search.php', params)
}
// 获取视频链接信息
// https://h5vv.video.qq.com/getinfo?otype=json&&vids=n03727hjjvq
function fetchVideoInfo (vids) {
  if (!vids) {
    return
  }
  let url = 'https://h5vv.video.qq.com'
  let params = {
    guid: newGuid(),
    platform: 11001,
    charge: 0,
    otype: 'json',
    vids: vids
  }
  return fetch(url, 'getinfo', params)
}
// function createGUID (a) {
//  a = a || 32
//  for (var b = '', c = 1; a >= c; c++) {
//    var d = Math.floor(16 * Math.random()).toString(16)
//    b += d
//  }
//  return b
// }
function newGuid () {
  function a () {
    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
  }
  return [a(), a(), a(), a(), a(), a(), a(), a()].join('')
}
module.exports = { fetchApi, fetchHeros, fetchHeroInfo, fetchSummoner, fetchMing, fetchArm, fetchVids, fetchVideoInfo }
