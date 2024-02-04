//Another promise
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Ritik", email: "krritik0987@gmail.com" })
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user)
})