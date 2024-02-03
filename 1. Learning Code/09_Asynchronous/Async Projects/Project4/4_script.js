
const randomColor= function(){
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

// console.log(randomColor());
let intervalId;

const startChangingcolor=function(){
    // intervalId=setInterval(changeBgColor, 1000);
    if(!intervalId){
        intervalId=setInterval(changeBgColor, 1000); // this is a good practice
    }    
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
}
document.querySelector('#start').addEventListener('click', startChangingcolor)



const stopChangingcolor=function(){
    clearInterval(intervalId)
    intervalId=null; // it's optimise the code
}
document.querySelector('#stop').addEventListener('click', stopChangingcolor)

