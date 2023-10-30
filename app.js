// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: {
      nickName: "微信用户",
      avatarUrl: "https://mp-ce31015a-3ebf-47b1-b627-3957c765b12a.cdn.bspapp.com/icon/defaultAvatar.png",
      gender: "",
      birthday: "",
      height: '',
      currentWeight: '',
      targetWeight: ''
    }
  }
})
