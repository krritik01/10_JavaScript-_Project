// let myName ="ritik   "
// console.log(myName.truelength)

let myHeros=["thor", "spiderman"]

let heropowers={
    thor:"hammer",
    spiderman:"sling",

    spidermanPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.ritik=function(){
    console.log(`ritik is present in all object`);
}
// heropowers.ritik()
// myHeros.ritik()

Array.prototype.heyritik=function(){
    console.log(`ritik says study hard`);
}
// heropowers.heyritik()
myHeros.heyritik()




let anotherUserName = "riittkk   "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is ${this.trim().length}`)
}
