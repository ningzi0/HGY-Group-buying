import {
  fetchHome
} from '../../../services/home/home';
import {
  fetchGoodsList
} from '../../../services/good/fetchGoods';
import Toast from 'tdesign-miniprogram/toast/index';

const imageCdn = 'https://tdesign.gtimg.com/miniprogram/images';
const swiperList = [
  `https://images.liquorbox.cn/hgy/banner2.jpg`,
  `https://images.liquorbox.cn/hgy/banner2.jpg`,
  `https://images.liquorbox.cn/hgy/banner2.jpg`,
  `https://images.liquorbox.cn/hgy/banner2.jpg`,
  `https://images.liquorbox.cn/hgy/banner2.jpg`,
];



Page({
  data: {
    current: 3,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
    navigation: {
      type: '',
      showControls: true
    },
    saleList: [{
        img1: 'https://images.liquorbox.cn/hgy/1.jpg',
      },
      {
        img1: 'https://images.liquorbox.cn/hgy/2.jpg',
      },
      {
        img1: 'https://images.liquorbox.cn/hgy/3.jpg',
      },
      {
        img1: 'https://images.liquorbox.cn/hgy/4.jpg',
      }
    ],

    time: 1000 * 60 * 1000,
    icon: [],
    imgSrcs: [],
    tabList: [],
    goodsList: [],
    goodsListLoadStatus: 0,
    pageLoading: false,
    current: 1,
    autoplay: true,
    duration: '500',
    interval: 5000,
    navigation: {
      type: 'dots'
    },
    swiperImageProps: {
      mode: 'scaleToFill'
    },
    img1: 'https://images.liquorbox.cn/hgy/juwugongkai.png',
    img2: 'https://images.liquorbox.cn/hgy/juminbaoshi.png',
    img3: 'https://images.liquorbox.cn/hgy/zhiyuanzhe.png',
    img4: 'https://images.liquorbox.cn/hgy/lajifenlei.png',
    visible: true,
    content: ['【公告】关于天气变化的温馨提示关于天气变化的温馨提示关于天气变化的温馨提示关于天气变化的温馨提示关于天气变化的温馨提示', '【公告】关于天气变化的温馨提示关于天气变化的温馨提示关于天气变化的温馨提示关于天气变化的温馨提示关于天气变化的温馨提示', '【公告】关于天气变化的温馨提示'],
    shequ: [{
        img: 'https://images.liquorbox.cn/hgy/shequ.jpg',
        tit: '携手社区，共筑健康家园',
        date: '2023-06-26 11:33',
        textContent: '为了增强社区居民对健康的关注，了解自己的身体情况，做到某些疾病的早发现，早预防，早治疗。'
      },

    ],
  },

  goodListPagination: {
    index: 0,
    num: 20,
  },

  privateData: {
    tabIndex: 0,
  },






  // onShow() {
  //   this.getTabBar().init();
  // },
  /**
   * 生命周期函数--监听页面显示
   */
  navigateto: function () {
    wx.navigateTo({
      url: '/pages/government/show/show' //页面路径
    })
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        //唯一标识（其它设置不同的整数）  
        selected: 0
      })
    }
  },


  onLoad() {
    this.init();
  },

  onReachBottom() {
    if (this.data.goodsListLoadStatus === 0) {
      this.loadGoodsList();
    }
  },

  onPullDownRefresh() {
    this.init();
  },

  init() {
    this.loadHomePage();
  },

  loadHomePage() {
    wx.stopPullDownRefresh();

    this.setData({
      pageLoading: true,
    });
    fetchHome().then(({
      swiper,
      tabList
    }) => {
      this.setData({
        tabList,
        imgSrcs: swiper,
        pageLoading: false,
      });
      this.loadGoodsList(true);
    });
  },

  tabChangeHandle(e) {
    this.privateData.tabIndex = e.detail;
    this.loadGoodsList(true);
  },

  onReTry() {
    this.loadGoodsList();
  },

  async loadGoodsList(fresh = false) {
    if (fresh) {
      wx.pageScrollTo({
        scrollTop: 0,
      });
    }

    this.setData({
      goodsListLoadStatus: 1
    });

    const pageSize = this.goodListPagination.num;
    let pageIndex = this.privateData.tabIndex * pageSize + this.goodListPagination.index + 1;
    if (fresh) {
      pageIndex = 0;
    }

    try {
      const nextList = await fetchGoodsList(pageIndex, pageSize);
      this.setData({
        goodsList: fresh ? nextList : this.data.goodsList.concat(nextList),
        goodsListLoadStatus: 0,
      });

      this.goodListPagination.index = pageIndex;
      this.goodListPagination.num = pageSize;
    } catch (err) {
      this.setData({
        goodsListLoadStatus: 3
      });
    }
  },

  goodListClickHandle(e) {
    const {
      index
    } = e.detail;
    const {
      spuId
    } = this.data.goodsList[index];
    wx.navigateTo({
      url: `/pages/goods/details/index?spuId=${spuId}`,
    });
  },

  goodListAddCartHandle() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '点击加入购物车',
    });
  },

  navToSearchPage() {
    wx.navigateTo({
      url: '/pages/goods/search/index'
    });
  },

  navToActivityDetail({
    detail
  }) {
    const {
      index: promotionID = 0
    } = detail || {};
    wx.navigateTo({
      url: `/pages/promotion-detail/index?promotion_id=${promotionID}`,
    });
  },
});