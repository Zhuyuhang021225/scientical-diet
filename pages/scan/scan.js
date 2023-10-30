let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    enable: false,
    loadingProps: {
      size: '50rpx',
    },
    temImageUrl: '',
    base64: '',
    image_content: ''
  },

  onRefresh() {
    this.setData({ enable: true });
    setTimeout(() => {
      this.setData({ 
        enable: false,
        temImageUrl: '',
        image_content: '',
        loading: false
      });
    }, 1200);
  },

  onScroll(e) {
    const { scrollTop } = e.detail;
    this.setData({
      backTopVisible: scrollTop > 100,
    });
  },


  uploadImage(e){
    let API_KEY = 'otySnI5ty9EFlELQWVEVNuCL';
    let SECRET_KEY = 'mDQUoukWej8w5BZjNouCalSPQ7D7ZTXY';
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      camera: 'back',
      success:(res)=> {
        let imageUrl = res.tempFiles[0].tempFilePath
        wx.getFileSystemManager().readFile({
          filePath: imageUrl,
          encoding: 'base64',
          success:(res)=>{
            this.setData({
              base64: res.data,
              temImageUrl: imageUrl,
              loading: true
            })
          }
        });
        wx.request({
          url: 'https://aip.baidubce.com/oauth/2.0/token?client_id='+API_KEY+'&client_secret='+SECRET_KEY+'&grant_type=client_credentials',
          method: "POST",
          header:{
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
          },
          success:(res)=>{
            let AccessToken = res.data.access_token
            wx.request({
              url: 'https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic?access_token='+AccessToken,
              method: "POST",
              header:{
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
              },
              data: {
                image: this.data.base64
              },
              success:(res)=>{
                let content = ""
                res.data.words_result.forEach(element => {
                  content = content + element.words
                });
                this.setData({
                  image_content: content,
                  loading: false
                })
              }
            })
          }
        })
      }
    })
  },

  goSearchPage(){
    wx.navigateTo({
      url: '/pages/searchPage/searchPage',
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
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
      value: 'scan'
    })
    }
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