// import TabMenu from './data';
// Component({
//   data: {
//     active: 3,
//     list: TabMenu,
//   },

//   methods: {
//     onChange(event) {
//       this.setData({
//         active: event.detail.value
//       });
//       wx.switchTab({
//         url: this.data.list[event.detail.value].url.startsWith('/') ?
//           this.data.list[event.detail.value].url :
//           `/${this.data.list[event.detail.value].url}`,
//       });
//     },

//     init() {
//       const page = getCurrentPages().pop();
//       const route = page ? page.route.split('?')[0] : '';
//       const active = this.data.list.findIndex(
//         (item) =>
//         (item.url.startsWith('/') ? item.url.substr(1) : item.url) ===
//         `${route}`,
//       );
//       this.setData({
//         active
//       });
//     },
//   },
// });



Component({
  data: {
    selected: 0, //当前选中的tab下标
    color: "#1E1E1E",
    selectedColor: "#646464", //tabbar选中字体颜色
    list: [{
      "pagePath": "/pages/home/home",
      "iconPath": "https://images.liquorbox.cn/hgy/tab1.png",
      "selectedIconPath": "https://images.liquorbox.cn/hgy/tab1-active.png",
      "text": "首页"
    }, {
      "pagePath": "/pages/goods/category/index",
      "iconPath": "https://images.liquorbox.cn/hgy/tab2.png",
      "selectedIconPath": "https://images.liquorbox.cn/hgy/tab2-active.png",
      "text": "分类"
    }, {
      "pagePath": "/pages/government/zhengwu/zhengwu",
      "iconPath": "https://images.liquorbox.cn/hgy/tab3.png",
      "selectedIconPath": "https://images.liquorbox.cn/hgy/tab3.png",
      "text": "政务咨询"
    }, {
      "pagePath": "/pages/order/order-list/index",
      "iconPath": "https://images.liquorbox.cn/hgy/tab4.png",
      "selectedIconPath": "https://images.liquorbox.cn/hgy/tab4-active.png",
      "text": "订单"
    }, {
      "pagePath": "/pages/usercenter/index",
      "iconPath": "https://images.liquorbox.cn/hgy/tab5.png",
      "selectedIconPath": "https://images.liquorbox.cn/hgy/tab5-active.png",
      "text": "我的"
    }]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path
      this.setData({
        selected: data.index
      })
      wx.switchTab({
        url
      })
    }
  },
})