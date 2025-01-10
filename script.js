// Function that creates computer's choice
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
// Prints computer choice to console
let computerChoice = getComputerChoice();
console.log(computerChoice);

// Function that prompts for user's choice and converts to lowercase
function getHumanChoice() {
    choice = prompt("Enter rock, paper, or scissors:");
    answer = choice.toLowerCase();
    return answer;
}
// Prints human choice to console
let humanChoice = getHumanChoice();
console.log(humanChoice);

// Create base values for score
let humanScore = 0;
let computerScore = 0;

// Function that takes in choices and decides who wins, incraments winner's, and tells player what happened
function playRound( humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        result = "You lose, paper beats rock!";
        computerScore++;
        return result;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        result = "You win, scissors beats paper!";
        humanScore++;
        return result;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        result = "You win, paper beats rock!";
        humanScore++;
        return result;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        result = "You lose, rock beats scissors!";
        computerScore++;
        return result;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        result = "You lose, scissors beats paper!";
        computerScore++;
        return result;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        result = "You win, rock beats scissors!";
        humanScore++;
        return result;
    }
    else {
        result = "It's a tie!";
        return result;
    }
}
// let test = playRound(humanChoice, computerChoice);
console.log(test);
console.log(humanScore);
console.log(computerScore);

function playGame(){
    if (humanScore + computerScore === 5){
        if (humanScore > computerScore){
            return "Congrats, you won the game!"
        }
        else{
            return "Sorry, the computer won."
        }
    }
    else {
        
    }
}