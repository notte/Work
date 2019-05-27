var CallJson = new XMLHttpRequest();

CallJson.open('GET','/game.json',true)

CallJson.send()

CallJson.onreadystatechange = function(){
  if(CallJson.readyState == 4){
    if(CallJson.status == 200){
      var data = JSON.parse(CallJson.response)
      Data(data)
    }
  }
}

let tabSwitch = document.getElementsByClassName("tab_switch")
let firstBox = document.getElementById("first")
let secondBox = document.getElementById("second")

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

