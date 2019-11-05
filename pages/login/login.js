// pages/login/login.js
import Toast from '../../dist/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
  index:"发送验证码",
  flag:false,
  sms:"",
  phone:"",
  yzm:""
  },
go:function(e)
{

  console.log(this.data);
  if (!(/^1[34578]\d{9}$/.test(this.data.phone))) {
    Toast.fail("手机号不合法")
    return false;
  } 


  if (!(/^\d{6}$/.test(this.data.sms))) {
    Toast.fail("验证码不合法")
    return false;
  } 

 console.log(this.data)
   if(this.data.sms==this.data.yzm)
 {
     getApp().globalData.phone=this.data.phone
     Toast.loading({
       mask: true,
       message: '加载中...' 
     });


     wx.request({
       url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/adduser',
       method: "GET",
       header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8', },
       data: {
         phone: this.data.phone
       },
       header: {
         'content-type': 'application/json'
       },


       success: function (e) {
       
       }
     })




     wx.switchTab({
       url: '../../pages/index/index',
     })



 }
    else
    {
     Toast.fail('验证码错误');
    }
     


},
filed1:function(e)
{
 this.data.phone=e.detail
},
  filed2: function (e) {
    this.data.sms = e.detail
  },
send:function(e)
{
  console.log(e)
var that=this

  if (!(/^1[34578]\d{9}$/.test(this.data.phone))) {
    Toast.fail("手机号不合法")
    return false;
  } 

  var flag=this.data.flag
  var index=this.data.index

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
      that.data.yzm=e.data
    }
  })






  var second=60;
  var that=this;
  that.setData({
    flag:true,
    index: second + "秒后点击发送"
  })
  var count=setInterval(function()
  {
    second-=1;
    console.log(second)
    that.setData({
      index:second+"秒后点击发送"
    })
    if(second<1)
    {
      clearInterval(count);
      that.setData({
        index:"发送验证码",
        flag: false
      })
    
    }
  },1000)
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