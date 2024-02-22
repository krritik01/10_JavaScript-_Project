//Apply() Method: The apply() method calls the function directly and sets this to the first argument passed to the apply method and if any other arguments provided as an array are passed to the call method then they are passed as an argument to the function.

const obj={
    name:"ritik"
}
function abc(a,b,c){
    console.log(a,b,c)
    console.log(this,a,b,c)
}
abc.apply(obj,[1,2,3])