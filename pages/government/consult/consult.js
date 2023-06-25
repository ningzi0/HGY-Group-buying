Component({
  data: {
    img1: 'https://tdesign.gtimg.com/miniprogram/images/example1.png',
    img2: 'https://tdesign.gtimg.com/miniprogram/images/example2.png',
    img3: 'https://tdesign.gtimg.com/miniprogram/images/example3.png',
    bordered: false,
    list: [{
      img: 'https://images.liquorbox.cn/hgy/header2.png',
      title: '负责花果园C区',
      p1: '楼栋长：张小华',
      p2: '09:00 - 22:30',
      p3: '',

    }, {
      img: 'https://images.liquorbox.cn/hgy/header3.png',
      title: '负责花果园A区',
      p1: '网格警：王警官',
      p2: '09:00 - 22:30',
      p3: '',

    }, {
      img: 'https://images.liquorbox.cn/hgy/header4.png',
      title: '负责花果园A区',
      p1: '物业管家：李笙萧',
      p2: '09:00 - 22:30',
      p3: '',

    }, {
      img: 'https://images.liquorbox.cn/hgy/header4.png',
      title: '负责花果园A区',
      p1: '网格警：王警官',
      p2: '09:00 - 22:30',
      p3: '',

    }]
  },

  methods: {
    callTel: function () {
      wx.makePhoneCall({
        phoneNumber: 'phoneNumber',
      })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          //唯一标识（其它设置不同的整数）  
          selected: 2
        })
      }
    },
  }

});