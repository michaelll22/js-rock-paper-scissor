function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;;
    return choice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissor?");
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