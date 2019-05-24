var CallJson = new XMLHttpRequest();

CallJson.open('GET','js/data/game.json',true)

CallJson.send()

CallJson.onreadystatechange = function(){
  if(CallJson.readyState == 4){
    if(CallJson.status == 200){
      var data = JSON.parse(CallJson.response)
      Data(data)
    }
  }
}