//if statement
const temperature = 40;
if (temperature<=50){
    // console.log("Normal day")
}
else {
    console.log("This is not a normal day")
}

const score = 200
 if(score>100){
    const power="fly"
    // console.log(`User power is ${power}`)
 }

 //Short hand notation
 const balance=1000
//  if(balance>500) console.log("test"); //we can also write like this but this is not a good practice


//Nested conditional statement
const balaance=1000
if(balaance<500){
    console.log("Less than 500")
}
else if(balaance<750){
    console.log("Less than 750")
}
else if(balance<900){
    console.log("Less than 900")
}
else{
    console.log("Less than 1200")
}


const userLoggedIn= true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy courses");
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In")
}