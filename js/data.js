$.ajax({
  url: "js/data/game_01.json",
  type: 'GET',
  async: true
  }).done(function (response) {



    function CreateTitle (data,a){
      $(".IconList"+ a ).append(
        "<li><img src="+ data[a].iconTitleSrc +"></li>" +
        "<li>" + data[a].TitleName  + "</li>"
      );
    }

    function CreateIcon (data,a){
      $("#contentIcon"+ a ).append(
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
 

    // 整個遊戲資料
    var data = response
    
    // [0]為第一區塊，取得icon列表
    // IconList為左列(0)或者右列(1)
    var Obj = data[0].IconList0
    // console.log(Obj)
    // 取得刪除外層標題之後的內容
    var ObjName = Object.values(Obj)
    // console.log(ObjName)

    // icon標題物件
    // console.log(ObjName[0])
    // // 標題字
    // console.log(ObjName[0].TitleName)
    // // 標題圖
    // console.log(ObjName[0].iconTitleSrc)

    // 加到網頁裡
    CreateTitle(ObjName,0)

    // 處理完後刪除標題
    ObjName.splice(0,1)
    // 取得剩餘列表內容
    // console.log(ObjName)

    // 逐步取得icon圖片及數字陣列
    for(i=0;i<ObjName.length;i++){
      CreateIcon(ObjName
        )
    }



  
})






