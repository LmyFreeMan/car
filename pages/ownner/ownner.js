import Dialog from '../../dist/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    month1:"",
    month2:"",
    month3:"",
    is_shoucang: 0,
    goods_info: { goods_id: 1, goods_title: "商品标题1", goods_price: '150000', goods_yunfei: 0, goods_kucun: 100, goods_xiaoliang: 1, content: '商品介绍详情商品介绍详情商品介绍详情商品介绍详情商品介绍详情商品介绍详情商品介绍详情' },
    imgUrls: [
      '../../images/logo.jpg',
     
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    pjDataList: [{ headpic: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', author: '张三', add_time: '2018-06-01', content: '好评好评，真实太好了!' },
    { headpic: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', author: '张三', add_time: '2018-06-01', content: '好评好评，真实太好了!' }
    ],//评价数据
  },


  previewImage: function (e) {
    var current = e.target.dataset.src;
    var href = this.data.imghref;
    var goodsimg = this.data.goods_img;
    var imglist = [];
    for (var i = 0; i < goodsimg.length; i++) {
      imglist[i] = href + goodsimg[i].img
    }
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: imglist// 需要预览的图片http链接列表  
    })
  },
  onClickButton:function()
  {
    console.log(this.data.id)
    console.log(getApp().globalData.phone)


    wx.request({
      url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/addbookuser',
      method: "GET",
      data: {
        id: this.data.id,
        phone:getApp().globalData.phone,
        openid:getApp().globalData.openid
      },
      header: {
        'content-type': 'application/json'
      },


      success: function (e) {
       if(e.data=="success")
       {
         Dialog.alert({
           message: '预订成功'
         }).then(() => {
           wx.switchTab({
             url: '../../pages/search/search',
             success: (result) => {
               
             },
             fail: () => {},
             complete: () => {}
           });
             
         });
       }
       else
       {
         Dialog.alert({
           message: '请不要重复预订哦'
         }).then(() => {
          wx.switchTab({
            url: '../../pages/search/search',
            success: (result) => {
              
            },
            fail: () => {},
            complete: () => {}
          });
         });

       }
       
      
      }
    })






  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     console.log(options)
      this.data.id=options.id;
    var that = this;
    wx.request({
      url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/byid',
      method: "GET",
      data:{
        id:options.id
      },
      header: {
        'content-type': 'application/json'
      },

      
      success: function (e) {
        console.log(e)
        console.log("oooo")
      
         var kaipiaojia=((0.83*parseFloat(e.data[0].allprice)-parseFloat(e.data[0].firstprice)+3250)/0.6315);
         console.log("kaipiao"+kaipiaojia);
         console.log((e.data[0].allprice))
         console.log(e.data[0].firstprice)
         var loan=parseFloat(kaipiaojia)*0.93;
        var monthprice12=parseFloat(loan/12+loan*0.0055).toFixed(2);
        var monthprice24=parseFloat(loan/24+loan*0.0055).toFixed(2);
        var monthprice36=parseFloat(loan/36+loan*0.0055).toFixed(2);
       console.log(monthprice12)
        console.log(e.data[0].type)
        if(e.data[0].type=="aodi")
        e.data[0].type="奥迪";
    else if(e.data[0].type=="bieke")
        e.data[0].type="别克";
     else if(e.data[0].type=="bentian")
        e.data[0].type="本田";
     else if(e.data[0].type=="biyadi")
        e.data[0].type="比亚迪";
     else if(e.data[0].type=="beijing")
        e.data[0].type="北京";
      else if(e.data[0].type=="richan")
        e.data[0].type="日产";
     else if(e.data[0].type=="rongwei")
        e.data[0].type="荣威";
     else if(e.data[0].type=="xuefolan")
        e.data[0].type="雪佛兰";
     else if(e.data[0].type=="changan")
        e.data[0].type="长安";
     else if(e.data[0].type=="dazhong")
        e.data[0].type="大众";  
     else if(e.data[0].type=="benteng")
     e.data[0].type="奔腾"; 
        else
        e.data[0].type= e.data[0].type;  
        that.setData({
          imgUrls: e.data,
          month1:monthprice12,
          month2:monthprice24,
          month3:monthprice36
        })
      }
    })


  },
})
