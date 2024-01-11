const passwordBox = document.getElementById("Password");
const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");

const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = " !@#$%^&*()_-+=:;'?/>.<,[{}]|\? /";
const alChars = upperCase + lowerCase + number + symbol;
function createPassword(){
    let password ="";

    password+=upperCase[Math.floor(Math.random() * upperCase.length)];

    password+=lowerCase[Math.floor(Math.random() * lowerCase.length)];

    password+=number[Math.floor(Math.random() * number.length)];

    password+=symbol[Math.floor(Math.random() * symbol.length)];

    while(length>password.length){
        password+=alChars[Math.floor(Math.random() * alChars.length)];
    }

    passwordBox.value = password;
}
generateButton.addEventListener("click", createPassword);

function copyPassword(){
    passwordBox.select(); 
    document.execCommand("copy");
}
copyButton.addEventListener("click", copyPassword);
