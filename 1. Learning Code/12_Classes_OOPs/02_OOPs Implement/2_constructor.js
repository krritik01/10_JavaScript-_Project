// const promiseOne = new Promise() //Here the "new" keyword is the constructor function
// const date = new Date()

class User {
    constructor(username, loginCount, isLoggedIn) {
        this.username = username
        this.loginCount = loginCount
        this.isLoggedIn = isLoggedIn

        this.greeting=function(){
            console.log(`Welcome ${this.username}`)
        }

        return this //if we don't write this then it will also work 
    }
}
const userOne = new User("ritik", 12, true)  //constructor function is called using new keyword
const userTwo = new User("ritik02", 22, false)
console.log(userOne)
console.log(userOne.constructor)
console.log(userTwo)
