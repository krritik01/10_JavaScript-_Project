//Call() Method: The call() method calls the function directly and sets this to the first argument passed to the call method and if any other sequences of arguments preceding the first argument are passed to the call method then they are passed as an argument to the function.
const obj={
    name:"ritik"
}

function username(){
    console.log(this)
}

username.call(obj)

