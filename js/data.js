$.ajax({
  url: "js/data/game_01.json",
  type: 'GET',
  async: true
  }).done(function (response) {

    function CreateImgTextBox(data,Box){

    // 建立外層區塊
    var sectionBox = document.createElement('div')
    sectionBox.classList = "section bottomLine"
    var sectionTitle = document.createElement('h4')
    // 放置標題
    sectionTitle.innerHTML = data[0]
    sectionBox.appendChild(sectionTitle)
    // 刪除標題
    data.splice(0,1)

    for(var s = 0;s<data.length;s++){

      if(data[s].ImgBox){
        // 建立圖片區塊
        var ImgBox = document.createElement('div')
        ImgBox.className = "contentCenter"
        var ImgItem = document.createElement('img')
        ImgItem.src = data[s].ImgBox
        ImgBox.append(ImgItem)
        sectionBox.append(ImgBox)
        // 刪除圖片
        ImgBox = ""
        ImgItem = ""
      }

    // 建立文字區塊
    var UL = document.createElement('ul')
    UL.className = "textBox"

    for(var i=0;i<data[s].TextBox.length;i++){
      var Li = document.createElement('li')
      Li.innerHTML = data[s].TextBox[i]
      UL.appendChild(Li)
      Li = ""
    }

    sectionBox.appendChild(UL)
    UL=""
    Li = ""
    }

    Box.append(sectionBox)
    }

    function CreateTextBox(data){

      var DOM = $('#step1')
      var UL = document.createElement('ul')
      UL.className = "textBox"

      for(var i=0;i<data.length;i++){
        var Li = document.createElement('li')
        Li.innerHTML = data[i]
        UL.appendChild(Li)
        Li = ""
      }

      DOM.append(UL)

    }

    function TitleMoreData(data,i,c){

      if(data.iconContent){
        for(var n=0;n<data.iconContent.length;n++){
          var DOM = $('.IconList0').children(2)
          DOM = DOM[1]
          var UL = document.createElement('ul')
          var Li = document.createElement('li')
          var Span = document.createElement('span')
          var SecSpan = document.createElement('span')
          SecSpan.className = "SecSpan"
  
          Span.innerHTML = data.iconContent[n][0]
          SecSpan.innerHTML = data.iconContent[n][1]
  
          Li.appendChild(Span)
          Li.appendChild(SecSpan)
          UL.appendChild(Li)
          DOM.append(UL)
        }
      }else if(data.TextBox1){
        var DOM = $('.IconList0').children(2)
        DOM = DOM[1]

        for(var i=0;i<data.TextBox1.length;i++){
          var UL = document.createElement('ul')
          var Li = document.createElement('li')
          Li.innerHTML = data.TextBox1[i]
          UL.appendChild(Li)
          DOM.append(UL)
          UL=""
          Li=""
        }
      }
        UL = ""
        Li = ""
        Span = ""
        SecSpan = ""
    }

    function MoreData(data,i,c){
      for(var n=0;n<data[i].iconContent.length;n++){
      // 擷取當前要新增的Li位置
        var DOM = $(".IconBox"+c).children().children('.MoreData'+i)
        var UL = document.createElement('ul')
        var Li = document.createElement('li')
        var Span = document.createElement('span')
        var SecSpan = document.createElement('span')
        SecSpan.className = "SecSpan"

        Span.innerHTML = data[i].iconContent[n][0]
        SecSpan.innerHTML = data[i].iconContent[n][1]

        Li.appendChild(Span)
        Li.appendChild(SecSpan)
        UL.appendChild(Li)
        DOM.append(UL)
      }

        UL = ""
        Li = ""
        Span = ""
        SecSpan = ""
    }

    function CreateTitle (data,a,c){
      $(".IconList"+c ).append(
        "<li><img src="+ data[a].iconTitleSrc +"></li>" +
        "<li>" + data[a].TitleName  + "</li>"
      );
    }

    function CreateIcon (data,a,c){
      // a=i=第幾個icon，c為判斷左列還右列
      $(".IconBox"+c).append(
        "<ul class='iconType'>"+
            "<li><img src="+ data[a].iconSrc + "></li>"+
            "<li class="+ 'MoreData'+a +">"+
            "</li>" +
      "</ul>");
    }

    // 整個遊戲資料
    var data = response
    // 複製完整的data複製到新的物件
    var Obj = data.slice(0)
    
    // [0]為第一區塊，取得icon列表，IconList為左列(0)或者右列(1)
    var ObjCut = Obj[0].IconList0
    
    // 取得刪除外層標題之後的內容
    var ObjName = Object.values(ObjCut)

    // 加到網頁裡
    CreateTitle(ObjName,0,0)

    if(ObjCut.iconTitle.iconContent || ObjCut.iconTitle.TextBox1){
      var ObjTitle = ObjCut.iconTitle
      delete ObjTitle.TitleName
      delete ObjTitle.iconTitleSrc
      TitleMoreData(ObjTitle)
    }

    // 處理完後刪除標題
    ObjName.splice(0,1)
    // 逐步取得icon圖片及數字陣列
    for(var i=0;i<ObjName.length;i++){
      CreateIcon(ObjName,i,0)
      MoreData(ObjName,i,0)
    }

    ObjName = ""
    ObjCut = ""

    // 取得第一區塊的右列
    ObjCut = Obj[0].IconList1
    ObjName = Object.values(ObjCut)
    CreateTitle(ObjName,0,1)
    ObjName.splice(0,1)

    for(var i=0;i<ObjName.length;i++){
      CreateIcon(ObjName,i,1)
      MoreData(ObjName,i,1)
    }

    ObjName = ""
    ObjCut = ""

    var Last = Obj[0]
    Last = Object.values(Last)
    // 
    Last.splice(0,3)
    CreateTextBox(Last)

    // 第一區塊結束

    var PayBay = $('#first')

    for(var i = 1; i<=3;i++){

      var ObjCut = Obj[i]

      if(Obj[i].BoxTitle == "主游戏"||"奖励游戏"||"免费游戏"){

        var ImgText = Object.values(ObjCut)
        CreateImgTextBox(ImgText,PayBay)
        ImgText = ""

      }

    }

    // 中獎線
    for(var i = 3; i<5;i++){

      var ObjCut = Obj[i]

      if(Obj[i].BoxTitle == "中奖线"){
    var sectionBox = document.createElement('div')
    sectionBox.classList = "section"
    var sectionTitle = document.createElement('h4')
    // 放置標題
    sectionTitle.innerHTML = Obj[i].BoxTitle
    sectionBox.appendChild(sectionTitle)


    var winLine = document.createElement('div')
    winLine.classList = "img_Box winLine_Box contentCenter"

    sectionBox.append(winLine)
    PayBay.append(sectionBox)

    for(var v=1;v<=Obj[i].ImgBox1.length;v++){
        let winLineImg = document.createElement('img')
        winLine.appendChild(winLineImg)

        var imgSrc = "images/winLine/" + v + ".png"
        winLineImg.src = imgSrc
    }
      }

    }

    // 遊戲規則
    var GameRules = $('#second')
    for(var i=4;i<data.length;i++){
      
      var ObjCut = Obj[i]
      if(Obj[i].BoxTitle == "中奖线"){
        for(var secStart =i+1;secStart<data.length;secStart++){
        var ObjCut = Obj[secStart]
        ImgText = Object.values(ObjCut)
        CreateImgTextBox(ImgText,GameRules)
        }
      }
    }

    // 刪除最後一個元素底線
    GameRules.children().last().removeClass('bottomLine')
  
})
