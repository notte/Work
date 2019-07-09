$.ajax({
  url: "js/data/game.json",
  type: "GET",
  async: true
}).done(function (response) {

  function CreateImgTextBox(data, Box) {

    var sectionTitle = document.createElement("h4");
    sectionTitle.innerHTML = data[0];
    Box.append(sectionTitle);

    data.splice(0, 1);

    for (var s = 0; s < data.length; s++) {


      var sectionBox = document.createElement("div");

      if (data[s].SecondTitle) {
        var SecondTitle = document.createElement("h5");
        SecondTitle.innerHTML = data[s].SecondTitle;
        sectionBox.appendChild(SecondTitle);
        sectionBox.className = "section ContentBox MoreData";
      } else {
        sectionBox.className = "section ContentBox contentCenter MoreData";
      }

      if (data[s].ImgBox) {
        var ImgBox = document.createElement("div");
        ImgBox.className = "contentCenter";

        var ImgItem = document.createElement("img");
        ImgItem.src = data[s].ImgBox;

        ImgBox.appendChild(ImgItem);
        sectionBox.appendChild(ImgBox);
        ImgBox = "";
        ImgItem = "";
      }

      if (data[s].iconContent) {
        for (var n = 0; n < data[s].iconContent.length; n++) {
          var UL = document.createElement("ul");
          var Li = document.createElement("li");
          var Span = document.createElement("span");
          Span.className = "SpanFirst";
          var SecSpan = document.createElement("span");
          SecSpan.className = "SecSpan";

          UL.style.width = "12%";
          UL.style.margin = "0 auto";
          Span.innerHTML = data[s].iconContent[n][0];
          SecSpan.innerHTML = data[s].iconContent[n][1];

          Li.appendChild(Span);
          Li.appendChild(SecSpan);
          UL.appendChild(Li);
          sectionBox.append(UL);
        }
      }

      var UL = document.createElement("ul");

      if (data[s].ImgBox == "images/Function_6.png") {
        UL.className = "textBox textBox_bottomLine";
      } else {
        UL.className = "textBox contentCenter";
      }
      if (data[s].TextBox) {
        for (var i = 0; i < data[s].TextBox.length; i++) {
          var Li = document.createElement("li");
          Li.innerHTML = data[s].TextBox[i];
          UL.appendChild(Li);
          Li = "";
          sectionBox.appendChild(UL);
        }
      }


      UL = "";

      if (data[s].SecImgBox) {
        var ImgBox = document.createElement("div");
        ImgBox.className = "contentCenter";

        var ImgItem = document.createElement("img");
        ImgItem.src = data[s].SecImgBox;
        ImgBox.appendChild(ImgItem);
        sectionBox.appendChild(ImgBox);
        ImgBox = "";
        ImgItem = "";
      }

      if (data[s].SecTextBox) {
        var UL = document.createElement("ul");
        UL.className = "textBox";
        for (var i = 0; i < data[s].SecTextBox.length; i++) {
          var Li = document.createElement("li");
          Li.innerHTML = data[s].SecTextBox[i];
          UL.appendChild(Li);
          Li = "";
          sectionBox.appendChild(UL);
        }
      }

      UL = ""


      if (data[s].OtherBox) {

        var OtherData = Object.keys(data[s].OtherBox).map(function (index) {
          return data[s].OtherBox[index];
        });


        for (var n = 0; n < OtherData.length; n++) {

          if (OtherData[n].SecondTitle) {
            var SecondTitle = document.createElement("h5");
            SecondTitle.innerHTML = OtherData[n].SecondTitle;
            sectionBox.appendChild(SecondTitle);
          }

          if (OtherData[n].ImgBox) {
            var ImgBox = document.createElement("div");
            ImgBox.className = "contentCenter";
            var ImgItem = document.createElement("img");
            ImgItem.src = OtherData[n].ImgBox[0];
            ImgBox.appendChild(ImgItem);
            sectionBox.appendChild(ImgBox);
            ImgBox = "";
            ImgItem = "";
          }

          if (OtherData[n].TextBox[0]) {
            var UL = document.createElement("ul");
            UL.className = "textBox";
            for (var i = 0; i < OtherData[n].TextBox.length; i++) {
              var Li = document.createElement("li");
              Li.innerHTML = OtherData[n].TextBox[i];
              UL.appendChild(Li);
              Li = "";
              sectionBox.appendChild(UL);
            }
          }

        }
      }

      Box.append(sectionBox);
      UL = "";
      Li = "";
      sectionBox = "";

    }

  }

  function CreateTextBox(data) {
    var DOM = $("#step1");
    var UL = document.createElement("ul");
    UL.className = "textBox";

    for (var i = 0; i < data.length; i++) {
      var Li = document.createElement("li");
      Li.innerHTML = data[i];
      UL.appendChild(Li);
      Li = "";
    }
    DOM.append(UL);
  }

  function MoreData(data, i, c) {
    for (var n = 0; n < data[i].iconContent.length; n++) {
      var DOM = $(".IconBox" + c)
        .children()
        .children(".MoreData" + i);
      var UL = document.createElement("ul");
      var Li = document.createElement("li");
      var Span = document.createElement("span");
      Span.className = "SpanFirst";
      var SecSpan = document.createElement("span");
      SecSpan.className = "SecSpan";

      Span.innerHTML = data[i].iconContent[n][0];
      SecSpan.innerHTML = data[i].iconContent[n][1];

      Li.appendChild(Span);
      Li.appendChild(SecSpan);
      UL.appendChild(Li);
      DOM.append(UL);
    }

    UL = "";
    Li = "";
    Span = "";
    SecSpan = "";
  }

  function CreateIcon(data, a, c) {
    $(".IconBox" + c).append(
      "<ul class='iconType'><li><img src=" +
      data[a].iconSrc +
      "></li>" +
      "<li class=" +
      "MoreData" +
      a +
      "></li></ul>"
    );
    $(".iconType")
      .children()
      .last()
      .addClass("MoreData");
  }

  var data = response;
  var Obj = data.slice(0);
  var ObjCut = Obj[0].IconList0;

  var ObjName = Object.keys(ObjCut).map(function (index) {
    return ObjCut[index];
  });

  for (var i = 0; i < ObjName.length; i++) {
    CreateIcon(ObjName, i, 0);
    MoreData(ObjName, i, 0);
  }

  ObjName = "";
  ObjCut = "";

  ObjCut = Obj[0].IconList1;

  ObjName = Object.keys(ObjCut).map(function (e) {
    return ObjCut[e];
  });

  for (var i = 0; i < ObjName.length; i++) {
    CreateIcon(ObjName, i, 1);
    MoreData(ObjName, i, 1);
  }

  ObjName = "";
  ObjCut = "";

  var Last = Obj[0].TextBox;
  CreateTextBox(Last);

  var PayBay = $("#first");

  for (var i = 0; i < data.length; i++) {
    if (data[i].BoxTitle == "中奖线") {
      for (var a = 1; a < i; a++) {
        var ObjCut = Obj[a];
        var ImgText = Object.keys(ObjCut).map(function (e) {
          return ObjCut[e];
        });
        CreateImgTextBox(ImgText, PayBay);
        ImgText = "";
      }
    } else if (data[i].BoxTitle == "旋转") {
      if (data[i - 1].BoxTitle !== "中奖线") {
        for (var a = 1; a < i; a++) {
          var ObjCut = Obj[a];
          var ImgText = Object.keys(ObjCut).map(function (e) {
            return ObjCut[e];
          });
          CreateImgTextBox(ImgText, PayBay);
          ImgText = "";
        }
      }
    }
  }

  for (var i = 0; i < data.length; i++) {
    var ObjCut = Obj[i];
    if (Obj[i].BoxTitle == "中奖线") {
      var sectionBox = document.createElement("div");
      sectionBox.className = "section ContentBox";
      var sectionTitle = document.createElement("h4");
      sectionTitle.innerHTML = Obj[i].BoxTitle;
      PayBay.append(sectionTitle);

      var winLine = document.createElement("div");
      winLine.className = "img_Box winLine_Box contentCenter";

      sectionBox.appendChild(winLine);
      PayBay.append(sectionBox);

      for (var v = 1; v <= Obj[i].ImgBox1.length; v++) {
        var winLineImg = document.createElement("img");
        winLine.appendChild(winLineImg);

        var imgSrc = "images/winLine/" + v + ".png";
        winLineImg.src = imgSrc;
      }
    }
  }

  var GameRules = $("#second");

  for (var i = 0; i < data.length; i++) {
    if (Obj[i].BoxTitle == "旋转") {
      for (var secStart = i; secStart < data.length; secStart++) {
        var ObjCut = Obj[secStart];
        ImgText = Object.keys(ObjCut).map(function (e) {
          return ObjCut[e];
        });
        CreateImgTextBox(ImgText, GameRules);
        ObjCut = "";
        ImgText = "";
      }
    }
  }

  var leftTab = document.getElementById("leftTab");
  var rightTab = document.getElementById("rightTab");
  var firstBox = document.getElementById("first");
  var secondBox = document.getElementById("second");

  // 遍歷獲取的Tab陣列內容
  leftTab.addEventListener("click", function () {
    leftTab.src = "./images/tabButton/gameRules_on.png";
    rightTab.src = "./images/tabButton/Instructions_off.png";
    firstBox.style.display = "block";
    secondBox.style.display = "none";
    $(".scroll_container").scrollTop(0);
  });

  rightTab.addEventListener("click", function () {
    rightTab.src = "./images/tabButton/Instructions_on.png";
    leftTab.src = "./images/tabButton/gameRules_off.png";
    firstBox.style.display = "none";
    secondBox.style.display = "block";
    $(".scroll_container").scrollTop(0);
  });
});