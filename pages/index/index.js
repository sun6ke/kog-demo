// 获取全局应用程序实例对象
  const app = getApp()
  var hasOfficeHeros
// 创建页面实例对象
  Page({
    data: {
      manito: [
        {
          title: '快速脱离青铜',
          child: [
            {
              id: 1,
              title: '1分钟明白怎么玩'
            }
          ]
        }
      ],
      navBtnSelectIdx: 1,
      imgUrls: [
        'http://i.17173cdn.com/2fhnvk/YWxqaGBf/cms3/vlSpBYbltyFdnef.jpg',
        'http://img.18183.com/uploads/allimg/170704/36-1FF41024070-L.jpg',
        'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/FuSyaCbljavrxdB.png'
      ],
      infos: [
        {
          id: 1,
          title: '实力分析! 为啥王者荣耀这么吸引女大学生',
          time: '2017-02-07',
          likeCount: 10,
          isClick: false,
          imageUrl: 'http://i.17173cdn.com/2fhnvk/YWxqaGBf/cms3/rmnmXkbluFADqtE.png'
        },
        {
          id: 2,
          title: '王者荣耀S8赛季战士坦克推荐上分 S8吕布厉害吗怎么玩',
          time: '2017-02-08',
          likeCount: 100,
          isClick: false,
          imageUrl: 'http://i.17173cdn.com/2fhnvk/YWxqaGBf/cms3/mMerjYbluyFmmba.jpg'
        },
        {
          id: 3,
          title: '就问你爱不爱 盘点射手最爱辅助大集结！',
          time: '2017-02-08',
          likeCount: 0,
          isClick: false,
          imageUrl: 'http://i.17173cdn.com/2fhnvk/YWxqaGBf/cms3/fcNTqabluEdfyfz.jpg'
        }
      ],
      newsTy: [
        {
          id: 1,
          type: '攻略',
          title: '体验射手黄忠玩法全攻略 宝刀未老恐怖的团战杀手',
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
      ],
      newsGl: [
        {
          id: 1,
          type: '攻略',
          title: '攻略射手黄忠玩法全攻略 宝刀未老恐怖的团战杀手',
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
    formatData () {
      let officeHeros = this.data.officeHeros || []
      let freeHeroList = []
      let hotHeroList = []
      let newHeroList = []
      for (let i = 0, len = officeHeros.length; i < len; i++) {
        let hero = officeHeros[i]
        if (hero['pay_type'] && hero['pay_type'].toString().indexOf("10") != -1) {
          freeHeroList.push(hero)
        }
        if (hero.new_type === 1) {
          newHeroList.push(hero)
        }
      }
      console.log('freeHeroList=', freeHeroList)
      this.setData({
        freeHeroList: freeHeroList,
        newHeroList: newHeroList,
        hotHeroList: hotHeroList,
        officeHeros: officeHeros
      })
    },
    getGlobalData () {
      console.log('getGlobalData===', app.globalData.officeHeros)
      this.setData({
        officeHeros: app.globalData.officeHeros || []
      })
      if (app.globalData.officeHeros) {
        clearInterval(hasOfficeHeros)
        this.formatData()
      }
    },
    onLoad () {
      let that = this
      let officeHeros = this.data.officeHeros || []
      if (!officeHeros.length) {
        // hasOfficeHeros = setInterval(that.getGlobalData, 250)
        hasOfficeHeros = setInterval(that.getGlobalData, 250)
        setTimeout(function () {
          clearInterval(hasOfficeHeros);
        }, 10000);
      }
    },
    onShow () {

    },
    navItemTap (e) {
      let index = e.target.dataset.index
      if (index !== this.navBtnSelectIdx) {
        this.setData({
          navBtnSelectIdx: index
        })
      }
    },

    /**
     * 点赞
     */
    addLike: function(event) {
      var selectInfo = this.data.infos.find(info => (info.id == event.currentTarget.dataset.id));

      if (selectInfo.isClick) {
        selectInfo.isClick = false;
        selectInfo.likeCount --;
      } else {
        selectInfo.isClick = true;
        selectInfo.likeCount ++;
      }
      
      this.setData({
        infos: this.data.infos
      });
    }
  })
