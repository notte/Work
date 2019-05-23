var CallJson = new XMLHttpRequest();

CallJson.open('GET','https://notte.github.io/2018/js/game_01.json',true)

CallJson.send()

CallJson.onreadystatechange = function(){
  if(CallJson.readyState == 4){
    if(CallJson.status == 200){
      var data = JSON.parse(CallJson.response)
      Data(data)
    }
  }
}