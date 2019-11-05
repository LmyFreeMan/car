// pages/contentlist/contentlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   tag:["1","2","3"]
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
  onItemClick:function(e)
  {
    console.log(e)
    wx.navigateTo({
      url: '../content/content?id='+e.currentTarget.id
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that=this;
     wx.request({
       url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/contentlist',
       header: {
         'Content-Type': 'application/json'
       },
       success: function(res) {
         console.log(res)
        that.setData({
          items:res.data
        })
       }
     })
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