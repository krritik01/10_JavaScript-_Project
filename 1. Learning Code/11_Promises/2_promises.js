//Other way to make promises
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2")
        resolve()
    }, 1000);
}).then(() => {
    console.log("Async 2 resolved")
})