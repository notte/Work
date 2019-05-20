$.ajax({
  url: "js/data/game_01.json",
  type: 'GET',
  async: true
  }).done(function (response) {

    

    function MoreData(data,a){

      // 把資料夾進節點
      function PUSH(){
        Li.appendChild(Span)
        Li.appendChild(SecSpan)
        UL.appendChild(Li)
        DOM.append(UL)
      }

      function PushData(data,a){

        // 這裡的a為第幾個icon、i為第幾行資料
        // 把物件中賠倍的數據push到網頁中
        for(var v=0;v<data[a].iconContent.length;v++){
          Span.innerHTML = data[a].iconContent[i][0]
          SecSpan.innerHTML = data[a].iconContent[i][1]
        }
        
      }


      // a紀錄第幾個icon
      // data[a].iconContent.length為應該有幾行資料
      // data[a].iconContent.length*2為資料筆數

      // 產生DOM元素
      for(var i=0;i<data[a].iconContent.length;i++){

        var DOM = $(".MoreData"+a)

        var UL = document.createElement('ul')
        var Li = document.createElement('li')
        var Span = document.createElement('span')
        var SecSpan = document.createElement('span')
        SecSpan.className = "SecSpan"

        PushData(data,a)
        PUSH()
      }

    }

    function CreateTitle (data,a,c){
      $(".IconList"+c ).append(
        "<li><img src="+ data[a].iconTitleSrc +"></li>" +
        "<li>" + data[a].TitleName  + "</li>"
        // "<li>" + data[a].TitleName1  + "</li>"
      );
    }

    function CreateIcon (data,a,c){
      $(".IconBox"+c).append(
        "<ul class='iconType'>"+
            "<li><img src="+ data[a].iconSrc + "></li>"+
            "<li class="+ 'MoreData'+a +">"+
            "</li>" +
      "</ul>");
      MoreData(data,a)
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
      CreateIcon(ObjName,i,0)
    }

    ObjName = ""
    ObjCut = ""

    ObjCut = Obj[0].IconList1
    ObjName = Object.values(ObjCut)
    CreateTitle(ObjName,0,1)
    ObjName.splice(0,1)

    for(var i=0;i<ObjName.length;i++){
      CreateIcon(ObjName,i,1)
    }

    ObjName = ""
    ObjCut = ""


  
})
