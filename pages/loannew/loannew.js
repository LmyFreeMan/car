import Dialog from '../../dist/dialog/dialog';
import Notify from '../../dist/notify/notify';
import Toast from '../../dist/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: "发送验证码",
    phone:"",
    yzm:"",
    sms:"",
    username:"",
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
    index: second + "秒"
  })
  var count=setInterval(function()
  {
    second-=1;
    console.log(second)
    that.setData({
      index:second+"秒"
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
go:function()
{ 
  var that=this
  if(this.data.username=="")
  {
    Toast.fail("请输入用户名")
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


  console.log("dddddd")
  wx.request({
    url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/addloan',
    method:"POST",
         data: {
           username:that.data.username,
           openid:getApp().globalData.openid,
           phone:that.data.phone, 
         },
         header: {
           "Content-Type": "application/x-www-form-urlencoded"

         },
    success: function(res) {
      Dialog.confirm({
        showCancelButton:false,
    
        message: '稍后会有专业的的客服人员与您沟通,为您推荐合适的贷款产品,请保持电话畅通.'
       
      }).then(() => {
        wx.switchTab({
          url:'../index/index'
        })
      }).catch(() => {
        // on cancel
      });
    }
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
    var that=this
    wx.getSystemInfo({
      success: function (res) {
       that.setData({
          winWidth: res.windowWidth,
          winheight: res.windowHeight
        });
      }
    });
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