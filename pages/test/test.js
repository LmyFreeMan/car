Page({
    data:{
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
      ],
    },
    onLoad(options){
      console.log(this.data.list[0])
    },
    onShow:function()
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
    
  })