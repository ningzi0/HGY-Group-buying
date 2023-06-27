Component({
  data: {
    tabPanelstyle: 'display:flex;justify-content:center;align-items:center;',
    marquee2: {
      speed: 60,
      loop: -1,
      delay: 0,
    },
  },
  methods: {
    onTabsChange(event) {
      console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    },

    onTabsClick(event) {
      console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
    },
  },
});