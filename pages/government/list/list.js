var util = require('../../../utils/time')
Page({
  data: {
    promptTimeSole: '',
  },
  onLoad: function (options) {
    this.setData({
      promptTimeSole: util.formatSole(),
    });
  },
})