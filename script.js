function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;;
    return choice;
}

function getHumanChoice() {
    let humanChoice = prompt(`Round ${round}\nEnter your weapon:\nRock, Paper, Scissor`);
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock") {
        choice = 1;
    } else if (humanChoice === "paper") {
        choice = 2;
    } else if (humanChoice === "scissor") {
        choice = 3;
    } else {
        alert("Invalid Choice")
        playGame()
    }
    return choice
}

function playRound(humanChoice, computerChoice) {

    // Computer Number to Text
    if (computerChoice === 1) {
        result = "Rock";
    } else if (computerChoice === 2) {
        result = "Paper";
    } else if (computerChoice === 3) {
        result = "Scissor";
    } else {
        result = "Error Getting Number"
    }

    // Human Number to Text
    if (humanChoice === 1) {
        choice = "Rock";
    } else if (humanChoice === 2) {
        choice = "Paper";
    } else if (humanChoice === 3) {
        choice = "Scissor";
    }

    if (humanChoice === computerChoice ) {
        humanScore += 1;
        computerScore += 1;
        alert(`Round ${round}:\nComputer: ${result} vs Human: ${choice} \nDraw\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}`);
    } else if (humanChoice === 1 && computerChoice === 3 || humanChoice === 2 && computerChoice === 1 || humanChoice === 3 && computerChoice === 2) {
        humanScore += 1;
        alert(`Round ${round}:\nComputer: ${result} vs Human: ${choice} \nHuman Wins\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}`);
    } else if (computerChoice === 1 && humanChoice === 3 || computerChoice === 2 && humanChoice === 1 || computerChoice === 3 && humanChoice === 2) {
        computerScore += 1;
        alert(`Round ${round}:\nComputer: ${result} vs Human: ${choice} \nComputer Wins\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}`);
    }
}

function playGame() {
    round += 1;
    let computerChoice= getComputerChoice();
    let humanChoice = getHumanChoice();

    playRound(humanChoice, computerChoice);
}

function results(a, b) {
    if (a > b) {
        alert("HUMAN WINS")
    } else if (a < b) {
        alert("COMPUTER WINS")
    }
}

function initialize() {
    round = 0;
    while (round < 5) {
        playGame();
    }

    if (round === 5) {
        results(humanScore, computerScore)
    }
}

let round = 0;
let humanScore = 0;
let computerScore = 0;

const start = document.querySelector(".start-btn")

start.addEventListener("click", initialize);