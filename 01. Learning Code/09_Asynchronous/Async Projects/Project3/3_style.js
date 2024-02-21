//First Method to start and stop
    //     let intervalId;
    // document.querySelector('#start').addEventListener("click", function(){
    //     intervalId=setInterval(function(){
    //         console.log("Ritik",Date.now())
    //     },1000)
    // })

    // document.querySelector('#stop').addEventListener('click', function(){
    //     clearInterval(intervalId)
    // })


//Second Method to start and stop
let intervalIdd;

const startInterval=()=>{
    intervalIdd=setInterval(()=>{
        console.log("Ritik", new Date().toLocaleTimeString())
    },1000)
}

document.querySelector('#start').addEventListener('click', startInterval)

const stopInterval=()=>{
    clearInterval(intervalIdd)
}
document.querySelector('#stop').addEventListener('click', stopInterval)
