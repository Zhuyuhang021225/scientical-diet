
let app = getApp();
let heightArrs = [];
for (let i = 100; i <= 230; i++){
  heightArrs.push(i);
} 
let weightArrs = [];
for (let i = 30.0; i <= 200.0; i=i+0.1){
  weightArrs.push(i.toFixed(2));
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: app.globalData.userInfo,
    genders: ['男','女'],
    heights: heightArrs,
    weights: weightArrs
  },

  changeGender(e){
    this.setData({
      'userInfo.gender': this.data.genders[e.detail.value]
    })
  },

  onChooseAvatar(e){
    this.setData({
      'userInfo.avatarUrl': e.detail.avatarUrl
    })
  },

  onChooseNickName(e){
    this.setData({
      'userInfo.nickName': e.detail.value
    })
  },

  onChooseBirthday(e){
    this.setData({
      'userInfo.birthday': e.detail.value
    })
  },

  onChooseHeight(e){
    this.setData({
      'userInfo.height': this.data.heights[e.detail.value]
    })
  },

  onChooseCurrentWeight(e){
    this.setData({
      'userInfo.currentWeight': this.data.weights[e.detail.value]
    })
  },

  onChooseTargetWeight(e){
    this.setData({
      'userInfo.targetWeight': this.data.weights[e.detail.value]
    })
  },

  OnSubmitUserInfo(){
    wx.showModal({
      title: '确认修改吗？',
      content: '确定后将会修改用户信息',
      complete: (res) => {
        if (res.cancel) {
          
        }
    
        if (res.confirm) {
          app.globalData.userInfo = this.data.userInfo
          wx.setStorageSync('userInfo', app.globalData.userInfo)
          wx.navigateBack()
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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