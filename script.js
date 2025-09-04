function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    console.log(choice);

    return choice;
}

function playRound(humanChoice, computerChoice) {
    choices = {
        "rock":0,
        "paper":1,
        "scissor":2
    }
    
    human= choices[humanChoice];

    result = (human - computer + 3) % 3;
    return  result
}

// function playGame() {
//     round += 1;
    
//     let humanChoice = getHumanChoice();

//     playRound(humanChoice, computerChoice);
// }

// function results(a, b) {
//     if (a > b) {
//         alert("HUMAN WINS")
//     } else if (a < b) {
//         alert("COMPUTER WINS")
//     }
// }

// function initialize() {
//     round = 0;
//     while (round < 5) {
//         playGame();
//     }

//     if (round === 5) {
//         results(humanScore, computerScore)
//     }
// }

let round = 0;
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".btn");
const score = document.querySelector(".score");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});