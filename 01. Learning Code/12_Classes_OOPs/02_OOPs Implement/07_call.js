function setUsername(username){
    this.username=username
    console.log("called")
}

function createUser(username, email, password){
    // this.username=username

    //setUsername(username)//this is not called it only get reference and for calling this we use call method

    // setUsername.call(username) //it also hold reference and for returning the value we call this in parameter
    setUsername.call(this, username)
    this.email=email
    this.password=password
}

const chai= new createUser("chai", "chai@gmail.com", "12345")

console.log(chai)