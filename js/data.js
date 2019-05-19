$.ajax({
  url: "js/data/game_01.json",
  type: 'GET',
  async: true
  }).done(function (response) {



    function CreateTitle (data,a,c){
      $(".IconList"+c ).append(
        "<li><img src="+ data[a].iconTitleSrc +"></li>" +
        "<li>" + data[a].TitleName  + "</li>" +
        "<li>" + data[a].TitleName1  + "</li>"
      );
    }

    function CreateIcon (data,a,c){
      $(".IconBox"+c).append(
        "<ul class='iconType'>"+
            "<li><img src="+ data[a].iconSrc + "></li>"+
            "<li class='MoreData'>"+
              "<ul>"+
                "<li>"+
                    "<span>" + data[a].iconContent[0] + "</span>"+
                    "<span>" + data[a].iconContent[1] + "</span>"+
                    "</li>"+
              "</ul>"+
              "<ul>"+
                "<li>"+
                    "<span>" + data[a].iconContent[2] + "</span>"+
                    "<span>" + data[a].iconContent[3] + "</span>"+
                    "</li>"+
              "</ul>"+
              "<ul>"+
                "<li>"+
                    "<span>" + data[a].iconContent[4] + "</span>"+
                    "<span>" + data[a].iconContent[5] + "</span>"+
                    "</li>"+
              "</ul>"+
            "</li>" +
      "</ul>");
    }

    function textBox(data,a){

      var TextUL = createElement('ul')
      var TextLI = createElement('li')

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
    for(i=0;i<ObjName.length;i++){
      CreateIcon(ObjName,i,0)
    }

    ObjName = ""
    ObjCut = ""

    ObjCut = Obj[0].IconList1
    ObjName = Object.values(ObjCut)
    CreateTitle(ObjName,0,1)
    ObjName.splice(0,1)

    for(i=0;i<ObjName.length;i++){
      CreateIcon(ObjName,i,1)
    }



    // TextBox1
    for(var i=0;i<Obj.length;i++){
      
    }


  
})
