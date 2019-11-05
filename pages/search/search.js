
Page({
  data: {
    hyopen: false,
    brand:"",
    price:"",
    firstpric:"",
    sqopen: false,
    pxopen: false,
    sortopen: false,
    appear:"none",
    none:"",
    detail:true,
    firstIndex:{},
    dropDownMenuSecondData:[{id:0,title:"价格不限"},
    {id:1,title:"10万以下"},
  {id:2,title:"10-15万元"},
  {id:3,title:"15-20万元"},
  {id:4,title:"20-30万元"},
  {id:5,title:"30-50万元"},
  {id:6,title:"50万以上"}],
    dropDownMenuThirdData:[
      
   {id:0,title:"零成首付"},
    {id:1,title:"一成首付"},
    {id:2,title:"两成首付"},
    {id:3,title:"三成首付"},
    {id:4,title:"首付不限"}
],
    shownavindex: '',
    navappear:true,
    dropDownMenuDataFirstRight: {},
    select1: '',
    select2: '',
    selectedQt: 0,
    selectedSq: 0,
    selectedSort: 1,
    dropDownMenuTitle: ['品牌','车价', '首付'], //tab文案
    tab: [true, true, true],
    list: [
      { alphabet: 'A', datas: []},
      { alphabet: 'B', datas: []},
      { alphabet: 'C', datas: []},
      { alphabet: 'D', datas: []},
      { alphabet: 'E', datas: []},
      { alphabet: 'F', datas: []},
      { alphabet: 'G', datas: []},
      { alphabet: 'H', datas: []},
      { alphabet: 'I', datas: []},
      { alphabet: 'J', datas: []},
      { alphabet: 'K', datas: []},
      { alphabet: 'L', datas: []},
      { alphabet: 'M', datas: []},
      { alphabet: 'N', datas: []},
      { alphabet: 'O', datas: []},
      { alphabet: 'P', datas: []},
      { alphabet: 'Q', datas: []},
      { alphabet: 'R', datas: []},
      { alphabet: 'S', datas: []},
      { alphabet: 'T', datas: []},
      { alphabet: 'U', datas: []},
      { alphabet: 'V', datas: []},
      { alphabet: 'W', datas: []},
      { alphabet: 'X', datas: []},
      { alphabet: 'Y', datas: []},
      { alphabet: 'Z', datas: []},
    ]
  },
  selectsqitem: function (e) {
    console.log("66")
    var selectedId = e.target.dataset.model.id
    var selectedTitle = e.target.dataset.model.title;
   
    this.setData({
      selectedSq: selectedId,
      sqopen:false
    })
    this.data.price=selectedTitle
    this.getData()
  },

  getBrandName:function(e)
  {
    
    this.data.brand = e.currentTarget.dataset.brand
    this.setData({
      appear:"none",
      none:"",
      detail:true
    })
    this.getData()
  },
  selecqtlitem: function (e) {
   
    console.log("555")
    console.log(selectedId)
    var selectedId = e.target.dataset.model.id
    var selectedTitle = e.target.dataset.model.title;
    
    this.setData({
      
      selectedQt: selectedId,
      pxopen:false
    })
    this.data.firstpric=selectedTitle
    console.log(this.data.firstpric)
    this.getData();
    this.triggerEvent("selectedItem", { index: this.data.shownavindex, selectedId: selectedId, selectedTitle: selectedTitle })
  },
  // onReady: function () {
  //   //初始化数据
  //   var self = this;
  //   self.getFilter();
  // },
  listqy: function (e) {
    console.log(this.data.hyopen)
    
      this.setData({
        hyopen: true,
        none:"none",
        pxopen: false,
        sqopen: false,
        sortopen: false,
        detail:false,
        appear:"",
        shownavindex: e.currentTarget.dataset.nav
      })
    

  },
  list: function (e) {
    console.log("dd")
    if (this.data.sqopen) {
      this.setData({
        sqopen: false,
        pxopen: false,
        hyopen: false,
        sortopen: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        sqopen: true,
        pxopen: false,
        hyopen: false,
        sortopen: false,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
  },
  listpx: function (e) {
    if (this.data.pxopen) {
      this.setData({
        sqopen: false,
        pxopen: false,
        hyopen: false,
        sortopen: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        sqopen: false,
        pxopen: true,
        sortopen: false,
        hyopen: false,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
    console.log(e.target)
  },
  handlerAlphaTap(e) {
     
    let { ap } = e.target.dataset;
    this.setData({ alpha: ap });
  },
  // getBrandName(e){
  //   console.log(e._relatedInfo.anchorRelatedText)
  // },
  //滑动
  handlerMove(e) {
    let { list } = this.data;
    this.setData({ addBg: true });
    let rY = e.touches[0].clientY;//竖向滑动的距离
    if (rY >= 0) {
      let index = Math.ceil((rY - this.apHeight) / this.apHeight);
      if (0 <= index < list.length) {
        let nonwAp = list[index];
        nonwAp && this.setData({ alpha: nonwAp.alphabet });
      }
    }
  },
  //滑动结束
  handlerEnd(e) {
    this.setData({ addBg: false });
  },
  onLoad:function(e)
  {
    var that=this;
      wx.request({
        url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/getcarinfo',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          console.log(res.data[0].datas)
          var brandA = [];
          var brandB = [];
          var brandC = [];
          var brandD = [];
          var brandE = [];
          var brandF = [];
          var brandG = [];
          var brandH = [];
          var brandI = [];
          var brandJ = [];
          var brandK = [];
          var brandL = [];
          var brandM = [];
          var brandN = [];
          var brandO = [];
          var brandP = [];
          var brandQ = [];
          var brandR = [];
          var brandS = [];
          var brandT = [];
          var brandU = [];
          var brandV = [];
          var brandW = [];
          var brandX = [];
          var brandY = [];
          var brandZ = [];

          for(var i=0;i<res.data.length;i++)
          {
          
            if(res.data[i].bfirstletter=="A")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandA.push(brand)
            }
            if(res.data[i].bfirstletter=="B")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandB.push(brand)
            }
            if(res.data[i].bfirstletter=="C")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandC.push(brand)
            }
            if(res.data[i].bfirstletter=="D")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandD.push(brand)
            }
            if(res.data[i].bfirstletter=="E")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandE.push(brand)
            }
            if(res.data[i].bfirstletter=="F")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandF.push(brand)
            }
            if(res.data[i].bfirstletter=="G")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandG.push(brand)
            }
            if(res.data[i].bfirstletter=="H")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandH.push(brand)
            }
            if(res.data[i].bfirstletter=="I")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandI.push(brand)
            }
            if(res.data[i].bfirstletter=="J")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandJ.push(brand)
            }
            if(res.data[i].bfirstletter=="K")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandK.push(brand)
            }
            if(res.data[i].bfirstletter=="L")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandL.push(brand)
            }
            if(res.data[i].bfirstletter=="M")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandM.push(brand)
            }
            if(res.data[i].bfirstletter=="N")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandN.push(brand)
            }

            if(res.data[i].bfirstletter=="O")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandO.push(brand)
            }
            if(res.data[i].bfirstletter=="P")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandP.push(brand)
            }
            if(res.data[i].bfirstletter=="Q")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandQ.push(brand)
            }
            if(res.data[i].bfirstletter=="R")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandR.push(brand)
            }
            if(res.data[i].bfirstletter=="S")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandS.push(brand)
            }
            if(res.data[i].bfirstletter=="T")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandT.push(brand)
            }
            if(res.data[i].bfirstletter=="U")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandU.push(brand)
            }
            if(res.data[i].bfirstletter=="V")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandV.push(brand)
            }
            if(res.data[i].bfirstletter=="W")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandW.push(brand)
            }
            if(res.data[i].bfirstletter=="X")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandX.push(brand)
            }
            if(res.data[i].bfirstletter=="Y")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandY.push(brand)
            }
            if(res.data[i].bfirstletter=="Z")
            {
                var brand=new Object();
                brand.name=res.data[i].name
                brand.avater=res.data[i].logo
                brandZ.push(brand)
            }


          
          }
         
          that.data.list[0].datas=brandA
          that.data.list[1].datas=brandB
          that.data.list[2].datas=brandC
          that.data.list[3].datas=brandD
          that.data.list[4].datas=brandE
          that.data.list[5].datas=brandF
          that.data.list[6].datas=brandG
          that.data.list[7].datas=brandH
          that.data.list[8].datas=brandI
          that.data.list[9].datas=brandJ
          that.data.list[10].datas=brandK
          that.data.list[11].datas=brandL
          that.data.list[12].datas=brandM
          that.data.list[13].datas=brandN
          that.data.list[14].datas=brandO
          that.data.list[15].datas=brandP
          that.data.list[16].datas=brandQ
          that.data.list[17].datas=brandR
          that.data.list[18].datas=brandS
          that.data.list[19].datas=brandT
          that.data.list[20].datas=brandU
          that.data.list[21].datas=brandV
          that.data.list[22].datas=brandW
          that.data.list[23].datas=brandX
          that.data.list[24].datas=brandY
          that.data.list[25].datas=brandZ
          var dates=that.data.list
          that.setData({
            list:dates
          })
        }
      })
  }
  ,
  detail:function(e)
  {
    console.log(e)
    wx.navigateTo({
      url: '../ownner/ownner?id=' + e.currentTarget.id,
    })
  },
  onShow:function()
  {
    var that = this;
    try {
      var res = wx.getSystemInfoSync();
      //每一个字母所占的高度
      this.apHeight = res.windowHeight / 26;
      this.setData({ windowHeight: res.windowHeight })
    } catch (e) {

    }
    console.log("test'")
    console.log(getApp().globalData.type)
    if (getApp().globalData.list)
      that.setData({
        imgUrls: getApp().globalData.list
      })

   else
   {
      wx.request({
        url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/bynumber',
        method: "GET",
        data: {
          type: getApp().globalData.type
        },
        header: {
          'content-type': 'application/json'
        },


        success: function (e) {
          console.log(e)
          that.setData({
            imgUrls: e.data
          })
        }
      })

   }

    // wx.request({
    //   url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/bynumber',
    //   method: "GET",

    //   header: {
    //     'content-type': 'application/json'
    //   },


    //   success: function (e) {
    //     console.log("改变数据")
    //     console.log(e)

    //     getApp().globalData.list = e.data
    //     that.setData({
    //       imgUrls: e.data
    //     })
  
    //   }
    // })





  },
  // 选项卡
  getData: function (e) {
     console.log("123")
     console.log(this.data.firstpric)
     var allprice="";
     var dis="";
    if(this.data.price=="10万以下")
      allprice="allprice<100000";
    else if(this.data.price=="10-15万元")
      allprice="allprice>=100000 and allprice<150000";
    else if(this.data.price=="15-20万元")
      allprice="allprice>150000 and allprice<=200000";
    else if(this.data.price=="20-30万元")
      allprice="allprice>200000 and allprice<=300000"; 
    else if(this.data.price=="30-50万元")
      allprice="allprice>300000 and allprice<=500000";  
   else if(this.data.price=="50万以上")
      allprice="allprice>500000"; 
      else
      allprice="allprice>=0" 
     
    if(this.data.firstpric=="零成首付")
       dis="di=0";
    else if(this.data.firstpric=="一成首付")
       dis="di=1"; 
    else if(this.data.firstpric=="两成首付")
       dis="di=2"; 
    else if(this.data.firstpric=="三成首付")
       dis="di=3";
      else
         dis="di>=0" 
      
  // console.log(tabTxt[2])

  //      if(tabTxt[2]=="奥迪")
  //      type="aodi";
  //  else if(tabTxt[2]=="别克")
  //      type="bieke"; 
  //   else if(tabTxt[2]=="本田")
  //     type="bentian"; 
  //   else if(tabTxt[2]=="比亚迪")
  //      type="biyadi"; 
  //   else if(tabTxt[2]=="北京")
  //      type="beijing"; 
  //   else if(tabTxt[2]=="荣威")
  //      type="rongwei"; 
  //   else if(tabTxt[2]=="雪佛兰")
  //      type="xuefolan"; 
  //   else if(tabTxt[2]=="长安")
  //      type="changan";
  //   else if(tabTxt[2]=="大众")
  //      type="dazhong";  
  //   else if(tabTxt[2]=="奔腾")
  //      type="benteng";  
  //      else
  //      type="like %"
      var that=this
      var type=this.data.brand
      if(type=="品牌不限")
         type=""
      console.log("type"+type)
       wx.request({
        url: 'https://www.gxfwz36524.com/car/public/index.php/api/index/selectlist',
        data:{
            allprice:allprice,
            dis:dis,
            type:type
        },
        success: function (e) {
          console.log(e)
          console.log("ddd")
          getApp().globalData.list = e.data
          that.setData({
            imgUrls: e.data
          })
        }
       
      })
  }
})
  
        
  


