// pages/videos/videos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList: [
      {
        id: 1,
        name: '英雄攻略',
        infos: [
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
          }
        ],
        more: true
      },
      {
        id: 2,
        name: '精彩瞬间',
        infos: [
          {
            id: 1,
            title: '春季赛首个五杀诞生 DangLang诸葛亮封神',
            subTitle: '',
            poster: 'http://i.17173cdn.com/2fhnvk/YWxqaGBf/cms3/pPMhBdblnCFbwrD.jpg',
            url: 'http://122.228.56.23/vhot2.qqvideo.tc.qq.com/AZ4zVMBEPcz29hd8VJz_RFtYKFhGEWsZNRSwDlc7xvlA/e03891lk8qz.p712.1.mp4?sdtfrom=v1010&guid=f6f79bad86c2f2dcd9876243a00a811d&vkey=0C6F08ED2D08FA5E80D5DA2CF57C01C9495E1BFD07AF5458310E6DC2876A7F43A447B26EBE5628247FB5343F50D89B6F5C530B5784E7357E4816B0FAE4966A59025873180858ABF663C03513C5A11D0B155725A4F385DA24F4C59ABFFE06C7A25C384D4BE61B1719D19001EFD5B62343D4CD6BAFB8352784&platform=2',
            bigImage: true
          },
          {
            id: 2,
            title: '极秀时刻',
            subTitle: ' 精彩镜头锦集我们玩得不是一个荆轲',
            poster: 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/IfJPgabljnrjkjr.png',
            url: 'http://122.228.56.23/vhot2.qqvideo.tc.qq.com/AZ4zVMBEPcz29hd8VJz_RFtYKFhGEWsZNRSwDlc7xvlA/e03891lk8qz.p712.1.mp4?sdtfrom=v1010&guid=f6f79bad86c2f2dcd9876243a00a811d&vkey=0C6F08ED2D08FA5E80D5DA2CF57C01C9495E1BFD07AF5458310E6DC2876A7F43A447B26EBE5628247FB5343F50D89B6F5C530B5784E7357E4816B0FAE4966A59025873180858ABF663C03513C5A11D0B155725A4F385DA24F4C59ABFFE06C7A25C384D4BE61B1719D19001EFD5B62343D4CD6BAFB8352784&platform=2'
          },
          {
            id: 3,
            title: '精彩对局回放',
            subTitle: '李白秀风骚走位丝血反杀生存',
            poster: 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/eUIrPgbljcCpuBc.jpg',
            url: 'http://122.228.56.23/vhot2.qqvideo.tc.qq.com/AZ4zVMBEPcz29hd8VJz_RFtYKFhGEWsZNRSwDlc7xvlA/e03891lk8qz.p712.1.mp4?sdtfrom=v1010&guid=f6f79bad86c2f2dcd9876243a00a811d&vkey=0C6F08ED2D08FA5E80D5DA2CF57C01C9495E1BFD07AF5458310E6DC2876A7F43A447B26EBE5628247FB5343F50D89B6F5C530B5784E7357E4816B0FAE4966A59025873180858ABF663C03513C5A11D0B155725A4F385DA24F4C59ABFFE06C7A25C384D4BE61B1719D19001EFD5B62343D4CD6BAFB8352784&platform=2'
          },
        ],
        more: true
      },
      {
        id: 3,
        name: '精彩瞬间',
        infos: [
          {
            id: 1,
            title: 'KPL职业联赛总决赛 QGhappy vs AG超玩会',
            subTitle: '第一场',
            poster: 'http://i.17173cdn.com/2fhnvk/YWxqaGBf/cms3/SOkyWdbluwaffnF.jpg',
            url: 'http://122.228.56.23/vhot2.qqvideo.tc.qq.com/AZ4zVMBEPcz29hd8VJz_RFtYKFhGEWsZNRSwDlc7xvlA/e03891lk8qz.p712.1.mp4?sdtfrom=v1010&guid=f6f79bad86c2f2dcd9876243a00a811d&vkey=0C6F08ED2D08FA5E80D5DA2CF57C01C9495E1BFD07AF5458310E6DC2876A7F43A447B26EBE5628247FB5343F50D89B6F5C530B5784E7357E4816B0FAE4966A59025873180858ABF663C03513C5A11D0B155725A4F385DA24F4C59ABFFE06C7A25C384D4BE61B1719D19001EFD5B62343D4CD6BAFB8352784&platform=2'
          },
          {
            id: 2,
            title: 'KPL职业联赛总决赛 QGhappy vs AG超玩会',
            subTitle: '第二场',
            poster: 'http://i.17173cdn.com/2fhnvk/YWxqaGBf/cms3/SOkyWdbluwaffnF.jpg',
            url: 'http://122.228.56.23/vhot2.qqvideo.tc.qq.com/AZ4zVMBEPcz29hd8VJz_RFtYKFhGEWsZNRSwDlc7xvlA/e03891lk8qz.p712.1.mp4?sdtfrom=v1010&guid=f6f79bad86c2f2dcd9876243a00a811d&vkey=0C6F08ED2D08FA5E80D5DA2CF57C01C9495E1BFD07AF5458310E6DC2876A7F43A447B26EBE5628247FB5343F50D89B6F5C530B5784E7357E4816B0FAE4966A59025873180858ABF663C03513C5A11D0B155725A4F385DA24F4C59ABFFE06C7A25C384D4BE61B1719D19001EFD5B62343D4CD6BAFB8352784&platform=2'
          },
          {
            id: 3,
            title: 'KPL职业联赛总决赛 QGhappy vs AG超玩会',
            subTitle: '第三场',
            poster: 'http://i.17173cdn.com/2fhnvk/YWxqaGBf/cms3/SOkyWdbluwaffnF.jpg',
            url: 'http://122.228.56.23/vhot2.qqvideo.tc.qq.com/AZ4zVMBEPcz29hd8VJz_RFtYKFhGEWsZNRSwDlc7xvlA/e03891lk8qz.p712.1.mp4?sdtfrom=v1010&guid=f6f79bad86c2f2dcd9876243a00a811d&vkey=0C6F08ED2D08FA5E80D5DA2CF57C01C9495E1BFD07AF5458310E6DC2876A7F43A447B26EBE5628247FB5343F50D89B6F5C530B5784E7357E4816B0FAE4966A59025873180858ABF663C03513C5A11D0B155725A4F385DA24F4C59ABFFE06C7A25C384D4BE61B1719D19001EFD5B62343D4CD6BAFB8352784&platform=2'
          },
          {
            id: 4,
            title: 'KPL职业联赛总决赛 QGhappy vs AG超玩会',
            subTitle: '第四场',
            poster: 'http://i.17173cdn.com/2fhnvk/YWxqaGBf/cms3/SOkyWdbluwaffnF.jpg',
            url: 'http://122.228.56.23/vhot2.qqvideo.tc.qq.com/AZ4zVMBEPcz29hd8VJz_RFtYKFhGEWsZNRSwDlc7xvlA/e03891lk8qz.p712.1.mp4?sdtfrom=v1010&guid=f6f79bad86c2f2dcd9876243a00a811d&vkey=0C6F08ED2D08FA5E80D5DA2CF57C01C9495E1BFD07AF5458310E6DC2876A7F43A447B26EBE5628247FB5343F50D89B6F5C530B5784E7357E4816B0FAE4966A59025873180858ABF663C03513C5A11D0B155725A4F385DA24F4C59ABFFE06C7A25C384D4BE61B1719D19001EFD5B62343D4CD6BAFB8352784&platform=2'
          }
        ],
        more: true
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  }

  
})