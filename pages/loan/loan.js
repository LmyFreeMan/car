// pages/ loan/loan.js
import Toast from '../../dist/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
   items:[
     {name:"同意",value:"1"},
    
   ],
  
  username:"",
  idcard:"",
  post:"",
  phone:"",
  yzm:"",
  sms:"",
  radio1:"",
  zantu:"",
 
    flag: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  checkboxChange:function(e)
  {
    this.data.zantu=e.detail.value
  },
  send: function(e) {
    console.log("dddd");
    console.log(e)
    var that = this
    console.log(this.data.phone)
    if (!(/^1[34578]\d{9}$/.test(this.data.phone))) {
      Toast.fail("手机号不合法")
      return false;
    }

    var flag = this.data.flag
    var index = this.data.index

    wx.request({
      url: 'https://www.gxfwz36524.com/car/public/aliyun-dysms-php-sdk/api_demo/SmsDemo.php',
      method: "GET",
      header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8', },
      data: {
        phone: this.data.phone
      },
      header: {
        'content-type': 'application/json'
      },


      success: function (e) {
        console.log(e)
        that.data.yzm = e.data
      }
    })






    var second = 60;
    var that = this;
    that.setData({
      flag: true,
      index: second + "秒后点击发送"
    })
    var count = setInterval(function () {
      second -= 1;
      console.log(second)
      that.setData({
        index: second + "秒后点击发送"
      })
      if (second < 1) {
        clearInterval(count);
        that.setData({
          index: "发送验证码",
          flag: false
        })

      }
    }, 1000)
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '66669237' // 仅为示例，并非真实的电话号码
    })
  },


  username:function(e)
  {
    console.log(e)
    this.data.username=e.detail
  },

  sms:function(e)
  {
    console.log(e)
    this.data.sms=e.detail
  },
  onChange:function(e)
  {
    console.log(e)
    const { key } =e.currentTarget.dataset;
    this.setData({ [key]: e.detail });




  },
  return:function()
  {

      wx.switchTab
     ({
      url: '../../pages/index/index'
     })
  },
  go:function()
  { 
    var that=this
    if(this.data.username=="")
    {
      Toast.fail("请输入用户名")
      return false;
    }
    if(!(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/.test(this.data.idcard)))
    {
      Toast.fail("请输入正确的身份证号码");
      return false;
    }
    if(this.data.sms!=this.data.yzm||this.data.sms=="")
    {
      Toast.fail("请输入正确的验证码");
      return false;
    }
    if(this.data.post=="")
    {
      Toast.fail("请输入正确的储蓄卡号");
      return false;
    }


    if(this.data.radio1=="")
    {
      Toast.fail("请填写收税居民身份");
      return false;
    }

    if(this.data.zantu!="同意")
    {
      Toast.fail("请勾选同意条款");
      return false;
    }
    console.log("dddddd")
    wx.request({
      url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/addloan',
      method:"POST",
           data: {
             username:that.data.username,
             idcard:that.data.idcard,
             openid:getApp().globalData.openid,
             post:that.data.post,
             phone:that.data.phone, 
           },
           header: {
             "Content-Type": "application/x-www-form-urlencoded"

           },
      success: function(res) {
        
      }
    })
    console.log(this.data)
    console.log(this.data.zantu[0])
  
  },
 idcard:function(e)
  {
    console.log(e)
    this.data.idcard=e.detail
  },
  post:function(e)
  {
    console.log(e)
    this.data.post=e.detail
  },
  phone:function(e)
  {
    console.log("ddd")
    console.log(e)
    this.data.phone=e.detail
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