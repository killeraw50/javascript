let rockPaperScissor = ["rock", "paper", "scissor"];
let buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (rounds < 5) {
            playerSelection = button.id;
            let randomNumber = Math.floor(Math.random() * 3);
            let computerSelection = rockPaperScissor[randomNumber];
            fight(playerSelection, computerSelection);
            document.querySelector("#player").textContent = "Player Score " + playerScore;
            document.querySelector("#computer").textContent = "Computer Score " + computerScore;
            rounds++;
            if (rounds === 5) {
                declareWinner();
            }
        }
    })
})
function fight(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === playerSelection) {
            alert("Draw");
        }
        else if (computerSelection === "paper") {
            alert("Computer Wins");
            computerScore++;

        }
        else {
            alert("Player Wins");
            playerScore++;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === playerSelection) {
            alert("Draw");
        }
        else if (computerSelection === "rock") {
            alert("Player Wins");
            playerScore++;
        }
        else {
            alert("Computer Wins");
            computerScore++;
        }
    }
    else if (playerSelection === "scissor") {
        if (computerSelection === playerSelection) {
            alert("Draw");
        }
        else if (computerSelection === "rock") {
            alert("Computer Wins");
            computerScore++;
        }
        else {
            alert("Player Wins");
            playerScore++;
        }
    }
}
function declareWinner() {
    if (playerScore > computerScore) {
        alert("Player Wins");
    }
    else if (playerScore < computerScore) {
        alert("Computer Wins");
    }
    else {
        alert("Draw");
    }
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
}