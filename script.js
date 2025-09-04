function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    console.log(`computer: ${choice}`);
    return choice;
}

function playRound(humanChoice, computerChoice) {

    choices = ["Rock","Paper","Scissor"]
    capitalized = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    
    human = choices.indexOf(capitalized);

    console.log(`human: ${human}`);
    

    const result = (human - computerChoice + 3) % 3;
    return displayScore(result, human, computerChoice);
}

function displayScore (result, human, computer) {
    switch (result) {
        case 0:
            pick.textContent = `${choices[human]} vs ${choices[computer]}`;
            break;
            
        case 1:
            pick.textContent = `${choices[human]} vs ${choices[computer]}`;
            humanPoints++;
            break;
        case 2:
            pick.textContent = `${choices[human]} vs ${choices[computer]}`;
            computerPoints++;
            break;
        default:
            break;     
    }
    humanScore.textContent = humanPoints;
    computerScore.textContent = computerPoints;
    scoreContainer.appendChild(pick);
    scoreContainer.appendChild(roundWinner)
    checkWinner()
};

function checkWinner() {
    const winner = humanPoints === 5 ? "Human" :
                    computerPoints === 5 ? "Computer" : null;
    if (!winner) return;

    roundWinner.textContent = `${winner} wins!`;
    win = true;
}

let round = 0;
let humanPoints = 0;
let computerPoints = 0;
let win = false;

const buttons = document.querySelectorAll(".btn");
const humanScore = document.querySelector(".human-score");
const computerScore = document.querySelector(".computer-score");
const scoreContainer = document.querySelector(".container");
const pick = document.createElement("p");
const roundWinner = document.createElement("p");


roundWinner.classList.add("round-win");

humanScore.textContent = humanPoints;
computerScore.textContent = computerPoints;



buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (win === true) {
                humanPoints = 0;
                computerPoints = 0;
                win = false;
                roundWinner.style.display = "none";
            };
            
        playRound(button.id, getComputerChoice());
    });
});