function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

function Create(element){
  element =  document.createElement(element)
  console.log(element)
}

readTextFile("js/data/game_01.json", function(text){
  var data = JSON.parse(text);
  console.log(data[0])  
  console.log(Create)

  // 寫入區塊標題
  var step1 = document.getElementById("step1"); 
  var newTitle = document.createElement("h4")
  newTitle.className = "mainColor"
  newTitle.innerHTML = data[0].BoxTitle
  step1.appendChild(newTitle)

  var iconList = document.createElement("div")
  iconList.className = "iconList"
  step1.appendChild(iconList)

  var contentCenter = document.createElement("div")
  contentCenter.className = "contentCenter"
  iconList.appendChild(contentCenter)

  var iconTitleType = document.createElement("ul")
  iconTitleType.className = "iconTitleType"
  contentCenter.appendChild(iconTitleType)

  var li = document.createElement("li")
  var img = document.createElement("img")
  img.src = data[0].IconList_1.iconTitle.iconTitleSrc
  li.appendChild(img)
  iconTitleType.append(li)
  li = ""

  var li = document.createElement("li")
  li.innerHTML = data[0].IconList_1.iconTitle.TitleName
  iconTitleType.append(li)

  var iconType = document.createElement("ul")
  iconType.className = "iconType"
  contentCenter.appendChild(iconType)

  var li = document.createElement("li")
  var img = document.createElement("img")
  img.src = data[0].IconList_1.icon1.iconSrc
  li.appendChild(img)
  iconType.append(li)
  li = ""

  var li = document.createElement("li")
  li.className = "MoreData"
  iconType.appendChild(li)
  var ul = document.createElement("ul")
  li.appendChild(ul)

  
  console.log()















});