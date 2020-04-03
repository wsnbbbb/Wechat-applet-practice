// pages/goodsDetails/goodsDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lunboImg: ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96436fb4b448e224d6be215ba4313197.jpg", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4582cdfa732e2bfb5bb9bede10da7d16.jpg", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9977e24825a323e9a67311ab93436fe1.jpg","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6cb62b49a519c321b7dbac7141ad63bc.jpg"],
    scrollview: [["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/78d3ba2dd8a57f35951ea7b3466e1c41.jpg", "Redmi Note 8", "￥999起"], ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c1af9783bdc53ed843af5655ca92009.jpg", "Redmi 7A", "￥579起"], ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9aab8a7fa9005ef918c9aa2d5f17c806.jpg", "Redmi 7 ", "￥899"], ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4f077546060c890516500c2a23d64f6.jpg", "Redmi Note 7 Pro", "￥1199"], ["https://i8.mifile.cn/b2c-mimall-media/fe64ae837c05d0269d1ba4ac6d818858.jpg", "小米MIX 2S", "1799"], ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/411d540271f6efbdd882fa33daee0de3.jpg","小米MIX 3","￥2599"]
    ]
  },
  //返回首页
  back(){
    wx.switchTab({
      url: '../xiaomi/xiaomi',
    })
  },
  
  //添加gwc
  addgwc(){
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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