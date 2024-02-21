const userEmail = "ritik@gamil.com"

if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Dont have email")
}

// These are the falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// and expect these value all are truthy value like and some espical truthy value are "0", "false", " ", [], {}, function(){},

const userEmaill = []

if(userEmaill){
    console.log("Got user email")
}
else{
    console.log("Dont have email")
}
if(userEmaill.length===0){
    console.log("Empty Array")
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
    
}

//Nullish Coalescing Operator(??): null undefined

let val1;
// val1=5??10
// val1=null??13
// val1=undefined??15
val1=null??12??15

console.log(val1)

//Terniary Operator (?)
// condition ? true :false
const iceCream =100
iceCream <=80 ? console.log("less than 80"): console.log("more then 80")