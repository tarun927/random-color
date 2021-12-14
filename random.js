const color = ["red","Blue","green","yellow"] 


var a1 = document.querySelectorAll(".circle")
 function refresh(){
     for(var i=0; i<a1.length; i++){
    var ran = Math.floor(Math.random()*4)
    a1[i].style.background = color[ran]
    
  }
} 
refresh()



var RedBtn = document.querySelector(".Red");
function RedBtnClick(){
    for(var i=0; i<a1.length; i++){
        if(a1[i].style.background !== "red"){
            a1[i]
           .style
           .visibility = "hidden"
       }else{
         a1[i]
         .style
         .visibility = "visible"
       }
  }
    
}
RedBtn.addEventListener("click",RedBtnClick)

var blueBtn = document.querySelector(".Blue");
function blueBtnClick(){
    for(var i=0; i<a1.length; i++){
       if(a1[i].style.background !== "blue"){
           a1[i]
          .style
          .visibility = "hidden"
      }else{
        a1[i]
        .style
        .visibility = "visible"
      }
    }
    
}
blueBtn.addEventListener("click",blueBtnClick)

var greenBtn = document.querySelector(".green");
function greenBtnClick(){
    for(var i=0; i<a1.length; i++){
       if(a1[i].style.background !== "green"){
           a1[i]
          .style
          .visibility = "hidden"
      }else{
        a1[i]
        .style
        .visibility = "visible"
      }
    }
    
}
greenBtn.addEventListener("click",greenBtnClick)

var yellowBtn = document.querySelector(".yellow");
function yellowBtnClick(){
    for(var i=0; i<a1.length; i++){
       if(a1[i].style.background !== "yellow"){
           a1[i]
          .style
          .visibility = "hidden"
      }else{
        a1[i]
        .style
        .visibility = "visible"
      }
    }
    
}
yellowBtn.addEventListener("click",yellowBtnClick)



var ResetBtn = document.querySelector(".Reset");
function ResetBtnClick(){
    for(var i=0; i<a1.length; i++){
        
            a1[i]
           .style
           .visibility = "visible"
      
     }
    
}
ResetBtn.addEventListener("click",ResetBtnClick)


 