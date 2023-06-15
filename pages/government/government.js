Component({
  options: {
    styleIsolation: 'apply-shared',
  },
  data: {
    value: '',
    img1: 'https://images.liquorbox.cn/hgy/gongjijin.png',
    img2: 'https://images.liquorbox.cn/hgy/shebao.png',
    img3: 'https://images.liquorbox.cn/hgy/yibao.png',
    img4: 'https://images.liquorbox.cn/hgy/zhiyuanzhe.png',
  },
  methods: {
    onChange(e) {
      console.log(e.detail.value);
    },

  },
});