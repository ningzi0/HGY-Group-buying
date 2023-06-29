const data = {
  areaList: [{
      label: '贵阳市',
      value: '550000',
      children: [{
        value: '550002',
        label: '南明区',
        children: [{
            value: '5500021',
            label: '花果园大街'
          },
          {
            value: '5500022',
            label: '花果园A区'
          },
          {
            value: '5500023',
            label: '花果园C区'
          },
          {
            value: '5500024',
            label: '花果园M区'
          },
          {
            value: '5500025',
            label: '延安南路花果园S1区'
          },
          {
            value: '5500026',
            label: '太慈社区延安南路'
          }
        ],
      }, ],
    },

  ],
};




Component({
  data: {
    cur: {},
    position: [{
      value: 'bottom',
      text: '底部弹出'
    }, ],
    defaultVal: true,
    options: data.areaList,
    note: '请选择地址',
    visible: false,
    value: '',
    cityText: '',
    cityValue: [],
    dateText: '',
    dateValue: [],
    citys: [{
      label: '居民身份证',
      value: '居民身份证'
    }, ],
    years: [{
        label: '男',
        value: '男'
      },
      {
        label: '女',
        value: '女'
      }
    ],
    mode: '',
    monthVisible: false,
    month: '2023-06-28',
    monthText: '',

    // 指定选择区间起始值
    start: '2000-01-01 00:00:00',
    end: '2030-09-09 12:12:12',
  },

  methods: {
    handlePopup(e) {
      const {
        item
      } = e.currentTarget.dataset;

      this.setData({
          cur: item,
        },
        () => {
          this.setData({
            visible2: true
          });
        },
      );
    },
    onVisibleChange(e) {
      this.setData({
        visible2: e.detail.visible,
      });
    },
    handleChange(e) {
      this.setData({
        defaultVal: e.detail.value,
      });
    },
    showCascader() {
      this.setData({
        visible: true
      });
    },
    onPick(e) {
      console.log(e.detail);
    },
    onChange(e) {
      const {
        selectedOptions,
        value
      } = e.detail;

      this.setData({
        value,
        note: selectedOptions.map((item) => item.label).join('/'),
      });
    },



    showPicker(e) {
      const {
        mode
      } = e.currentTarget.dataset;
      this.setData({
        mode,
        [`${mode}Visible`]: true,
      });
    },
    hidePicker() {
      const {
        mode
      } = this.data;
      this.setData({
        [`${mode}Visible`]: false,
      });
    },
    onConfirm(e) {
      const {
        value
      } = e.detail;
      const {
        mode
      } = this.data;

      console.log('confim', value);

      this.setData({
        [mode]: value,
        [`${mode}Text`]: value,
      });

      this.hidePicker();
    },

    onColumnChange(e) {
      console.log('pick', e.detail.value);
    },


    onColumnChange(e) {
      console.log('picker pick:', e);
    },

    onPickerChange(e) {
      const {
        key
      } = e.currentTarget.dataset;
      const {
        value
      } = e.detail;

      console.log('picker change:', e.detail);
      this.setData({
        [`${key}Visible`]: false,
        [`${key}Value`]: value,
        [`${key}Text`]: value.join(' '),
      });
    },

    onPickerCancel(e) {
      const {
        key
      } = e.currentTarget.dataset;
      console.log(e, '取消');
      console.log('picker1 cancel:');
      this.setData({
        [`${key}Visible`]: false,
      });
    },

    onCityPicker() {
      this.setData({
        cityVisible: true
      });
    },

    onSeasonPicker() {
      this.setData({
        dateVisible: true
      });
    },
  },
});