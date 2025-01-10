function getComputerChoice() {
    let x = Math.floor(Math.random() * 100);
    if (x <= 33) {
        return choice = "rock";
    }
    else if (x > 33 && x <=66) {
        return choice = "paper";
    }
    else {
        return choice = "scissors";
    }
}

function getHumanChoice() {
    choice = prompt("Enter rock, paper, or scissors:");
    answer = choice.toLowerCase();
    return answer;
}

let humanScore = 0;
let computerScore = 0;

function playGame(){
    humanChoice = getHumanChoice();
    console.log("You chose: " + humanChoice);
    computerChoice = getComputerChoice();
    console.log("Computer choice: " + computerChoice);
    playRound(humanChoice,computerChoice);
    function playRound( humanChoice , computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            result = "computer wins: ";
            console.log(result + " Computer score = " + computerScore + " Human Score = " + humanScore);
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            result = "You win";
            console.log(result + " Computer score = " + computerScore + " Human Score = " + humanScore);
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            result = "You win";
            console.log(result + " Computer score = " + computerScore + " Human Score = " + humanScore);
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            result = "Computer wins";
            console.log(result + " Computer score = " + computerScore + " Human Score = " + humanScore);
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            result = "Computer wins";
            console.log(result + " Computer score = " + computerScore + " Human Score = " + humanScore);
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            result = "You win";
            console.log(result + " Computer score = " + computerScore + " Human Score = " + humanScore);
        }
        else {
            result = "No one wins";
            console.log(result + " Computer score = " + computerScore + " Human Score = " + humanScore);
        }
    }
    if (humanScore === 5) {
        return "YOU WIN THE GAME!";
        }
    else if (computerScore === 5){
        return "COMPUTER WON THE GAME";
        }
    else {
        return playGame();
    }
    
}
console.log(playGame());