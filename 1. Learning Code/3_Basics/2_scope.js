// let a =10
// const b=20
// var c=30

let a=300
if(true){
    let a=90
    const b=30 
    console.log("Inside value: ", a);
    // console.log(b) //We can access this const
}
console.log(a)
// console.log(b)  //We can not access this const


//nested scope example
function one(){
    const userName = "Ritik"

    function two(){
        const website="telegram"
        console.log(userName)  //We can access this 
    }
    // console.log(website);
    two()
}
one()

//Another example
if(true){
    const username="eZsnippet"
    if(username==="eZsnippet"){
        const website=" reddit"
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)



// ++++++++++++++++++ interesting concept hoisting little bit ++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num + 1
}
// addone(5)


// addTwo(5) //This shows error
const addTwo = function(num){
    return num + 2
}
addTwo(5) //This does not show error