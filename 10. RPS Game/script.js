const computer = document.querySelector("#computer-choice")
const user = document.querySelector("#user-choice")
const resultDisplay = document.querySelector("#result")

const possibleChoices = document.querySelectorAll("button")

let userChoice
possibleChoices.forEach(possibleChoice => {
    possibleChoice.addEventListener("click", (e) => {
        userChoice = e.target.id
        user.innerHTML = userChoice
        generateComputerChoice()
        getResult()
    })
})

let computerChoice
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)
    if(randomNumber===0){
        computerChoice="rock"
    }
    if(randomNumber===1){
        computerChoice="paper"
    }
    if(randomNumber===2){
        computerChoice="scissor"
    }
    computer.innerHTML = computerChoice
}


let result = ""
function getResult(){
    if(computerChoice===userChoice){
        result="It's a draw"
    }
    else if(
        (computerChoice==="rock" && userChoice==="paper") ||
        (computerChoice==="paper" && userChoice==="scissor") ||
        (computerChoice==="scissor" && userChoice==="rock")
    ){
        result="You win"
    }   
    else{
        result="You lost"
    }
    resultDisplay.innerHTML = result
}
getResult()
