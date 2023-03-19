let playerScore = 0
let compScore = 0

function random_item(items)
{
  
    const randomIndex = Math.floor(Math.random()*items.length)

    const randomItem = items[randomIndex]
    
    return randomItem


}

const newArray = ["rock", "paper", "scissors"]

const randomisedItem = random_item(newArray)

function getComputerChoice(){
    return randomisedItem
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {return "It is a Tie!"}

    else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore ++ 
        return "You Win! Scissors beats Paper."}
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore ++ 
        return "You Win! Rock beats Scissors."}
    else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore ++ 
        return "You Win! Paper beats Rock."}

    else if (playerSelection == "paper" && computerSelection == "scissors"){
        compScore++ 
        return "You Lose! Scissors beats Paper."}
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        compScore++ 
        return "You Lose! Rock beats Scissors."}
    else if (playerSelection == "rock" && computerSelection == "paper"){
        compScore++ 
        return "You Lose! Paper beats Rock."}
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose rock, paper or scissors.", "rock, paper, scissors").toLowerCase()
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)   
     }
    if (playerScore > compScore) {
        return "Congrats! You beat the computer!"}   
    else if (playerScore < compScore) {
        return "Sorry, computer was better this time."}
    else {
        return"Both of you are winners! Congrats player and computer!"
    }

}

console.log(game())







