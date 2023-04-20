import {
  config,
  cdnBase
} from '../../config/index';

/** 获取首页数据 */
function mockFetchHome() {
  const {
    delay
  } = require('../_utils/delay');
  const {
    genSwiperImageList
  } = require('../../model/swiper');
  return delay().then(() => {
    return {
      swiper: genSwiperImageList(),
      tabList: [{
          text: '蔬菜豆制品',
          img: '/images/shucaiqu.png',
          key: 0,
        },
        {
          text: '酒水饮料',
          img: '/images/jiulei.png',
          key: 1,
        },
        {
          text: '休闲零食',
          img: '/images/xiuxianlingshi.png',
          key: 2,
        },
        {
          text: '粮油调味',
          img: '/images/liangyouqu.png',
          key: 3,
        },
        {
          text: '个护清洁',
          img: '/images/yagaoyaju.png',
          key: 4,
        },
        {
          text: '水果鲜花',
          img: '/images/shuiguoqu.png',
          key: 5,
        },
        {
          text: '乳品烘焙',
          img: '/images/gaodianqu.png',
          key: 6,
        },
        {
          text: '肉禽蛋水产',
          img: '/images/shushiqu.png',
          key: 7,
        },
        {
          text: '速冻食品',
          img: '/images/lengyinqu.png',
          key: 8,
        },
        {
          text: '日用百货',
          img: '/images/zhipinqu.png',
          key: 9,
        },
      ],
      activityImg: `${cdnBase}/activity/banner.png`,
    };
  });
}

/** 获取首页数据 */
export function fetchHome() {
  if (config.useMock) {
    return mockFetchHome();
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}