let rockPaperScissor = ["Rock", "Paper", "Scissors"];
let randomNumber = Math.floor(Math.random() * 3);
let computerSelection = rockPaperScissor[randomNumber];
function fight(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == playerSelection) {
            alert("Draw");
        }
        else if (computerSelection == "paper") {
            alert("Computer Wins");
        }
        else {
            alert("Player Wins");
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == playerSelection) {
            alert("Draw");
        }
        else if (computerSelection == "rock") {
            alert("Player Wins");
        }
        else {
            alert("Computer Wins");
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == playerSelection) {
            alert("Draw");
        }
        else if (computerSelection == "rock") {
            alert("Computer Wins");
        }
        else {
            alert("Player Wins");
        }
    }
}