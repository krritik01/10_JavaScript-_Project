class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course added by ${this.username} which has password ${this.password}`)
    }
}

const teach = new Teacher("study", "study@gmai.com", 147)

teach.addCourse()
teach.logMe()

const teaching = new User("ritik")
teaching.logMe()

console.log(teach===teaching)
console.log(teach===Teacher)
//Now we will check it is instanceof or or
console.log(teach instanceof User)
console.log(teach instanceof Teacher)
console.log(teaching instanceof User)
console.log(teaching instanceof Teacher)







// The "extends" keyword is used to create a child class of another class (parent). The child class inherits all the methods from another class. Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.


// Inheritance in JavaScript is a mechanism that allows you to create a new class based on an existing class. This is useful for code reusability, as you can reuse the properties and methods of the existing class in the new class.

// To create a child class, you use the extends keyword.

// The super keyword is used to call the constructor of the parent class. This is important, as it ensures that the child class is properly initialized.