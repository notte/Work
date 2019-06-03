$.ajax({
  url: "js/data/game.json",
  type: 'GET',
  async: true
  }).done(function (response) {

    function CreateImgTextBox(data,Box){

    var sectionBox = document.createElement('div')
    sectionBox.classList = "section bottomLine"
    var sectionTitle = document.createElement('h4')

    sectionTitle.innerHTML = data[0]
    sectionBox.appendChild(sectionTitle)
    
    data.splice(0,1)

    for(var s = 0;s<data.length;s++){

      if(data[s].ImgBox){
        var ImgBox = document.createElement('div')
        ImgBox.className = "contentCenter"
        var ImgItem = document.createElement('img')
        ImgItem.src = data[s].ImgBox
        ImgBox.append(ImgItem)
        sectionBox.append(ImgBox)
        ImgBox = ""
        ImgItem = ""
      }

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

    function TitleMoreData(data,i){

      if(data.iconContent){
        for(var n=0;n<data.iconContent.length;n++){
          var DOM = $('.IconList0').children(2)
          DOM = DOM[1]
          DOM.className = "MoreData"
          var UL = document.createElement('ul')
          var Li = document.createElement('li')
          var Span = document.createElement('span')
          Span.className = "SpanFirst"
          var SecSpan = document.createElement('span')
          SecSpan.className = "SecSpan"
  
          Span.innerHTML = data.iconContent[n][0]
          SecSpan.innerHTML = data.iconContent[n][1]
  
          Li.appendChild(Span)
          Li.appendChild(SecSpan)
          UL.appendChild(Li)
          DOM.append(UL)
        }
      }else if(data.TextBox){
        var DOM = $('.IconList0').children(2)
        DOM = DOM[1]

        for(var i=0;i<data.TextBox.length;i++){
          var UL = document.createElement('ul')
          var Li = document.createElement('li')
          Li.className = "TitleText"
          Li.innerHTML = data.TextBox[i]
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

        var DOM = $(".IconBox"+c).children().children('.MoreData'+i)
        var UL = document.createElement('ul')
        var Li = document.createElement('li')
        var Span = document.createElement('span')
        Span.className = "SpanFirst"
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
      $(".IconBox"+c).append(
        "<ul class='iconType'>"+
            "<li><img src="+ data[a].iconSrc + "></li>"+
            "<li class="+ 'MoreData'+a +">"+
            "</li>" +
      "</ul>");
      $('.iconType').children().last().addClass('MoreData')
    }

    // 整個遊戲資料
    var data = response

    var Obj = data.slice(0)
    var ObjCut = Obj[0].IconList0
    var ObjName = Object.values(ObjCut)

    CreateTitle(ObjName,0,0)

    if(ObjCut.iconTitle.iconContent || ObjCut.iconTitle.TextBox){
      var ObjTitle = ObjCut.iconTitle
      delete ObjTitle.TitleName
      delete ObjTitle.iconTitleSrc
      TitleMoreData(ObjTitle)
    }

    ObjName.splice(0,1)

    for(var i=0;i<ObjName.length;i++){
      CreateIcon(ObjName,i,0)
      MoreData(ObjName,i,0)
    }

    ObjName = ""
    ObjCut = ""

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

    var Last = Obj[0].TextBox
    CreateTextBox(Last)

    var PayBay = $('#first')

    for(var i = 1; i<=3;i++){

      var ObjCut = Obj[i]


      if(Obj[i].BoxTitle == "主游戏"){
        var ImgText = Object.values(ObjCut)
        CreateImgTextBox(ImgText,PayBay)
        ImgText = ""
      }
      
      if(Obj[i].BoxTitle == "奖励游戏"){
        var ImgText = Object.values(ObjCut)
        CreateImgTextBox(ImgText,PayBay)
        ImgText = ""
      }

      if(Obj[i].BoxTitle == "免费游戏"){
        var ImgText = Object.values(ObjCut)
        CreateImgTextBox(ImgText,PayBay)
        ImgText = ""
      }

    }

    for(var i = 3; i<5;i++){

      var ObjCut = Obj[i]

    if(Obj[i].BoxTitle == "中奖线"){

    var sectionBox = document.createElement('div')
    sectionBox.classList = "section"
    var sectionTitle = document.createElement('h4')
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

    var GameRules = $('#second')

    for(var i=0;i<data.length;i++){
      if(Obj[i].BoxTitle == "游戏规则"){
      for(var secStart =i;secStart<data.length;secStart++){
      var ObjCut = Obj[secStart]
      ImgText = Object.values(ObjCut)
      CreateImgTextBox(ImgText,GameRules)
      ObjCut = ""
      ImgText = ""
      }
      }
    }
    
    $('#first').children().last().removeClass('bottomLine')
    $('#second').children().last().removeClass('bottomLine')

let tabSwitch = document.getElementsByClassName("tab_switch")
let firstBox = document.getElementById("first")
let secondBox = document.getElementById("second")

// 遍歷獲取的Tab陣列內容
for(var i=0;i<tabSwitch.length;i++){

    tabSwitch[i].index=i;

    tabSwitch[i].onclick=function(){
        
        $('.scroll_container').scrollTop(0)

        for(var i=0;i<tabSwitch.length;i++){
            tabSwitch[i].classList.remove("tab_switch_active")
        }
        
        tabSwitch[this.index].classList.add("tab_switch_active")
        
        if(tabSwitch[this.index].index == 0){
            firstBox.style.display = "block"
            secondBox.style.display = "none"
        }else{
            secondBox.style.display = "block"
            firstBox.style.display = "none"
        }
    }
}

  
})
