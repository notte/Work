let winLine = document.querySelector('.winLine_Box')

for(var i=1;i<=40;i++){

    let winLineImg = document.createElement('img')
    winLine.appendChild(winLineImg)
    
    var imgSrc = "images/winLine/" + i + ".png"
    winLineImg.src = imgSrc

}


// 取得Tab的所有class標籤，會獲取一個陣列
let tabSwitch = document.getElementsByClassName("tab_switch")
let firstBox = document.getElementById("first")
let secondBox = document.getElementById("second")

// 遍歷獲取的Tab陣列內容
for(var i=0;i<tabSwitch.length;i++){

    // index為Array的索引值[index]，每循環一次就記錄當下索引值
    tabSwitch[i].index=i;

    // 在Tab被觸發時執行function
    tabSwitch[i].onclick=function(){

        // 刪除所有active的class
        for(var i=0;i<tabSwitch.length;i++){
            tabSwitch[i].classList.remove("tab_switch_active")
        }
        
        // 在當前加入active的class
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

