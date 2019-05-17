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





});