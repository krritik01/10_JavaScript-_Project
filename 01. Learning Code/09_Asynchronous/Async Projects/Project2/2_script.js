 // setInterval(function(){
    // //    console.log("Ritik")
    // console.log("Ritik", Date.now())
    // },1000)

    const saydate = function (str) {
        // console.log(str, Date.now())
        console.log(str, new Date().toLocaleTimeString())
    }
    const intervalId=setInterval(saydate,1000,"Hello there")  //We can aslo pass parameter to this

    //This is how we stop setInterval
    // clearInterval(intervalId)