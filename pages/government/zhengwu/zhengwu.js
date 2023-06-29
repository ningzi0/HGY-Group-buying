Component({
  data: {
    img1: 'https://images.liquorbox.cn/hgy/juwugongkai.png',
    img2: 'https://images.liquorbox.cn/hgy/juminbaoshi.png',
    img3: 'https://images.liquorbox.cn/hgy/zhiyuanzhe.png',
    img4: 'https://images.liquorbox.cn/hgy/lajifenlei.png',
    visible: true,
    content: ['【公告】关于天气变化的温馨提示', '【公告】...'],
    content2: ['【公告】关于消防通道堆放杂物通知', '【公告】...'],
    dang: [{
        img: 'https://images.liquorbox.cn/hgy/pic.png',
        tit: '不忘初心，牢记使命',
        date: '2023-06-26 11:33',
        textContent: '党的二十大报告中，习近平总书记对新征程上坚定不移全面从严治党、深入推进新时代党的建设新的伟大工程作出全面部署，并首次提出“健全全面从严治党体系”的重大举措。'
      },
      {
        img: 'https://images.liquorbox.cn/hgy/pic.png',
        tit: '不忘初心，牢记使命',
        date: '2023-06-26 11:33',
        textContent: '党的二十大报告中，习近平总书记对新征程上坚定不移全面从严治党、深入推进新时代党的建设新的伟大工程作出全面部署，并首次提出“健全全面从严治党体系”的重大举措。'
      },
      {
        img: 'https://images.liquorbox.cn/hgy/pic.png',
        tit: '不忘初心，牢记使命',
        date: '2023-06-26 11:33',
        textContent: '党的二十大报告中，习近平总书记对新征程上坚定不移全面从严治党、深入推进新时代党的建设新的伟大工程作出全面部署，并首次提出“健全全面从严治党体系”的重大举措。'
      }
    ],
    shequ: [{
        img: 'https://images.liquorbox.cn/hgy/pic.png',
        tit: '携手社区，共筑健康家园',
        date: '2023-06-26 11:33',
        textContent: '为了增强社区居民对健康的关注，了解自己的身体情况，做到某些疾病的早发现，早预防，早治疗。'
      },
      {
        img: 'https://images.liquorbox.cn/hgy/pic.png',
        tit: '携手社区，共筑健康家园',
        date: '2023-06-26 11:33',
        textContent: '为了增强社区居民对健康的关注，了解自己的身体情况，做到某些疾病的早发现，早预防，早治疗。'
      },
      {
        img: 'https://images.liquorbox.cn/hgy/pic.png',
        tit: '携手社区，共筑健康家园',
        date: '2023-06-26 11:33',
        textContent: '为了增强社区居民对健康的关注，了解自己的身体情况，做到某些疾病的早发现，早预防，早治疗。'
      }
    ],


  },

  methods: {
    navigateto: function () {
      wx.navigateTo({
        url: '/pages/government/show/show' //页面路径
      })
    }
  }
});