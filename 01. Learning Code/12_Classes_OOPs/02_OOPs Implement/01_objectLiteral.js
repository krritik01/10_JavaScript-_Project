const user = {
    username:"ritik001",
    loginCount:5,
    signedIn:true,
    getuserDetails: function(){
        console.log("Got user data")
        console.log(`Username: ${this.username}`)
    }
}
console.log(user.username)
console.log(user.getuserDetails())
