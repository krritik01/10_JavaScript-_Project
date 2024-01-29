const clock=document.getElementById("clock")
// const clock=document.querySelector("#clock")

// setInterval(function(){},1000) method tells that give me a method and tell me the interval that means after how many intervals I should keep running it continuously. That 1000 is a millisecond means that is 1second

setInterval(function(){
    let date=new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML=date.toLocaleTimeString();
},1000)