$.ajax({
  url: "js/data/game_01.json",
  type: 'GET',
  async: true
  }).done(function (response) {

    

    function MoreData(data,i,c){

      // data[a] 運行幾次，就代表有幾個icon
      // data[a].iconContent 為對應icon數量的賠倍資料
      // data.length為icon數量

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
    // 複製完整的data到新的物件
    var Obj = data.slice(0)
    
    // [0]為第一區塊，取得icon列表，IconList為左列(0)或者右列(1)
    var ObjCut = Obj[0].IconList0
    // 取得刪除外層標題之後的內容
    var ObjName = Object.values(ObjCut)
    // 加到網頁裡
    CreateTitle(ObjName,0,0)
    // 處理完後刪除標題
    ObjName.splice(0,1)
    // 逐步取得icon圖片及數字陣列
    for(var i=0;i<ObjName.length;i++){

      // ObjName.length為icon的數量
      // i為第幾個icon
      CreateIcon(ObjName,i,0)
      MoreData(ObjName,i,0)
    }

    // 清空資料
    ObjName = ""
    ObjCut = ""

    // 取得第一區塊的右列
    ObjCut = Obj[0].IconList1
    ObjName = Object.values(ObjCut)
    CreateTitle(ObjName,0,1)
    ObjName.splice(0,1)

    for(var i=0;i<ObjName.length;i++){
      // ObjName.length為icon的數量
      CreateIcon(ObjName,i,1)
      MoreData(ObjName,i,1)
    }

    ObjName = ""
    ObjCut = ""


  
})
