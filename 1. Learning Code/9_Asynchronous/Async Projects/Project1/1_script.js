// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

// Its parameters are:
// function - a function containing a block of code
// milliseconds - the time after which the function is executed



// setTimeout(function(){
    //     console.log("Ritik Chaudhary")
    // }, 2000)

//This is how we set setTimeout
const sayRitik=function(){
    console.log("Ritik Chaudhary")
}
setTimeout(sayRitik, 2000)

const changeText=function(){
    document.querySelector('h1').innerHTML="What's up"
}
setTimeout(changeText,2000)
//This is how we set clearTimeout
//clearTimeout needs reference means which setTimeout you want to remove
const changeTalk=function(){
document.querySelector('h2').innerHTML="Let's meet somewhere"
}
const stopchange = setTimeout(changeTalk, 3500);

document.querySelector('#stop').addEventListener("click",function(){
clearTimeout(stopchange)
})
