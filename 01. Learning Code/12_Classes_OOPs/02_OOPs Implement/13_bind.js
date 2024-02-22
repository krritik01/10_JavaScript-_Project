//1. Bind() Method: The bind() method creates a new function and when that new function is called it set this keyword to the first argument which is passed to the bind method, and if any other sequences of arguments preceding the first argument are passed to the bind method then they are passed as an argument to the new function when the new function is called.

//bind does not run the function, it gives a function in return which can be reun after you want

const obj={
    name:"ritik"
}
function abc(){
    console.log(this)
}
const nextRun=abc.bind(obj)
nextRun()