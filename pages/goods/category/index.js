import {
  getCategoryList
} from '../../../services/good/fetchCategoryList';
Page({
  data: {
    list: [],
  },
  async init() {
    try {
      const result = await getCategoryList();
      this.setData({
        list: result,
      });
    } catch (error) {
      console.error('err:', error);
    }
  },

  // onShow() {
  //   this.getTabBar().init();
  // },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        //唯一标识（其它设置不同的整数）  
        selected: 1
      })
    }
  },
  onChange() {
    wx.navigateTo({
      url: '/pages/goods/list/index',
    });
  },
  onLoad() {
    this.init(true);
  },
});