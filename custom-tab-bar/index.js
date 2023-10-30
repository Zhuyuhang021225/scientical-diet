// custom-tab-bar/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    value: 'index',
    list: [
      { value: 'index', icon: 'home', ariaLabel: '首页' },
      { value: 'record', icon: 'assignment', ariaLabel: '记录' },
      { value: 'scan', icon: 'image-search', ariaLabel: '扫描' },
      { value: 'me', icon: 'user', ariaLabel: '我的' },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e){
      let path = '/pages/'+e.detail.value+'/'+e.detail.value
      wx.switchTab({
        url: path,
      })
      this.setData({
        value: e.detail.value
      })
    }
  }
})