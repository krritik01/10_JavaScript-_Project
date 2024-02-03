//Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

function sayMyName() {
    console.log("R")
    console.log("I")
    console.log("T")
    console.log("I")
    console.log("K")
}
//sayMyName    //This is reference
//sayMyName() //This is execution

// function addTwoNumber(num1, num2){
//     console.log(num1+num2);
// }
// addTwoNumber(4,6)

function addTwoNumber(num1, num2) {
    // let result = num1+num2;
    // return result;
    return num1 + num2;
}
const result = addTwoNumber(2, 5)
// console.log("Result: ", result)


function loginUserMessage(username) {
    if (username === undefined) {
        // if(!username){
        //     console.log("Please enter a username");
        // return;
        // } This is also way to write
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());


//Another way
function looginUserMessage(username = "Ritik") { //we use this if value is not defined then it will print Ritik is just loged in and if value is given then it will print that value
    if (username === undefined) {
        // if(!username){
        //     console.log("Please enter a username");
        // return;
        // } This is also way to write
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
// console.log(looginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200,300,350,320,459))


function calculateCartPrice(...num1) {  //in this "..." it is rest operator not spread operator both symbol is same but where we use it depends
    return num1
}
// console.log(calculateCartPrice(200,300,350,320,459))


//Use object in function or pass object in function
const user = {
    username: "Ritik",
    price: 400
}
function handleObject(anyObject) {
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    username: "Rohan",
    price: 500
})


//Use Array in function or pass array in function
const myNewArray = [500, 800, 600, 700]
function returnSecondValue(getValue) {
    return getValue[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([400, 500, 900, 356, 7542]))


