
let playerScore = 0
let compScore = 0

const btnRock = document.querySelector(".rock")
const btnPaper = document.querySelector(".paper")
const btnScissors = document.querySelector(".scissors")
const resultDiv = document.querySelector(".result")


function random_item(items)
{
    const randomIndex = Math.floor(Math.random()*items.length)
    const randomItem = items[randomIndex]
    
    return randomItem
}

const newArray = ["rock", "paper", "scissors"]

function getComputerChoice(){
    const randomisedItem = random_item(newArray)
    return randomisedItem
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        const p = document.createElement("p")
        p.innerText = "It is a Tie!"
        resultDiv.appendChild(p)
        return "It is a Tie!"
    }

    else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore ++ 
        const p = document.createElement("p")
        p.innerText = "You Win! Scissors beats Paper!"
        resultDiv.appendChild(p)
        return "You Win! Scissors beats Paper"}
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore ++ 
        const p = document.createElement("p")
        p.innerText = "You Win! Rock beats Scissors!"
        resultDiv.appendChild(p)
        return "You Win! Rock beats Scissors."}
    else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore ++ 
        const p = document.createElement("p")
        p.innerText = "You Win! Paper beats Rock!"
        resultDiv.appendChild(p)
        return "You Win! Paper beats Rock."}

    else if (playerSelection == "paper" && computerSelection == "scissors"){
        compScore++ 
        const p = document.createElement("p")
        p.innerText = "You Lose! Scissors beats Paper!"
        resultDiv.appendChild(p)
        return "You Lose! Scissors beats Paper."}
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        compScore++ 
        const p = document.createElement("p")
        p.innerText = "You Lose! Rock beats Scissors!"
        resultDiv.appendChild(p)
        return "You Lose! Rock beats Scissors."}
    else if (playerSelection == "rock" && computerSelection == "paper"){
        compScore++ 
        const p = document.createElement("p")
        p.innerText = "You Lose! Paper beats Rock!"
        resultDiv.appendChild(p)
        return "You Lose! Paper beats Rock."}
}
const checkWinner = (playerScore, compScore) =>{
    if (playerScore === 5){
        const h3 = document.createElement("h3")
        h3.innerText = ` Player, You won the game! Your score is ${playerScore}, computer score is ${compScore}`
        resultDiv.appendChild(h3)

    }
    else if(compScore ===5){
        const h3 = document.createElement("h3")
        h3.innerText = `Player, You did not win this time! Your score is ${playerScore}, computer score is ${compScore}`
        resultDiv.appendChild(h3) 
    }
    
}
btnRock.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "rock"
    console.log(playRound(playerSelection, computerSelection))
    checkWinner(playerScore, compScore)
})

btnPaper.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "paper"
    console.log(playRound(playerSelection, computerSelection))
    checkWinner(playerScore, compScore)
})

btnScissors.addEventListener("click", () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "scissors"
    console.log(playRound(playerSelection, computerSelection))
    checkWinner(playerScore, compScore)
}) 









