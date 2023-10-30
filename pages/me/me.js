let app = getApp()
const computedBehavior = require('miniprogram-computed').behavior

Page({

  behaviors: [computedBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: app.globalData.userInfo,
    userInfo_touched: false,
    about_touched: false,
    suggestion_touched: false,
    setting_touched: false,
    healthTest_touched: false,
    healthPlan_touched: false
  },

  computed:{
    BMI(data){
      let bmi = (data.userInfo.currentWeight/(data.userInfo.height/100*data.userInfo.height/100)).toFixed(1);
      return bmi;
    }
  },

  /**
   * 用户点击后用户信息后，跳转到用户信息详情页
   */
  goUserInfoDetail(){
    wx.navigateTo({
      url: '/pages/userInfoDetail/userInfoDetail',
    })
  },

  /**
   * 手指移入组件后改变组件背景样式
   * @param {*} e 手指开始触摸的组件标签
   */
  touchStart(e){
    let index = e.currentTarget.dataset.index;
    if(index == 0){
      this.setData({
      userInfo_touched: true
      })
    }if (index == 1) {
      this.setData({
      about_touched: true
      })
    }if (index == 2) {
      this.setData({
      suggestion_touched: true
      })
    }if (index == 3) {
      this.setData({
      setting_touched: true
      })
    }if (index == 4) {
      this.setData({
      healthTest_touched: true
      })
    }if (index == 5) {
      this.setData({
      healthPlan_touched: true
      })
    }
  },

  /**
   * 手指移出组件后，改变所有组件背景样式
   */
  touchEnd(){
    this.setData({
      userInfo_touched: false,
      about_touched: false,
      suggestion_touched: false,
      setting_touched: false,
      healthTest_touched: false,
      healthPlan_touched: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if(wx.getStorageSync('userInfo') != ''){
      app.globalData.userInfo = wx.getStorageSync('userInfo');
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
      value: 'me'
    })
    }
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})