// let Money = [{
//     iconTitle:'百搭符号',
//     iconTitle_src:'images/Left_iconList_Title.png',
//     iconContent:[{
//         Category:'Left',
//         img:'images/Left_iconList_1.png',
//         Number:[
//             "5,800",
//             "4,200",
//             "3,120",            
//         ]
//     }],
//     iconContent:[{
//         Category:'Left',
//         img:'images/Left_iconList_2.png',
//         Number:[
//             "5,320",
//             "4,160",
//             "3,80",            
//         ]
//     }]

// },{
    
// }
// ]

// Title顯示的位置
// let iconTitleType = document.querySelector('.iconTitleType')
// let iconTitle = document.createElement('li')

// iconTitleType.appendChild(iconTitle)

// let img = document.createElement('img')
// iconTitle.appendChild(img)

// img.src = Money[0].iconTitle_src

// iconTitleType.appendChild(iconTitle)


// console.log(iconTitle.nodeType)



let winLine = document.querySelector('.winLine_Box')

for(var i=1;i<=40;i++){

    let winLineImg = document.createElement('img')
    winLine.appendChild(winLineImg)
    
    var imgSrc = "images/winLine/" + i + ".png"
    winLineImg.src = imgSrc

}



let tab_switch = document.getElementsByClassName('tab_switch')


// let switchFunction = () => {

    
//     for(let i=0;i<tab_switch.length;i++){

//         tab_switch[i].index=i

//         for(let i=0;i<tab_switch.length;i++){
//             tab_switch[i].classList.remove('tab_switch_active')
//         }
//         tab_switch[this.index].classList.add('tab_switch_active')

//     }
// }

// for(let i=0;i<tab_switch.length;i++){
//     tab_switch[i].addEventListener('click', switchFunction);
// }



let tabSwitch=document.getElementsByClassName("tab_switch")

for(var i=0;i<tabSwitch.length;i++){

    tabSwitch[i].index=i;
    console.log(tabSwitch[i].index)

    tabSwitch[i].onclick=function(){

        // 刪除所有active的class
        for(var i=0;i<tabSwitch.length;i++){
            tabSwitch[i].classList.remove("tab_switch_active")
        }

        // 在當前加入active的class
        tabSwitch[this.index].classList.add("tab_switch_active")
        console.log(tabSwitch[this.index])

    }
}

// for(var i=0;i<tabSwitch.length;i++){

//     tabSwitch[i].onclick=function(){

//         console.log(tabSwitch[this.index])
    
//     }
// }

// Array index 陣列索引


// https://www.itread01.com/content/1541957043.html