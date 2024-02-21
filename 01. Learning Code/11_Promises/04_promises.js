//Another promise
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "ritik01", password: "123" })
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((myUserName) => {
    console.log(myUserName);
}).catch(function (error) {
    console.log(error)
}).finally(() =>
    console.log("The promise is either resolved or rejected")
)