// pages/test/test.js
let InnerAudioContex;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      message:'哈哈哈哈',
      id:'0',
      active:0,
      scrollArray:["男装","女装","童装","男鞋","女鞋","家电","彩妆","户外"]
  },
  
  active:function(a){
    console.log(a);
    let id = a.currentTarget.dataset.id;
    this.setData({
      active:id
    })
  },

  changeactive(a){
    let id = a.currentTarget.dataset.id;
    this.setData({
      active: id
    })
  },

  tiaozhuan(){
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  
  play(){
    InnerAudioContex.play()
  },
  pause(){
    InnerAudioContex.pause()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    InnerAudioContex =wx.createInnerAudioContext();
    InnerAudioContex.src = "http://music.163.com/song/media/outer/url?id=25841337.mp3"
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
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