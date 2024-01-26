const user= {
    username: "ritik",
    price: 999,
//this refers to current context or,
//this use for current context in this scope
    welcomeMessage: function(){
        console.log(`${this.username} ,Welcome to website`)
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username="samAltman"
// user.welcomeMessage()

// console.log(this);



function coffee(){
    let username="ritik"
    console.log(this.username);  //this is not working with function working with object
}
// coffee()


const coffeee = function(){
    let username="ritik"
    console.log(this.username); 
}
// coffee()


const coffeeee = () =>{
    let username="ritik"
    console.log(this); 
}
// coffee() 

// Now pure arrow function
//Basic Arrow function
const addTwo = (num1, num2)=>{
    return num1+num2;
}
// console.log(addTwo(4,5))


//Another way to write is implicit return arrow function

// const adddTwo = (num1,num2)=> num1+num2 //this is also a way
//NOOTE -  if we use curly braces{} then we have to write return keyword

const adddTwo = (num1,num2)=> (num1+num2)
// console.log(adddTwo(7,4))

// How to return a object 
//and for returning object we have to wrap it into parenthesis()
const myObject =(num1, num2) =>({username:"ritik"})
console.log(myObject());


const myNewObject = (num1, num2) => {
    return {
      username: "ritik",
      number1: num1,
      number2: num2
    };
  };
  
  console.log(myNewObject(10, 20)); 