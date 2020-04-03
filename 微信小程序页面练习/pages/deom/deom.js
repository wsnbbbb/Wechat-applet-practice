// pages/deom/deom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getinfo(){
    wx.request({
      url: 'http://localhost:8888/user',
      data: {name:"小米"},
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data.name)
      },
      fail: function(res) {
        console.log(res)
      },
      complete: function(res) {
        console.log(res)
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(3);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  //小程序初始化时触发
  onReady: function () {
     console.log(1)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  //在小程序显示时触发
  onShow: function () {
    console.log(2)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  //在小程序隐藏时触发
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  //
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})