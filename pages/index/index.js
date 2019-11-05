    //index.js
//获取应用实例
import Dialog from '../../dist/dialog/dialog';
import Notify from '../../dist/notify/notify';
import Toast from '../../dist/toast/toast';

var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;
const app = getApp()

Page({
  data:{
    price: ["10万以下", "10-15万", "15万以上"],
    monthprice:["零首付","一成首付","两成首付"],
   changeindex:"",
    type2: ["别克", "比亚迪", "本田", "荣成"],
    name:null,
    address:"",
    show:false,
    flag:false,
    showimg:"none",
    showinput:false,
    phone:"",
    firstprice:"",
    monthprice:"",
    yzm:"",
    sms:"",
    index: "发送验证码",
    clientWidth:"",
    clientHeight:""
    
  },
  kexia(){
    Toast.loading({
      mask: true,
      message: '加载中...'
    });
    wx.switchTab({
      url:"../../pages/contentlist/contentlist",
      success:function()
      {
        Toast.clear();
      }
    })
  },
  send: function(e) {
    console.log("dasd")
   
    var that = this
    console.log(this.data.phone)
    if (!(/^1[34578]\d{9}$/.test(this.data.phone))) {
      Toast.fail("手机号不合法")
      return false;
    }

    var flag = this.data.flag
    var index = this.data.index
    this.setData({
      flag:true
    })
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
      index: second + "秒"
    })
    var count = setInterval(function () {
      second -= 1;
      console.log(second)
      that.setData({
        index: second + "秒"
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
  ling:function()
  {
    this.setData({
      show:true,
      showimg:"none",
      showinput:true
    })
  },
  phone:function(e)
  {
    console.log("ddd")
    console.log(e)
    this.data.phone=e.detail
  },
  quit:function(){
    getApp().globalData.isquit=true
    this.setData({
      showimg:"none",
      show:false,
      clientHeight:"",
      clientWidth:""
    })
  },
  che:function()
  {
    Toast.loading({
      mask: true,
      message: '加载中...'
    });
  wx.switchTab({
    url: '../../pages/search/search',
    success:function()
    {
      Toast.clear();
    }
  })
  },
  sms:function(e)
  {
      this.data.sms = e.detail 
  },
  confirm:function(){
    var that=this;
    
    if(this.data.sms!=this.data.yzm||this.data.sms=="")
    {
      Toast.fail("请输入正确的验证码");
      that.setData({
        showinput:true
      })
    }
  else{
  console.log("我是openid"+getApp().globalData.openid);
  console.log(that.data.phone)
    Toast.loading({
      mask: true,
      message: '加载中...'
    });
    wx.request({
      url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/adduser',
     
      header: {
        'content-type': 'application/x-www-form-urlencoded'
    },
     
      method: 'POST',
     
      data: {
        phone: that.data.phone,
        openid:getApp().globalData.openid,
        city:getApp().globalData.address
      },
    

      success: function (e) {
        that.setData({
          show:false,
          clientHeight:"",
          clientWidth:""
        })
        Toast.clear();
        getApp().globalData.phone=that.data.phone
        Notify({
          text: '红包领取成功,导购人员稍后联系您,为您选择合适的车型',
          duration: 5000,
          selector: '#custom-selector',
          backgroundColor: '#1989fa'
        });
      }
    })
   
    
  




  }
  },
  go:function()
  {
   
    Toast.loading({
      mask: true,
      message: '加载中...'
    });

    var na = this.data.name
    wx.request({
      url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/byname',
      method: "GET",
      header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8', },
      data: {
        name: na
      },
      header: {
        'content-type': 'application/json'
      },


      success: function (e) {
      if(e.data=="fail")
      {
        Toast.clear();
        Dialog.alert({
          message: '无相关内容'
        }).then(() => {
          // on close
        });
      }
      else
      {
        console.log(e)
        Toast.clear();
         console.log("1111")
          getApp().globalData.list=e.data
          wx.switchTab({
            url: '../search/search',
        
          })
      }
      }
    })
  },
  detail:function(e)
  {
    this.data.name=e.detail.value
  },
  loan:function()
  {
    // wx.navigateBack({
    //    url: '../../pages/loan/loan'
    // })

    Toast.loading({
      mask: true,
      message: '加载中...'
    });
   wx.navigateTo({
     url: '../../pages/loannew/loannew',
     success:function()
     {
       Toast.clear();
     }
   })
  },
  call:function()
  {
    wx.makePhoneCall({
      phoneNumber: '66669237' // 仅为示例，并非真实的电话号码
    })
  },
change:function()
{
  var condtion=this.data.condtion
  console.log("dd")
this.setData({
  condtion:true
})
console.log(condtion)
},
cancel:function(){
  var condtion = this.data.condtion
  console.log("dd")
  this.setData({
    condtion: false
  })
},
price:function(e)
{
  Toast.loading({
    mask: true,
    message: '加载中...'
  });

  
  console.log(e)
  var that = this;
  var id=null
  if (e.currentTarget.id == "10万以下")
    id = "smallprice";
  if (e.currentTarget.id == "10-15万")
    id = "middleprice";
  if (e.currentTarget.id == "15万以上")
    id = "largeprice";
  wx.request({
    url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/byprice',
    method: "GET",
    data: {
      id: id
    },
    header: {
      'content-type': 'application/json'
    },


    success: function (e) {
      console.log(e)
      Toast.clear();
       console.log("1111")
        getApp().globalData.list=e.data
        wx.switchTab({
          url: '../search/search',
      
        })
    }
  })





},
monthprice:function(e)
{

  Toast.loading({
    mask: true,
    message: '加载中...'
  });
  var that=this

  var id = null
  console.log("ddd")
  console.log(e)
  console.log(e.currentTarget.id)
  if (e.currentTarget.id=="一成首付")
    id = "oneprice";
  if (e.currentTarget.id=="零首付")
    id = "zeroprice";
  if (e.currentTarget.id=="两成首付")
    id = "twoprice";




  wx.request({
    url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/bydi',
    method: "GET",
    data: {
      id: id
    },
    header: {
      'content-type': 'application/json'
    },


    success: function (e) {
      console.log(e)
  
      getApp().globalData.list = e.data
      wx.switchTab({
        url: '../search/search',
        success:function(){
          Toast.clear()
        }
      })
    }
  })









  
},







byid:function(e)
{
  console.log(e)
  Toast.loading({
    mask: true,
    message: '加载中...'
  });
  wx.navigateTo({
    url: '../ownner/ownner?id=' + e.currentTarget.id,
    success:function()
    {
      Toast.clear()
    }
  })
},
type1:function(e)
{
  getApp().globalData.type = e.currentTarget.id
  console.log(e.currentTarget.id)
  Toast.loading({
    mask: true,
    message: '加载中...'
  });
  wx.switchTab({
    url: '../search/search' ,
    success:function()
    {
      Toast.clear()
    }
  })

},
  type2: function (e) {
    getApp().globalData.type = e.currentTarget.id
    Toast.loading({
      mask: true,
      message: '加载中...'
    });
    console.log(e.currentTarget.id)
    wx.switchTab({
      url: '../search/search',
      success:function()
      {
        Toast.clear()
      }
    })
  },
  yuegong:function()
  {
    Toast.loading({
      mask: true,
      message: '加载中...'
    });
    var monthprice=this.data.monthprice;
    wx.request({
      url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/bymonthprice',
      method: "GET",
      data: {
        id: monthprice
      },
      header: {
        'content-type': 'application/json'
      },


      success: function (e) {
        console.log(e)
        Toast.clear();
        getApp().globalData.list = e.data
        wx.switchTab({
          url: '../search/search',
        })
      }
    })

  },
  firstprice19:function()
  {
    wx.request({
      url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/bymonthprice',
      method: "GET",
      data: {
        id: "smallprice1"
      },
      header: {
        'content-type': 'application/json'
      },


      success: function (e) {
        console.log(e)

        getApp().globalData.list = e.data
        wx.switchTab({
          url: '../search/search',
        })
      }
    })
  },
  bytype:function(e)
  {
    console.log(e.currentTarget.dataset.type)

    Toast.loading({
      mask: true,
      message: '加载中...'
    });
  
    var that = this;
    
    wx.request({
      url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/bytype',
      method: "GET",
      data: {
        type:e.currentTarget.dataset.type
      },
      header: {
        'content-type': 'application/json'
      },
  
  
      success: function (e) {
        console.log(e)
        Toast.clear();
         console.log("1111")
          getApp().globalData.list=e.data
          wx.switchTab({
            url: '../search/search',
            success:function()
            {
              Toast.clear();
            }
          })
      }
    })


  },
  shoufu1:function()
  {

    Toast.loading({
      mask: true,
      message: '加载中...'
    });
    var firstprice=this.data.fristprice
    console.log("rrr")
    console.log(this.data)
    wx.request({
      url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/byfirstprice',
      method: "GET",
      data: {
        firstprice: firstprice
      },
      header: {
        'content-type': 'application/json'
      },


      success: function (e) {
        console.log(e)
        Toast.clear();
        getApp().globalData.list = e.data
        wx.switchTab({
          url: '../search/search',
        })
      }
    })
  },
  more:function()
  {
    wx.switchTab({
      url: '../search/search',
    })
  },
  gohome:function()
  {

    Toast.loading({
      mask: true,
      message: '加载中...'
    });


    wx.request({
      url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/bynumber',
      method: "GET",
 
      header: {
        'content-type': 'application/json'
      },


      success: function (e) {
        console.log(e)
        Toast.clear();
        getApp().globalData.list = e.data
        wx.switchTab({
          url: '../search/search',
        })
      }
    })

  },
  onLoad:function()
  {



  },
 
  onShow:function()
  {
    Dialog.alert({
      
      message: '小程序正在维护，数据尚未更新，了解更多优惠车型请拨打速享车客服热线 66669237'
    }).then(() => {
      // on close
    });

    var that=this;
    console.log("getApp().globalData.isquit",getApp().globalData.isquit)
    console.log("index")
    console.log(that.data.showimg=="block")
    console.log(that.data.showimg)
  
    wx.request({
      url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/changeindex',
      success: function (e) {
        console.log(e)
        that.data.fristprice=e.data[0].fristprice;
        that.data.monthprice=e.data[0].monthprice
        that.data.index
        that.setData({
          changeindex:e.data
        })
        wx.request({
          url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/bymonthprice?id='+e.data[0].monthprice,
          success: function (e) {
            console.log(e)
            console.log("ddd")
            that.setData({
              orderbyprice: e.data
            })

          }
        })


        wx.request({
          url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/byfirstprice?firstprice=' + e.data[0].fristprice,
          success: function (e) {
            console.log(e)
            console.log("ddd")
            that.setData({
              orderbyfirstprice: e.data
            })

          }
        })








      }
    })










    wx.login({
      success: function(res) {
        if(res.code) {
         wx.request({
           url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/getaccesstoken',
           method:"POST",
           data: {
             code: res.code
           },
           header: {
             "Content-Type": "application/x-www-form-urlencoded"

           },
           success: function(e) {
             console.log("---")
             console.log(e.data.openid)
             getApp().globalData.openid=e.data.openid;


             wx.request({
              url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/exitopenid',
          
              method:"POST",
              data: {
                openid:getApp().globalData.openid
              },
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
          
              },
          
          
          
              success:function(e)
                {
                  if(e.data.length>0)
                  {
                    console.log("e.data.length"+e.data.length)
                    that.setData({
                      showimg:"none"
                    })
                  }
                  else{

                   if(getApp().globalData.isquit!=true)
                   {

                    that.data.showimg="block"
                    that.setData({
                      showimg:"block"
                    })
                    wx.getSystemInfo({
                      success: function(res) {
                       that.setData({
                        clientWidth:res.windowWidth+"px",
                        clientHeight:res.windowHeight+"px"
                
                       })
                    }
                    })
                    qqmapsdk = new QQMapWX({
                      key: 'P2KBZ-JTFRJ-QREFR-FL33X-27GOO-43FXX' // 必填
                    });
                   
                    if(that.data.address=="")
                    {
                     
                       console.log("对对对")
                  
                    //1、获取当前位置坐标
                    wx.getLocation({
                      type: 'wgs84',
                      success: function (res) {
                        console.log("坐标")
                        //2、根据坐标获取当前位置名称，显示在顶部:腾讯地图逆地址解析
                        qqmapsdk.reverseGeocoder({
                          location: {
                            latitude: res.latitude,
                            longitude: res.longitude
                          },
                          success: function (addressRes) {
                     
                            that.data.address = addressRes.result.formatted_addresses.recommend;
                            getApp().globalData.address=that.data.address
                          }
                        })
                      }
                    }) 
                  
                    }






                   }
             












                  }
                }
            })








           }
         })
        } else {
          console.log(res.errMsg)
        }
      }
    })
  // 实例化腾讯地图API核心类




    var that=this;
   wx.request({
     url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/banner',
     success:function(e)
       {
         console.log(e)
         that.setData({
           imgUrls:e.data
         })
       }
   })
  
 

    wx.request({
      url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/bynumber',
      success: function (e) {
        console.log(e)
        console.log("ddd")
        that.setData({
          orderbynumber: e.data
        })
      
      }
    })


    // wx.getLocation({
    //   type: 'wgs84',
    //   success(res) {
    //     console.log("map")
    //     console.log(res)
    //   }
    // })

      
  },

  onClose() {
  
    console.log("dd")
    this.setData({ 
       show:false,
       flag:false
    });
    console.log("ddddddd")
  }
  })
