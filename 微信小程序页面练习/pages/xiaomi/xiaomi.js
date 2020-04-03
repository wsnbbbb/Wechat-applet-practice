// pages/xiaomi/xiaomi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     lunbo:0,
    imgarray: ["../../image/轮播图1.jpg", "../../image/轮播图2.jpg", "../../image/轮播图3.webp","../../image/轮播图4.webp"],
    sortimgAarray: ["../../image/sor1.png", "../../image/sort2.webp", "../../image/sort3.gif", "../../image/sort4.webp", "../../image/sort5.webp", "../../image/sort6.png", "../../image/sort7.png", "../../image/sort8.png", "../../image/sort9.png", "../../image/sort10.png"],
    hotGoods: [["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918eafcf051967f9d212a649fad7de28.jpg?thumb=1&w=344&h=280", "Redmi Note 8 Pro", "6400万全场景四摄", "￥1299", "起", "￥1399起"], ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280", "Redmi Note 8", "千元4800万四摄", "￥999", "起"], ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/baf1995a35e823c99e7c8ffd287d64ee.jpg?thumb=1&w=344&h=280", "小米9", "全息幻彩机身，骁龙855", "￥2699","", "￥3299"], ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c45bb8ab2c35e31910612acd2cb7f91.jpg?thumb=1&w=344&h=280", "小米9 Pro 5G", "5G双卡全网通，骁龙855Plus", "￥3699", "起"]
    ],
    maybelikeGoods: [["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f5e8faabd72ee160e245447357f1708e.jpg?thumb=1&w=344&h=280", "Redmi 7", "4000mAh超长续航", "￥899", "", "￥999"],["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/549abe9d4dde71ac9e3fa87a4e13ec62.jpg?thumb=1&w=344&h=280", "黑鲨手机2 Pro", "骁龙855 Plus", "￥3299", "起", "￥3499"], ["https://i8.mifile.cn/v1/a1/82003442-c6b7-3258-cc7a-2a851216ce8a.webp", "小米电视4A 65英寸", "4K HDR，人工智能语音系统", "￥2599", "", "￥2999"], ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cd59729b9a02407979848839c0e5343.jpg?thumb=1&w=344&h=280", "小米电视4X 43英寸", "FHD全高清屏，人工智能语音", "￥1199", "", "￥1499"], ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67af8c5df281feb89083c94a69ad4e23.jpg?thumb=1&w=344&h=280", "RedmiBook 14 增强版", "十代酷睿更强劲", "￥3999", "起"], ["https://i8.mifile.cn/v1/a1/c585ed38-bee4-2f3c-c413-a1af154a74b3.webp", "空调（1.5匹/一级能效）", "变频节能，高效制冷热", "￥2399", "", "￥2699"], ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/552e42b8706ee8d0bd3e048d2a5c4316.jpg?thumb=1&w=360&h=360", "米家洗烘一体机Pro", "智能洗烘，省心省力", "￥2999"], ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c33f008a86c151a1500d44d599351256.jpg?thumb=1&w=360&h=360", "小爱音箱万能遥控版", "传统家电秒变智能", "￥149", "", "￥199"]
    ]
  },
  
  // 轮播图
  lunbo(a){
   this.setData({
     lunbo: a.detail.current
   })
  },

  // 商品详情点击跳转
  goodsDetails(){
    wx.navigateTo({
      url: '../goodsDetails/goodsDetails',
    })
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