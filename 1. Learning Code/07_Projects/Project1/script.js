const buttons = document.querySelectorAll('.button')    
const body = document.querySelector('body')

buttons.forEach(function(button){
    // console.log(button)
    button.addEventListener("click", function(e){
        // console.log(e)
        // console.log(e.target)
    //    switch(e.target.id){
    //     case "grey":
    //         body.style.backgroundColor=e.target.id
    //         break;
    //     case "blue":
    //         body.style.backgroundColor=e.target.id
    //         break;
    //     case "pink":
    //         body.style.backgroundColor=e.target.id
    //         break;
    //     case "red":
    //         body.style.backgroundColor=e.target.id
    //         break;
    //     case "purple":
    //         body.style.backgroundColor=e.target.id
    //         break;
    //     default:
    //        break;
    //    }

    if(e.target.id==='grey'){
        body.style.backgroundColor=e.target.id
        // body.style.backgroundColor='grey'
    }
    if(e.target.id==='blue'){
        body.style.backgroundColor=e.target.id
        // body.style.backgroundColor='blue'
    }
    if(e.target.id==='pink'){
        body.style.backgroundColor=e.target.id
        // body.style.backgroundColor='pink'
    }
    if(e.target.id==='red'){
        body.style.backgroundColor=e.target.id
        // body.style.backgroundColor='red'
    }
    if(e.target.id==='purple'){
        body.style.backgroundColor=e.target.id
        // body.style.backgroundColor='purple'
    }
    })
})





