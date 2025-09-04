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

    const result = (human - computerChoice + 3) % 3;
    return displayScore(result)
}

function displayScore (result) {
    switch (result) {
        case 0:
            
            break;
        case 1:
            humanPoints++;
            humanScore.textContent = humanPoints;
            computerScore.textContent = computerPoints;
            break;
        case 2:
            computerPoints++;
            humanScore.textContent = humanPoints;
            computerScore.textContent = computerPoints;
            break;
        default:
            break;
    }
};

let round = 0;
let humanPoints = 0;
let computerPoints = 0;

const buttons = document.querySelectorAll(".btn");
const humanScore = document.querySelector(".human-score");
const computerScore = document.querySelector(".computer-score");

humanScore.textContent = humanPoints;
computerScore.textContent = computerPoints;



buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});